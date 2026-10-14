// Persistence. Preferred: the artifact's private per-viewer database
// (data/users/<id>/progress, sessions below it). Fallbacks: localStorage, then memory only.

import { emptyState, DEFAULT_SETTINGS, type ProgressState, type SessionRecord } from './records';

type Snap = { exists: boolean; data(): Record<string, unknown> | undefined };
interface DocRef {
  get(): Promise<Snap>;
  set(d: Record<string, unknown>): Promise<void>;
  delete(): Promise<void>;
  collection(p: string): ColRef;
}
interface ColRef {
  doc(id: string): DocRef;
  orderBy(f: string, dir?: 'asc' | 'desc'): { limit(n: number): { get(): Promise<{ docs: Snap[] }> } };
  get(): Promise<{ docs: (Snap & { id: string })[] }>;
}
interface DbLike {
  doc(p: string): DocRef;
}
interface ClaudeLike {
  use(name: string): Promise<unknown>;
}

export type StoreKind = 'cloud' | 'local' | 'memory';

export interface Store {
  kind: StoreKind;
  loadState(): Promise<ProgressState>;
  saveState(s: ProgressState): Promise<void>;
  loadSessions(): Promise<SessionRecord[]>;
  saveSession(r: SessionRecord): Promise<void>;
  reset(): Promise<void>;
}

function normalise(raw: unknown): ProgressState {
  const base = emptyState();
  if (!raw || typeof raw !== 'object') return base;
  const r = raw as Partial<ProgressState>;
  return {
    version: 1,
    errors: r.errors ?? {},
    flagged: Array.isArray(r.flagged) ? r.flagged : [],
    seen: r.seen ?? {},
    settings: { ...DEFAULT_SETTINGS, ...(r.settings ?? {}) },
  };
}

const MAX_SESSIONS = 300;

// ------------------------------------------------------------- memory

export function memoryStore(): Store {
  let state = emptyState();
  let sessions: SessionRecord[] = [];
  return {
    kind: 'memory',
    loadState: async () => state,
    saveState: async (s) => {
      state = s;
    },
    loadSessions: async () => sessions,
    saveSession: async (r) => {
      sessions = [r, ...sessions.filter((x) => x.id !== r.id)].slice(0, MAX_SESSIONS);
    },
    reset: async () => {
      state = emptyState();
      sessions = [];
    },
  };
}

// --------------------------------------------------------------- local

const LS_STATE = 'c1trainer.state.v1';
const LS_SESSIONS = 'c1trainer.sessions.v1';

export function localStore(): Store | null {
  try {
    const probe = '__c1probe';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
  } catch {
    return null;
  }
  const read = <T,>(k: string, fallback: T): T => {
    try {
      const s = localStorage.getItem(k);
      return s ? (JSON.parse(s) as T) : fallback;
    } catch {
      return fallback;
    }
  };
  const write = (k: string, v: unknown) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch {
      /* storage full or blocked: keep running in memory */
    }
  };
  return {
    kind: 'local',
    loadState: async () => normalise(read(LS_STATE, null)),
    saveState: async (s) => write(LS_STATE, s),
    loadSessions: async () => read<SessionRecord[]>(LS_SESSIONS, []),
    saveSession: async (r) => {
      const all = read<SessionRecord[]>(LS_SESSIONS, []);
      write(LS_SESSIONS, [r, ...all.filter((x) => x.id !== r.id)].slice(0, MAX_SESSIONS));
    },
    reset: async () => {
      try {
        localStorage.removeItem(LS_STATE);
        localStorage.removeItem(LS_SESSIONS);
      } catch {
        /* ignore */
      }
    },
  };
}

// --------------------------------------------------------------- cloud

export function cloudStore(db: DbLike, uid: string): Store {
  // data/users/<id> is the viewer's private collection; progress is one document in it
  const main = db.doc(`data/users/${uid}/progress`);
  const sessions = main.collection('sessions');
  // one write at a time per document
  let chain: Promise<unknown> = Promise.resolve();
  const queue = (fn: () => Promise<void>) => {
    const p = chain.then(fn, fn);
    chain = p.catch(() => undefined);
    return p;
  };
  return {
    kind: 'cloud',
    loadState: async () => {
      const s = await main.get();
      return normalise(s.exists ? (s.data() as { state?: unknown }).state : null);
    },
    saveState: (s) => queue(() => main.set({ state: JSON.parse(JSON.stringify(s)) })),
    loadSessions: async () => {
      const q = await sessions.orderBy('finishedAt', 'desc').limit(MAX_SESSIONS).get();
      return q.docs.map((d) => (d.data() as { record: SessionRecord }).record).filter(Boolean);
    },
    saveSession: (r) => queue(() => sessions.doc(r.id).set({ finishedAt: r.finishedAt, record: JSON.parse(JSON.stringify(r)) })),
    reset: async () => {
      const all = await sessions.get();
      for (const d of all.docs) await sessions.doc(d.id).delete();
      await main.delete();
    },
  };
}

/** Picks the best available store. Never rejects. */
export async function openStore(): Promise<Store> {
  const claude = (window as unknown as { claude?: ClaudeLike }).claude;
  if (claude?.use) {
    try {
      const timeout = new Promise<null>((res) => setTimeout(() => res(null), 4000));
      const [db, user] = (await Promise.race([Promise.all([claude.use('db'), claude.use('user')]), timeout.then(() => [null, null])])) as [
        DbLike | null,
        { id(): Promise<string | null> } | null,
      ];
      const uid = db && user ? await user.id() : null;
      if (db && uid) {
        const store = cloudStore(db, uid);
        await store.loadState(); // probe once
        return store;
      }
    } catch {
      /* fall through */
    }
  }
  return localStore() ?? memoryStore();
}

function browserDownload(filename: string, text: string): 'saved' | 'unavailable' {
  try {
    const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return 'saved';
  } catch {
    return 'unavailable';
  }
}

/** Offers the history as a JSON file. Returns 'saved', 'declined' or
 * 'unavailable' (then the caller shows the JSON for copying). */
export async function exportJson(filename: string, data: unknown): Promise<'saved' | 'declined' | 'unavailable'> {
  const claude = (window as unknown as { claude?: ClaudeLike }).claude;
  if (!claude?.use) return browserDownload(filename, JSON.stringify(data, null, 2));
  try {
    const dl = (await claude.use('downloads')) as { save(r: { filename: string; data: string }): Promise<unknown> } | null;
    if (!dl) return 'unavailable';
    await dl.save({ filename, data: JSON.stringify(data, null, 2) });
    return 'saved';
  } catch (e) {
    const code = (e as { code?: string }).code;
    return code === 'declined' ? 'declined' : 'unavailable';
  }
}
