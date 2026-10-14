import { useEffect, useMemo, useRef, useState } from 'react';
import { generateSequence, isMatch, scoreMemory, type MemResponse, type StimSet } from '../engines/memory';
import { formatClock } from '../lib/timer';
import { SymbolSvg } from './MultitaskTest';
import { ConfirmDialog, useKeys } from './common';
import type { ModuleProps, Step } from './plan';
import type { ShapeId, ColorId } from '../engines/multitask';

type MemStep = Extract<Step, { module: 'memory' }>;

const SHAPE_SET: ShapeId[] = ['kreis', 'quadrat', 'dreieck', 'raute', 'stern', 'kreuz', 'sechseck', 'halbmond'];
const PAIR_SET: [ShapeId, ColorId][] = [
  ['kreis', 'blau'],
  ['kreis', 'orange'],
  ['dreieck', 'blau'],
  ['dreieck', 'orange'],
  ['quadrat', 'blau'],
  ['quadrat', 'orange'],
  ['raute', 'blau'],
  ['raute', 'orange'],
];
// 3×3 bit patterns, each with 4 filled cells
const PATTERNS = [0b101010100, 0b110100001, 0b011001100, 0b100011010, 0b001110010, 0b010100101, 0b111000001, 0b000101011];

export function Stimulus({ set, v, size = 140 }: { set: StimSet; v: number; size?: number }) {
  if (set === 'shapes') return <SymbolSvg sym={{ shape: SHAPE_SET[v], color: 'blau' }} size={size} />;
  if (set === 'symbols') return <SymbolSvg sym={{ shape: PAIR_SET[v][0], color: PAIR_SET[v][1] }} size={size} />;
  const bits = PATTERNS[v];
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" role="img" aria-label={`Muster ${v + 1}`}>
      {Array.from({ length: 9 }, (_, i) => (
        <rect
          key={i}
          x={1 + (i % 3) * 9.6}
          y={1 + Math.floor(i / 3) * 9.6}
          width={8.4}
          height={8.4}
          rx={1}
          style={{ fill: bits & (1 << (8 - i)) ? 'var(--s1)' : 'var(--surface-3)' }}
        />
      ))}
    </svg>
  );
}

export const STIM_LABEL: Record<StimSet, string> = { shapes: 'Formen', patterns: 'Muster', symbols: 'Form + Farbe' };

function Tutorial({ stimSet, onStart }: { stimSet: StimSet; onStart: () => void }) {
  const seq = useMemo(() => [2, 5, 2, 7, 1, 7, 7], []);
  const [i, setI] = useState(0);
  return (
    <div className="page narrow">
      <div className="panel">
        <h2>Einführung: Arbeitsgedächtnis</h2>
        <p>
          Nacheinander erscheinen Bilder. Bei jedem neuen Bild entscheiden Sie: <b>Ist das aktuelle Bild identisch mit dem
          vorletzten angezeigten Bild?</b> Gemeint ist das Bild <b>zwei Positionen zuvor</b>, nicht das direkt vorherige.
        </p>
        <p className="small muted">Die ersten beiden Bilder müssen Sie sich nur merken. Ab dem dritten Bild antworten Sie mit „Ja“ (Taste J) oder „Nein“ (Taste N).</p>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>Beispielfolge</h3>
          <span className="mono small">
            Bild {i + 1} / {seq.length}
          </span>
        </div>
        <div className="mem-strip" aria-label="Bisher gezeigte Bilder">
          {seq.slice(0, i + 1).map((v, k) => (
            <figure key={k}>
              <div className={`thumb ${k === i ? 'cur' : k === i - 2 ? 'ref' : ''}`}>
                <Stimulus set={stimSet} v={v} size={36} />
              </div>
              <figcaption>{k === i ? 'aktuell' : k === i - 2 ? 'vorletztes' : `#${k + 1}`}</figcaption>
            </figure>
          ))}
        </div>
        <div className="notice">
          {i < 2 ? (
            <>Bild {i + 1}: noch kein Vergleich möglich, nur merken.</>
          ) : (
            <>
              Bild {i + 1} wird mit Bild {i - 1} verglichen (orange umrandet). Richtige Antwort:{' '}
              <b>{isMatch(seq, i) ? 'Ja, identisch' : 'Nein'}</b>
              {seq[i] === seq[i - 1] && !isMatch(seq, i) ? ' – Vorsicht: Es gleicht nur dem direkt vorherigen Bild.' : ''}
            </>
          )}
        </div>
        <div className="btn-row">
          <button className="btn" onClick={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0}>
            ← Zurück
          </button>
          <button className="btn" onClick={() => setI((x) => Math.min(seq.length - 1, x + 1))} disabled={i === seq.length - 1}>
            Nächstes Bild →
          </button>
          <span className="spacer" style={{ flex: 1 }} />
          <button className="btn primary big" onClick={onStart}>
            Test starten
          </button>
        </div>
      </div>
    </div>
  );
}

function Run({ step, mode, feedback, submitSignal, stepLabel, onFinish }: ModuleProps<MemStep>) {
  const seq = useMemo(() => generateSequence({ seed: step.seed, length: step.length, itemMs: step.itemMs, stimSet: step.stimSet }), [step]);
  const totalMs = step.length * step.itemMs;
  const startRef = useRef(Date.now());
  const [tick, setTick] = useState(0);
  const [idx, setIdx] = useState(0); // self-paced index
  const [blank, setBlank] = useState(false);
  const responses = useRef<MemResponse[]>(Array(step.length).fill(null));
  const rts = useRef<(number | null)[]>(Array(step.length).fill(null));
  const onsets = useRef<number[]>([]);
  const [flash, setFlash] = useState<'ok' | 'ko' | null>(null);
  const [confirm, setConfirm] = useState(false);
  const done = useRef(false);
  const shownRef = useRef(0);

  const elapsed = Date.now() - startRef.current;
  const cur = step.selfPaced ? idx : Math.min(step.length - 1, Math.floor(elapsed / step.itemMs));
  const inGap = step.selfPaced ? blank : elapsed % step.itemMs > step.itemMs - 200; // 200 ms blank between images
  if (cur + 1 > shownRef.current) shownRef.current = cur + 1;
  if (onsets.current[cur] === undefined) onsets.current[cur] = step.selfPaced ? Date.now() : startRef.current + cur * step.itemMs;

  const submit = (expired: boolean) => {
    if (done.current) return;
    done.current = true;
    const usedMs = Math.min(Date.now() - startRef.current, step.selfPaced ? Infinity : totalMs);
    // timed: every image whose onset lies before the end counts as shown
    const shown = step.selfPaced
      ? Math.min(step.length, idx + (responses.current[idx] ? 1 : 0))
      : Math.min(step.length, Math.max(shownRef.current, Math.ceil(usedMs / step.itemMs)));
    const r = scoreMemory(seq, responses.current, rts.current, shown);
    onFinish({
      module: 'memory',
      score: r.score,
      limitMs: step.selfPaced ? null : totalMs,
      usedMs,
      expired,
      correct: r.correct,
      incorrect: r.incorrect,
      unanswered: r.missed,
      detail: {
        kind: 'memory',
        seed: step.seed,
        stimSet: step.stimSet,
        itemMs: step.itemMs,
        length: step.length,
        shown,
        responses: responses.current.slice(),
        rts: rts.current.slice(),
        correct: r.correct,
        incorrect: r.incorrect,
        missed: r.missed,
        meanRtMs: r.meanRtMs,
      },
    });
  };
  const submitRef = useRef(submit);
  submitRef.current = submit;
  useEffect(() => {
    if (submitSignal > 0) submitRef.current(false);
  }, [submitSignal]);
  useEffect(() => {
    startRef.current = Date.now();
    const id = setInterval(() => {
      setTick((t) => t + 1);
      if (!step.selfPaced && Date.now() - startRef.current >= totalMs) {
        clearInterval(id);
        submitRef.current(true);
      }
    }, 50);
    return () => clearInterval(id);
  }, [step.selfPaced, totalMs]);
  void tick;

  const answer = (r: 'yes' | 'no') => {
    if (done.current || cur < 2 || inGap || responses.current[cur] !== null) return;
    responses.current[cur] = r;
    rts.current[cur] = Date.now() - onsets.current[cur];
    if (feedback) {
      setFlash((r === 'yes') === isMatch(seq, cur) ? 'ok' : 'ko');
      setTimeout(() => setFlash(null), 350);
    }
    if (step.selfPaced) {
      setBlank(true);
      setTimeout(() => {
        setBlank(false);
        if (cur + 1 >= step.length) submitRef.current(false);
        else setIdx(cur + 1);
      }, 400);
    }
    setTick((t) => t + 1);
  };
  const advanceMemorise = () => {
    if (step.selfPaced && cur < 2) setIdx(cur + 1);
  };

  useKeys(
    (e) => {
      const k = e.key.toLowerCase();
      if (k === 'j' || e.key === 'ArrowLeft') answer('yes');
      else if (k === 'n' || e.key === 'ArrowRight') answer('no');
      else if (k === ' ' || k === 'enter') advanceMemorise();
      else return;
      e.preventDefault();
    },
    [cur, inGap],
  );

  const remaining = step.selfPaced ? null : Math.max(0, totalMs - elapsed);
  const answered = responses.current[cur] !== null;

  return (
    <div className="test-shell">
      <div className="ribbon">
        <span className={`mode-badge ${mode === 'practice' ? 'practice' : ''}`}>{mode === 'simulation' ? 'Prüfung' : mode === 'challenge' ? 'Challenge' : 'Übung'}</span>
        <div className="r-title">
          <strong>
            Mémoire de travail <span className="muted small">· Arbeitsgedächtnis</span>
          </strong>
          <span>
            {stepLabel ? `${stepLabel} · ` : ''}Bild {cur + 1} / {step.length}
          </span>
        </div>
        <div className="spacer" />
        <div className={`timer ${remaining !== null && remaining <= 10000 ? 'low' : ''}`} role="timer">
          {remaining === null ? `⏱ ${formatClock(elapsed)}` : formatClock(remaining)}
        </div>
        <button className="btn" onClick={() => setConfirm(true)}>
          Beenden
        </button>
      </div>
      <div className="mem-stage">
        <p className="mem-q">
          <b>Ist das aktuelle Bild identisch mit dem vorletzten angezeigten Bild?</b>
        </p>
        <div className="mem-card" style={flash ? { background: flash === 'ok' ? 'var(--ok-soft)' : 'var(--bad-soft)' } : undefined}>
          {!inGap && <Stimulus set={step.stimSet} v={seq[cur]} />}
        </div>
        {cur < 2 ? (
          <div className="stack" style={{ justifyItems: 'center' }}>
            <p className="muted">Merken – noch kein Vergleich möglich.</p>
            {step.selfPaced && (
              <button className="btn primary" onClick={advanceMemorise}>
                Nächstes Bild (Leertaste)
              </button>
            )}
          </div>
        ) : (
          <div className="mem-btns">
            <button className="btn primary" onClick={() => answer('yes')} disabled={answered || inGap} aria-pressed={responses.current[cur] === 'yes'}>
              Ja <kbd className="mono small">J</kbd>
            </button>
            <button className="btn primary" onClick={() => answer('no')} disabled={answered || inGap} aria-pressed={responses.current[cur] === 'no'}>
              Nein <kbd className="mono small">N</kbd>
            </button>
          </div>
        )}
        <p className="small muted">
          {step.selfPaced
            ? 'Selbstbestimmtes Tempo: Das nächste Bild erscheint nach Ihrer Antwort.'
            : `Jedes Bild ist ${(step.itemMs / 1000).toLocaleString('de-LU')} Sekunden sichtbar. Ohne Antwort zählt das Bild als verpasst.`}
        </p>
      </div>
      {confirm && (
        <ConfirmDialog title="Test beenden?" confirmLabel="Beenden" onCancel={() => setConfirm(false)} onConfirm={() => submit(false)}>
          Gewertet werden die bisher gezeigten Bilder.
        </ConfirmDialog>
      )}
    </div>
  );
}

export function MemoryTest(props: ModuleProps<MemStep>) {
  const [started, setStarted] = useState(!props.step.tutorial);
  if (!started) return <Tutorial stimSet={props.step.stimSet} onStart={() => setStarted(true)} />;
  return <Run {...props} />;
}
