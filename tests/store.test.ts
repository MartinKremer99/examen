import { describe, expect, it } from 'vitest';
import { cloudStore } from '../src/store/progress';
import { emptyState, type SessionRecord } from '../src/store/records';

/** In-memory stand-in for the artifact db that enforces the path grammar:
 * documents have an even number of segments, collections an odd number. */
function fakeDb() {
  const docs = new Map<string, Record<string, unknown>>();
  const segs = (p: string) => p.split('/').length;
  const snap = (path: string) => ({ id: path.split('/').pop()!, exists: docs.has(path), data: () => docs.get(path) });
  const doc = (path: string): any => {
    if (segs(path) % 2 !== 0) throw new TypeError(`document path needs an even number of segments: ${path}`);
    return {
      get: async () => snap(path),
      set: async (d: Record<string, unknown>) => void docs.set(path, d),
      delete: async () => void docs.delete(path),
      collection: (p: string) => col(`${path}/${p}`),
    };
  };
  const col = (path: string): any => {
    if (segs(path) % 2 !== 1) throw new TypeError(`collection path needs an odd number of segments: ${path}`);
    const children = () => [...docs.keys()].filter((k) => k.startsWith(path + '/') && segs(k) === segs(path) + 1).map(snap);
    return {
      doc: (id: string) => doc(`${path}/${id}`),
      get: async () => ({ docs: children() }),
      orderBy: (f: string, dir = 'asc') => ({
        limit: (n: number) => ({
          get: async () => ({
            docs: children()
              .sort((a, b) => ((a.data() as any)[f] - (b.data() as any)[f]) * (dir === 'desc' ? -1 : 1))
              .slice(0, n),
          }),
        }),
      }),
    };
  };
  return { db: { doc }, docs };
}

const rec = (id: string, t: number): SessionRecord => ({ id, mode: 'practice', startedAt: t - 1000, finishedAt: t, endedEarly: false, modules: [], overall: null });

describe('cloud store', () => {
  it('uses valid document paths in the private per-user subtree', async () => {
    const { db, docs } = fakeDb();
    const store = cloudStore(db, 'u_test');
    expect((await store.loadState()).version).toBe(1);
    const st = emptyState();
    st.flagged = ['v01-01'];
    await store.saveState(st);
    await store.saveSession(rec('a', 1000));
    await store.saveSession(rec('b', 2000));
    expect([...docs.keys()].every((k) => k.startsWith('data/users/u_test/'))).toBe(true);
    expect((await store.loadState()).flagged).toEqual(['v01-01']);
    expect((await store.loadSessions()).map((s) => s.id)).toEqual(['b', 'a']);
    await store.reset();
    expect(docs.size).toBe(0);
  });
});
