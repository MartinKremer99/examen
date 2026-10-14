import { pctChange, ppDiff, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

export const nkey01: NumKey = {
  'n01-01': {
    answer: 'V',
    compute: (q) => tf(pctChange(q.v('t_vis', 'chateau', '2023'), q.v('t_vis', 'chateau', '2025')) > 15),
    explanation: 'Schloss: 48 200 (2023) → 55 900 (2025). (55 900 − 48 200) / 48 200 = 7 700 / 48 200 ≈ +16,0 %. Das ist mehr als 15 %.',
    sources: [{ tab: 'visiteurs', block: 't_vis' }],
    whyNot: {
      F: 'Wer nur 2024 → 2025 rechnet (+8,3 %), betrachtet den falschen Zeitraum.',
      I: 'Beide Jahreswerte stehen in der Tabelle.',
    },
  },
  'n01-02': {
    answer: 'F',
    compute: (q) => {
      const a = q.v('b_orig', '2024', 'de');
      const b = q.v('b_orig', '2025', 'de');
      // +2 percentage points, but a relative increase of about 11 %
      return tf(ppDiff(a, b) === 2 && Math.abs(pctChange(a, b) - 2) < 0.05);
    },
    explanation:
      'Der Anteil steigt von 18 % auf 20 %, also um 2 Prozentpunkte. Relativ entspricht das (20 − 18) / 18 ≈ +11,1 %. „Um 2 %“ ist daher falsch.',
    sources: [{ tab: 'origine', block: 'b_orig' }],
    whyNot: {
      V: 'Klassische Falle: Prozentpunkte (2) mit Prozent (11,1 %) verwechselt.',
      I: 'Beide Anteile sind im Diagramm angegeben.',
    },
  },
  'n01-03': {
    answer: 'F',
    compute: (q) => {
      const v2024 = (q.v('b_orig', '2024', 'be') / 100) * q.v('t_vis', 'chateau', '2024');
      const v2025 = (q.v('b_orig', '2025', 'be') / 100) * q.v('t_vis', 'chateau', '2025');
      return tf(v2025 < v2024);
    },
    explanation:
      'Der Anteil sinkt zwar von 22 % auf 21 %, die Gesamtzahl steigt aber. 2024: 22 % × 51 600 = 11 352. 2025: 21 % × 55 900 = 11 739. Die absolute Zahl ist also gestiegen.',
    sources: [
      { tab: 'origine', block: 'b_orig' },
      { tab: 'visiteurs', block: 't_vis' },
    ],
    whyNot: {
      V: 'Ein sinkender Anteil heißt nicht automatisch eine sinkende Zahl, wenn die Gesamtzahl wächst.',
      I: 'Anteile und Gesamtzahlen stehen beide zur Verfügung. Die absolute Zahl lässt sich berechnen.',
    },
  },
  'n01-04': {
    answer: 'V',
    compute: (q) => tf(Math.abs(pctChange(q.v('t_bud', 'promotion', 'prevu'), q.v('t_bud', 'promotion', 'realise')) - 10) < 1e-9),
    explanation: 'Werbung: geplant 58 000 €, Ist 63 800 €. 63 800 / 58 000 = 1,10, also genau +10 %.',
    sources: [{ tab: 'budget', block: 't_bud' }],
    whyNot: {
      F: 'Die Abweichung beträgt 5 800 €, das sind genau 10 % von 58 000 €.',
      I: 'Plan- und Ist-Wert sind angegeben.',
    },
  },
  'n01-05': {
    answer: 'V',
    compute: (q) => tf(sum(q.col('t_bud', 'realise')) < sum(q.col('t_bud', 'prevu'))),
    explanation:
      'Geplant: 412 000 + 58 000 + 95 000 + 37 000 = 602 000 €. Ist: 405 300 + 63 800 + 88 350 + 41 070 = 598 520 €. Die Ist-Summe liegt um 3 480 € darunter.',
    sources: [{ tab: 'budget', block: 't_bud' }],
    whyNot: {
      F: 'Zwei Posten liegen über Plan, die Unterschreitungen bei Personal und Veranstaltungen sind aber größer.',
      I: 'Alle Posten sind angegeben. Die Summen lassen sich berechnen.',
    },
  },
  'n01-06': {
    answer: 'F',
    compute: (q) => tf(q.v('t_vis', 'piscine', '2025') > q.v('t_prev', 'piscine', 'prev2025')),
    explanation: 'Freibad 2025: 31 200 Besucher. Prognose 2025: 33 000. Die Prognose wurde um 1 800 verfehlt.',
    sources: [
      { tab: 'visiteurs', block: 't_vis' },
      { tab: 'previsions', block: 't_prev' },
    ],
    whyNot: {
      V: 'Das Freibad ist gegenüber 2024 gewachsen, hat die Prognose aber nicht erreicht.',
      I: 'Ist-Wert und Prognose sind in zwei Registern angegeben.',
    },
  },
  'n01-07': {
    answer: 'I',
    compute: () => 'I',
    missing: 'Die Ticketeinnahmen sind nur für 2025 angegeben (412 300 €). Für 2024 fehlt der Wert.',
    explanation:
      'Für 2024 kennt man den Erwachsenentarif (9 €) und die Besucherzahl, aber nicht die Einnahmen. Die Aufteilung nach Tarifen und freien Eintritten (Kinder unter 12) ist unbekannt. Ein Vergleich ist daher nicht möglich.',
    sources: [{ tab: 'tarifs', block: 'f_tarif' }],
    whyNot: {
      V: 'Mehr Besucher und ein höherer Preis legen höhere Einnahmen nahe, belegen sie aber nicht.',
      F: 'Es gibt keinen Wert für 2024, der dagegen spräche.',
    },
  },
  'n01-08': {
    answer: 'V',
    compute: (q) => tf(pctChange(q.v('t_vis', 'chateau', '2025'), q.v('t_prev', 'chateau', 'obj2026')) < 2),
    explanation: 'Ziel 2026: 57 000. Wert 2025: 55 900. (57 000 − 55 900) / 55 900 = 1 100 / 55 900 ≈ +1,97 %. Das ist knapp unter 2 %.',
    sources: [
      { tab: 'previsions', block: 't_prev' },
      { tab: 'visiteurs', block: 't_vis' },
    ],
    whyNot: {
      F: 'Wer mit der Prognose 2025 (54 000) statt dem Ist-Wert rechnet, erhält +5,6 %. Basis ist aber der tatsächliche Wert 2025.',
      I: 'Ziel und Ist-Wert sind beide angegeben.',
    },
  },
  'n01-09': {
    answer: 'I',
    compute: () => 'I',
    missing: 'Die Verteilung der Eintritte auf Erwachsenen-, ermäßigten und freien Eintritt wird nicht angegeben.',
    explanation:
      'Bei 412 300 € Einnahmen und 55 900 Eintritten gibt es viele mögliche Kombinationen aus 10-€-, 6-€- und Gratiseintritten. Der Anteil des Erwachsenentarifs lässt sich nicht eindeutig bestimmen.',
    sources: [
      { tab: 'tarifs', block: 'f_tarif' },
      { tab: 'visiteurs', block: 't_vis' },
    ],
    whyNot: {
      V: 'Eine eindeutige Rechnung ist mit drei Tarifkategorien (inkl. gratis) nicht möglich.',
      F: 'Auch das Gegenteil lässt sich nicht beweisen.',
    },
  },
  'n01-10': {
    answer: 'I',
    compute: (q) => (q.has('b_orig', '2025', 'nl') && !q.has('b_orig', 'musee', 'lu') ? 'I' : 'F'),
    missing: 'Die Herkunft der Besucher wird nur für das Schloss angegeben, nicht für das Museum.',
    explanation:
      'Niederländische Schlossbesucher 2025: 17 % × 55 900 ≈ 9 503. Für das Museum (13 100 Besucher) fehlt jede Angabe zur Herkunft. Der Vergleich ist nicht möglich.',
    sources: [
      { tab: 'origine', block: 'b_orig' },
      { tab: 'visiteurs', block: 't_vis' },
    ],
    whyNot: {
      V: 'Die Herkunftsanteile des Schlosses dürfen nicht auf das Museum übertragen werden.',
      F: 'Ohne Herkunftsdaten des Museums lässt sich auch das Gegenteil nicht zeigen.',
    },
  },
};
