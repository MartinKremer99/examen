import { pctChange, ratio, share, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

const CATS = ['adultes', 'jeunes', 'seniors', 'familles'];

export const nkey04: NumKey = {
  'n04-01': {
    answer: 'V',
    compute: (q) => {
      const a = ratio(q.v('t_nrj', 'total', '2024'), q.f('f_ent', 'an2024'));
      const b = ratio(q.v('t_nrj', 'total', '2025'), q.f('f_ent', 'an2025'));
      return tf(pctChange(a, b) < -10);
    },
    explanation:
      '2024: 480 000 € / 141 200 Eintritte ≈ 3,40 € pro Eintritt. 2025: 433 000 € / 146 800 ≈ 2,95 €. Veränderung: 2,95 / 3,40 − 1 ≈ −13,2 %. Der Rückgang beträgt also mehr als 10 %.',
    sources: [
      { tab: 'energie', block: 't_nrj' },
      { tab: 'entrees', block: 'f_ent' },
    ],
    whyNot: {
      F: 'Die Energiekosten allein sinken nur um 9,8 % (480 000 → 433 000). Da gleichzeitig die Eintritte steigen, sinken die Kosten pro Eintritt stärker.',
      I: 'Gesamtkosten und Jahreseintritte stehen in den Registern „Énergie“ und „Entrées“.',
    },
  },
  'n04-02': {
    answer: 'F',
    compute: (q) => {
      const a = share(q.v('b_abo', '2024', 'jeunes'), sum(CATS.map((c) => q.v('b_abo', '2024', c))));
      const b = share(q.v('b_abo', '2025', 'jeunes'), sum(CATS.map((c) => q.v('b_abo', '2025', c))));
      return tf(pctChange(a, b) > 10 || b - a > 10);
    },
    explanation:
      'Summen: 2024 = 820 + 410 + 360 + 240 = 1 830; 2025 = 860 + 470 + 352 + 275 = 1 957. Anteil Jugendliche: 410 / 1 830 ≈ 22,4 % → 470 / 1 957 ≈ 24,0 %. Das sind +1,6 Prozentpunkte bzw. relativ +7,2 %, also in keiner Lesart mehr als 10 %.',
    sources: [{ tab: 'abonnements', block: 'b_abo' }],
    whyNot: {
      V: 'Falle: Die Zahl der Jugendabonnements steigt um 14,6 % (410 → 470). Da aber auch die Gesamtzahl wächst, steigt der Anteil nur um 7,2 % (1,6 Prozentpunkte).',
      I: 'Alle Kategorien sind im Diagramm angegeben; Anteile lassen sich berechnen.',
    },
  },
  'n04-03': {
    answer: 'I',
    compute: (q) => (q.f('f_prix', 'adultes') > 0 && q.v('b_abo', '2025', 'adultes') > q.v('b_abo', '2024', 'adultes') ? 'I' : 'F'),
    missing: 'Der Preis eines Erwachsenenabonnements ist nur für 2025 angegeben (Tarif seit 1. Januar 2025); der Preis 2024 fehlt.',
    explanation:
      'Die Zahl der Erwachsenenabonnements steigt von 820 auf 860. Die Einnahmen 2025 betragen 860 × 420 € = 361 200 €. Für 2024 ist der Preis unbekannt; da die Tarife zum 1. Januar 2025 neu festgelegt wurden, können die Einnahmen 2024 höher oder niedriger gewesen sein.',
    sources: [
      { tab: 'abonnements', block: 'b_abo' },
      { tab: 'abonnements', block: 'f_prix' },
    ],
    whyNot: {
      V: 'Mehr verkaufte Abonnements bedeuten nicht automatisch höhere Einnahmen, wenn der Preis 2024 höher gewesen sein könnte.',
      F: 'Ein Rückgang lässt sich ohne den Preis 2024 ebenso wenig belegen.',
    },
  },
  'n04-04': {
    answer: 'F',
    compute: (q) => tf(pctChange(sum(q.row('l_ent', '2024')), sum(q.row('l_ent', '2025'))) > 5),
    explanation:
      'Januar bis August 2024: 95 000 Eintritte. 2025: 99 000 Eintritte. (99 000 − 95 000) / 95 000 ≈ +4,2 %. Das ist weniger als 5 %.',
    sources: [{ tab: 'entrees', block: 'l_ent' }],
    whyNot: {
      V: 'Einzelne Monate (z. B. Juli: +7,0 %) liegen über 5 %, der April 2025 liegt aber unter dem Vorjahr; über den gesamten Zeitraum sind es nur +4,2 %.',
      I: 'Alle Monatswerte sind im Diagramm angegeben; die Summen lassen sich berechnen.',
    },
  },
  'n04-05': {
    answer: 'F',
    compute: (q) => {
      const a = q.v('t_nrj', 'gaz', '2024') / q.f('f_conso', 'gaz2024');
      const b = q.v('t_nrj', 'gaz', '2025') / q.f('f_conso', 'gaz2025');
      return tf(pctChange(a, b) < -10);
    },
    explanation:
      '2024: 205 000 € / 2 050 MWh = 100 €/MWh. 2025: 171 000 € / 1 800 MWh = 95 €/MWh. Rückgang: −5 %. Der größte Teil der Kostensenkung geht auf den geringeren Verbrauch zurück.',
    sources: [
      { tab: 'energie', block: 't_nrj' },
      { tab: 'energie', block: 'f_conso' },
    ],
    whyNot: {
      V: 'Die Gaskosten insgesamt sinken um 16,6 %, der Preis pro MWh aber nur um 5 %; der Rest ist auf den geringeren Verbrauch zurückzuführen.',
      I: 'Kosten und Verbrauch sind für beide Jahre angegeben.',
    },
  },
  'n04-06': {
    answer: 'V',
    compute: (q) =>
      tf(ratio(q.f('f_ouv', 'h2025'), q.v('t_pers', 'mn', '2025')) < ratio(q.f('f_ouv', 'h2024'), q.v('t_pers', 'mn', '2024'))),
    explanation:
      '2024: 78 Std. / 9,0 VZÄ ≈ 8,67 Std. pro VZÄ. 2025: 84 Std. / 10,0 VZÄ = 8,40 Std. pro VZÄ. Die Öffnungszeiten steigen um 7,7 %, der Bademeisterbestand um 11,1 %; das Verhältnis sinkt.',
    sources: [
      { tab: 'personnel', block: 'f_ouv' },
      { tab: 'personnel', block: 't_pers' },
    ],
    whyNot: {
      F: 'Die Öffnungszeiten steigen zwar, der Bademeisterbestand wächst aber prozentual stärker.',
      I: 'Öffnungsstunden und VZÄ der Bademeister sind für beide Jahre angegeben.',
    },
  },
  'n04-07': {
    answer: 'I',
    compute: (q) => (q.f('f_salle', 'dispo2025') > 0 && !q.has('t_salle', 'dispo', '2024') ? 'I' : 'F'),
    missing: 'Die verfügbaren Stunden der Halle sind nur für 2025 angegeben; für 2024 fehlt der Wert (und seit 2025 gibt es zusätzliche Öffnungszeiten am Sonntag).',
    explanation:
      '2025: 4 200 / 4 800 = 87,5 %. Für 2024 sind nur die gebuchten Stunden (4 000) bekannt, nicht die verfügbaren. Da die Halle seit 2025 länger geöffnet ist, kann die Auslastung 2024 höher oder niedriger gewesen sein.',
    sources: [
      { tab: 'salle', block: 't_salle' },
      { tab: 'salle', block: 'f_salle' },
    ],
    whyNot: {
      V: 'Mehr gebuchte Stunden bedeuten keine höhere Auslastung, wenn auch das Angebot gewachsen ist.',
      F: 'Ein Rückgang lässt sich ohne die verfügbaren Stunden 2024 ebenso wenig belegen.',
    },
  },
  'n04-08': {
    answer: 'I',
    compute: (q) => (q.v('t_nrj', 'elec', '2025') < q.v('t_nrj', 'elec', '2024') && !q.has('t_nrj', 'elec_mwh', '2025') ? 'I' : 'F'),
    missing: 'Für Strom werden nur die Kosten angegeben, nicht der Verbrauch (MWh); Verbrauchsdaten gibt es nur für Erdgas.',
    explanation:
      'Die Stromkosten sinken von 214 000 € auf 198 500 €. Ob dies auf geringeren Verbrauch oder auf einen niedrigeren Preis zurückgeht, lässt sich nicht feststellen.',
    sources: [
      { tab: 'energie', block: 't_nrj' },
      { tab: 'energie', block: 'f_conso' },
    ],
    whyNot: {
      V: 'Sinkende Kosten belegen keinen sinkenden Verbrauch; der Strompreis könnte gefallen sein.',
      F: 'Ein gestiegener Verbrauch lässt sich ebenso wenig belegen.',
    },
  },
  'n04-09': {
    answer: 'V',
    compute: (q) =>
      tf(
        pctChange(q.v('t_obj', 'cours', 'obj'), q.v('t_obj', 'cours', 'real')) > 8 &&
          q.v('t_obj', 'entrees', 'real') < q.v('t_obj', 'entrees', 'obj'),
      ),
    explanation:
      'Schwimmkurse: 2 610 / 2 400 − 1 = +8,75 % (über 8 %). Eintritte: 146 800 < Ziel 150 000 (verfehlt). Beide Teile der Aussage treffen zu.',
    sources: [{ tab: 'objectifs', block: 't_obj' }],
    whyNot: {
      F: 'Die Übererfüllung beträgt 210 Teilnehmende, das sind 8,75 % des Ziels; das Eintrittsziel wurde um 3 200 verfehlt.',
      I: 'Ziel- und Ist-Werte stehen beide in der Tabelle.',
    },
  },
  'n04-10': {
    answer: 'F',
    compute: (q) => tf(share(q.v('t_salle', 'clubs', '2025'), q.f('f_salle', 'dispo2025')) > 50),
    explanation:
      'Vereine 2025: 2 260 Std. von 4 800 verfügbaren Stunden = 47,1 %. Das ist weniger als die Hälfte.',
    sources: [
      { tab: 'salle', block: 't_salle' },
      { tab: 'salle', block: 'f_salle' },
    ],
    whyNot: {
      V: 'Bezogen auf die gebuchten Stunden (4 200) wären es 53,8 %. Die Aussage bezieht sich aber auf die verfügbaren Stunden (4 800).',
      I: 'Gebuchte und verfügbare Stunden 2025 sind angegeben.',
    },
  },
};
