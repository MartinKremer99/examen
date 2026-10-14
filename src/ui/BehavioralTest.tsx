import { useEffect, useMemo, useRef, useState } from 'react';
import { scenarioById, sjtKey } from '../data/bank';
import type { OptionId, SjtScenario } from '../data/types';
import { bestOption, isComplete, scoreSjt, worstOption, type SjtResponse } from '../engines/behavioral';
import { useCountdown } from '../lib/timer';
import { MODULE_INFO } from '../scoring/score';
import { ConfirmDialog, Progress, TimerDisplay, useKeys } from './common';
import type { ModuleProps, Step } from './plan';

type SjtStep = Extract<Step, { module: 'results' | 'customer' }>;
const OPTS: OptionId[] = ['a', 'b', 'c', 'd'];

const UI = {
  de: { most: 'Am effektivsten', least: 'Am wenigsten effektiv' },
  fr: { most: 'La plus efficace', least: 'La moins efficace' },
};

export function SjtFeedback({ s, r }: { s: SjtScenario; r: SjtResponse | undefined }) {
  const k = sjtKey(s.id);
  const score = scoreSjt(s.format, k, r);
  const best = bestOption(k);
  const worst = worstOption(k);
  return (
    <div className={`feedback ${score >= 0.999 ? 'ok' : 'ko'}`} role="status">
      <div className="verdict">
        {score >= 0.999 ? 'Sehr gut gewählt' : score >= 0.5 ? 'Teilweise passend' : 'Nicht die beste Wahl'} · {Math.round(score * 100)} %
      </div>
      <p>
        <b>Kernaussage:</b> {k.summary}
      </p>
      <p className="small">
        Effektivste Reaktion: <b>{best.toUpperCase()}</b> · am wenigsten effektiv: <b>{worst.toUpperCase()}</b>
      </p>
      <ul className="small">
        {[...OPTS]
          .sort((x, y) => k.ratings[y] - k.ratings[x])
          .map((o) => (
            <li key={o}>
              <b>{o.toUpperCase()}</b> <span className="rating">Bewertung {k.ratings[o]}/4</span> – {k.feedback[o]}
            </li>
          ))}
      </ul>
    </div>
  );
}

export function BehavioralTest({ step, mode, feedback, submitSignal, compare, stepLabel, onFinish }: ModuleProps<SjtStep>) {
  const lang = step.lang;
  const items = useMemo(() => step.ids.map((id) => scenarioById(id)!).filter(Boolean), [step.ids]);
  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState<Record<string, SjtResponse>>({});
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [confirm, setConfirm] = useState(false);
  const done = useRef(false);
  const respRef = useRef(resp);
  respRef.current = resp;

  const submit = (expired: boolean) => {
    if (done.current) return;
    done.current = true;
    const usedMs = timer.stop();
    const res = items.map((s) => {
      const r = respRef.current[s.id];
      return { id: s.id, response: r ?? null, score: isComplete(s.format, r) ? scoreSjt(s.format, sjtKey(s.id), r) : 0 };
    });
    const answered = res.filter((x, i) => isComplete(items[i].format, x.response ?? undefined)).length;
    const full = res.filter((x) => x.score >= 0.999).length;
    onFinish({
      module: step.module,
      score: (res.reduce((a, x) => a + x.score, 0) / Math.max(1, res.length)) * 100,
      limitMs: step.limitMs,
      usedMs,
      expired,
      correct: full,
      incorrect: answered - full,
      unanswered: res.length - answered,
      detail: { kind: 'sjt', lang, items: res },
    });
  };
  const submitRef = useRef(submit);
  submitRef.current = submit;
  const timer = useCountdown(step.limitMs, () => submitRef.current(true));
  useEffect(() => {
    if (submitSignal > 0) submitRef.current(false);
  }, [submitSignal]);

  const s = items[idx];
  const r = resp[s.id];
  const isChecked = checked.has(s.id);
  const setR = (patch: SjtResponse) => {
    if (isChecked) return;
    setResp((x) => {
      const n = { ...(x[s.id] ?? {}), ...patch };
      // the same option cannot be both most and least effective
      if (patch.most && n.least === patch.most) delete n.least;
      if (patch.least && n.most === patch.least) delete n.most;
      return { ...x, [s.id]: n };
    });
  };
  const answeredCount = items.filter((it) => isComplete(it.format, resp[it.id])).length;
  const go = (i: number) => setIdx(Math.max(0, Math.min(items.length - 1, i)));

  useKeys(
    (e) => {
      if (e.key === 'ArrowRight') go(idx + 1);
      else if (e.key === 'ArrowLeft') go(idx - 1);
      else if (s.format === 'best' && /^[a-d]$/i.test(e.key)) setR({ best: e.key.toLowerCase() as OptionId });
      else return;
      e.preventDefault();
    },
    [idx, resp, checked],
  );

  const info = MODULE_INFO[step.module];
  const prev = compare?.[s.id];

  return (
    <div className="test-shell">
      <div className="ribbon">
        <span className={`mode-badge ${mode === 'practice' ? 'practice' : mode === 'review' ? 'review' : ''}`}>
          {mode === 'simulation' ? 'Prüfung' : mode === 'challenge' ? 'Challenge' : mode === 'review' ? 'Wiederholung' : 'Übung'}
        </span>
        <div className="r-title">
          <strong>
            {info.fr} <span className="muted small">· {info.name}</span>
          </strong>
          <span>
            {stepLabel ? `${stepLabel} · ` : ''}Situation {idx + 1} / {items.length} · {s.topicDe}
          </span>
        </div>
        <div className="spacer" />
        <Progress done={answeredCount} total={items.length} label={`${answeredCount} von ${items.length} beantwortet`} />
        <TimerDisplay remainingMs={timer.remainingMs} elapsedMs={timer.elapsedMs} />
        <button className="btn primary" onClick={() => (answeredCount === items.length ? submit(false) : setConfirm(true))}>
          Abgeben
        </button>
      </div>
      <div className="sjt" lang={lang}>
        <div className="sjt-situation">{s.situation[lang]}</div>
        <p>
          <b>{s.question[lang]}</b>
          {s.format === 'mostLeast' && (
            <span className="small muted"> {lang === 'de' ? '(Wählen Sie je eine Option.)' : '(Choisissez une option pour chaque colonne.)'}</span>
          )}
        </p>
        {s.format === 'best' ? (
          <div className="sjt-options" role="radiogroup">
            {s.options.map((o) => (
              <button key={o.id} className="sjt-opt" role="radio" aria-checked={r?.best === o.id} aria-pressed={r?.best === o.id} onClick={() => setR({ best: o.id })}>
                <span className="letter">{o.id.toUpperCase()}</span>
                <span>{o.text[lang]}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="sjt-options">
            {s.options.map((o) => (
              <div key={o.id} className="sjt-ml">
                <span className="txt">
                  <b className="mono">{o.id.toUpperCase()}</b> · {o.text[lang]}
                </span>
                <button className="choice most" aria-pressed={r?.most === o.id} onClick={() => setR({ most: o.id })}>
                  {UI[lang].most}
                </button>
                <button className="choice least" aria-pressed={r?.least === o.id} onClick={() => setR({ least: o.id })}>
                  {UI[lang].least}
                </button>
              </div>
            ))}
          </div>
        )}

        {feedback && !isChecked && (
          <div className="btn-row">
            <button
              className="btn primary"
              disabled={!isComplete(s.format, r)}
              onClick={() => setChecked((c) => new Set(c).add(s.id))}
            >
              Antwort prüfen
            </button>
          </div>
        )}
        {isChecked && (
          <>
            {prev && <p className="small">Frühere Antwort: <b>{formatPrev(prev)}</b> · Jetzt: <b>{formatPrev(JSON.stringify(r ?? {}))}</b></p>}
            <SjtFeedback s={s} r={r} />
          </>
        )}

        <div className="btn-row">
          <button className="btn" onClick={() => go(idx - 1)} disabled={idx === 0}>
            ← Zurück
          </button>
          {idx < items.length - 1 ? (
            <button className="btn primary" onClick={() => go(idx + 1)}>
              Weiter →
            </button>
          ) : (
            <button className="btn primary" onClick={() => (answeredCount === items.length ? submit(false) : setConfirm(true))}>
              Abgeben
            </button>
          )}
        </div>
        <div className="qnav" aria-label="Situationen">
          {items.map((it, i) => (
            <button key={it.id} className={`${isComplete(it.format, resp[it.id]) ? 'answered' : ''} ${i === idx ? 'current' : ''}`} onClick={() => go(i)}>
              {i + 1}
            </button>
          ))}
        </div>
        <p className="small muted">
          Übungsszenarien, inspiriert von der offiziellen Kompetenz „{info.fr}“ – keine Nachbildung des offiziellen Verfahrens oder seiner Bewertung.
        </p>
      </div>
      {confirm && (
        <ConfirmDialog title="Abgeben?" confirmLabel="Abgeben" onCancel={() => setConfirm(false)} onConfirm={() => submit(false)}>
          {items.length - answeredCount} Situation(en) sind noch nicht vollständig beantwortet und zählen mit 0 Punkten.
        </ConfirmDialog>
      )}
    </div>
  );
}

export function formatPrev(json: string): string {
  try {
    const r = JSON.parse(json) as SjtResponse;
    if (r.best) return r.best.toUpperCase();
    if (r.most || r.least) return `am effektivsten ${r.most?.toUpperCase() ?? '–'}, am wenigsten ${r.least?.toUpperCase() ?? '–'}`;
  } catch {
    /* ignore */
  }
  return 'keine';
}
