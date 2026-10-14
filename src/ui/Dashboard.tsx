import { useState } from 'react';
import { BANK_COUNTS } from '../data/bank';
import { MULTITASK_CONFIGS } from '../data/multitaskConfigs';
import { moduleStats, openErrors, weaknesses } from '../scoring/analysis';
import { GROUP_INFO, MODULE_INFO, MODULE_ORDER, type GroupId, type ModuleId } from '../scoring/score';
import type { StoreKind } from '../store/progress';
import { MODE_LABEL, type ProgressState, type SessionRecord } from '../store/records';
import { ScoreBar, ScorePill, Sparkline, dateTime } from './common';

export type DashAction =
  | { kind: 'simulation' }
  | { kind: 'practice'; module?: ModuleId }
  | { kind: 'challenge'; module: ModuleId }
  | { kind: 'errors' }
  | { kind: 'history' }
  | { kind: 'settings' }
  | { kind: 'open'; session: SessionRecord };

const OFFICIAL = [
  ['Raisonnement verbal', '12 Min.'],
  ['Raisonnement numérique', '12 Min.'],
  ['Concentration', '2 Min.'],
  ['Multi-tâches', '5 Min.'],
  ['Mémoire de travail', '1 Min.'],
  ['Orientation résultat / client', 'einstellbar'],
];

export function Dashboard(props: { state: ProgressState; sessions: SessionRecord[]; storeKind: StoreKind; onAction: (a: DashAction) => void }) {
  const { state, sessions, onAction } = props;
  const stats = moduleStats(sessions);
  const sims = sessions.filter((s) => s.mode === 'simulation' && s.overall?.overall != null).sort((a, b) => a.finishedAt - b.finishedAt);
  const lastSim = sims[sims.length - 1];
  const bestSim = sims.reduce<number | null>((m, s) => Math.max(m ?? 0, s.overall!.overall!), null);
  const weak = weaknesses(sessions);
  const errCount = openErrors(state).length;
  const recent = [...sessions].sort((a, b) => b.finishedAt - a.finishedAt).slice(0, 6);
  const [chMod, setChMod] = useState<ModuleId>('verbal');

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-main">
          <div className="stack" style={{ gap: 6 }}>
            <span className="eyebrow">Examen d’admissibilité · secteur communal · groupe de traitement C1 · sous-groupe administratif</span>
            <h1>C1 Administratif – Prüfungstrainer</h1>
            <p className="muted">
              Alle sieben Kompetenzbereiche der Zulassungsprüfung, mit den Zeitvorgaben der offiziellen Beispieltests. Trainieren Sie einzeln
              oder als vollständige Simulation.
            </p>
          </div>
          <div className="btn-row">
            <button className="btn primary big" onClick={() => onAction({ kind: 'simulation' })}>
              Prüfungssimulation starten
            </button>
            <button className="btn big" onClick={() => onAction({ kind: 'practice' })}>
              Schnell üben
            </button>
          </div>
          <table className="timing-table" aria-label="Offizielle Beispieldauern">
            <tbody>
              {OFFICIAL.map(([a, b]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h2>Leistungsübersicht</h2>
            <span className="small muted">{sims.length} Simulation(en)</span>
          </div>
          <div className="row" style={{ alignItems: 'flex-end', gap: 24 }}>
            <div>
              <div className="eyebrow">Letzte Simulation</div>
              <div className="score-big">
                {lastSim ? lastSim.overall!.overall!.toFixed(1).replace('.', ',') : '–'}
                <small> / 100</small>
              </div>
            </div>
            <div>
              <div className="eyebrow">Bestwert</div>
              <div className="mono" style={{ fontSize: '1.4rem', fontWeight: 600 }}>
                {bestSim === null ? '–' : bestSim.toFixed(1).replace('.', ',')}
              </div>
            </div>
          </div>
          {(['technical', 'information', 'behavioral'] as GroupId[]).map((g) => (
            <div key={g} className="stack" style={{ gap: 4 }}>
              <div className="row small" style={{ justifyContent: 'space-between' }}>
                <span>
                  {GROUP_INFO[g].name} <span className="group-chip">{GROUP_INFO[g].weight * 100} %</span>
                </span>
                <span className="mono">{lastSim?.overall?.[g] != null ? Math.round(lastSim.overall[g]!) : '–'}</span>
              </div>
              <ScoreBar value={lastSim?.overall?.[g] ?? null} />
            </div>
          ))}
          <p className="small muted">Indikativer Übungswert, keine Vorhersage des offiziellen Ergebnisses.</p>
        </div>
      </section>

      <section className="modes" aria-label="Modi">
        <div className="mode-card">
          <h3>Prüfungssimulation</h3>
          <p className="small muted">Alle Module unter Zeitdruck, keine Hinweise. Lösungen erst am Ende.</p>
          <button className="btn primary" onClick={() => onAction({ kind: 'simulation' })}>
            Starten
          </button>
        </div>
        <div className="mode-card">
          <h3>Übungsmodus</h3>
          <p className="small muted">Ein Modul, kurz oder ausführlich, mit sofortiger Rückmeldung und Erklärungen.</p>
          <button className="btn" onClick={() => onAction({ kind: 'practice' })}>
            Modul wählen
          </button>
        </div>
        <div className="mode-card">
          <h3>Zeit-Challenge</h3>
          <p className="small muted">Sofortstart mit offizieller Dauer, Ergebnis direkt nach Ablauf.</p>
          <div className="row" style={{ flexWrap: 'nowrap' }}>
            <select id="dash-ch" aria-label="Modul für die Challenge" value={chMod} onChange={(e) => setChMod(e.target.value as ModuleId)} style={{ minHeight: 44, flex: 1, minWidth: 0, border: '1px solid var(--line)', borderRadius: 6, background: 'var(--surface)', padding: '0 8px' }}>
              {MODULE_ORDER.map((m) => (
                <option key={m} value={m}>
                  {MODULE_INFO[m].name}
                </option>
              ))}
            </select>
            <button className="btn" onClick={() => onAction({ kind: 'challenge', module: chMod })}>
              Los
            </button>
          </div>
        </div>
        <div className="mode-card">
          <h3>
            Fehler wiederholen <span className="score-pill">{errCount}</span>
          </h3>
          <p className="small muted">Falsch beantwortete Aussagen und Situationen erneut lösen und vergleichen.</p>
          <button className="btn" onClick={() => onAction({ kind: 'errors' })} disabled={errCount === 0}>
            {errCount === 0 ? 'Keine offenen Fehler' : 'Fehler öffnen'}
          </button>
        </div>
      </section>

      <section className="panel" aria-label="Module">
        <div className="panel-head">
          <h2>Kompetenzbereiche</h2>
          <span className="small muted">Werte 0–100 · letzter / bester Versuch</span>
        </div>
        <div className="table-scroll">
          <table className="module-table">
            <thead>
              <tr>
                <th>Modul</th>
                <th>Gruppe</th>
                <th>Letzter</th>
                <th>Bester</th>
                <th>Versuche</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {MODULE_ORDER.map((m) => {
                const s = stats[m];
                return (
                  <tr key={m}>
                    <td>
                      <div className="mname">{MODULE_INFO[m].name}</div>
                      <div className="mfr">
                        {MODULE_INFO[m].fr}
                        {MODULE_INFO[m].officialMin ? ` · ${MODULE_INFO[m].officialMin} Min.` : ''}
                      </div>
                    </td>
                    <td>
                      <span className="group-chip">{GROUP_INFO[MODULE_INFO[m].group].name}</span>
                    </td>
                    <td className="num">
                      <ScorePill value={s.latest} />
                    </td>
                    <td className="num">
                      <ScorePill value={s.best} />
                    </td>
                    <td className="num">{s.attempts}</td>
                    <td>
                      <div className="btn-row" style={{ justifyContent: 'flex-end', flexWrap: 'nowrap' }}>
                        <button className="btn small" onClick={() => onAction({ kind: 'practice', module: m })}>
                          Üben
                        </button>
                        <button className="btn small" onClick={() => onAction({ kind: 'challenge', module: m })} title="Zeit-Challenge">
                          Challenge
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid-2">
        <section className="panel" aria-label="Meine Schwächen">
          <h2>Meine Schwächen</h2>
          {weak.length === 0 ? (
            <p className="muted small">
              {sessions.length === 0
                ? 'Nach den ersten Übungen erscheinen hier die Bereiche mit den meisten Fehlern.'
                : 'Derzeit keine auffälligen Schwächen. Weiter so – und regelmäßig vollständige Simulationen machen.'}
            </p>
          ) : (
            <ul className="weak-list">
              {weak.map((w, i) => (
                <li key={i}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <b>{w.title}</b>
                    {w.module && (
                      <button className="btn small" onClick={() => onAction({ kind: 'practice', module: w.module })}>
                        Üben
                      </button>
                    )}
                  </div>
                  <span className="small muted">{w.detail}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="panel" aria-label="Fortschritt">
          <h2>Fortschritt</h2>
          <div className="stack" style={{ gap: 4 }}>
            <span className="eyebrow">Indikativer Übungswert (Simulationen)</span>
            <Sparkline values={sims.map((s) => s.overall!.overall!).slice(-12)} />
          </div>
          <div className="grid-2" style={{ gap: 12 }}>
            {MODULE_ORDER.map((m) => (
              <div key={m} className="stack" style={{ gap: 2 }}>
                <span className="small">
                  {MODULE_INFO[m].name} <span className="muted mono">{stats[m].trend.length ? `Ø3 ${Math.round(stats[m].recentAvg!)}` : ''}</span>
                </span>
                {stats[m].trend.length >= 2 ? <Sparkline values={stats[m].trend} height={34} /> : <span className="small muted">noch zu wenig Daten</span>}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid-2">
        <section className="panel" aria-label="Verlauf">
          <div className="panel-head">
            <h2>Verlauf</h2>
            {sessions.length > 0 && (
              <button className="link" onClick={() => onAction({ kind: 'history' })}>
                Alle {sessions.length} anzeigen
              </button>
            )}
          </div>
          {recent.length === 0 ? (
            <p className="small muted">Noch keine Versuche. Starten Sie mit einer Übung oder einer Simulation.</p>
          ) : (
            <ul className="history-list">
              {recent.map((s) => (
                <li key={s.id}>
                  <div>
                    <div>
                      <b>{MODE_LABEL[s.mode]}</b>
                      {s.modules.length === 1 ? ` · ${MODULE_INFO[s.modules[0].module].name}` : ` · ${s.modules.length} Module`}
                    </div>
                    <div className="small muted">{dateTime(s.finishedAt)}</div>
                  </div>
                  <div className="row">
                    <ScorePill value={s.overall?.overall ?? (s.modules.length === 1 ? s.modules[0].score : null)} />
                    <button className="btn small" onClick={() => onAction({ kind: 'open', session: s })}>
                      Ansehen
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="panel tint" aria-label="Hinweise">
          <h2>Hinweise</h2>
          <p className="small">
            Alle Aufgaben sind <b>originales Übungsmaterial</b>, keine offiziellen Prüfungsfragen. Das Format folgt den öffentlichen
            Beispielbeschreibungen auf govjobs.public.lu. Der Trainer kann kein offizielles Ergebnis garantieren oder vorhersagen.
          </p>
          <p className="small">
            Aufgabenbank: {BANK_COUNTS.verbalStatements} verbale Aussagen in {BANK_COUNTS.verbalSets} Dossiers ·{' '}
            {BANK_COUNTS.numStatements} numerische Aussagen in {BANK_COUNTS.numSets} Datensätzen · {MULTITASK_CONFIGS.length}{' '}
            Multitasking-Konfigurationen · {BANK_COUNTS.results} + {BANK_COUNTS.customer} Verhaltensszenarien · Konzentrationsfelder und
            Gedächtnisfolgen werden je Versuch neu erzeugt.
          </p>
          <p className="small">
            Speicherung:{' '}
            {props.storeKind === 'cloud'
              ? 'privat in Ihrem Konto (nur für Sie sichtbar).'
              : props.storeKind === 'local'
                ? 'nur in diesem Browser. Andere Geräte sehen diesen Verlauf nicht.'
                : 'nicht verfügbar – der Verlauf gilt nur bis zum Schließen der Seite. Exportieren Sie ihn bei Bedarf als JSON.'}
          </p>
          <p className="small">
            Offizielle Quellen:{' '}
            <a href="https://govjobs.public.lu/fr/secteur-communal/examens/exam-admissibilite/deroul-exam-admissibilite/c1-administratif-exemples.html" target="_blank" rel="noreferrer">
              C1 administratif – exemples
            </a>{' '}
            ·{' '}
            <a href="https://govjobs.public.lu/fr/secteur-communal/examens/exam-admissibilite/deroul-exam-admissibilite.html" target="_blank" rel="noreferrer">
              Déroulement et notation
            </a>{' '}
            ·{' '}
            <a href="https://govjobs.public.lu/fr/secteur-communal/examens/exam-admissibilite/modal-exam-admissibilite.html" target="_blank" rel="noreferrer">
              Modalités
            </a>
          </p>
          <div className="btn-row">
            <button className="btn small" onClick={() => onAction({ kind: 'settings' })}>
              Einstellungen, Export &amp; Zurücksetzen
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
