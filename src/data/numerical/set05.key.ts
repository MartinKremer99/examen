import { pctChange, share, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

export const nkey05: NumKey = {
  'n05-01': {
    answer: 'F',
    compute: (q) => {
      const h2024 = sum(q.row('t_heures', '2024')) * q.f('f_sem', 'sem2024');
      const h2025 = sum(q.row('t_heures', '2025')) * q.f('f_sem', 'sem2025');
      return tf(pctChange(h2024, h2025) > 10);
    },
    explanation:
      'Wochenstunden 2024: 5 + 8 + 5 + 6 + 4 = 28 h; 2025: 6 + 8 + 6 + 6 + 5 = 31 h. Jahresstunden 2024: 28 × 47 = 1 316 h; 2025: 31 × 46 = 1 426 h. (1 426 − 1 316) / 1 316 = 110 / 1 316 ≈ +8,4 %. Das sind weniger als 10 %.',
    sources: [
      { tab: 'horaires', block: 't_heures' },
      { tab: 'horaires', block: 'f_sem' },
    ],
    whyNot: {
      V: 'Nur die Wochenstunden steigen um mehr als 10 % (28 → 31 h, +10,7 %). Da 2025 eine Öffnungswoche weniger zählt (46 statt 47), steigt die Jahressumme nur um rund 8,4 %.',
      I: 'Tagesstunden und Zahl der Öffnungswochen sind angegeben; die Jahresstunden lassen sich berechnen.',
    },
  },
  'n05-02': {
    answer: 'V',
    compute: (q) => tf(pctChange(q.v('l_mois', '2024', 'ja'), q.v('l_mois', '2025', 'ja')) > 10),
    explanation: 'Juli–August: 9 100 (2024) → 10 200 (2025). (10 200 − 9 100) / 9 100 = 1 100 / 9 100 ≈ +12,1 %. Das ist mehr als 10 %.',
    sources: [{ tab: 'periodes', block: 'l_mois' }],
    whyNot: {
      F: 'Die Zunahme von 1 100 Ausleihen bezogen auf 9 100 ergibt rund 12,1 %, also mehr als 10 %.',
      I: 'Beide Werte für Juli–August sind im Liniendiagramm angegeben.',
    },
  },
  'n05-03': {
    answer: 'V',
    compute: (q) => tf((q.v('b_age', '2025', 'a60') / 100) * q.f('f_lect', 'inscrits2025') > 600),
    explanation: 'Anteil ab 60 Jahren 2025: 22 %. Eingeschriebene Leser 2025: 2 800. 22 % × 2 800 = 616 Leser. Das sind mehr als 600.',
    sources: [
      { tab: 'lecteurs', block: 'b_age' },
      { tab: 'lecteurs', block: 'f_lect' },
    ],
    whyNot: {
      F: 'Wer den Anteil 2025 (22 %) mit der Leserzahl 2024 (2 500) multipliziert, erhält 550. Für 2025 gilt aber 2 800 Leser, also 616.',
      I: 'Anteil und Gesamtzahl der Leser 2025 sind angegeben; die absolute Zahl lässt sich berechnen.',
    },
  },
  'n05-04': {
    answer: 'I',
    compute: (q) => (q.has('t_prets', 'jeunesse', '2025') && !q.has('t_prets', 'moins18', '2025') ? 'I' : 'F'),
    missing: 'Es gibt keine Aufschlüsselung der Ausleihen nach dem Alter der ausleihenden Person.',
    explanation:
      'Bekannt sind nur die Ausleihen nach Medienkategorie und die Altersstruktur der eingeschriebenen Leser (0–17 Jahre: 25 % + 10 % = 35 %). Kinderbücher können auch von Erwachsenen ausgeliehen werden und Jugendliche leihen auch andere Kategorien aus. Wie viele Ausleihen auf Leser unter 18 Jahren entfallen, ist nicht angegeben.',
    sources: [
      { tab: 'prets', block: 't_prets' },
      { tab: 'lecteurs', block: 'b_age' },
    ],
    whyNot: {
      V: 'Die Zahlen belegen nicht, dass junge Leser mehr als die Hälfte der Ausleihen tätigen.',
      F: 'Weder der Anteil der Kinder- und Jugendbücher (rund 35 % der Ausleihen) noch der Anteil der unter 18-Jährigen an den Lesern (35 %) sagt etwas darüber, wer wie viel ausleiht.',
    },
  },
  'n05-05': {
    answer: 'F',
    compute: (q) => {
      const a = q.v('b_age', '2024', 'a60');
      const b = q.v('b_age', '2025', 'a60');
      // +4 percentage points, but a relative increase of about 22 %
      return tf(Math.abs(pctChange(a, b) - 4) < 0.05);
    },
    explanation:
      'Der Anteil steigt von 18 % auf 22 %, also um 4 Prozentpunkte. Relativ entspricht das (22 − 18) / 18 ≈ +22,2 %. „Um 4 %“ ist daher falsch.',
    sources: [{ tab: 'lecteurs', block: 'b_age' }],
    whyNot: {
      V: 'Klassische Falle: 4 Prozentpunkte sind nicht 4 %. Relativ ist der Anteil um rund 22 % gestiegen.',
      I: 'Beide Anteile sind im Diagramm angegeben.',
    },
  },
  'n05-06': {
    answer: 'F',
    compute: (q) => tf(sum(q.col('t_budget', 'realise')) < sum(q.col('t_budget', 'prevu'))),
    explanation:
      'Geplant: 42 000 + 9 000 + 6 000 + 8 000 + 5 000 = 70 000 €. Ist: 44 100 + 11 700 + 3 900 + 7 200 + 4 600 = 71 500 €. Die Ist-Summe liegt 1 500 € über dem Plan.',
    sources: [{ tab: 'budget', block: 't_budget' }],
    whyNot: {
      V: 'Drei von fünf Posten liegen unter Plan, die Überschreitungen bei Büchern (+2 100 €) und digitalen Ressourcen (+2 700 €) sind aber größer als die Einsparungen (−3 300 €).',
      I: 'Alle Posten sind mit Plan- und Ist-Wert angegeben.',
    },
  },
  'n05-07': {
    answer: 'I',
    compute: (q) => (q.f('f_acq', 'docs') > 0 && !q.has('t_acq', 'livres', '2025') ? 'I' : 'F'),
    missing: 'Die Zahl der erworbenen Bücher ist nicht getrennt angegeben, nur die Gesamtzahl der Bücher und DVD/CD (2 400).',
    explanation:
      'Bücherkauf 2025: 44 100 €. Wären alle 2 400 erworbenen Medien Bücher, läge der Durchschnitt bei 44 100 / 2 400 ≈ 18,38 €. Da ein unbekannter Teil davon DVD/CD sind, ist die Zahl der Bücher kleiner und der Durchschnittspreis höher – ob über oder unter 20 €, lässt sich nicht bestimmen.',
    sources: [
      { tab: 'budget', block: 't_budget' },
      { tab: 'budget', block: 'f_acq' },
    ],
    whyNot: {
      V: 'Die Rechnung 44 100 / 2 400 ≈ 18,38 € unterstellt, dass alle 2 400 Medien Bücher sind. Das ist nicht der Fall.',
      F: 'Auch ein Preis über 20 € lässt sich nicht nachweisen, solange die Zahl der Bücher unbekannt ist.',
    },
  },
  'n05-08': {
    answer: 'V',
    compute: (q) => tf(share(sum(q.col('t_anim', 'participants')), sum(q.col('t_anim', 'places'))) > 75),
    explanation:
      'Plätze: 600 + 216 + 300 + 360 = 1 476. Teilnehmende: 570 + 162 + 228 + 180 = 1 140. 1 140 / 1 476 ≈ 77,2 %. Das ist mehr als drei Viertel (75 %).',
    sources: [{ tab: 'animations', block: 't_anim' }],
    whyNot: {
      F: 'Wer den einfachen Mittelwert der vier Auslastungsquoten bildet ((95 + 75 + 76 + 50) / 4 = 74 %), gewichtet die Formate falsch. Maßgeblich ist das Verhältnis aller besetzten zu allen angebotenen Plätzen.',
      I: 'Plätze und Teilnehmende sind für alle Formate angegeben.',
    },
  },
  'n05-09': {
    answer: 'F',
    compute: (q) => tf(sum(q.row('l_mois', '2025')) / 12 > 6200),
    explanation:
      'Ausleihen 2025: 12 400 + 12 900 + 11 800 + 10 200 + 12 600 + 12 200 = 72 100 (stimmt mit der Summe der Kategorien überein). 72 100 / 12 ≈ 6 008 pro Monat. Das ist weniger als 6 200.',
    sources: [
      { tab: 'periodes', block: 'l_mois' },
      { tab: 'prets', block: 't_prets' },
    ],
    whyNot: {
      V: 'Die Werte im Liniendiagramm umfassen jeweils zwei Monate. Der Monatsdurchschnitt beträgt nur rund 6 008.',
      I: 'Die Jahressumme ist aus beiden Registern bekannt; durch 12 geteilt ergibt sie den Monatsdurchschnitt.',
    },
  },
  'n05-10': {
    answer: 'I',
    compute: (q) => (q.has('l_mois', '2025', 'ja') && !q.has('l_mois', 'bd', 'ja') ? 'I' : 'F'),
    missing: 'Die Ausleihen nach Zweimonatszeitraum sind nur für alle Kategorien zusammen angegeben, nicht für Comics.',
    explanation:
      'Insgesamt gab es 2025 im Juli–August weniger Ausleihen (10 200) als im Januar–Februar (12 400). Für Comics gibt es nur die Jahreszahl (8 600). Wie sie sich auf die Zeiträume verteilt, ist unbekannt.',
    sources: [
      { tab: 'periodes', block: 'l_mois' },
      { tab: 'prets', block: 't_prets' },
    ],
    whyNot: {
      V: 'Die Annahme, dass Comics im Sommer stärker gefragt sind, wird durch keine Zahl belegt.',
      F: 'Der Rückgang der Gesamtausleihen im Sommer lässt sich nicht auf eine einzelne Kategorie übertragen.',
    },
  },
};

