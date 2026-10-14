import { pctChange, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

const TYPES = ['voirie', 'eclairage', 'verts', 'batiments', 'eau', 'proprete'];
const QUARTERS = ['t1', 't2', 't3', 't4'];

export const nkey07: NumKey = {
  'n07-03': {
    answer: 'F',
    compute: (q) => {
      const total = sum(q.row('t_int', 'proprete'));
      const outside = total * (1 - q.v('t_part', 'proprete', '2025') / 100);
      return tf(outside > 100);
    },
    explanation:
      'Sauberkeitseinsätze 2025: 40 + 55 + 62 + 43 = 200. Innerhalb der Frist: 58 %, außerhalb also 100 % − 58 % = 42 %. 42 % × 200 = 84 Einsätze. Das sind weniger als 100.',
    sources: [
      { tab: 'interventions', block: 't_int' },
      { tab: 'objectifs', block: 't_part' },
    ],
    whyNot: {
      V: 'Wer 58 % als Anteil außerhalb der Frist liest, erhält 116. Die 58 % sind aber der Anteil innerhalb der Frist.',
      I: 'Zahl der Einsätze und Anteil innerhalb der Frist sind angegeben; der Rest lässt sich berechnen.',
    },
  },
  'n07-02': {
    answer: 'V',
    compute: (q) => tf(pctChange(q.v('b_evol', '2024', 'eau'), q.v('b_evol', '2025', 'eau')) > 25),
    explanation: 'Wasser und Kanalisation: 95 (2024) → 120 (2025). (120 − 95) / 95 = 25 / 95 ≈ +26,3 %. Das ist mehr als 25 %.',
    sources: [{ tab: 'interventions', block: 'b_evol' }],
    whyNot: {
      F: 'Die Zunahme beträgt 25 Einsätze; bezogen auf den Ausgangswert 95 sind das rund 26,3 %, also mehr als 25 %.',
      I: 'Beide Jahreswerte sind im Säulendiagramm angegeben.',
    },
  },
  'n07-01': {
    answer: 'I',
    compute: (q) => (q.has('t_pers', 'eau', 'h2024') && !q.has('t_couts', 'hsupp', 'r2024') ? 'I' : 'F'),
    missing: 'Die Überstundenkosten (bzw. der Stundensatz) sind nur für 2025 angegeben, nicht für 2024.',
    explanation:
      'Die Überstunden steigen von 1 260 + 720 + 640 + 380 = 3 000 h auf 1 540 + 810 + 560 + 470 = 3 380 h (+12,7 %). 2025 kosteten sie 141 960 € (42 € pro Stunde). Die Kosten 2024 sind nicht angegeben; der geplante Betrag 2025 (126 000 €) ist kein Ist-Wert für 2024. Ob die Kosten um mehr als 10 % gestiegen sind, hängt vom unbekannten Stundensatz 2024 ab.',
    sources: [
      { tab: 'personnel', block: 't_pers' },
      { tab: 'couts', block: 't_couts' },
    ],
    whyNot: {
      V: 'Mehr Stunden bedeuten nur dann gleich viel mehr Kosten, wenn der Stundensatz gleich bleibt. Das ist nicht angegeben.',
      F: 'Auch ein geringerer Anstieg lässt sich ohne die Kosten 2024 nicht belegen.',
    },
  },
  'n07-04': {
    answer: 'V',
    compute: (q) => tf(TYPES.filter((t) => q.v('t_obj', t, 'reel') <= q.v('t_obj', t, 'obj')).length === 3),
    explanation:
      'Eingehalten: Straßen 6,8 ≤ 7, Grünflächen 7,5 ≤ 10, Wasser 1,6 ≤ 2. Überschritten: Beleuchtung 5,8 > 5, Gebäude 9,0 > 8, Sauberkeit 4,1 > 3. Also genau drei von sechs.',
    sources: [{ tab: 'objectifs', block: 't_obj' }],
    whyNot: {
      F: 'Wer die Anteile innerhalb der Frist (zweite Tabelle) heranzieht, beantwortet eine andere Frage. Verglichen werden hier Durchschnittsdauer und Zielfrist.',
      I: 'Zielfrist und Durchschnittsdauer sind für alle sechs Arten angegeben.',
    },
  },
  'n07-05': {
    answer: 'F',
    compute: (q) => {
      const n = QUARTERS.map((c) => sum(q.col('t_int', c)));
      const days = QUARTERS.map((c, i) => n[i] * q.v('l_delai', '2025', c));
      return tf(sum(days) / sum(n) < 6);
    },
    explanation:
      'Einsätze pro Quartal 2025: 279, 300, 304, 337 (gesamt 1 220). Gewichteter Durchschnitt: (279 × 6,2 + 300 × 5,1 + 304 × 5,6 + 337 × 7,9) / 1 220 = 7 624,5 / 1 220 ≈ 6,25 Tage. Auch der einfache Mittelwert der Quartale (24,8 / 4 = 6,2) und der nach Arten gewichtete Wert aus der Tabelle der Zielvorgaben (≈ 6,24) liegen über 6 Tagen.',
    sources: [
      { tab: 'delais', block: 'l_delai' },
      { tab: 'interventions', block: 't_int' },
    ],
    whyNot: {
      V: 'Zwei Quartale liegen unter 6 Tagen, das 4. Quartal (7,9 Tage, zugleich das Quartal mit den meisten Einsätzen) hebt den Jahresdurchschnitt aber über 6 Tage.',
      I: 'Quartalswerte und Einsatzzahlen pro Quartal sind angegeben; der Jahresdurchschnitt lässt sich berechnen.',
    },
  },
  'n07-06': {
    answer: 'V',
    compute: (q) => tf(pctChange(q.v('t_part', 'proprete', '2024'), q.v('t_part', 'proprete', '2025')) > 15),
    explanation:
      'Der Anteil steigt von 50 % auf 58 %, also um 8 Prozentpunkte. Relativ: (58 − 50) / 50 = 8 / 50 = +16 %, also mehr als 15 %. Die Aussage ist daher richtig.',
    sources: [{ tab: 'objectifs', block: 't_part' }],
    whyNot: {
      F: 'Umgekehrte Falle: Der Anstieg beträgt nur 8 Prozentpunkte, relativ aber 16 %. Die Aussage spricht von Prozent, nicht von Prozentpunkten.',
      I: 'Beide Anteile sind in der Tabelle angegeben.',
    },
  },
  'n07-07': {
    answer: 'I',
    compute: (q) => (q.v('t_veh', 'camionnettes', 'nb') > 1 && !q.has('t_veh', 'camionnette1', 'km') ? 'I' : 'F'),
    missing: 'Die Kilometer sind nur als Summe aller Kleintransporter angegeben, nicht pro Fahrzeug.',
    explanation:
      'Die 6 Kleintransporter fuhren zusammen 72 000 km, im Durchschnitt also 12 000 km. Ein Durchschnitt über 10 000 km schließt nicht aus, dass einzelne Fahrzeuge weniger gefahren sind.',
    sources: [{ tab: 'vehicules', block: 't_veh' }],
    whyNot: {
      V: 'Der Durchschnitt (12 000 km) sagt nichts über jedes einzelne Fahrzeug aus.',
      F: 'Ebenso wenig lässt sich belegen, dass ein Fahrzeug unter 10 000 km blieb.',
    },
  },
  'n07-08': {
    answer: 'F',
    compute: (q) => tf(pctChange(q.v('t_couts', 'soustraitance', 'prevu'), q.v('t_couts', 'soustraitance', 'realise')) > 20),
    explanation: 'Fremdvergabe: geplant 180 000 €, Ist 214 000 €. (214 000 − 180 000) / 180 000 = 34 000 / 180 000 ≈ +18,9 %. Das sind weniger als 20 %.',
    sources: [{ tab: 'couts', block: 't_couts' }],
    whyNot: {
      V: 'Die Überschreitung ist deutlich (34 000 €), erreicht aber nicht 20 % des geplanten Betrags (dafür wären 36 000 € nötig).',
      I: 'Plan- und Ist-Wert sind angegeben.',
    },
  },
  'n07-09': {
    answer: 'I',
    compute: (q) => (q.has('l_delai', '2025', 't4') && !q.has('l_delai', 'eclairage', 't4') ? 'I' : 'F'),
    missing: 'Die Bearbeitungsdauer pro Quartal ist nur für alle Einsatzarten zusammen angegeben, für die Beleuchtung nur als Jahresdurchschnitt.',
    explanation:
      'Bekannt sind die Quartalsdauer aller Einsätze (4. Quartal 2025: 7,9 Tage) und der Jahresdurchschnitt der Beleuchtung (5,8 Tage bei einer Zielfrist von 5 Tagen). Die Dauer der Beleuchtungseinsätze im 4. Quartal ist nicht angegeben.',
    sources: [
      { tab: 'delais', block: 'l_delai' },
      { tab: 'objectifs', block: 't_obj' },
    ],
    whyNot: {
      V: 'Weder der Quartalswert aller Einsätze noch der Jahresdurchschnitt der Beleuchtung lässt sich auf das 4. Quartal der Beleuchtung übertragen.',
      F: 'Auch eine Einhaltung der Frist im 4. Quartal lässt sich nicht nachweisen.',
    },
  },
  'n07-10': {
    answer: 'V',
    compute: (q) => {
      const teams = ['voirie', 'verts', 'batiments', 'eau'];
      const perAgent = (t: string) => q.v('t_pers', t, 'h2025') / q.v('t_pers', t, 'agents');
      const max = teams.reduce((a, b) => (perAgent(b) > perAgent(a) ? b : a));
      return tf(max === 'eau');
    },
    explanation:
      'Überstunden 2025 pro Mitarbeitendem: Straßen und Sauberkeit 1 540 / 14 = 110 h; Grünflächen 810 / 9 = 90 h; Gebäude und Beleuchtung 560 / 8 = 70 h; Wasser und Kanalisation 470 / 4 = 117,5 h. Das Wasserteam liegt vorn.',
    sources: [{ tab: 'personnel', block: 't_pers' }],
    whyNot: {
      F: 'In absoluten Stunden liegt das Team Straßen und Sauberkeit vorn (1 540 h), pro Kopf aber das Wasserteam.',
      I: 'Überstunden und Personalbestand sind für alle Teams angegeben.',
    },
  },
};
