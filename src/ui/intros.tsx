import type { ReactNode } from 'react';
import type { ModuleId } from '../scoring/score';

/** Short task instructions shown before each module. */
export const INTRO: Record<ModuleId, { rule: string; body: ReactNode }> = {
  verbal: {
    rule: 'Aussage anhand der sechs Register prüfen: Vrai, Faux oder Indéterminé.',
    body: (
      <>
        <p>
          Sie erhalten ein Dossier aus <b>sechs Registern</b> (Regeln, Kalender, E-Mails, Berichte …) in französischer Sprache. Zu jeder
          Aussage entscheiden Sie:
        </p>
        <ul>
          <li>
            <b>Vrai</b> – die Aussage folgt logisch aus den Dokumenten.
          </li>
          <li>
            <b>Faux</b> – die Dokumente belegen, dass die Aussage falsch ist.
          </li>
          <li>
            <b>Indéterminé</b> – die Dokumente reichen nicht aus, um zu entscheiden.
          </li>
        </ul>
        <p>
          Verwenden Sie <b>nur</b> die Informationen der Register, kein Vorwissen. Spätere Mitteilungen (z. B. eine E-Mail) können
          frühere Regeln ändern. Achten Sie auf Ausnahmen, Bedingungen und Fristen.
        </p>
      </>
    ),
  },
  numerical: {
    rule: 'Aussage anhand von Tabellen und Diagrammen prüfen: Vrai, Faux oder Indéterminé.',
    body: (
      <>
        <p>
          Sechs Register enthalten <b>Tabellen, Diagramme und Kennzahlen</b>. Entscheiden Sie für jede Aussage, ob sie mit den Daten{' '}
          <b>Vrai</b>, <b>Faux</b> oder <b>Indéterminé</b> (nicht entscheidbar) ist.
        </p>
        <p>
          Konvention: Eine Veränderung „um x %“ ist immer <b>relativ</b> gemeint (z. B. 18 → 20 = +11,1 %). Absolute Differenzen von
          Anteilen werden ausdrücklich als <b>Prozentpunkte</b> („points de pourcentage“) bezeichnet.
        </p>
        <p>Ein Taschenrechner ist nicht nötig, Notizpapier aber hilfreich. Alle Werte sind in den Diagrammen beschriftet.</p>
      </>
    ),
  },
  concentration: {
    rule: 'Jedes E markieren, das von genau drei Punkten umgeben ist.',
    body: (
      <>
        <p>
          Sie sehen ein dichtes Feld aus Buchstaben mit Punkten. Markieren Sie <b>jedes E mit genau drei Punkten</b>. Als umgebende Punkte
          zählen die zwei Positionen über und die zwei Positionen unter dem Buchstaben.
        </p>
        <p>Arbeiten Sie Zeile für Zeile, schnell und genau. Fehlklicks werden abgezogen. Ein zweiter Klick hebt eine Markierung auf.</p>
      </>
    ),
  },
  multitask: {
    rule: 'Drei Aufgaben gleichzeitig überwachen und nach ihrer Regel reagieren.',
    body: (
      <>
        <p>Drei Felder laufen gleichzeitig und wechseln in festen Abständen:</p>
        <ul>
          <li>
            <b>A · Zahlenmonitor</b> – reagieren (Taste A), wenn der Wert die Regel erfüllt.
          </li>
          <li>
            <b>B · Symbolsuche</b> – das gesuchte Symbol anklicken (Tasten 1–4), sonst nichts tun.
          </li>
          <li>
            <b>C · Zeichenfolge</b> – reagieren (Taste L), wenn die genannte Kombination erscheint.
          </li>
        </ul>
        <p>Die Regeln bleiben sichtbar. Gewertet werden Treffer, verpasste Ziele und Fehlreaktionen in jedem Feld.</p>
      </>
    ),
  },
  memory: {
    rule: 'Ist das aktuelle Bild identisch mit dem vorletzten angezeigten Bild?',
    body: (
      <>
        <p>
          Bilder erscheinen in schneller Folge. Entscheiden Sie bei jedem Bild: <b>Ist es identisch mit dem vorletzten Bild</b>, also dem
          Bild zwei Positionen zuvor? Antworten Sie mit <b>Ja (J)</b> oder <b>Nein (N)</b>.
        </p>
        <p>Die ersten beiden Bilder nur merken. Ohne Antwort zählt ein Bild als verpasst.</p>
      </>
    ),
  },
  results: {
    rule: 'Situationen aus dem Arbeitsalltag: die wirksamste Reaktion wählen.',
    body: (
      <>
        <p>
          Sie lesen kurze Situationen aus der Arbeit in einer Gemeindeverwaltung. Wählen Sie die <b>angemessenste Reaktion</b> bzw. die{' '}
          <b>effektivste und die am wenigsten effektive</b>.
        </p>
        <p className="small muted">
          Originale Übungsszenarien zur Kompetenz „Orientation résultat“. Der offizielle Test und sein Bewertungsalgorithmus sind nicht
          veröffentlicht. Diese Aufgaben bilden ihn nicht nach.
        </p>
      </>
    ),
  },
  customer: {
    rule: 'Situationen mit Bürgern, Besuchern und Kollegen: die wirksamste Reaktion wählen.',
    body: (
      <>
        <p>
          Situationen mit Bürgerinnen und Bürgern, Touristen, Veranstaltern und Kollegen. Gute Antworten verbinden Hilfsbereitschaft,
          korrekte Information, Professionalität und das Einhalten der Verfahren.
        </p>
        <p className="small muted">
          Originale Übungsszenarien zur Kompetenz „Orientation client“. Keine Nachbildung des offiziellen Verfahrens oder seiner Bewertung.
        </p>
      </>
    ),
  },
};
