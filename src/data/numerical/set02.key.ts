import { pctChange, ppDiff, share, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

const DEP_POSTES = ['personnel', 'fonct', 'ens', 'transferts', 'interets', 'autres'];

export const nkey02: NumKey = {
  'n02-01': {
    answer: 'V',
    compute: (q) => tf(pctChange(q.v('t_rec', 'icc', 'b2024'), q.v('t_rec', 'icc', 'c2024')) > 5),
    explanation:
      'Gemeindegewerbesteuer: Haushalt 2024 = 6 300 Tsd. €, Rechnung 2024 = 6 820 Tsd. €. (6 820 − 6 300) / 6 300 = 520 / 6 300 ≈ +8,3 %. Das ist mehr als 5 %.',
    sources: [{ tab: 'recettes', block: 't_rec' }],
    whyNot: {
      F: 'Wer die Rechnung 2024 mit dem Haushalt 2025 (6 500) vergleicht, erhält nur +4,9 %. Verlangt ist aber der Vergleich mit dem Haushalt 2024.',
      I: 'Planwert (Haushalt 2024) und Ist-Wert (Rechnung 2024) stehen beide in der Tabelle.',
    },
  },
  'n02-02': {
    answer: 'I',
    compute: (q) => (q.has('t_rec', 'foncier', 'c2024') && !q.has('t_rec', 'foncier', 'c2023') ? 'I' : 'F'),
    missing: 'Der Grundsteuerertrag für 2023 ist nicht angegeben; die Einnahmentabelle beginnt mit dem Haushalt 2024.',
    explanation:
      'Für 2024 lässt sich der Wert berechnen: 1 240 000 € / 8 390 Einwohner ≈ 148 € pro Einwohner. Die Einwohnerzahl 2023 (8 260) ist zwar bekannt, der Grundsteuerertrag 2023 aber nicht. Ein Vergleich ist daher unmöglich.',
    sources: [
      { tab: 'recettes', block: 't_rec' },
      { tab: 'population', block: 'l_pop' },
    ],
    whyNot: {
      V: 'Dass die Einwohnerzahl 2023 niedriger war, sagt nichts über den damaligen Grundsteuerertrag aus.',
      F: 'Auch ein Rückgang lässt sich ohne den Ertrag 2023 nicht belegen.',
    },
  },
  'n02-03': {
    answer: 'F',
    compute: (q) => {
      const a = share(q.v('t_eff', 'mr', 'c2024'), q.v('t_eff', 'total', 'c2024'));
      const b = share(q.v('t_eff', 'mr', 'b2026'), q.v('t_eff', 'total', 'b2026'));
      return tf(ppDiff(a, b) > 5);
    },
    explanation:
      'Anteil 2024: 38,0 / 116,0 ≈ 32,8 %. Anteil 2026: 44,5 / 127,0 ≈ 35,0 %. Der Anteil steigt um rund 2,3 Prozentpunkte, also nicht um mehr als 5 Prozentpunkte.',
    sources: [{ tab: 'personnel', block: 't_eff' }],
    whyNot: {
      V: 'Falle: Die VZÄ der Maison relais steigen zwar um 17,1 % (38,0 → 44,5) und der Anteil relativ um rund 7 %, in Prozentpunkten beträgt der Anstieg aber nur etwa 2,3.',
      I: 'Alle nötigen Werte (Maison relais und Gesamtzahl) stehen in der Tabelle.',
    },
  },
  'n02-04': {
    answer: 'F',
    compute: (q) => {
      const growth = DEP_POSTES.map((p) => pctChange(q.v('b_dep', 'c2024', p), q.v('b_dep', 'b2026', p)));
      const pers = growth[DEP_POSTES.indexOf('personnel')];
      return tf(growth.every((g) => g <= pers));
    },
    explanation:
      'Personal: 12 600 → 14 300 = +13,5 %. Schule und Betreuung: 5 200 → 6 000 = +15,4 %. Transfers: +11,8 %, Betrieb: +8,0 %, Zinsen und Sonstige sinken. Den stärksten prozentualen Anstieg hat „Schule und Betreuung“, nicht das Personal.',
    sources: [{ tab: 'depenses', block: 'b_dep' }],
    whyNot: {
      V: 'Das Personal hat den größten absoluten Anstieg (+1 700 Tsd. €), prozentual liegt aber „Schule und Betreuung“ vorne.',
      I: 'Alle Posten sind für 2024 und 2026 im Diagramm angegeben.',
    },
  },
  'n02-05': {
    answer: 'V',
    compute: (q) => {
      const years = ['c2024', 'b2025', 'b2026'];
      const surplus = years.map((y) => q.v('t_rec', 'total', y) - sum(DEP_POSTES.map((p) => q.v('b_dep', y, p))));
      return tf(surplus.every((s) => s >= 1000));
    },
    explanation:
      'Ausgaben (Summe der Posten): 2024 = 30 600, 2025 = 32 400, 2026 = 34 000 Tsd. €. Einnahmen: 33 000, 33 600, 35 600 Tsd. €. Überschüsse: 2 400, 1 200 und 1 600 Tsd. €. Der kleinste Überschuss (2025: 1,2 Mio. €) liegt noch über 1 Mio. €.',
    sources: [
      { tab: 'recettes', block: 't_rec' },
      { tab: 'depenses', block: 'b_dep' },
    ],
    whyNot: {
      F: 'Der Überschuss schrumpft 2025 deutlich, bleibt aber mit 1 200 Tsd. € über der Schwelle von 1 000 Tsd. €.',
      I: 'Die Ausgabensumme lässt sich aus den Posten im Diagramm berechnen; die Einnahmensumme steht in der Tabelle.',
    },
  },
  'n02-06': {
    answer: 'I',
    compute: (q) => (q.has('b_dep', 'b2025', 'personnel') && q.has('t_eff', 'mr', 'b2025') && !q.has('b_dep', 'b2025', 'mr') ? 'I' : 'F'),
    missing: 'Die Personalkosten sind nur insgesamt angegeben, nicht nach Dienststellen aufgeschlüsselt.',
    explanation:
      'Bekannt sind nur die gesamten Personalkosten 2025 (13 400 Tsd. €) und die VZÄ der Maison relais (41,5 von 121,0). Eine anteilige Rechnung (≈ 4,6 Mio. €) setzte gleiche Kosten pro VZÄ in allen Diensten voraus, was die Daten nicht belegen.',
    sources: [
      { tab: 'depenses', block: 'b_dep' },
      { tab: 'personnel', block: 't_eff' },
    ],
    whyNot: {
      V: 'Die proportionale Hochrechnung (13 400 × 41,5 / 121 ≈ 4 596) ist eine Annahme; die Gehälter unterscheiden sich zwischen den Diensten.',
      F: 'Ebenso wenig lässt sich belegen, dass die Kosten unter 4 Mio. € liegen.',
    },
  },
  'n02-07': {
    answer: 'F',
    compute: (q) => {
      const a = q.f('f_dette', 'fin2024') / q.v('l_pop', 'pop', '2024');
      const b = q.f('f_dette', 'fin2026') / q.f('f_pop', 'proj2026');
      return tf(pctChange(a, b) > 15);
    },
    explanation:
      'Ende 2024: 8 600 000 € / 8 390 Einw. ≈ 1 025 € pro Einwohner. Ende 2026: 10 200 000 € / 8 720 Einw. ≈ 1 170 € pro Einwohner. Anstieg: 1 170 / 1 025 − 1 ≈ +14,1 %, also weniger als 15 %.',
    sources: [
      { tab: 'dette', block: 'f_dette' },
      { tab: 'population', block: 'l_pop' },
      { tab: 'population', block: 'f_pop' },
    ],
    whyNot: {
      V: 'Der Gesamtschuldenstand steigt um 18,6 % (8 600 → 10 200). Pro Einwohner ist der Anstieg wegen der wachsenden Bevölkerung geringer.',
      I: 'Schuldenstände und beide Einwohnerzahlen sind angegeben.',
    },
  },
  'n02-08': {
    answer: 'I',
    compute: (q) => (q.v('t_eff', 'tech', 'b2026') > q.v('t_eff', 'tech', 'c2024') ? 'I' : 'F'),
    missing: 'Die Tabelle nennt nur Vollzeitäquivalente (VZÄ), nicht die Zahl der beschäftigten Personen.',
    explanation:
      'Der technische Dienst wächst von 41,5 auf 43,0 VZÄ. Da sich mehrere Teilzeitkräfte ein VZÄ teilen können, lässt sich daraus nicht ableiten, wie viele Personen 2024 und 2026 beschäftigt sind (z. B. könnten Teilzeitstellen zu Vollzeitstellen aufgestockt werden).',
    sources: [{ tab: 'personnel', block: 't_eff' }],
    whyNot: {
      V: 'Mehr VZÄ bedeuten nicht zwingend mehr Personen.',
      F: 'Ein Rückgang der Personenzahl lässt sich ebenso wenig belegen.',
    },
  },
  'n02-09': {
    answer: 'F',
    compute: (q) => {
      const projets = ['ecole', 'voirie', 'pv', 'eau'];
      return tf(
        projets.every(
          (p) => q.v('t_inv', p, 'r2024') + q.v('t_inv', p, 'b2025') + q.v('t_inv', p, 'b2026') >= q.v('t_inv', p, 'cout'),
        ),
      );
    },
    explanation:
      'Schule: 2 150 + 4 300 + 3 100 = 9 550 < 9 800. Hauptstraße: 650 + 1 200 + 550 = 2 400 = 2 400. Photovoltaik: 0 + 120 + 740 = 860 = 860. Wassernetz: 900 + 1 100 + 800 = 2 800 < 3 200. Zwei Projekte sind nicht vollständig gedeckt.',
    sources: [{ tab: 'investissements', block: 't_inv' }],
    whyNot: {
      V: 'Nur zwei der vier Projekte sind voll gedeckt; bei Schule (−250) und Wassernetz (−400) fehlen Mittel.',
      I: 'Alle Beträge stehen in der Tabelle; die Summen lassen sich berechnen.',
    },
  },
  'n02-10': {
    answer: 'V',
    compute: (q) => {
      const pop = q.row('l_pop', 'pop');
      const last = pop[pop.length - 1];
      const proj = q.f('f_pop', 'proj2026');
      const incs = pop.slice(1).map((x, i) => x - pop[i]);
      const rels = pop.slice(1).map((x, i) => pctChange(pop[i], x));
      return tf(incs.every((d) => proj - last > d) && rels.every((r) => pctChange(last, proj) > r));
    },
    explanation:
      'Beobachtete Zuwächse: +120, +150, +150, +130, +150 Einwohner (höchstens +1,9 %). Prognose 2026: 8 720 − 8 540 = +180 Einwohner (+2,1 %). Der unterstellte Zuwachs ist absolut und relativ größer als jeder bisherige.',
    sources: [
      { tab: 'population', block: 'l_pop' },
      { tab: 'population', block: 'f_pop' },
    ],
    whyNot: {
      F: 'Der größte beobachtete Zuwachs beträgt 150 Einwohner; die Prognose unterstellt 180.',
      I: 'Die Jahreswerte 2020–2025 und die Prognose 2026 sind angegeben.',
    },
  },
};
