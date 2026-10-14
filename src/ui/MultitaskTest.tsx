import { useEffect, useMemo, useRef, useState } from 'react';
import { MULTITASK_CONFIGS } from '../data/multitaskConfigs';
import { buildTimeline, itemIndexAt, ruleText, scoreMultitask, symMatches, type ColorId, type MtResponse, type ShapeId, type StreamId, type Sym } from '../engines/multitask';
import { useCountdown } from '../lib/timer';
import { ConfirmDialog, TimerDisplay, useKeys } from './common';
import type { ModuleProps, Step } from './plan';

type MtStep = Extract<Step, { module: 'multitask' }>;

const COLOR_VAR: Record<ColorId, string> = { blau: '#2f6fd6', rot: '#d0362b', gruen: '#23955a', orange: '#e08a12' };

export function SymbolSvg({ sym, size = 40 }: { sym: Sym; size?: number }) {
  const fill = COLOR_VAR[sym.color];
  const shapes: Record<ShapeId, JSX.Element> = {
    kreis: <circle cx="20" cy="20" r="15" />,
    quadrat: <rect x="6" y="6" width="28" height="28" />,
    dreieck: <polygon points="20,4 36,34 4,34" />,
    raute: <polygon points="20,3 37,20 20,37 3,20" />,
    stern: <polygon points="20,3 24.7,14.6 37,15.3 27.4,23.2 30.6,35.3 20,28.4 9.4,35.3 12.6,23.2 3,15.3 15.3,14.6" />,
    kreuz: <polygon points="14,4 26,4 26,14 36,14 36,26 26,26 26,36 14,36 14,26 4,26 4,14 14,14" />,
    sechseck: <polygon points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5" />,
    halbmond: <path d="M27 5 A16 16 0 1 0 27 35 A17 17 0 0 1 27 5 Z" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-label={`${sym.shape} ${sym.color}`} role="img" style={{ fill }}>
      {shapes[sym.shape]}
    </svg>
  );
}

export function MultitaskTest({ step, mode, feedback, submitSignal, stepLabel, onFinish }: ModuleProps<MtStep>) {
  const cfg = MULTITASK_CONFIGS.find((c) => c.id === step.configId) ?? MULTITASK_CONFIGS[0];
  const horizon = step.untimed ? 10 * 60000 : step.limitMs;
  const tl = useMemo(() => buildTimeline(cfg, step.seed, horizon), [cfg, step.seed, horizon]);
  const startRef = useRef<number>(Date.now());
  const [now, setNow] = useState(0);
  const responses = useRef<MtResponse[]>([]);
  const [responded, setResponded] = useState<Record<StreamId, number>>({ a: -1, b: -1, c: -1 }); // item index answered
  const [flash, setFlash] = useState<Record<string, 'ok' | 'ko'>>({});
  const [confirm, setConfirm] = useState(false);
  const done = useRef(false);

  const submit = (expired: boolean) => {
    if (done.current) return;
    done.current = true;
    const usedMs = timer.stop();
    const end = Math.min(usedMs, horizon);
    const r = scoreMultitask(tl, responses.current, end);
    const all = (['a', 'b', 'c'] as const).map((s) => r[s]);
    onFinish({
      module: 'multitask',
      score: r.score,
      limitMs: step.untimed ? null : step.limitMs,
      usedMs,
      expired,
      correct: all.reduce((x, s) => x + s.hits, 0),
      incorrect: all.reduce((x, s) => x + s.falseAlarms, 0),
      unanswered: all.reduce((x, s) => x + s.misses, 0),
      detail: { kind: 'multitask', configId: cfg.id, seed: step.seed, durationMs: end, a: r.a, b: r.b, c: r.c, responses: responses.current },
    });
  };
  const submitRef = useRef(submit);
  submitRef.current = submit;
  const timer = useCountdown(step.untimed ? null : step.limitMs, () => submitRef.current(true));
  useEffect(() => {
    if (submitSignal > 0) submitRef.current(false);
  }, [submitSignal]);
  useEffect(() => {
    startRef.current = Date.now();
    const id = setInterval(() => {
      const t = Date.now() - startRef.current;
      setNow(t);
      if (step.untimed && t >= horizon) submitRef.current(true);
    }, 100);
    return () => clearInterval(id);
  }, [horizon, step.untimed]);

  const ia = itemIndexAt(tl.a, now);
  const ib = itemIndexAt(tl.b, now);
  const ic = itemIndexAt(tl.c, now);

  const respond = (stream: StreamId, pos?: number) => {
    if (done.current) return;
    const t = Date.now() - startRef.current;
    const items = tl[stream];
    const idx = itemIndexAt(items, t);
    if (idx < 0 || responded[stream] === idx) return; // one response per item
    responses.current.push({ stream, t, pos });
    setResponded((r) => ({ ...r, [stream]: idx }));
    if (feedback) {
      const it = items[idx];
      const ok = stream === 'b' ? (it as (typeof tl.b)[number]).targetPos === pos : it.target;
      const k = stream === 'b' ? `b${pos}` : stream;
      setFlash((f) => ({ ...f, [k]: ok ? 'ok' : 'ko' }));
      setTimeout(() => setFlash((f) => {
        const n = { ...f };
        delete n[k];
        return n;
      }), 450);
    }
  };

  useKeys(
    (e) => {
      const k = e.key.toLowerCase();
      if (k === 'a') respond('a');
      else if (k === 'l') respond('c');
      else if (/^[1-4]$/.test(k)) respond('b', Number(k) - 1);
      else return;
      e.preventDefault();
    },
    [responded, now],
  );

  const a = ia >= 0 ? tl.a[ia] : null;
  const b = ib >= 0 ? tl.b[ib] : null;
  const c = ic >= 0 ? tl.c[ic] : null;
  const stageCls = (s: StreamId, idx: number) => `mt-stage ${flash[s] ? `flash-${flash[s]}` : ''} ${responded[s] === idx && idx >= 0 ? 'responded' : ''}`;

  return (
    <div className="test-shell">
      <div className="ribbon">
        <span className={`mode-badge ${mode === 'practice' ? 'practice' : ''}`}>{mode === 'simulation' ? 'Prüfung' : mode === 'challenge' ? 'Challenge' : 'Übung'}</span>
        <div className="r-title">
          <strong>
            Capacité multi-tâches <span className="muted small">· Multitasking</span>
          </strong>
          <span>{stepLabel ? `${stepLabel} · ` : ''}Drei Aufgaben gleichzeitig bearbeiten</span>
        </div>
        <div className="spacer" />
        <TimerDisplay remainingMs={timer.remainingMs} elapsedMs={timer.elapsedMs} />
        <button className="btn primary" onClick={() => setConfirm(true)}>
          Beenden
        </button>
      </div>
      <div className="mt-grid">
        <section className="mt-panel" aria-label="Aufgabe A: Zahlen">
          <h3>
            A · Zahlenmonitor <kbd className="mono small muted">Taste A</kbd>
          </h3>
          <p className="mt-rule">{ruleText('a', cfg.a.rule)}</p>
          <div className={stageCls('a', ia)} aria-live="off">
            <span className="mt-value">{a ? a.value : '–'}</span>
          </div>
          <button className="btn primary" onClick={() => respond('a')}>
            Reagieren (A)
          </button>
        </section>
        <section className="mt-panel" aria-label="Aufgabe B: Symbole">
          <h3>
            B · Symbolsuche <kbd className="mono small muted">Tasten 1–4</kbd>
          </h3>
          <p className="mt-rule">
            {ruleText('b', cfg.b.rule)}
            <span style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: 8 }}>
              <SymbolSvg sym={{ shape: cfg.b.rule.shape, color: cfg.b.rule.kind === 'shapeColor' ? cfg.b.rule.color : 'blau' }} size={24} />
            </span>
            {cfg.b.rule.kind === 'shape' && <span className="small muted"> (beliebige Farbe)</span>}
          </p>
          <div className={`mt-stage ${responded.b === ib && ib >= 0 ? 'responded' : ''}`}>
            <div className="mt-syms">
              {b
                ? b.row.map((s, i) => (
                    <button key={`${ib}-${i}`} className={`mt-sym ${flash[`b${i}`] ? `flash-${flash[`b${i}`]}` : ''}`} onClick={() => respond('b', i)} aria-label={`Position ${i + 1}`}>
                      <kbd>{i + 1}</kbd>
                      <SymbolSvg sym={s} />
                    </button>
                  ))
                : null}
            </div>
          </div>
          <p className="small muted">Kein passendes Symbol? Dann nichts anklicken.</p>
        </section>
        <section className="mt-panel" aria-label="Aufgabe C: Zeichenfolge">
          <h3>
            C · Zeichenfolge <kbd className="mono small muted">Taste L</kbd>
          </h3>
          <p className="mt-rule">{ruleText('c', cfg.c.rule)}</p>
          <div className={stageCls('c', ic)}>
            <span className="mt-char">{c ? c.ch : '–'}</span>
          </div>
          <button className="btn primary" onClick={() => respond('c')}>
            Reagieren (L)
          </button>
        </section>
      </div>
      <p className="small muted" style={{ padding: '0 16px 16px' }}>
        Jede Anzeige wechselt in festen Abständen. Pro Anzeige zählt nur die erste Reaktion. Ein Rahmen zeigt, dass Ihre Reaktion registriert wurde.
        {feedback ? ' Im Übungsmodus färbt sich das Feld kurz grün (richtig) oder rot (falsch).' : ''}
      </p>
      {confirm && (
        <ConfirmDialog title="Multitasking beenden?" confirmLabel="Beenden" onCancel={() => setConfirm(false)} onConfirm={() => submit(false)}>
          Gewertet werden alle Anzeigen bis zum jetzigen Zeitpunkt.
        </ConfirmDialog>
      )}
    </div>
  );
}

export { symMatches };
