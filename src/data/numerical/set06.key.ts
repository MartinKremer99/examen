import { pctChange, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

export const nkey06: NumKey = {
  'n06-02': {
    answer: 'F',
    compute: (q) => {
      const a = q.v('t_occ', 'chalets', '2024');
      const b = q.v('t_occ', 'chalets', '2025');
      // +7 percentage points, but a relative increase of about 9.9 %
      return tf(Math.abs(pctChange(a, b) - 7) < 0.05);
    },
    explanation:
      'Die Auslastung der Chalets steigt von 71 % auf 78 %, also um 7 Prozentpunkte. Relativ entspricht das (78 − 71) / 71 ≈ +9,9 %. „Um 7 %“ ist daher falsch.',
    sources: [{ tab: 'capacite', block: 't_occ' }],
    whyNot: {
      V: 'Klassische Falle: 7 Prozentpunkte sind nicht 7 %. Relativ ist die Auslastung um rund 9,9 % gestiegen.',
      I: 'Beide Auslastungswerte sind in der Tabelle angegeben.',
    },
  },
  'n06-01': {
    answer: 'V',
    compute: (q) => {
      const months = ['avr', 'mai', 'juin', 'juil', 'aout', 'sept', 'oct'];
      const lower = months.filter((m) => q.v('l_nuit', '2025', m) < q.v('l_nuit', '2024', m));
      return tf(lower.length === 1 && lower[0] === 'aout');
    },
    explanation:
      'Vergleich 2025 mit 2024: April 1 400 > 1 200, Mai 2 900 > 2 600, Juni 4 300 > 4 100, Juli 8 200 > 7 800, August 8 700 < 8 900, September 3 900 > 3 400, Oktober 1 300 > 1 000. Nur im August liegt 2025 unter 2024.',
    sources: [{ tab: 'nuitees', block: 'l_nuit' }],
    whyNot: {
      F: 'In allen anderen Monaten liegt die Linie 2025 über der Linie 2024. Der August bleibt zwar der stärkste Monat, liegt aber unter dem Vorjahreswert.',
      I: 'Alle Monatswerte beider Jahre sind im Diagramm angegeben.',
    },
  },
  'n06-03': {
    answer: 'F',
    compute: (q) => {
      const nl2024 = (q.v('b_pays', '2024', 'nl') / 100) * sum(q.row('l_nuit', '2024'));
      const nl2025 = (q.v('b_pays', '2025', 'nl') / 100) * sum(q.row('l_nuit', '2025'));
      return tf(Math.abs(pctChange(nl2024, nl2025) + 10) < 0.5);
    },
    explanation:
      'Übernachtungen insgesamt: 2024 = 29 000, 2025 = 30 700 (Summe der Monatswerte). Niederlande 2024: 40 % × 29 000 = 11 600. 2025: 36 % × 30 700 = 11 052. (11 052 − 11 600) / 11 600 ≈ −4,7 %. Die Zahl sinkt also nur um rund 4,7 %, nicht um 10 %.',
    sources: [
      { tab: 'pays', block: 'b_pays' },
      { tab: 'nuitees', block: 'l_nuit' },
    ],
    whyNot: {
      V: 'Um 10 % (relativ) sinkt nur der Anteil (40 % → 36 %). Da die Gesamtzahl der Übernachtungen gestiegen ist, sinkt die absolute Zahl deutlich weniger.',
      I: 'Anteile und Gesamtzahlen beider Jahre sind bekannt; die absoluten Zahlen lassen sich berechnen.',
    },
  },
  'n06-04': {
    answer: 'I',
    compute: (q) => (q.has('t_occ', 'tentes', '2025') && !q.has('t_occ', 'tentes', 'aout') ? 'I' : 'F'),
    missing: 'Die Auslastung ist nur als Durchschnitt über die ganze Saison angegeben, nicht pro Monat.',
    explanation:
      'Bekannt ist nur die Saisonauslastung der Zeltstellplätze 2025 (41 %). Wie sie sich auf die Monate verteilt, ist nicht angegeben. Auch die monatlichen Übernachtungen helfen nicht, da sie nicht nach Unterkunftsart aufgeteilt sind.',
    sources: [
      { tab: 'capacite', block: 't_occ' },
      { tab: 'nuitees', block: 'l_nuit' },
    ],
    whyNot: {
      V: 'Dass der August der stärkste Monat ist, belegt keine bestimmte Auslastung der Zeltplätze.',
      F: 'Ein Saisondurchschnitt von 41 % schließt einen Monatswert über 80 % nicht aus.',
    },
  },
  'n06-05': {
    answer: 'V',
    compute: (q) => tf(q.f('f_cap', 'chalets') * (q.v('t_occ', 'chalets', '2025') / 100) > 9),
    explanation: 'Durchschnittlich belegte Chalets pro Nacht = Zahl der Chalets × Auslastung = 12 × 78 % = 9,36. Das sind mehr als 9.',
    sources: [
      { tab: 'capacite', block: 'f_cap' },
      { tab: 'capacite', block: 't_occ' },
    ],
    whyNot: {
      F: 'Wer mit der Auslastung 2024 rechnet (12 × 71 % = 8,52), nimmt das falsche Jahr.',
      I: 'Zahl der Chalets und Auslastung sind angegeben; die Auslastung ist genau als Anteil der belegten Einheiten pro Öffnungstag definiert.',
    },
  },
  'n06-06': {
    answer: 'F',
    compute: (q) => tf(pctChange(sum(q.row('l_nuit', '2025')), q.f('f_prev', 'nuitees2026')) > 5),
    explanation:
      'Übernachtungen 2025: 1 400 + 2 900 + 4 300 + 8 200 + 8 700 + 3 900 + 1 300 = 30 700. Prognose 2026: 32 000. (32 000 − 30 700) / 30 700 ≈ +4,2 %. Das sind weniger als 5 %.',
    sources: [
      { tab: 'previsions', block: 'f_prev' },
      { tab: 'nuitees', block: 'l_nuit' },
    ],
    whyNot: {
      V: 'Wer mit 2024 (29 000) vergleicht, erhält +10,3 %. Basis ist aber das Jahr 2025.',
      I: 'Die Jahressumme 2025 ergibt sich aus den Monatswerten; die Prognose ist angegeben.',
    },
  },
  'n06-07': {
    answer: 'I',
    compute: (q) => (q.has('b_pays', '2025', 'nl') && !q.has('b_pays', 'chalets', 'nl') ? 'I' : 'F'),
    missing: 'Die Übernachtungen sind nicht gleichzeitig nach Herkunftsland und Unterkunftsart aufgeschlüsselt.',
    explanation:
      'Bekannt ist nur, dass 2025 36 % der Übernachtungen auf Gäste aus den Niederlanden und 26 % auf Gäste aus Belgien entfielen. Welche Unterkunftsart diese Gäste nutzten, ist nicht angegeben.',
    sources: [
      { tab: 'pays', block: 'b_pays' },
      { tab: 'capacite', block: 't_occ' },
    ],
    whyNot: {
      V: 'Mehr Übernachtungen insgesamt bedeuten nicht mehr Übernachtungen in Chalets.',
      F: 'Auch das Gegenteil lässt sich ohne Aufschlüsselung nach Unterkunftsart nicht zeigen.',
    },
  },
  'n06-08': {
    answer: 'V',
    compute: (q) => {
      const rows = ['tentes', 'caravanes', 'chalets', 'services'];
      const gap = (r: string) => Math.abs(q.v('t_rec', r, 'realise') - q.v('t_rec', r, 'prevu'));
      const max = rows.reduce((a, b) => (gap(b) > gap(a) ? b : a));
      return tf(max === 'chalets');
    },
    explanation:
      'Abweichungen Ist − Prognose: Zelte 79 000 − 75 000 = +4 000 €; Wohnwagen 127 100 − 132 000 = −4 900 €; Chalets 180 300 − 170 000 = +10 300 €; Nebenleistungen 27 600 − 30 000 = −2 400 €. Betragsmäßig ist die Abweichung bei den Chalets am größten.',
    sources: [{ tab: 'recettes', block: 't_rec' }],
    whyNot: {
      F: 'Auch die negative Abweichung der Wohnwagenstellplätze (4 900 €) ist kleiner als die der Chalets (10 300 €).',
      I: 'Prognose- und Ist-Werte sind für alle Posten angegeben.',
    },
  },
  'n06-09': {
    answer: 'I',
    compute: (q) => (q.f('f_arr', 'arrivees2025') > 0 && !q.has('f_arr_tab', 'arrivees', '2024') ? 'I' : 'F'),
    missing: 'Die Zahl der Ankünfte ist nur für 2025 angegeben, nicht für 2024.',
    explanation:
      'Für 2025 lässt sich die durchschnittliche Aufenthaltsdauer berechnen: 30 700 / 8 300 ≈ 3,7 Nächte. Für 2024 fehlt die Zahl der Ankünfte, ein Vergleich ist daher nicht möglich.',
    sources: [
      { tab: 'nuitees', block: 'f_arr' },
      { tab: 'nuitees', block: 'l_nuit' },
    ],
    whyNot: {
      V: 'Mehr Übernachtungen können auch durch mehr Gäste bei gleicher oder kürzerer Aufenthaltsdauer entstehen.',
      F: 'Ohne die Ankünfte 2024 lässt sich auch kein Rückgang belegen.',
    },
  },
  'n06-10': {
    answer: 'F',
    compute: (q) => {
      const rows = ['tente', 'caravane', 'chalet'];
      const inc = (r: string) => pctChange(q.v('t_tarif', r, '2024'), q.v('t_tarif', r, '2025'));
      const max = rows.reduce((a, b) => (inc(b) > inc(a) ? b : a));
      return tf(max === 'chalet');
    },
    explanation:
      'Zelt: 14 → 15 € = +7,1 %. Wohnwagen: 22 → 24 € = +9,1 %. Chalet: 85 → 90 € = +5,9 %. Prozentual ist der Wohnwagentarif am stärksten gestiegen, der Chalet-Tarif am wenigsten.',
    sources: [{ tab: 'tarifs', block: 't_tarif' }],
    whyNot: {
      V: 'In Euro steigt der Chalet-Tarif am stärksten (+5 €), prozentual aber am schwächsten. Gefragt ist die prozentuale Veränderung.',
      I: 'Alle Tarife beider Jahre sind angegeben.',
    },
  },
};
