import { pctChange, ppDiff, ratio, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

const LINES = ['l1', 'l2', 'l3'];

export const nkey08: NumKey = {
  'n08-02': {
    answer: 'F',
    compute: (q) => {
      const weekdays = ['lun', 'mar', 'mer', 'jeu', 'ven'];
      const minDay = (l: string) => weekdays.reduce((a, b) => (q.v('b_jours', l, b) < q.v('b_jours', l, a) ? b : a));
      return tf(LINES.every((l) => minDay(l) === 'mer'));
    },
    explanation:
      'L1: Mittwoch 560 ist der niedrigste Wert von Montag bis Freitag. L2: Freitag 242 liegt unter Mittwoch 270. L3: Mittwoch ist mit 85 sogar der stärkste Tag; am schwächsten sind Montag und Donnerstag (je 70). Die Aussage gilt also nur für L1.',
    sources: [{ tab: 'semaine', block: 'b_jours' }],
    whyNot: {
      V: 'Bei L1 stimmt es, aber nicht bei L2 (Freitag am schwächsten) und nicht bei L3 (Mittwoch am stärksten).',
      I: 'Alle Tageswerte der drei Linien sind im Diagramm angegeben.',
    },
  },
  'n08-01': {
    answer: 'V',
    compute: (q) => {
      const above = LINES.filter((l) => q.v('t_lignes', l, '2025') > q.v('t_prev', l, 'prev2025'));
      return tf(above.length === 1 && above[0] === 'l1');
    },
    explanation:
      'Ist 2025 vs. Prognose 2025: L1 168 000 > 160 000 (übertroffen); L2 71 000 < 75 000; L3 21 500 < 25 000. Nur L1 hat die Prognose übertroffen.',
    sources: [
      { tab: 'lignes', block: 't_lignes' },
      { tab: 'previsions', block: 't_prev' },
    ],
    whyNot: {
      F: 'L2 ist gegenüber 2024 zwar gewachsen, blieb aber unter ihrer Prognose. Maßstab ist die Prognose, nicht das Vorjahr.',
      I: 'Ist-Werte und Prognosen 2025 sind für alle Linien angegeben.',
    },
  },
  'n08-03': {
    answer: 'I',
    compute: (q) => (q.has('l_ponct', '2025', 't1') && !q.has('l_ponct', 'l1', 't1') ? 'I' : 'F'),
    missing: 'Die Pünktlichkeit ist nur für alle Linien zusammen angegeben, nicht pro Linie.',
    explanation:
      'Das Liniendiagramm zeigt die Pünktlichkeit pro Quartal für das gesamte Shuttle. Werte für einzelne Linien gibt es nicht, ein Vergleich zwischen L1 und L3 ist daher nicht möglich.',
    sources: [{ tab: 'ponctualite', block: 'l_ponct' }],
    whyNot: {
      V: 'Die Kurven im Diagramm sind Jahre (2024, 2025), keine Linien.',
      F: 'Auch das Gegenteil lässt sich ohne Werte pro Linie nicht belegen.',
    },
  },
  'n08-04': {
    answer: 'V',
    compute: (q) => {
      const perPax = (l: string) => ratio(q.v('t_cout', l, '2025'), q.v('t_lignes', l, '2025'));
      return tf(perPax('l3') > 2 * perPax('l2'));
    },
    explanation:
      'Kosten pro Fahrgast 2025: L3 156 950 / 21 500 = 7,30 €; L2 241 400 / 71 000 = 3,40 €. 7,30 / 3,40 ≈ 2,15. Das ist mehr als das Doppelte.',
    sources: [
      { tab: 'couts', block: 't_cout' },
      { tab: 'lignes', block: 't_lignes' },
    ],
    whyNot: {
      F: 'In absoluten Kosten ist L3 die günstigste Linie (156 950 € gegenüber 241 400 €). Pro Fahrgast ist sie aber mehr als doppelt so teuer.',
      I: 'Kosten und Fahrgastzahlen 2025 sind für beide Linien angegeben.',
    },
  },
  'n08-05': {
    answer: 'F',
    compute: (q) => tf(-ppDiff(q.v('l_ponct', '2025', 't3'), q.v('l_ponct', '2025', 't4')) > 9),
    explanation:
      'Pünktlichkeit 2025: 3. Quartal 95,1 %, 4. Quartal 86,5 %. Rückgang: 95,1 − 86,5 = 8,6 Prozentpunkte. Das sind weniger als 9 Prozentpunkte. (Relativ entspricht das 8,6 / 95,1 ≈ −9,0 %.)',
    sources: [{ tab: 'ponctualite', block: 'l_ponct' }],
    whyNot: {
      V: 'Nur die relative Veränderung liegt über 9 % (≈ −9,04 %). Die Aussage spricht aber von Prozentpunkten: 8,6.',
      I: 'Beide Quartalswerte sind im Diagramm angegeben.',
    },
  },
  'n08-06': {
    answer: 'F',
    compute: (q) => {
      const free = (p: string) => q.f('f_park', p) * (1 - q.v('b_occ', '2025', p) / 100);
      return tf(free('centre') > free('pr_gare'));
    },
    explanation:
      'Freie Plätze im Durchschnitt 2025: Zentrum 150 × (100 % − 84 %) = 24; P+R Bahnhof 300 × (100 % − 91 %) = 27. Das P+R hat trotz höherer Auslastung mehr freie Plätze.',
    sources: [
      { tab: 'parkings', block: 'f_park' },
      { tab: 'parkings', block: 'b_occ' },
    ],
    whyNot: {
      V: 'Eine niedrigere Auslastung bedeutet nicht automatisch mehr freie Plätze: Das P+R ist doppelt so groß wie der Parkplatz Zentrum.',
      I: 'Kapazitäten und Auslastungen sind angegeben; die freien Plätze lassen sich berechnen.',
    },
  },
  'n08-07': {
    answer: 'I',
    compute: (q) => (q.has('b_jours', 'l1', 'sam') && !q.has('t_courses', 'l1', 'sam') ? 'I' : 'F'),
    missing: 'Die Zahl der Fahrten pro Tag ist nicht angegeben; bekannt ist nur, dass samstags weniger Fahrten stattfinden.',
    explanation:
      'L1 befördert montags durchschnittlich 620 Fahrgäste, samstags 274. Da samstags in einem verringerten Takt gefahren wird, verteilen sich die Samstagsfahrgäste auf weniger Fahrten. Ohne Zahl der Fahrten lässt sich die Besetzung pro Fahrt nicht vergleichen.',
    sources: [{ tab: 'semaine', block: 'b_jours' }],
    whyNot: {
      V: 'Mehr Fahrgäste pro Tag bedeuten nicht mehr Fahrgäste pro Fahrt, wenn die Zahl der Fahrten unterschiedlich ist.',
      F: 'Auch eine höhere Besetzung am Samstag lässt sich ohne Fahrtenzahl nicht belegen.',
    },
  },
  'n08-08': {
    answer: 'V',
    compute: (q) => {
      const obj = q.f('f_ponct', 'objectif');
      return tf(q.row('l_ponct', '2025').filter((x) => x >= obj).length === 2);
    },
    explanation:
      'Ziel: mindestens 92 %. 2025: 1. Quartal 89,0 % (nicht erreicht), 2. Quartal 92,4 % (erreicht), 3. Quartal 95,1 % (erreicht), 4. Quartal 86,5 % (nicht erreicht). Genau zwei Quartale.',
    sources: [
      { tab: 'ponctualite', block: 'l_ponct' },
      { tab: 'ponctualite', block: 'f_ponct' },
    ],
    whyNot: {
      F: 'Das 2. Quartal 2025 liegt mit 92,4 % knapp, aber eindeutig über dem Ziel von 92 %.',
      I: 'Alle Quartalswerte und das Ziel sind angegeben.',
    },
  },
  'n08-09': {
    answer: 'F',
    compute: (q) => {
      const cost = pctChange(sum(q.col('t_cout', '2024')), sum(q.col('t_cout', '2025')));
      const pax = pctChange(sum(q.col('t_lignes', '2024')), sum(q.col('t_lignes', '2025')));
      return tf(cost > pax);
    },
    explanation:
      'Kosten: 410 000 + 230 000 + 150 000 = 790 000 € (2024) → 436 800 + 241 400 + 156 950 = 835 150 € (2025), also +45 150 € ≈ +5,7 %. Fahrgäste: 152 000 + 64 000 + 23 000 = 239 000 → 168 000 + 71 000 + 21 500 = 260 500, also +21 500 ≈ +9,0 %. Die Fahrgastzahl ist stärker gestiegen.',
    sources: [
      { tab: 'couts', block: 't_cout' },
      { tab: 'lignes', block: 't_lignes' },
    ],
    whyNot: {
      V: 'Der absolute Kostenanstieg (45 150 €) ist zwar größer als der Fahrgastzuwachs (21 500), verglichen werden aber Prozentsätze: 5,7 % gegenüber 9,0 %.',
      I: 'Kosten und Fahrgastzahlen beider Jahre sind für alle Linien angegeben.',
    },
  },
  'n08-10': {
    answer: 'I',
    compute: (q) => (q.f('f_park', 'pr_gare') > 0 && !q.has('b_occ', 'navette', 'pr_gare') ? 'I' : 'F'),
    missing: 'Es gibt keine Angabe dazu, wie viele P+R-Nutzer anschließend das Shuttle nehmen.',
    explanation:
      'Bekannt sind Kapazität (300 Plätze) und Auslastung (91 %) des P+R Bahnhof sowie die Fahrgastzahlen des Shuttles. Ein Zusammenhang zwischen parkenden Autofahrern und Shuttle-Fahrgästen wird nicht erhoben; P+R-Nutzer können auch den Zug nehmen.',
    sources: [
      { tab: 'parkings', block: 'b_occ' },
      { tab: 'lignes', block: 't_lignes' },
    ],
    whyNot: {
      V: 'Die hohe Auslastung des P+R und die steigenden Fahrgastzahlen der L1 belegen keinen Umstieg auf das Shuttle.',
      F: 'Auch das Gegenteil lässt sich mit den vorhandenen Daten nicht zeigen.',
    },
  },
};
