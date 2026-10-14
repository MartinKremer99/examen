// Runs a plan step by step: intro → module → next. Owns the optional
// overall countdown and the "end session" confirmation.

import { useEffect, useRef, useState } from 'react';
import { formatClock, useCountdown } from '../lib/timer';
import { MODULE_INFO, overallScore, type ModuleScores } from '../scoring/score';
import type { ModuleResult, SessionRecord } from '../store/records';
import { BehavioralTest } from './BehavioralTest';
import { ConcentrationTest } from './ConcentrationTest';
import { ConfirmDialog } from './common';
import { INTRO } from './intros';
import { MemoryTest } from './MemoryTest';
import { MultitaskTest } from './MultitaskTest';
import type { ModuleProps, RunPlan, Step } from './plan';
import { TviTest } from './TviTest';

function ModuleView(props: ModuleProps) {
  const s = props.step;
  switch (s.module) {
    case 'verbal':
    case 'numerical':
      return <TviTest {...(props as ModuleProps<typeof s>)} step={s} />;
    case 'concentration':
      return <ConcentrationTest {...(props as ModuleProps<typeof s>)} step={s} />;
    case 'multitask':
      return <MultitaskTest {...(props as ModuleProps<typeof s>)} step={s} />;
    case 'memory':
      return <MemoryTest {...(props as ModuleProps<typeof s>)} step={s} />;
    case 'results':
    case 'customer':
      return <BehavioralTest {...(props as ModuleProps<typeof s>)} step={s} />;
  }
}

const durationLabel = (s: Step): string => {
  if (s.module === 'memory') return s.selfPaced ? 'ohne Zeitlimit' : `${formatClock(s.length * s.itemMs)} Min.`;
  if (s.module === 'multitask') return s.untimed ? 'ohne Zeitlimit' : `${formatClock(s.limitMs)} Min.`;
  return s.limitMs === null ? 'ohne Zeitlimit' : `${formatClock(s.limitMs)} Min.`;
};

const itemCount = (s: Step): string => {
  switch (s.module) {
    case 'verbal':
    case 'numerical':
      return `${s.items.length} Aussagen`;
    case 'results':
    case 'customer':
      return `${s.ids.length} Situationen`;
    case 'concentration':
      return `${s.rows} × ${s.cols} Zeichen`;
    case 'memory':
      return `${s.length} Bilder`;
    case 'multitask':
      return '3 Aufgaben gleichzeitig';
  }
};

export function Runner({ plan, onDone, onAbort }: { plan: RunPlan; onDone: (r: SessionRecord) => void; onAbort: () => void }) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'test'>(plan.showIntro ? 'intro' : 'test');
  const [results, setResults] = useState<ModuleResult[]>([]);
  const [confirmEnd, setConfirmEnd] = useState(false);
  const [signal, setSignal] = useState(0);
  const endingRef = useRef(false);
  const startedAt = useRef(Date.now());
  const resultsRef = useRef(results);
  resultsRef.current = results;
  const multi = plan.steps.length > 1;

  const finish = (all: ModuleResult[], endedEarly: boolean) => {
    const scores: ModuleScores = {};
    for (const r of all) scores[r.module] = r.score;
    const ov = overallScore(scores);
    onDone({
      id: `s${Date.now().toString(36)}`,
      mode: plan.mode,
      startedAt: startedAt.current,
      finishedAt: Date.now(),
      endedEarly,
      modules: all,
      overall: plan.mode === 'simulation' ? ov : null,
    });
  };

  const overall = useCountdown(plan.overallLimitMs, () => endSession());
  function endSession() {
    endingRef.current = true;
    if (phase === 'test') setSignal((x) => x + 1); // the module submits, then onModuleDone finishes
    else finish(resultsRef.current, true);
  }

  const onModuleDone = (r: ModuleResult) => {
    const all = [...resultsRef.current, r];
    setResults(all);
    if (endingRef.current || i + 1 >= plan.steps.length) {
      finish(all, endingRef.current && i + 1 < plan.steps.length);
      return;
    }
    setI(i + 1);
    setPhase(plan.showIntro ? 'intro' : 'test');
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [phase]);

  const step = plan.steps[i];
  const info = MODULE_INFO[step.module];
  const stepLabel = multi ? `Modul ${i + 1}/${plan.steps.length}` : undefined;

  return (
    <div>
      {multi && (
        <div className="topbar" style={{ position: 'static' }}>
          <div className="brand">
            {plan.title} <small>Modul {i + 1} von {plan.steps.length}: {info.name}</small>
          </div>
          <div className="spacer" />
          <span className="mono small">Gesamt {formatClock(Date.now() - startedAt.current)}</span>
          {plan.overallLimitMs !== null && (
            <span className="mono small">· Restzeit gesamt {formatClock(overall.remainingMs ?? 0)}</span>
          )}
          <button className="tb-btn" onClick={() => setConfirmEnd(true)}>
            Sitzung beenden
          </button>
        </div>
      )}
      {phase === 'intro' ? (
        <div className="page narrow">
          <div className="panel">
            <span className="eyebrow">
              {stepLabel ? `${stepLabel} · ` : ''}
              {plan.title}
            </span>
            <h1>{info.fr}</h1>
            <p className="muted">{info.name}</p>
            <div className="stack">{INTRO[step.module].body}</div>
            <dl className="kv">
              <dt>Umfang</dt>
              <dd>{itemCount(step)}</dd>
              <dt>Zeit</dt>
              <dd>{durationLabel(step)}</dd>
              <dt>Rückmeldung</dt>
              <dd>{plan.feedback ? 'sofort nach jeder Antwort' : 'erst nach Abschluss'}</dd>
            </dl>
            {plan.mode === 'simulation' && (
              <p className="notice small">
                Prüfungsbedingungen: keine Hinweise, keine Lösungen bis zum Ende. Der Test wird bei Zeitablauf automatisch abgegeben.
              </p>
            )}
            <div className="btn-row">
              <button className="btn primary big" onClick={() => setPhase('test')} autoFocus>
                Test starten
              </button>
              {!multi && (
                <button className="btn" onClick={onAbort}>
                  Zurück
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <ModuleView
          key={i}
          step={step}
          mode={plan.mode}
          feedback={plan.feedback}
          submitSignal={signal}
          compare={plan.compare}
          stepLabel={stepLabel}
          onFinish={onModuleDone}
        />
      )}
      {confirmEnd && (
        <ConfirmDialog
          title="Ganze Sitzung beenden?"
          confirmLabel="Sitzung beenden"
          danger
          onCancel={() => setConfirmEnd(false)}
          onConfirm={() => {
            setConfirmEnd(false);
            endSession();
          }}
        >
          Der laufende Test wird mit den bisherigen Antworten abgegeben. Nicht begonnene Module werden nicht gewertet, ein Gesamtwert wird
          dann nicht berechnet.
        </ConfirmDialog>
      )}
    </div>
  );
}
