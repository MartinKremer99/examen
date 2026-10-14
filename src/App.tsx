import { useCallback, useEffect, useRef, useState } from 'react';
import { applyErrors } from './scoring/analysis';
import type { ModuleId } from './scoring/score';
import { memoryStore, openStore, type Store, type StoreKind } from './store/progress';
import { emptyState, type ProgressState, type SessionRecord, type Settings } from './store/records';
import { Dashboard, type DashAction } from './ui/Dashboard';
import type { RunPlan } from './ui/plan';
import { challengePlan, simulationPlan, usedIds, practicePlan } from './ui/planner';
import { Results, Review } from './ui/Results';
import { Runner } from './ui/Runner';
import { ErrorsScreen, HistoryScreen, PracticeSetup, SettingsScreen } from './ui/Screens';

type Screen =
  | { name: 'dashboard' }
  | { name: 'practice'; module?: ModuleId }
  | { name: 'run'; plan: RunPlan; key: number }
  | { name: 'results'; session: SessionRecord; plan?: RunPlan }
  | { name: 'review'; session: SessionRecord; plan?: RunPlan }
  | { name: 'errors' }
  | { name: 'history' }
  | { name: 'settings' };

export function App() {
  const storeRef = useRef<Store>(memoryStore());
  const [storeKind, setStoreKind] = useState<StoreKind | 'loading'>('loading');
  const [state, setState] = useState<ProgressState>(emptyState());
  const [sessions, setSessions] = useState<SessionRecord[]>([]);
  const [screen, setScreen] = useState<Screen>({ name: 'dashboard' });
  const [saveError, setSaveError] = useState(false);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    let alive = true;
    (async () => {
      const store = await openStore();
      try {
        const [st, ss] = await Promise.all([store.loadState(), store.loadSessions()]);
        if (!alive) return;
        storeRef.current = store;
        setState(st);
        setSessions(ss);
        setStoreKind(store.kind);
      } catch {
        if (!alive) return;
        storeRef.current = memoryStore();
        setStoreKind('memory');
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const persistState = useCallback(async (s: ProgressState) => {
    setState(s);
    try {
      await storeRef.current.saveState(s);
    } catch {
      setSaveError(true);
    }
  }, []);

  const go = (s: Screen) => {
    setScreen(s);
    window.scrollTo({ top: 0 });
  };
  const run = (plan: RunPlan) => go({ name: 'run', plan, key: Date.now() });

  const onSessionDone = async (plan: RunPlan, rec: SessionRecord) => {
    const st = stateRef.current;
    let next = applyErrors(st, rec.modules, rec.finishedAt);
    const seen = { ...next.seen };
    for (const step of plan.steps.slice(0, rec.modules.length)) for (const id of usedIds(step)) seen[id] = (seen[id] ?? 0) + 1;
    const flagged = new Set(next.flagged);
    for (const m of rec.modules) if (m.detail.kind === 'tvi') for (const it of m.detail.items) if (it.flagged) flagged.add(it.id);
    next = { ...next, seen, flagged: [...flagged] };
    setSessions((xs) => [rec, ...xs]);
    go({ name: 'results', session: rec, plan });
    await persistState(next);
    try {
      await storeRef.current.saveSession(rec);
    } catch {
      setSaveError(true);
    }
  };

  const onAction = (a: DashAction) => {
    switch (a.kind) {
      case 'simulation':
        return run(simulationPlan(state, state.settings));
      case 'practice':
        return go({ name: 'practice', module: a.module });
      case 'challenge':
        return run(challengePlan(a.module, state));
      case 'errors':
        return go({ name: 'errors' });
      case 'history':
        return go({ name: 'history' });
      case 'settings':
        return go({ name: 'settings' });
      case 'open':
        return go({ name: 'results', session: a.session });
    }
  };

  const repeat = (plan?: RunPlan): (() => void) | undefined => {
    if (!plan) return undefined;
    if (plan.mode === 'simulation') return () => run(simulationPlan(state, state.settings));
    const m = plan.steps[0].module;
    if (plan.mode === 'challenge') return () => run(challengePlan(m, state));
    if (plan.mode === 'practice') return () => run(practicePlan(m, state, { length: 'voll', timed: true }));
    return undefined;
  };

  const testing = screen.name === 'run';
  return (
    <>
      {!testing && (
        <header className="topbar">
          <div className="brand">
            C1 Administratif <small>Prüfungstrainer</small>
          </div>
          <div className="spacer" />
          <nav className="row" aria-label="Hauptnavigation" style={{ gap: 8 }}>
            <button className="tb-btn" onClick={() => go({ name: 'dashboard' })}>
              Dashboard
            </button>
            <button className="tb-btn" onClick={() => go({ name: 'practice' })}>
              Üben
            </button>
            <button className="tb-btn" onClick={() => go({ name: 'history' })}>
              Verlauf
            </button>
            <button className="tb-btn" onClick={() => go({ name: 'settings' })}>
              Einstellungen
            </button>
          </nav>
        </header>
      )}
      {saveError && !testing && (
        <div className="page" style={{ paddingBlock: '12px 0' }}>
          <p className="notice warn small">
            Ein Speichervorgang ist fehlgeschlagen. Ihr Verlauf bleibt bis zum Schließen der Seite erhalten. Exportieren Sie ihn unter
            Einstellungen, wenn Sie ihn behalten möchten.
          </p>
        </div>
      )}
      <main>
        {screen.name === 'dashboard' &&
          (storeKind === 'loading' ? (
            <div className="page">
              <p className="muted">Fortschritt wird geladen …</p>
            </div>
          ) : (
            <Dashboard state={state} sessions={sessions} storeKind={storeKind} onAction={onAction} />
          ))}
        {screen.name === 'practice' && (
          <PracticeSetup module={screen.module} state={state} sessions={sessions} onStart={run} onBack={() => go({ name: 'dashboard' })} />
        )}
        {screen.name === 'run' && (
          <Runner key={screen.key} plan={screen.plan} onDone={(r) => onSessionDone(screen.plan, r)} onAbort={() => go({ name: 'dashboard' })} />
        )}
        {screen.name === 'results' && (
          <Results
            session={screen.session}
            onReview={() => go({ name: 'review', session: screen.session, plan: screen.plan })}
            onHome={() => go({ name: 'dashboard' })}
            onRepeat={repeat(screen.plan)}
          />
        )}
        {screen.name === 'review' && <Review session={screen.session} onBack={() => go({ name: 'results', session: screen.session, plan: screen.plan })} />}
        {screen.name === 'errors' && <ErrorsScreen state={state} sessions={sessions} onStart={run} onBack={() => go({ name: 'dashboard' })} />}
        {screen.name === 'history' && (
          <HistoryScreen sessions={sessions} onOpen={(s) => go({ name: 'results', session: s })} onBack={() => go({ name: 'dashboard' })} />
        )}
        {screen.name === 'settings' && (
          <SettingsScreen
            state={state}
            sessions={sessions}
            storeKind={storeKind === 'loading' ? 'memory' : storeKind}
            onSave={(s: Settings) => persistState({ ...stateRef.current, settings: s })}
            onReset={async () => {
              try {
                await storeRef.current.reset();
              } catch {
                setSaveError(true);
              }
              setState(emptyState());
              setSessions([]);
            }}
            onBack={() => go({ name: 'dashboard' })}
          />
        )}
      </main>
    </>
  );
}
