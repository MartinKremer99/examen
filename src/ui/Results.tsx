import { useMemo, useState } from 'react';
import { numKey, numSetOf, scenarioById, sjtKey, verbalKey, verbalSetOf } from '../data/bank';
import { MULTITASK_CONFIGS } from '../data/multitaskConfigs';
import { TAG_LABEL, TVI_LABEL, type Lang, type NumSet, type VerbalSet } from '../data/types';
import { bestOption } from '../engines/behavioral';
import { generateField, isTarget } from '../engines/concentration';
import { isMatch, generateSequence } from '../engines/memory';
import { buildTimeline, ruleText, scoreMultitask, type StreamId } from '../engines/multitask';
import { formatClock } from '../lib/timer';
import { GROUP_INFO, MODULE_INFO, type GroupId } from '../scoring/score';
import { MODE_LABEL, type ModuleResult, type SessionRecord } from '../store/records';
import { formatPrev } from './BehavioralTest';
import { ScoreBar, ScorePill, dateTime } from './common';
import { ConcGrid } from './ConcentrationTest';
import { DocView } from './DocView';
import { Stimulus } from './MemoryTest';
import { NumTabView } from './NumView';

const STREAM_NAME: Record<StreamId, string> = { a: 'A · Zahlenmonitor', b: 'B · Symbolsuche', c: 'C · Zeichenfolge' };
const STREAM_SHORT: Record<StreamId, string> = { a: 'A Zahlen', b: 'B Symbole', c: 'C Zeichen' };

function multitaskAdvice(r: Extract<ModuleResult['detail'], { kind: 'multitask' }>): string {
  const streams = (['a', 'b', 'c'] as StreamId[]).map((s) => ({ s, ...r[s], errors: r[s].misses + r[s].falseAlarms }));
  const worst = [...streams].sort((x, y) => y.errors - x.errors)[0];
  if (worst.errors === 0) return 'Keine Fehler in allen drei Aufgaben – sehr gut.';
  const kind =
    worst.misses > worst.falseAlarms
      ? 'vor allem verpasste Ziele: Die Aufmerksamkeit war zu lange bei anderen Feldern. Wechseln Sie den Blick in einem festen Rhythmus (A → B → C).'
      : 'vor allem Fehlreaktionen: Sie haben auf Anzeigen reagiert, die die Regel nicht erfüllen. Prüfen Sie die Regel kurz, bevor Sie reagieren.';
  const slow = worst.meanRtMs !== null && worst.meanRtMs > 1300 ? ' Die Reaktionszeit ist zudem eher langsam (Ø ' + Math.round(worst.meanRtMs) + ' ms).' : '';
  return `Die meisten Fehler entstanden in ${STREAM_NAME[worst.s]} (${worst.misses} verpasst, ${worst.falseAlarms} Fehlreaktionen) – ${kind}${slow}`;
}

function moduleFacts(m: ModuleResult): [string, string][] {
  const d = m.detail;
  const time: [string, string] = ['Zeit genutzt', `${formatClock(m.usedMs)}${m.limitMs ? ` / ${formatClock(m.limitMs)}` : ''}`];
  const end: [string, string] = ['Abgabe', m.expired ? 'Zeit abgelaufen' : 'selbst beendet'];
  switch (d.kind) {
    case 'tvi':
      return [
        ['Richtig', String(m.correct)],
        ['Falsch', String(m.incorrect)],
        ['Unbeantwortet', String(m.unanswered)],
        ['Genauigkeit', `${Math.round(m.score)} %`],
        time,
        end,
      ];
    case 'concentration':
      return [
        ['Treffer', `${d.hits} von ${d.targets}`],
        ['Übersehen', String(d.misses)],
        ['Fehlklicks', String(d.falseAlarms)],
        ['Genauigkeit (bearbeitet)', `${Math.round(d.accuracy)} %`],
        ['Tempo', `${d.rowsPerMinute.toFixed(1).replace('.', ',')} Zeilen/Min.`],
        time,
        end,
      ];
    case 'memory':
      return [
        ['Richtig', String(d.correct)],
        ['Falsch', String(d.incorrect)],
        ['Verpasst', String(d.missed)],
        ['Genauigkeit', `${Math.round(m.score)} %`],
        ['Ø Reaktionszeit', d.meanRtMs === null ? '–' : `${Math.round(d.meanRtMs)} ms`],
        time,
        end,
      ];
    case 'multitask':
      return [
        ...(['a', 'b', 'c'] as StreamId[]).map(
          (s) => [`${STREAM_SHORT[s]}: Treffer · Fehlr.`, `${d[s].hits}/${d[s].targets} · ${d[s].falseAlarms}`] as [string, string],
        ),
        time,
        end,
      ];
    case 'sjt':
      return [
        ['Optimal gelöst', String(m.correct)],
        ['Teilweise / nicht optimal', String(m.incorrect)],
        ['Unbeantwortet', String(m.unanswered)],
        time,
        end,
      ];
  }
}

function improvementAreas(s: SessionRecord): string[] {
  const out: string[] = [];
  for (const m of s.modules) {
    if (m.score < 60) out.push(`${MODULE_INFO[m.module].name}: ${Math.round(m.score)} / 100 – gezielt im Übungsmodus wiederholen.`);
    if (m.detail.kind === 'tvi') {
      const wrongI = m.detail.items.filter((i) => i.correct === 'I' && i.answer && i.answer !== 'I').length;
      const falseI = m.detail.items.filter((i) => i.correct !== 'I' && i.answer === 'I').length;
      if (wrongI >= 2) out.push(`${MODULE_INFO[m.module].name}: ${wrongI}× eine Schlussfolgerung gezogen, obwohl die Information fehlte (Indéterminé).`);
      if (falseI >= 2) out.push(`${MODULE_INFO[m.module].name}: ${falseI}× „Indéterminé“ gewählt, obwohl die Dokumente die Frage entscheiden.`);
      if (m.unanswered >= 2) out.push(`${MODULE_INFO[m.module].name}: ${m.unanswered} Aussagen unbeantwortet – Tempo erhöhen, schwierige Aussagen markieren und später zurückkehren.`);
    }
    if (m.detail.kind === 'concentration' && m.detail.falseAlarms > m.detail.hits * 0.15)
      out.push('Konzentration: viele Fehlklicks – Punkte genau zählen (über und unter dem Buchstaben).');
    if (m.detail.kind === 'multitask') out.push(`Multitasking: ${multitaskAdvice(m.detail)}`);
  }
  return out;
}

export function Results({ session, onReview, onHome, onRepeat }: { session: SessionRecord; onReview: () => void; onHome: () => void; onRepeat?: () => void }) {
  const ov = session.overall;
  const areas = improvementAreas(session);
  return (
    <div className="page">
      <div className="panel">
        <span className="eyebrow">
          {MODE_LABEL[session.mode]} · {dateTime(session.finishedAt)}
          {session.endedEarly ? ' · vorzeitig beendet' : ''}
        </span>
        <h1>Ergebnis</h1>
        {ov && (
          <div className="result-head">
            <div>
              <div className="eyebrow">Indikativer Übungswert</div>
              <div className="score-big">
                {ov.overall === null ? '–' : ov.overall.toFixed(1).replace('.', ',')}
                <small> / 100</small>
              </div>
            </div>
            <div className="stack">
              {(['technical', 'information', 'behavioral'] as GroupId[]).map((g) => (
                <div key={g} className="stack" style={{ gap: 4 }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <span>
                      {GROUP_INFO[g].name} <span className="group-chip">{Math.round(GROUP_INFO[g].weight * 100)} %</span>
                    </span>
                    <span className="mono">{ov[g] === null ? 'nicht vollständig' : `${ov[g]!.toFixed(1).replace('.', ',')}`}</span>
                  </div>
                  <ScoreBar value={ov[g]} />
                </div>
              ))}
            </div>
          </div>
        )}
        {ov && (
          <p className="notice small">
            Trainingsberechnung: Technisch × 0,5 + Informationsmanagement × 0,3 + Verhalten × 0,2, innerhalb der Gruppen gleich gewichtet. Die
            offizielle Prüfung wird auf 100 Punkte bewertet, bestanden ist sie ab 50 Punkten. Dieser Wert ist keine Vorhersage des offiziellen
            Ergebnisses und keine Aussage über Bestehen oder Nichtbestehen.
            {ov.overall === null ? ' Da nicht alle Module abgeschlossen wurden, wird kein Gesamtwert berechnet.' : ''}
          </p>
        )}
      </div>

      <div className="grid-3">
        {session.modules.map((m, i) => (
          <div key={i} className="panel">
            <div className="panel-head">
              <h3>{MODULE_INFO[m.module].name}</h3>
              <ScorePill value={m.score} />
            </div>
            <span className="small muted">{MODULE_INFO[m.module].fr}</span>
            <dl className="kv">
              {moduleFacts(m).map(([k, v]) => (
                <div key={k} style={{ display: 'contents' }}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            {m.module === 'concentration' && <p className="small muted">Trainingswert = (Treffer − Fehlklicks) / Zielzeichen × 100 – nicht die offizielle Formel.</p>}
          </div>
        ))}
      </div>

      {areas.length > 0 && (
        <div className="panel">
          <h2>Verbesserungsbereiche</h2>
          <ul className="weak-list">
            {areas.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="btn-row">
        <button className="btn primary big" onClick={onReview}>
          Antworten und Lösungen ansehen
        </button>
        {onRepeat && (
          <button className="btn big" onClick={onRepeat}>
            Nochmals
          </button>
        )}
        <button className="btn big" onClick={onHome}>
          Zum Dashboard
        </button>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------ review

function SetViewer({ set, lang }: { set: VerbalSet | NumSet; lang: Lang }) {
  const [tab, setTab] = useState(set.tabs[0].id);
  const t = set.tabs.find((x) => x.id === tab)!;
  const verbal = typeof set.title === 'string';
  return (
    <div className="docs" style={{ borderRight: 'none', borderRadius: 6, overflow: 'hidden' }}>
      <div className="tabs" role="tablist">
        {set.tabs.map((x, i) => (
          <button key={x.id} role="tab" className="tab" aria-selected={x.id === tab} onClick={() => setTab(x.id)}>
            <span className="tab-n">{i + 1}</span>
            {typeof x.title === 'string' ? x.title : x.title[lang]}
          </button>
        ))}
      </div>
      <div className="doc" style={{ maxHeight: 420 }}>
        {verbal ? <DocView tab={t as VerbalSet['tabs'][number]} /> : <NumTabView tab={t as NumSet['tabs'][number]} lang={lang} />}
      </div>
    </div>
  );
}

function TviReview({ m }: { m: ModuleResult }) {
  const d = m.detail as Extract<ModuleResult['detail'], { kind: 'tvi' }>;
  const verbal = m.module === 'verbal';
  const lang: Lang = verbal ? 'fr' : (d.lang ?? 'fr');
  const sets = [...new Map(d.items.map((it) => [it.id, verbal ? verbalSetOf(it.id) : numSetOf(it.id)])).values()].filter(Boolean) as (VerbalSet | NumSet)[];
  const uniqueSets = [...new Map(sets.map((s) => [s.id, s])).values()];
  const [show, setShow] = useState(false);
  return (
    <div className="stack">
      <button className="btn small" onClick={() => setShow((x) => !x)} style={{ justifySelf: 'start' }}>
        {show ? 'Dokumente ausblenden' : 'Dokumente einblenden'}
      </button>
      {show && uniqueSets.map((s) => <SetViewer key={s.id} set={s} lang={lang} />)}
      {d.items.map((it, i) => {
        const set = verbal ? verbalSetOf(it.id) : numSetOf(it.id);
        const st = set?.statements.find((x) => x.id === it.id);
        if (!st) return null;
        const k = verbal ? verbalKey(it.id) : numKey(it.id);
        const text = typeof st.text === 'string' ? st.text : st.text[lang];
        const cls = it.answer === null ? 'na' : it.answer === it.correct ? 'ok' : 'ko';
        return (
          <div key={it.id} className={`review-item ${cls}`}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <span className="eyebrow">
                Aussage {i + 1} {it.flagged ? '· ★ markiert' : ''}
              </span>
              <span className="small">
                Ihre Antwort: <b>{it.answer ? TVI_LABEL[it.answer] : 'keine'}</b> · Lösung: <b>{TVI_LABEL[it.correct]}</b>
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-doc)', fontSize: '1.05rem' }}>{text}</p>
            <p className="small">{k.explanation}</p>
            <ul className="small" style={{ margin: 0, paddingLeft: '1.1em' }}>
              {(['V', 'F', 'I'] as const)
                .filter((a) => a !== k.answer)
                .map((a) => (
                  <li key={a}>
                    <b>Warum nicht {TVI_LABEL[a]}:</b> {k.whyNot[a]}
                  </li>
                ))}
            </ul>
            {'quote' in (k.sources[0] ?? {}) && (
              <p className="small muted">
                Belegstellen:{' '}
                {(k as ReturnType<typeof verbalKey>).sources.map((s, j) => {
                  const tab = (set as VerbalSet).tabs.find((t) => t.id === s.tab);
                  return (
                    <span key={j}>
                      {j > 0 ? ' · ' : ''}[{tab?.title}] «{s.quote}»
                    </span>
                  );
                })}
              </p>
            )}
            <div>
              {it.tags.map((t) => (
                <span key={t} className="tag">
                  {TAG_LABEL[t]}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ConcReview({ m }: { m: ModuleResult }) {
  const d = m.detail as Extract<ModuleResult['detail'], { kind: 'concentration' }>;
  const field = useMemo(() => generateField(d.seed, d.rows, d.cols), [d.seed, d.rows, d.cols]);
  const sel = new Set(d.selected);
  return (
    <div className="stack">
      <div className="legend">
        <span><i style={{ background: 'var(--ok-soft)', borderColor: 'var(--ok)' }} />richtig markiert</span>
        <span><i style={{ borderColor: 'var(--bad)', borderStyle: 'dashed' }} />übersehen</span>
        <span><i style={{ background: 'var(--bad-soft)', borderColor: 'var(--bad)' }} />Fehlklick</span>
      </div>
      <ConcGrid
        field={field}
        selected={new Set()}
        label="Rekonstruktion des Testfelds"
        classFor={(i) => (sel.has(i) ? (isTarget(field.cells[i]) ? 'r-hit' : 'r-fa') : isTarget(field.cells[i]) ? 'r-miss' : '')}
      />
    </div>
  );
}

function MemReview({ m }: { m: ModuleResult }) {
  const d = m.detail as Extract<ModuleResult['detail'], { kind: 'memory' }>;
  const seq = useMemo(() => generateSequence({ seed: d.seed, length: d.length, itemMs: d.itemMs, stimSet: d.stimSet }), [d]);
  return (
    <div className="stack">
      <div className="legend">
        <span><i style={{ borderColor: 'var(--ok)' }} />richtig</span>
        <span><i style={{ borderColor: 'var(--bad)' }} />falsch</span>
        <span><i style={{ borderColor: 'var(--bad)', borderStyle: 'dashed' }} />verpasst</span>
      </div>
      <div className="mem-strip">
        {seq.slice(0, d.shown).map((v, i) => {
          const r = d.responses[i];
          const match = isMatch(seq, i);
          const cls = i < 2 ? '' : r === null ? 'miss' : (r === 'yes') === match ? 'ok' : 'ko';
          return (
            <figure key={i}>
              <div className={`thumb ${cls}`}>
                <Stimulus set={d.stimSet} v={v} size={34} />
              </div>
              <figcaption>
                {i < 2 ? 'merken' : `${match ? 'Ja' : 'Nein'}${r ? (r === 'yes' ? ' · J' : ' · N') : ' · –'}`}
              </figcaption>
            </figure>
          );
        })}
      </div>
      <p className="small muted">Unter jedem Bild: richtige Antwort · Ihre Antwort (J = Ja, N = Nein, – = keine).</p>
    </div>
  );
}

function MtReview({ m }: { m: ModuleResult }) {
  const d = m.detail as Extract<ModuleResult['detail'], { kind: 'multitask' }>;
  const cfg = MULTITASK_CONFIGS.find((c) => c.id === d.configId)!;
  const res = useMemo(() => scoreMultitask(buildTimeline(cfg, d.seed, Math.max(d.durationMs, 1)), d.responses, d.durationMs), [cfg, d]);
  return (
    <div className="stack">
      <p className="small">{multitaskAdvice(d)}</p>
      {(['a', 'b', 'c'] as StreamId[]).map((s) => (
        <div key={s} className="stack" style={{ gap: 6 }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <b>{STREAM_NAME[s]}</b>
            <span className="small mono">
              {d[s].hits}/{d[s].targets} Treffer · {d[s].misses} verpasst · {d[s].falseAlarms} Fehlreaktionen · Ø {d[s].meanRtMs === null ? '–' : `${Math.round(d[s].meanRtMs!)} ms`}
            </span>
          </div>
          <span className="small muted">{ruleText(s, cfg[s].rule)}</span>
          <div className="timeline" aria-label={`Verlauf ${STREAM_NAME[s]}`}>
            {res.outcomes[s].map((o, i) => (
              <span key={i} className={o === 'cr' ? '' : o} title={o} />
            ))}
          </div>
        </div>
      ))}
      <div className="legend">
        <span><i style={{ background: 'var(--ok)' }} />Treffer</span>
        <span><i style={{ background: 'var(--bad)', opacity: 0.55 }} />verpasst</span>
        <span><i style={{ background: 'var(--bad)' }} />Fehlreaktion</span>
        <span><i />keine Reaktion nötig</span>
      </div>
    </div>
  );
}

function SjtReview({ m }: { m: ModuleResult }) {
  const d = m.detail as Extract<ModuleResult['detail'], { kind: 'sjt' }>;
  return (
    <div className="stack">
      {d.items.map((it, i) => {
        const s = scenarioById(it.id);
        if (!s) return null;
        const k = sjtKey(it.id);
        const best = bestOption(k);
        return (
          <div key={it.id} className={`review-item ${it.score >= 0.999 ? 'ok' : it.response ? 'ko' : 'na'}`}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <span className="eyebrow">
                Situation {i + 1} · {s.topicDe}
              </span>
              <span className="small">
                Ihre Antwort: <b>{formatPrev(JSON.stringify(it.response ?? {}))}</b> · Punkte: <b>{Math.round(it.score * 100)} %</b>
              </span>
            </div>
            <p>{s.situation[d.lang]}</p>
            <p className="small">
              <b>{s.question[d.lang]}</b>
            </p>
            <ul className="small" style={{ margin: 0, paddingLeft: '1.1em', display: 'grid', gap: 6 }}>
              {s.options.map((o) => (
                <li key={o.id}>
                  <b>{o.id.toUpperCase()}</b> {o.text[d.lang]} <span className="rating">{k.ratings[o.id]}/4{o.id === best ? ' · beste' : ''}</span>
                  <div className="muted">{k.feedback[o.id]}</div>
                </li>
              ))}
            </ul>
            <p className="small">
              <b>Kernaussage:</b> {k.summary}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function Review({ session, onBack }: { session: SessionRecord; onBack: () => void }) {
  const [sel, setSel] = useState(0);
  const m = session.modules[sel];
  return (
    <div className="page">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h1>Auswertung im Detail</h1>
        <button className="btn" onClick={onBack}>
          Zurück zum Ergebnis
        </button>
      </div>
      <div className="tabs" role="tablist" style={{ borderRadius: 6 }}>
        {session.modules.map((x, i) => (
          <button key={i} role="tab" className="tab" aria-selected={i === sel} onClick={() => setSel(i)}>
            {MODULE_INFO[x.module].name} <span className="mono small">{Math.round(x.score)}</span>
          </button>
        ))}
      </div>
      {m && (
        <div className="panel">
          {m.detail.kind === 'tvi' && <TviReview m={m} />}
          {m.detail.kind === 'concentration' && <ConcReview m={m} />}
          {m.detail.kind === 'memory' && <MemReview m={m} />}
          {m.detail.kind === 'multitask' && <MtReview m={m} />}
          {m.detail.kind === 'sjt' && <SjtReview m={m} />}
        </div>
      )}
    </div>
  );
}
