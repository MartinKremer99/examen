// Verbal and numerical reasoning: six document tabs, one statement at a
// time, Vrai / Faux / Indéterminé.

import { useEffect, useMemo, useRef, useState } from 'react';
import { numKey, numSetOf, verbalKey, verbalSetOf } from '../data/bank';
import { TAG_LABEL, TVI_LABEL, type NumSet, type TVI, type VerbalSet } from '../data/types';
import { useCountdown } from '../lib/timer';
import { MODULE_INFO } from '../scoring/score';
import type { TviItemResult } from '../store/records';
import { ConfirmDialog, Progress, TimerDisplay, useKeys } from './common';
import { DocView } from './DocView';
import { NumTabView } from './NumView';
import type { ModuleProps, Step } from './plan';

type TviStep = Extract<Step, { module: 'verbal' | 'numerical' }>;
const ANSWERS: TVI[] = ['V', 'F', 'I'];

interface Item {
  id: string;
  set: VerbalSet | NumSet;
  text: string;
  tags: TviItemResult['tags'];
}

export function TviTest({ step, mode, feedback, submitSignal, compare, stepLabel, onFinish }: ModuleProps<TviStep>) {
  const verbal = step.module === 'verbal';
  const lang = step.lang;
  const items: Item[] = useMemo(
    () =>
      step.items.map((id) => {
        if (verbal) {
          const set = verbalSetOf(id)!;
          const st = set.statements.find((s) => s.id === id)!;
          return { id, set, text: st.text, tags: st.tags };
        }
        const set = numSetOf(id)!;
        const st = set.statements.find((s) => s.id === id)!;
        return { id, set, text: st.text[lang], tags: st.tags };
      }),
    [step.items, verbal, lang],
  );
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, TVI>>({});
  const [flags, setFlags] = useState<Set<string>>(new Set());
  const [locked, setLocked] = useState<Set<string>>(new Set()); // practice: answer checked
  const [tabBySet, setTabBySet] = useState<Record<string, string>>({});
  const [highlight, setHighlight] = useState<{ tab: string; quotes: string[]; blocks: string[] } | null>(null);
  const [confirm, setConfirm] = useState(false);
  const done = useRef(false);
  const docRef = useRef<HTMLDivElement>(null);

  const submit = (expired: boolean) => {
    if (done.current) return;
    done.current = true;
    const usedMs = timer.stop();
    const results: TviItemResult[] = items.map((it) => ({
      id: it.id,
      answer: answers[it.id] ?? null,
      correct: (verbal ? verbalKey(it.id) : numKey(it.id)).answer,
      flagged: flags.has(it.id),
      tags: it.tags,
    }));
    const correct = results.filter((r) => r.answer === r.correct).length;
    const unanswered = results.filter((r) => r.answer === null).length;
    onFinish({
      module: step.module,
      score: (correct / results.length) * 100,
      limitMs: step.limitMs,
      usedMs,
      expired,
      correct,
      incorrect: results.length - correct - unanswered,
      unanswered,
      detail: { kind: 'tvi', setId: items[0]?.set.id ?? '', lang, items: results },
    });
  };
  const submitRef = useRef(submit);
  submitRef.current = submit;
  const timer = useCountdown(step.limitMs, () => submitRef.current(true));
  useEffect(() => {
    if (submitSignal > 0) submitRef.current(false);
  }, [submitSignal]);

  const cur = items[idx];
  const set = cur.set;
  const tabId = tabBySet[set.id] ?? set.tabs[0].id;
  const tab = set.tabs.find((t) => t.id === tabId)!;
  const answered = Object.keys(answers).length;
  const isLocked = locked.has(cur.id);

  const choose = (a: TVI) => {
    if (isLocked) return;
    setAnswers((x) => ({ ...x, [cur.id]: a }));
    if (feedback) setLocked((s) => new Set(s).add(cur.id));
  };
  const go = (i: number) => {
    setIdx(Math.max(0, Math.min(items.length - 1, i)));
    setHighlight(null);
  };
  const toggleFlag = () =>
    setFlags((s) => {
      const n = new Set(s);
      if (n.has(cur.id)) n.delete(cur.id);
      else n.add(cur.id);
      return n;
    });
  const selectTab = (id: string) => {
    setTabBySet((x) => ({ ...x, [set.id]: id }));
    docRef.current?.scrollTo({ top: 0 });
  };

  useKeys(
    (e) => {
      const k = e.key.toLowerCase();
      if (k === 'v') choose('V');
      else if (k === 'f') choose('F');
      else if (k === 'i') choose('I');
      else if (k === 'm') toggleFlag();
      else if (e.key === 'ArrowRight') go(idx + 1);
      else if (e.key === 'ArrowLeft') go(idx - 1);
      else if (/^[1-6]$/.test(e.key) && set.tabs[Number(e.key) - 1]) selectTab(set.tabs[Number(e.key) - 1].id);
      else return;
      e.preventDefault();
    },
    [idx, answers, locked, set, flags],
  );

  const key = isLocked ? (verbal ? verbalKey(cur.id) : numKey(cur.id)) : null;
  const tabTitle = (id: string) => {
    const t = set.tabs.find((x) => x.id === id);
    return t ? (typeof t.title === 'string' ? t.title : t.title[lang]) : id;
  };
  const showSources = () => {
    if (!key) return;
    if (verbal) {
      const srcs = (key as ReturnType<typeof verbalKey>).sources;
      selectTab(srcs[0].tab);
      setHighlight({ tab: srcs[0].tab, quotes: srcs.map((s) => s.quote), blocks: [] });
    }
  };
  const allAnswered = answered === items.length;
  const title = MODULE_INFO[step.module];
  const setTitle = typeof set.title === 'string' ? set.title : set.title[lang];

  return (
    <div className="test-shell">
      <div className="ribbon">
        <span className={`mode-badge ${mode === 'practice' ? 'practice' : mode === 'review' ? 'review' : ''}`}>
          {mode === 'simulation' ? 'Prüfung' : mode === 'challenge' ? 'Challenge' : mode === 'review' ? 'Wiederholung' : 'Übung'}
        </span>
        <div className="r-title">
          <strong>
            {title.fr} <span className="muted small">· {title.name}</span>
          </strong>
          <span>
            {stepLabel ? `${stepLabel} · ` : ''}
            {setTitle}
          </span>
        </div>
        <div className="spacer" />
        <Progress done={answered} total={items.length} label={`${answered} von ${items.length} beantwortet`} />
        <TimerDisplay remainingMs={timer.remainingMs} elapsedMs={timer.elapsedMs} />
        <button className="btn primary" onClick={() => (allAnswered ? submit(false) : setConfirm(true))}>
          Abgeben
        </button>
      </div>

      <div className="workspace">
        <section className="docs" aria-label="Dokumente">
          <div className="tabs" role="tablist" aria-label="Register">
            {set.tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                className="tab"
                aria-selected={t.id === tabId}
                onClick={() => selectTab(t.id)}
                title={`Taste ${i + 1}`}
              >
                <span className="tab-n">{i + 1}</span>
                {typeof t.title === 'string' ? t.title : t.title[lang]}
              </button>
            ))}
          </div>
          <div className="doc" ref={docRef} role="tabpanel" tabIndex={0}>
            {verbal ? (
              <DocView tab={tab as VerbalSet['tabs'][number]} highlights={highlight?.tab === tabId ? highlight.quotes : []} />
            ) : (
              <NumTabView tab={tab as NumSet['tabs'][number]} lang={lang} highlightBlocks={highlight?.tab === tabId ? highlight.blocks : []} />
            )}
          </div>
        </section>

        <section className="qpanel" aria-label="Aussage">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <span className="eyebrow">
              Aussage {idx + 1} / {items.length}
            </span>
            <button className="btn small ghost" onClick={toggleFlag} aria-pressed={flags.has(cur.id)} title="Taste M">
              {flags.has(cur.id) ? '★ Markiert' : '☆ Zur Überprüfung markieren'}
            </button>
          </div>
          <div className="statement" lang={verbal || lang === 'fr' ? 'fr' : 'de'}>
            {cur.text}
          </div>
          <div className="answers" role="group" aria-label="Antwort">
            {ANSWERS.map((a) => {
              let cls = 'answer';
              if (key) {
                if (a === key.answer) cls += ' correct';
                else if (answers[cur.id] === a) cls += ' wrong';
              }
              return (
                <button key={a} className={cls} aria-pressed={answers[cur.id] === a} onClick={() => choose(a)} disabled={isLocked && answers[cur.id] !== a && a !== key?.answer}>
                  {TVI_LABEL[a]}
                  <kbd>{a}</kbd>
                </button>
              );
            })}
          </div>

          {key && (
            <div className={`feedback ${answers[cur.id] === key.answer ? 'ok' : 'ko'}`} role="status">
              <div className="verdict">
                {answers[cur.id] === key.answer ? 'Richtig' : 'Nicht richtig'} – Lösung: {TVI_LABEL[key.answer]}
              </div>
              {compare?.[cur.id] && (
                <div className="small">
                  Frühere Antwort: <b>{TVI_LABEL[compare[cur.id] as TVI] ?? 'keine'}</b> · Jetzt: <b>{TVI_LABEL[answers[cur.id]]}</b>
                </div>
              )}
              <p>{key.explanation}</p>
              <ul className="small">
                {ANSWERS.filter((a) => a !== key.answer).map((a) => (
                  <li key={a}>
                    <b>Warum nicht {TVI_LABEL[a]}:</b> {key.whyNot[a]}
                  </li>
                ))}
              </ul>
              <div className="row small">
                <span className="muted">Quellen:</span>
                {verbal
                  ? (key as ReturnType<typeof verbalKey>).sources.map((s, i) => (
                      <button key={i} className="src-btn" onClick={() => {
                        selectTab(s.tab);
                        setHighlight({ tab: s.tab, quotes: (key as ReturnType<typeof verbalKey>).sources.filter((x) => x.tab === s.tab).map((x) => x.quote), blocks: [] });
                      }}>
                        {tabTitle(s.tab)}
                      </button>
                    ))
                  : (key as ReturnType<typeof numKey>).sources.map((s, i) => (
                      <button key={i} className="src-btn" onClick={() => {
                        selectTab(s.tab);
                        setHighlight({ tab: s.tab, quotes: [], blocks: (key as ReturnType<typeof numKey>).sources.filter((x) => x.tab === s.tab).map((x) => x.block) });
                      }}>
                        {tabTitle(s.tab)}
                      </button>
                    ))}
                {verbal && (
                  <button className="link small" onClick={showSources}>
                    Textstelle markieren
                  </button>
                )}
              </div>
              <div className="small muted">Kompetenz: {cur.tags.map((t) => TAG_LABEL[t]).join(' · ')}</div>
            </div>
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
              <button className="btn primary" onClick={() => (allAnswered ? submit(false) : setConfirm(true))}>
                Test abgeben
              </button>
            )}
          </div>

          <div className="stack">
            <span className="eyebrow">Übersicht</span>
            <div className="qnav" role="navigation" aria-label="Aussagen">
              {items.map((it, i) => {
                const k = locked.has(it.id) ? (verbal ? verbalKey(it.id) : numKey(it.id)) : null;
                const cls = [
                  answers[it.id] ? 'answered' : '',
                  i === idx ? 'current' : '',
                  flags.has(it.id) ? 'flagged' : '',
                  k ? (answers[it.id] === k.answer ? 'ok' : 'ko') : '',
                ].join(' ');
                return (
                  <button key={it.id} className={cls} onClick={() => go(i)} aria-label={`Aussage ${i + 1}${answers[it.id] ? ', beantwortet' : ', offen'}${flags.has(it.id) ? ', markiert' : ''}`}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="legend">
              <span><i style={{ background: 'var(--navy-soft)', borderColor: 'var(--navy)' }} />beantwortet</span>
              <span><i />offen</span>
              <span><i style={{ background: 'var(--flag)', borderRadius: '50%' }} />markiert</span>
            </div>
            <p className="small muted">Tasten: V / F / I antworten · 1–6 Register · ← → blättern · M markieren</p>
          </div>
        </section>
      </div>

      {confirm && (
        <ConfirmDialog
          title="Test abgeben?"
          confirmLabel="Abgeben"
          onCancel={() => setConfirm(false)}
          onConfirm={() => {
            setConfirm(false);
            submit(false);
          }}
        >
          {items.length - answered} von {items.length} Aussagen sind noch unbeantwortet. Unbeantwortete Aussagen zählen als falsch.
        </ConfirmDialog>
      )}
    </div>
  );
}
