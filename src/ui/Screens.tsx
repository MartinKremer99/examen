import { useState } from 'react';
import { NUM_SETS, VERBAL_SETS, numSetOf, scenarioById, verbalSetOf } from '../data/bank';
import { MULTITASK_CONFIGS } from '../data/multitaskConfigs';
import type { Lang } from '../data/types';
import type { StimSet } from '../engines/memory';
import { openErrors } from '../scoring/analysis';
import { MODULE_INFO, MODULE_ORDER, type ModuleId } from '../scoring/score';
import { exportJson, type StoreKind } from '../store/progress';
import { DEFAULT_SETTINGS, MODE_LABEL, type ProgressState, type SessionRecord, type Settings } from '../store/records';
import { ConfirmDialog, ScorePill, Seg, dateTime } from './common';
import { STIM_LABEL } from './MemoryTest';
import type { RunPlan } from './plan';
import { practicePlan, reviewPlan, type StepOptions } from './planner';

// ------------------------------------------------------------ practice

export function PracticeSetup(props: {
  module?: ModuleId;
  state: ProgressState;
  sessions: SessionRecord[];
  onStart: (p: RunPlan) => void;
  onBack: () => void;
}) {
  const [module, setModule] = useState<ModuleId>(props.module ?? 'verbal');
  const [length, setLength] = useState<'kurz' | 'voll'>('kurz');
  const [timed, setTimed] = useState(true);
  const [source, setSource] = useState<'neu' | 'fehler' | 'gleich'>('neu');
  const [setId, setSetId] = useState('');
  const [configId, setConfigId] = useState('');
  const [stimSet, setStimSet] = useState<StimSet | ''>('');
  const [preset, setPreset] = useState<'leicht' | 'standard' | 'schnell'>(props.state.settings.memoryPreset);
  const [tutorial, setTutorial] = useState(true);
  const [numLang, setNumLang] = useState<Lang>(props.state.settings.numLang);
  const [sjtLang, setSjtLang] = useState<Lang>(props.state.settings.sjtLang);

  const errs = openErrors(props.state, module);
  const tvi = module === 'verbal' || module === 'numerical';
  const sjt = module === 'results' || module === 'customer';
  const visual = !tvi && !sjt;
  const last = [...props.sessions].sort((a, b) => b.finishedAt - a.finishedAt).flatMap((s) => s.modules).find((m) => m.module === module);

  const start = () => {
    if (source === 'fehler') {
      const plan = reviewPlan(module, props.state, errs.map((e) => e.itemId));
      if (plan) {
        plan.mode = 'practice';
        plan.title = 'Übungsmodus · frühere Fehler';
        props.onStart(plan);
      }
      return;
    }
    const opt: StepOptions = {
      length,
      timed,
      setId: setId || undefined,
      configId: configId || undefined,
      stimSet: stimSet || undefined,
      memoryPreset: preset,
      tutorial,
      numLang,
      sjtLang,
    };
    const plan = practicePlan(module, props.state, opt);
    if (source === 'gleich' && last) {
      const st = plan.steps[0];
      const d = last.detail;
      if (st.module === 'concentration' && d.kind === 'concentration') Object.assign(st, { seed: d.seed, rows: d.rows, cols: d.cols });
      if (st.module === 'memory' && d.kind === 'memory') Object.assign(st, { seed: d.seed, stimSet: d.stimSet, itemMs: d.itemMs, length: d.length });
      if (st.module === 'multitask' && d.kind === 'multitask') Object.assign(st, { seed: d.seed, configId: d.configId });
    }
    props.onStart(plan);
  };

  const lengthHint: Record<ModuleId, [string, string]> = {
    verbal: ['5 Aussagen', '10 Aussagen (1 Dossier)'],
    numerical: ['5 Aussagen', '10 Aussagen (1 Datensatz)'],
    concentration: ['6 Zeilen · 1 Min.', '12 Zeilen · 2 Min.'],
    multitask: ['2 Minuten', '5 Minuten'],
    memory: ['halbe Folge · 30 s', 'ganze Folge · 1 Min.'],
    results: ['5 Situationen', `${props.state.settings.sjtCount} Situationen`],
    customer: ['5 Situationen', `${props.state.settings.sjtCount} Situationen`],
  };

  return (
    <div className="page narrow">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h1>Übungsmodus</h1>
        <button className="btn" onClick={props.onBack}>
          Zurück
        </button>
      </div>
      <p className="muted">Sofortige Rückmeldung mit Erklärungen nach jeder Antwort. Visuelle Aufgaben werden nach dem Durchgang ausgewertet.</p>
      <div className="panel">
        <div className="field">
          <label htmlFor="pm-module" className="eyebrow">
            Kompetenzbereich
          </label>
          <select
            id="pm-module"
            value={module}
            onChange={(e) => {
              setModule(e.target.value as ModuleId);
              setSource('neu');
            }}
          >
            {MODULE_ORDER.map((m) => (
              <option key={m} value={m}>
                {MODULE_INFO[m].name} – {MODULE_INFO[m].fr}
              </option>
            ))}
          </select>
        </div>
        <Seg
          label="Inhalt"
          value={source}
          onChange={setSource}
          options={[
            { value: 'neu', label: 'Neues Material' },
            ...(visual
              ? [{ value: 'gleich' as const, label: 'Gleiches Layout wie zuletzt', hint: last ? 'letzter Versuch' : 'noch kein Versuch', disabled: !last }]
              : [{ value: 'fehler' as const, label: 'Frühere Fehler wiederholen', hint: `${errs.length} offen`, disabled: errs.length === 0 }]),
          ]}
        />
        {source !== 'fehler' && (
          <>
            <Seg
              label="Umfang"
              value={length}
              onChange={setLength}
              options={[
                { value: 'kurz', label: 'Kurz', hint: lengthHint[module][0] },
                { value: 'voll', label: 'Ausführlich', hint: lengthHint[module][1] },
              ]}
            />
            <Seg
              label="Zeit"
              value={timed ? 'ja' : 'nein'}
              onChange={(v) => setTimed(v === 'ja')}
              options={[
                {
                  value: 'ja',
                  label: 'Mit Zeitlimit',
                  hint: tvi ? 'offizielles Tempo: 12 Min. / 10 Aussagen' : sjt ? `${props.state.settings.sjtMinutes} Min. / ${props.state.settings.sjtCount} Situationen` : 'offizielle Beispieldauer',
                },
                { value: 'nein', label: 'Ohne Zeitlimit', hint: module === 'memory' ? 'selbstbestimmtes Tempo' : module === 'multitask' ? 'bis Sie beenden (max. 10 Min.)' : 'verstrichene Zeit wird angezeigt' },
              ]}
            />
          </>
        )}
        {source === 'neu' && tvi && (
          <div className="field">
            <label htmlFor="pm-set" className="eyebrow">
              {module === 'verbal' ? 'Dossier' : 'Datensatz'}
            </label>
            <select id="pm-set" value={setId} onChange={(e) => setSetId(e.target.value)}>
              <option value="">Automatisch (am wenigsten geübt)</option>
              {(module === 'verbal' ? VERBAL_SETS : NUM_SETS).map((s) => (
                <option key={s.id} value={s.id}>
                  {typeof s.title === 'string' ? s.title : s.title.fr} – {s.themeDe}
                </option>
              ))}
            </select>
          </div>
        )}
        {module === 'numerical' && source !== 'fehler' && (
          <Seg label="Sprache des Materials" value={numLang} onChange={setNumLang} options={[{ value: 'fr', label: 'Französisch' }, { value: 'de', label: 'Deutsch' }]} />
        )}
        {sjt && (
          <Seg label="Sprache der Szenarien" value={sjtLang} onChange={setSjtLang} options={[{ value: 'de', label: 'Deutsch' }, { value: 'fr', label: 'Französisch' }]} />
        )}
        {module === 'multitask' && source === 'neu' && (
          <div className="field">
            <label htmlFor="pm-mt" className="eyebrow">
              Konfiguration
            </label>
            <select id="pm-mt" value={configId} onChange={(e) => setConfigId(e.target.value)}>
              <option value="">Automatisch</option>
              {MULTITASK_CONFIGS.map((c) => (
                <option key={c.id} value={c.id}>
                  Stufe {c.level} · {c.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {module === 'memory' && source === 'neu' && (
          <>
            <Seg
              label="Tempo"
              value={preset}
              onChange={setPreset}
              options={[
                { value: 'leicht', label: 'Leicht', hint: '2,5 s pro Bild' },
                { value: 'standard', label: 'Standard', hint: '2,0 s pro Bild' },
                { value: 'schnell', label: 'Schnell', hint: '1,5 s pro Bild' },
              ]}
            />
            <Seg
              label="Bilder"
              value={stimSet}
              onChange={setStimSet}
              options={[{ value: '', label: 'Zufällig' }, ...(['shapes', 'patterns', 'symbols'] as StimSet[]).map((s) => ({ value: s, label: STIM_LABEL[s] }))]}
            />
          </>
        )}
        {(module === 'concentration' || module === 'memory') && (
          <label className="row small">
            <input type="checkbox" id="pm-tut" checked={tutorial} onChange={(e) => setTutorial(e.target.checked)} /> Mit Einführung (ohne Zeitlimit)
          </label>
        )}
        <div className="btn-row">
          <button className="btn primary big" onClick={start}>
            Übung starten
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------- errors

export function ErrorsScreen(props: { state: ProgressState; sessions: SessionRecord[]; onStart: (p: RunPlan) => void; onBack: () => void }) {
  const mods: ModuleId[] = ['verbal', 'numerical', 'results', 'customer'];
  const visualRecent = [...props.sessions]
    .sort((a, b) => b.finishedAt - a.finishedAt)
    .flatMap((s) => s.modules.map((m) => ({ s, m })))
    .filter(({ m }) => m.detail.kind === 'concentration' || m.detail.kind === 'memory' || m.detail.kind === 'multitask')
    .filter(({ m }) => m.score < 90)
    .slice(0, 5);
  const label = (id: string, module: ModuleId) => {
    if (module === 'verbal') return verbalSetOf(id)?.statements.find((s) => s.id === id)?.text ?? id;
    if (module === 'numerical') return numSetOf(id)?.statements.find((s) => s.id === id)?.text[props.state.settings.numLang] ?? id;
    return scenarioById(id)?.topicDe ?? id;
  };
  return (
    <div className="page narrow">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h1>Fehler wiederholen</h1>
        <button className="btn" onClick={props.onBack}>
          Zurück
        </button>
      </div>
      <p className="muted">
        Sie lösen jede Aufgabe erneut, ohne die Lösung vorher zu sehen. Erst nach Ihrer neuen Antwort sehen Sie frühere Antwort, neue Antwort,
        Lösung und Erklärung. Richtig gelöste Aufgaben gelten danach als erledigt.
      </p>
      {mods.map((m) => {
        const errs = openErrors(props.state, m);
        return (
          <div key={m} className="panel">
            <div className="panel-head">
              <h2>{MODULE_INFO[m].name}</h2>
              <span className="score-pill">{errs.length}</span>
            </div>
            {errs.length === 0 ? (
              <p className="small muted">Keine offenen Fehler.</p>
            ) : (
              <>
                <ul className="history-list">
                  {errs.slice(0, 6).map((e) => (
                    <li key={e.itemId}>
                      <span className="small" style={{ flex: 1, minWidth: 0 }}>
                        {label(e.itemId, m)}
                      </span>
                      <span className="small muted">{e.count}× falsch</span>
                    </li>
                  ))}
                </ul>
                {errs.length > 6 && <p className="small muted">… und {errs.length - 6} weitere</p>}
                <div className="btn-row">
                  <button className="btn primary" onClick={() => {
                    const p = reviewPlan(m, props.state, errs.map((e) => e.itemId));
                    if (p) props.onStart(p);
                  }}>
                    {Math.min(15, errs.length)} Aufgabe(n) wiederholen
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="panel">
        <h2>Visuelle Aufgaben</h2>
        <p className="small muted">Konzentration, Multitasking und Gedächtnis lassen sich mit identischem Layout erneut durchführen.</p>
        {visualRecent.length === 0 ? (
          <p className="small muted">Keine Versuche unter 90 Punkten.</p>
        ) : (
          <ul className="history-list">
            {visualRecent.map(({ s, m }, i) => (
              <li key={i}>
                <span>
                  {MODULE_INFO[m.module].name} <span className="small muted">· {dateTime(s.finishedAt)}</span>
                </span>
                <span className="row">
                  <ScorePill value={m.score} />
                  <button className="btn small" onClick={() => {
                    const plan = practicePlan(m.module, props.state, { length: 'voll', timed: true });
                    const st = plan.steps[0];
                    const d = m.detail;
                    if (st.module === 'concentration' && d.kind === 'concentration') Object.assign(st, { seed: d.seed, rows: d.rows, cols: d.cols, limitMs: m.limitMs });
                    if (st.module === 'memory' && d.kind === 'memory') Object.assign(st, { seed: d.seed, stimSet: d.stimSet, itemMs: d.itemMs, length: d.length });
                    if (st.module === 'multitask' && d.kind === 'multitask') Object.assign(st, { seed: d.seed, configId: d.configId });
                    plan.title = 'Gleiches Layout wiederholen';
                    props.onStart(plan);
                  }}>
                    Gleiches Layout
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------- history

export function HistoryScreen(props: { sessions: SessionRecord[]; onOpen: (s: SessionRecord) => void; onBack: () => void }) {
  const list = [...props.sessions].sort((a, b) => b.finishedAt - a.finishedAt);
  return (
    <div className="page narrow">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h1>Verlauf</h1>
        <button className="btn" onClick={props.onBack}>
          Zurück
        </button>
      </div>
      <div className="panel">
        <ul className="history-list">
          {list.map((s) => (
            <li key={s.id}>
              <div>
                <b>{MODE_LABEL[s.mode]}</b>
                <div className="small muted">
                  {dateTime(s.finishedAt)} · {s.modules.map((m) => `${MODULE_INFO[m.module].name} ${Math.round(m.score)}`).join(' · ')}
                </div>
              </div>
              <div className="row">
                {s.overall?.overall != null && <ScorePill value={s.overall.overall} />}
                <button className="btn small" onClick={() => props.onOpen(s)}>
                  Ansehen
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ------------------------------------------------------------ settings

export function SettingsScreen(props: {
  state: ProgressState;
  sessions: SessionRecord[];
  storeKind: StoreKind;
  onSave: (s: Settings) => void;
  onReset: () => Promise<void>;
  onBack: () => void;
}) {
  const [s, setS] = useState<Settings>(props.state.settings);
  const [confirm, setConfirm] = useState(false);
  const [json, setJson] = useState<string | null>(null);
  const [msg, setMsg] = useState('');
  const update = (patch: Partial<Settings>) => {
    const n = { ...s, ...patch };
    setS(n);
    props.onSave(n);
  };
  const move = (i: number, d: -1 | 1) => {
    const o = [...s.order];
    const j = i + d;
    if (j < 0 || j >= o.length) return;
    [o[i], o[j]] = [o[j], o[i]];
    update({ order: o });
  };
  const doExport = async () => {
    const data = { exportedAt: new Date().toISOString(), app: 'C1 Administratif – Prüfungstrainer', state: props.state, sessions: props.sessions };
    const r = await exportJson(`c1-pruefungstrainer-${new Date().toISOString().slice(0, 10)}.json`, data);
    if (r === 'saved') setMsg('Export gespeichert.');
    else if (r === 'declined') setMsg('Export abgebrochen.');
    else {
      setJson(JSON.stringify(data, null, 2));
      setMsg('Direkter Download hier nicht verfügbar – kopieren Sie den Inhalt unten.');
    }
  };
  return (
    <div className="page narrow">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h1>Einstellungen</h1>
        <button className="btn" onClick={props.onBack}>
          Zurück
        </button>
      </div>
      <div className="panel">
        <h2>Prüfungssimulation</h2>
        <div className="stack">
          <span className="eyebrow">Reihenfolge der Module</span>
          <ol style={{ margin: 0, paddingLeft: '1.4em', display: 'grid', gap: 6 }}>
            {s.order.map((m, i) => (
              <li key={m}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <span>{MODULE_INFO[m].name}</span>
                  <span className="btn-row">
                    <button className="btn small" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`${MODULE_INFO[m].name} nach oben`}>
                      ↑
                    </button>
                    <button className="btn small" onClick={() => move(i, 1)} disabled={i === s.order.length - 1} aria-label={`${MODULE_INFO[m].name} nach unten`}>
                      ↓
                    </button>
                  </span>
                </div>
              </li>
            ))}
          </ol>
          <button className="link small" style={{ justifySelf: 'start' }} onClick={() => update({ order: DEFAULT_SETTINGS.order })}>
            Offizielle Reihenfolge wiederherstellen
          </button>
        </div>
        <div className="field">
          <label htmlFor="st-overall" className="eyebrow">
            Optionaler Gesamt-Countdown
          </label>
          <select id="st-overall" value={s.overallLimitMin ?? ''} onChange={(e) => update({ overallLimitMin: e.target.value ? Number(e.target.value) : null })}>
            <option value="">Aus (nur Modulzeiten)</option>
            {[60, 75, 90, 120, 150].map((m) => (
              <option key={m} value={m}>
                {m} Minuten
              </option>
            ))}
          </select>
          <p className="small muted">
            Die fünf kognitiven Tests dauern zusammen 32 Minuten. Die offizielle Prüfung dauert laut Ausschreibung höchstens 2 h 30. Die genaue
            Gesamtdauer für C1 administratif lässt sich aus den Beispielzeiten nicht ableiten.
          </p>
        </div>
        <div className="grid-2" style={{ gap: 12 }}>
          <div className="field">
            <label htmlFor="st-sjtmin" className="eyebrow">
              Zeit je Verhaltensmodul
            </label>
            <select id="st-sjtmin" value={s.sjtMinutes} onChange={(e) => update({ sjtMinutes: Number(e.target.value) })}>
              {[5, 8, 10, 12, 15, 20].map((m) => (
                <option key={m} value={m}>
                  {m} Minuten
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="st-sjtn" className="eyebrow">
              Situationen je Verhaltensmodul
            </label>
            <select id="st-sjtn" value={s.sjtCount} onChange={(e) => update({ sjtCount: Number(e.target.value) })}>
              {[6, 8, 10, 12, 15].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="small muted">Für die Verhaltensmodule sind keine offiziellen Zeiten veröffentlicht. Die Werte sind Übungsvorgaben.</p>
      </div>
      <div className="panel">
        <h2>Sprache des Materials</h2>
        <Seg label="Numerisches Denken" value={s.numLang} onChange={(v) => update({ numLang: v })} options={[{ value: 'fr', label: 'Französisch' }, { value: 'de', label: 'Deutsch' }]} />
        <Seg label="Verhaltensszenarien" value={s.sjtLang} onChange={(v) => update({ sjtLang: v })} options={[{ value: 'de', label: 'Deutsch' }, { value: 'fr', label: 'Französisch' }]} />
        <p className="small muted">Verbales Denken ist immer auf Französisch, wie in der offiziellen Prüfung vorgeschrieben.</p>
      </div>
      <div className="panel">
        <h2>Daten</h2>
        <p className="small">
          {props.sessions.length} gespeicherte Versuche ·{' '}
          {props.storeKind === 'cloud' ? 'privat in Ihrem Konto gespeichert' : props.storeKind === 'local' ? 'in diesem Browser gespeichert' : 'nur für diese Sitzung gespeichert'}
        </p>
        <div className="btn-row">
          <button className="btn" onClick={doExport}>
            Verlauf als JSON exportieren
          </button>
          <button className="btn danger" onClick={() => setConfirm(true)}>
            Fortschritt zurücksetzen
          </button>
        </div>
        {msg && <p className="small" role="status">{msg}</p>}
        {json && (
          <>
            <textarea className="json" id="st-json" readOnly value={json} onFocus={(e) => e.currentTarget.select()} />
            <button
              className="btn small"
              onClick={() => {
                navigator.clipboard?.writeText(json).then(
                  () => setMsg('In die Zwischenablage kopiert.'),
                  () => setMsg('Kopieren nicht möglich – Text markieren und manuell kopieren.'),
                );
              }}
            >
              Kopieren
            </button>
          </>
        )}
      </div>
      {confirm && (
        <ConfirmDialog
          title="Gesamten Fortschritt löschen?"
          confirmLabel="Endgültig löschen"
          danger
          onCancel={() => setConfirm(false)}
          onConfirm={async () => {
            setConfirm(false);
            await props.onReset();
            setMsg('Fortschritt wurde zurückgesetzt.');
          }}
        >
          Alle Versuche, Fehlerlisten und Markierungen werden gelöscht. Dies kann nicht rückgängig gemacht werden.
        </ConfirmDialog>
      )}
    </div>
  );
}

