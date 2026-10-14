import { useEffect, useMemo, useRef, useState } from 'react';
import { generateField, isTarget, scoreConcentration, type Cell, type Field } from '../engines/concentration';
import { useCountdown } from '../lib/timer';
import { ConfirmDialog, TimerDisplay } from './common';
import type { ModuleProps, Step } from './plan';

type ConcStep = Extract<Step, { module: 'concentration' }>;

const DOT_POS: [number, number][] = [
  [10, 5],
  [20, 5],
  [10, 41],
  [20, 41],
];

export function Glyph({ cell }: { cell: Cell }) {
  return (
    <svg viewBox="0 0 30 46" aria-hidden="true">
      {cell.dots.map((on, i) => (on ? <circle key={i} cx={DOT_POS[i][0]} cy={DOT_POS[i][1]} r={2.7} /> : null))}
      <text x="15" y="31" textAnchor="middle">
        {cell.letter}
      </text>
    </svg>
  );
}

const cellLabel = (c: Cell) => `${c.letter} mit ${c.dots.filter(Boolean).length} Punkten`;

/** Grid with roving tabindex: arrow keys move, Space / Enter toggles. */
export function ConcGrid(props: {
  field: Field;
  selected: Set<number>;
  onToggle?: (i: number) => void;
  classFor?: (i: number) => string;
  label: string;
}) {
  const { field } = props;
  const [focus, setFocus] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const move = (i: number) => {
    const n = Math.max(0, Math.min(field.cells.length - 1, i));
    setFocus(n);
    refs.current[n]?.focus();
  };
  return (
    <div className="conc-wrap">
      <div className="conc-grid" role="grid" aria-label={props.label} style={{ gridTemplateColumns: `repeat(${field.cols}, auto)` }}>
        {field.cells.map((c, i) => (
          <button
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="gridcell"
            className={`conc-cell ${props.classFor?.(i) ?? ''}`}
            aria-pressed={props.selected.has(i)}
            aria-label={`Zeile ${Math.floor(i / field.cols) + 1}, Spalte ${(i % field.cols) + 1}: ${cellLabel(c)}`}
            tabIndex={i === focus ? 0 : -1}
            onFocus={() => setFocus(i)}
            onClick={() => props.onToggle?.(i)}
            onKeyDown={(e) => {
              const k = e.key;
              if (k === 'ArrowRight') move(i + 1);
              else if (k === 'ArrowLeft') move(i - 1);
              else if (k === 'ArrowDown') move(i + field.cols);
              else if (k === 'ArrowUp') move(i - field.cols);
              else if (k === 'Home') move(i - (i % field.cols));
              else if (k === 'End') move(i - (i % field.cols) + field.cols - 1);
              else return;
              e.preventDefault();
            }}
          >
            <Glyph cell={c} />
          </button>
        ))}
      </div>
    </div>
  );
}

function Tutorial({ onStart }: { onStart: () => void }) {
  const field = useMemo(() => generateField(4242, 3, 10), []);
  const [sel, setSel] = useState<Set<number>>(new Set());
  const [flash, setFlash] = useState<Record<number, 'ok' | 'ko'>>({});
  const targets = field.cells.filter(isTarget).length;
  const found = [...sel].filter((i) => isTarget(field.cells[i])).length;
  const examples: { cell: Cell; ok: boolean; why: string }[] = [
    { cell: { letter: 'E', dots: [true, true, true, false] }, ok: true, why: 'E mit 3 Punkten → markieren' },
    { cell: { letter: 'E', dots: [false, true, true, true] }, ok: true, why: 'auch hier 3 Punkte → markieren' },
    { cell: { letter: 'E', dots: [true, false, true, false] }, ok: false, why: 'nur 2 Punkte' },
    { cell: { letter: 'E', dots: [true, true, true, true] }, ok: false, why: '4 Punkte' },
    { cell: { letter: 'F', dots: [true, true, false, true] }, ok: false, why: 'kein E' },
    { cell: { letter: 'E', dots: [false, false, false, false] }, ok: false, why: 'keine Punkte' },
  ];
  return (
    <div className="page narrow">
      <div className="panel">
        <h2>Einführung: Konzentrationstest</h2>
        <p>
          Markieren Sie <b>jedes E, das von genau drei Punkten umgeben ist</b>. Als umgebende Punkte zählen nur die vier
          Positionen <b>über</b> (links, rechts) und <b>unter</b> (links, rechts) dem Buchstaben.
        </p>
        <div className="row" style={{ gap: 16 }}>
          {examples.map((x, i) => (
            <figure key={i} style={{ margin: 0, display: 'grid', justifyItems: 'center', gap: 4, width: 96 }}>
              <div className={`conc-cell ${x.ok ? 'r-hit' : 'r-fa'}`} style={{ cursor: 'default' }}>
                <Glyph cell={x.cell} />
              </div>
              <figcaption className="small" style={{ textAlign: 'center' }}>
                {x.why}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="small muted">
          Klicken oder tippen Sie ein Zeichen an, um es zu markieren. Ein zweiter Klick hebt die Markierung auf. Mit der
          Tastatur: Pfeiltasten bewegen, Leertaste markiert.
        </p>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>Probefeld (ohne Zeitlimit, mit sofortiger Rückmeldung)</h3>
          <span className="mono small">
            {found} / {targets} gefunden
          </span>
        </div>
        <ConcGrid
          field={field}
          selected={sel}
          label="Probefeld"
          classFor={(i) => (flash[i] === 'ok' ? 'flash-ok' : flash[i] === 'ko' ? 'flash-ko' : '')}
          onToggle={(i) => {
            setSel((s) => {
              const n = new Set(s);
              if (n.has(i)) n.delete(i);
              else n.add(i);
              return n;
            });
            setFlash((f) => {
              const n = { ...f };
              if (n[i]) delete n[i];
              else n[i] = isTarget(field.cells[i]) ? 'ok' : 'ko';
              return n;
            });
          }}
        />
        <p className="small muted">Grün = richtig markiert, rot = kein Zielzeichen.</p>
        <div className="btn-row">
          <button className="btn primary big" onClick={onStart}>
            Test starten
          </button>
        </div>
      </div>
    </div>
  );
}

function Run({ step, mode, submitSignal, stepLabel, onFinish }: ModuleProps<ConcStep>) {
  const field = useMemo(() => generateField(step.seed, step.rows, step.cols), [step.seed, step.rows, step.cols]);
  const [sel, setSel] = useState<Set<number>>(new Set());
  const [confirm, setConfirm] = useState(false);
  const done = useRef(false);
  const selRef = useRef(sel);
  selRef.current = sel;
  const submit = (expired: boolean) => {
    if (done.current) return;
    done.current = true;
    const usedMs = timer.stop();
    const r = scoreConcentration(field, selRef.current, usedMs);
    onFinish({
      module: 'concentration',
      score: r.score,
      limitMs: step.limitMs,
      usedMs,
      expired,
      correct: r.hits,
      incorrect: r.falseAlarms,
      unanswered: r.misses,
      detail: {
        kind: 'concentration',
        seed: step.seed,
        rows: step.rows,
        cols: step.cols,
        selected: [...selRef.current].sort((a, b) => a - b),
        hits: r.hits,
        misses: r.misses,
        falseAlarms: r.falseAlarms,
        targets: r.targets,
        rowsProcessed: r.rowsProcessed,
        accuracy: r.accuracy,
        rowsPerMinute: r.rowsPerMinute,
      },
    });
  };
  const submitRef = useRef(submit);
  submitRef.current = submit;
  const timer = useCountdown(step.limitMs, () => submitRef.current(true));
  useEffect(() => {
    if (submitSignal > 0) submitRef.current(false);
  }, [submitSignal]);

  return (
    <div className="test-shell">
      <div className="ribbon">
        <span className={`mode-badge ${mode === 'practice' ? 'practice' : ''}`}>{mode === 'simulation' ? 'Prüfung' : mode === 'challenge' ? 'Challenge' : 'Übung'}</span>
        <div className="r-title">
          <strong>
            Capacité à se concentrer <span className="muted small">· Konzentration</span>
          </strong>
          <span>{stepLabel ? `${stepLabel} · ` : ''}Jedes E mit genau 3 Punkten markieren</span>
        </div>
        <div className="spacer" />
        <span className="mono small muted">{sel.size} markiert</span>
        <TimerDisplay remainingMs={timer.remainingMs} elapsedMs={timer.elapsedMs} />
        <button className="btn primary" onClick={() => setConfirm(true)}>
          Fertig
        </button>
      </div>
      <div style={{ padding: '8px 16px' }}>
        <ConcGrid
          field={field}
          selected={sel}
          label="Testfeld"
          onToggle={(i) =>
            setSel((s) => {
              const n = new Set(s);
              if (n.has(i)) n.delete(i);
              else n.add(i);
              return n;
            })
          }
        />
      </div>
      {confirm && (
        <ConfirmDialog title="Test beenden?" confirmLabel="Beenden" onCancel={() => setConfirm(false)} onConfirm={() => submit(false)}>
          Nicht markierte Zielzeichen zählen als übersehen.
        </ConfirmDialog>
      )}
    </div>
  );
}

export function ConcentrationTest(props: ModuleProps<ConcStep>) {
  const [started, setStarted] = useState(!props.step.tutorial);
  if (!started) return <Tutorial onStart={() => setStarted(true)} />;
  return <Run {...props} />;
}
