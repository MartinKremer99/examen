import type { NumSet } from '../types';

const quarters = [
  { key: 't1', label: { fr: '1er trim.', de: '1. Quartal' } },
  { key: 't2', label: { fr: '2e trim.', de: '2. Quartal' } },
  { key: 't3', label: { fr: '3e trim.', de: '3. Quartal' } },
  { key: 't4', label: { fr: '4e trim.', de: '4. Quartal' } },
];

const types = {
  voirie: { fr: 'Voirie', de: 'Straßen und Wege' },
  eclairage: { fr: 'Éclairage public', de: 'Öffentliche Beleuchtung' },
  verts: { fr: 'Espaces verts', de: 'Grünflächen' },
  batiments: { fr: 'Bâtiments communaux', de: 'Gemeindegebäude' },
  eau: { fr: 'Eau et canalisations', de: 'Wasser und Kanalisation' },
  proprete: { fr: 'Propreté (dépôts sauvages)', de: 'Sauberkeit (wilde Müllablagerungen)' },
};

export const nset07: NumSet = {
  id: 'n07',
  title: { fr: 'Service technique communal de Steinbrécken – bilan 2025', de: 'Technischer Dienst der Gemeinde Steinbrécken – Bilanz 2025' },
  themeDe: 'Technischer Dienst: Einsätze, Bearbeitungsfristen, Personal, Fahrzeuge und Kosten',
  tabs: [
    {
      id: 'interventions',
      title: { fr: 'Interventions', de: 'Einsätze' },
      blocks: [
        {
          t: 'table',
          id: 't_int',
          caption: { fr: 'Interventions clôturées en 2025 par type et par trimestre', de: 'Im Jahr 2025 abgeschlossene Einsätze nach Art und Quartal' },
          cols: quarters,
          rows: [
            { key: 'voirie', label: types.voirie, values: [84, 62, 58, 96] },
            { key: 'eclairage', label: types.eclairage, values: [45, 22, 18, 55] },
            { key: 'verts', label: types.verts, values: [30, 88, 95, 47] },
            { key: 'batiments', label: types.batiments, values: [52, 48, 40, 60] },
            { key: 'eau', label: types.eau, values: [28, 25, 31, 36] },
            { key: 'proprete', label: types.proprete, values: [40, 55, 62, 43] },
          ],
        },
        {
          t: 'bar',
          id: 'b_evol',
          caption: { fr: 'Nombre annuel d’interventions par type', de: 'Jährliche Zahl der Einsätze nach Art' },
          cols: [
            { key: 'voirie', label: types.voirie },
            { key: 'eclairage', label: types.eclairage },
            { key: 'verts', label: types.verts },
            { key: 'batiments', label: types.batiments },
            { key: 'eau', label: types.eau },
            { key: 'proprete', label: types.proprete },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [270, 150, 240, 210, 95, 160] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [300, 140, 260, 200, 120, 200] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Chaque intervention est comptée une seule fois, dans le trimestre au cours duquel elle a été clôturée.',
            de: 'Jeder Einsatz wird nur einmal gezählt, und zwar in dem Quartal, in dem er abgeschlossen wurde.',
          },
        },
      ],
    },
    {
      id: 'delais',
      title: { fr: 'Délais', de: 'Fristen' },
      blocks: [
        {
          t: 'line',
          id: 'l_delai',
          caption: {
            fr: 'Délai moyen de traitement par trimestre, tous types d’interventions confondus',
            de: 'Durchschnittliche Bearbeitungsdauer pro Quartal, alle Einsatzarten zusammen',
          },
          unit: { fr: 'en jours', de: 'in Tagen' },
          decimals: 1,
          cols: quarters,
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [6.8, 5.9, 6.4, 7.5] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [6.2, 5.1, 5.6, 7.9] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Le délai de traitement est mesuré en jours calendaires entre le signalement et la clôture de l’intervention.',
            de: 'Die Bearbeitungsdauer wird in Kalendertagen zwischen Meldung und Abschluss des Einsatzes gemessen.',
          },
        },
      ],
    },
    {
      id: 'objectifs',
      title: { fr: 'Objectifs', de: 'Zielvorgaben' },
      blocks: [
        {
          t: 'table',
          id: 't_obj',
          caption: { fr: 'Délai objectif et délai moyen réalisé en 2025, par type', de: 'Zielfrist und tatsächliche durchschnittliche Dauer 2025, nach Art' },
          unit: { fr: 'en jours', de: 'in Tagen' },
          decimals: 1,
          cols: [
            { key: 'obj', label: { fr: 'Délai objectif', de: 'Zielfrist' } },
            { key: 'reel', label: { fr: 'Délai moyen 2025', de: 'Durchschnittliche Dauer 2025' } },
          ],
          rows: [
            { key: 'voirie', label: types.voirie, values: [7, 6.8] },
            { key: 'eclairage', label: types.eclairage, values: [5, 5.8] },
            { key: 'verts', label: types.verts, values: [10, 7.5] },
            { key: 'batiments', label: types.batiments, values: [8, 9.0] },
            { key: 'eau', label: types.eau, values: [2, 1.6] },
            { key: 'proprete', label: types.proprete, values: [3, 4.1] },
          ],
        },
        {
          t: 'table',
          id: 't_part',
          caption: { fr: 'Part des interventions clôturées dans le délai objectif', de: 'Anteil der innerhalb der Zielfrist abgeschlossenen Einsätze' },
          unit: { fr: 'en %', de: 'in %' },
          decimals: 1,
          cols: [
            { key: '2024', label: { fr: '2024', de: '2024' } },
            { key: '2025', label: { fr: '2025', de: '2025' } },
          ],
          rows: [
            { key: 'voirie', label: types.voirie, values: [74, 78] },
            { key: 'eclairage', label: types.eclairage, values: [69, 64] },
            { key: 'verts', label: types.verts, values: [82, 85] },
            { key: 'batiments', label: types.batiments, values: [70, 71] },
            { key: 'eau', label: types.eau, values: [90, 92] },
            { key: 'proprete', label: types.proprete, values: [50, 58] },
          ],
        },
      ],
    },
    {
      id: 'personnel',
      title: { fr: 'Personnel', de: 'Personal' },
      blocks: [
        {
          t: 'table',
          id: 't_pers',
          caption: { fr: 'Effectifs et heures supplémentaires par équipe', de: 'Personalbestand und Überstunden nach Team' },
          cols: [
            { key: 'agents', label: { fr: 'Agents 2025 (équivalents temps plein)', de: 'Mitarbeitende 2025 (Vollzeitäquivalente)' } },
            { key: 'h2024', label: { fr: 'Heures supplémentaires 2024', de: 'Überstunden 2024' } },
            { key: 'h2025', label: { fr: 'Heures supplémentaires 2025', de: 'Überstunden 2025' } },
          ],
          rows: [
            { key: 'voirie', label: { fr: 'Voirie et propreté', de: 'Straßen und Sauberkeit' }, values: [14, 1260, 1540] },
            { key: 'verts', label: { fr: 'Espaces verts', de: 'Grünflächen' }, values: [9, 720, 810] },
            { key: 'batiments', label: { fr: 'Bâtiments et éclairage', de: 'Gebäude und Beleuchtung' }, values: [8, 640, 560] },
            { key: 'eau', label: { fr: 'Eau et canalisations', de: 'Wasser und Kanalisation' }, values: [4, 380, 470] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les heures supplémentaires sont exprimées en heures. Les effectifs n’ont pas changé entre 2024 et 2025.',
            de: 'Die Überstunden sind in Stunden angegeben. Der Personalbestand hat sich zwischen 2024 und 2025 nicht verändert.',
          },
        },
      ],
    },
    {
      id: 'vehicules',
      title: { fr: 'Véhicules', de: 'Fahrzeuge' },
      blocks: [
        {
          t: 'table',
          id: 't_veh',
          caption: { fr: 'Parc de véhicules en 2025', de: 'Fuhrpark 2025' },
          cols: [
            { key: 'nb', label: { fr: 'Nombre', de: 'Anzahl' } },
            { key: 'km', label: { fr: 'Kilomètres parcourus (total)', de: 'Gefahrene Kilometer (gesamt)' } },
            { key: 'entretien', label: { fr: 'Coût d’entretien (total, en €)', de: 'Wartungskosten (gesamt, in €)' } },
          ],
          rows: [
            { key: 'camionnettes', label: { fr: 'Camionnettes', de: 'Kleintransporter' }, values: [6, 72000, 14400] },
            { key: 'bennes', label: { fr: 'Camions-bennes', de: 'Kipper-Lkw' }, values: [2, 31000, 18600] },
            { key: 'balayeuse', label: { fr: 'Balayeuse', de: 'Kehrmaschine' }, values: [1, 9500, 7600] },
            { key: 'electriques', label: { fr: 'Véhicules utilitaires électriques', de: 'Elektro-Nutzfahrzeuge' }, values: [3, 27000, 2700] },
          ],
        },
      ],
    },
    {
      id: 'couts',
      title: { fr: 'Coûts 2025', de: 'Kosten 2025' },
      blocks: [
        {
          t: 'table',
          id: 't_couts',
          caption: { fr: 'Dépenses du service technique 2025', de: 'Ausgaben des Technischen Dienstes 2025' },
          unit: { fr: 'en €', de: 'in €' },
          cols: [
            { key: 'prevu', label: { fr: 'Prévu', de: 'Geplant' } },
            { key: 'realise', label: { fr: 'Réalisé', de: 'Ist' } },
          ],
          rows: [
            { key: 'personnel', label: { fr: 'Personnel (hors heures supplémentaires)', de: 'Personal (ohne Überstunden)' }, values: [2050000, 2031000] },
            { key: 'hsupp', label: { fr: 'Heures supplémentaires', de: 'Überstunden' }, values: [126000, 141960] },
            { key: 'carburant', label: { fr: 'Carburant', de: 'Kraftstoff' }, values: [68000, 72500] },
            { key: 'entretien', label: { fr: 'Entretien des véhicules', de: 'Fahrzeugwartung' }, values: [40000, 43300] },
            { key: 'materiaux', label: { fr: 'Matériaux', de: 'Material' }, values: [310000, 287400] },
            { key: 'soustraitance', label: { fr: 'Sous-traitance', de: 'Fremdvergabe' }, values: [180000, 214000] },
          ],
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n07-01',
      text: {
        fr: 'Le coût total des heures supplémentaires a augmenté de plus de 10 % entre 2024 et 2025.',
        de: 'Die Gesamtkosten der Überstunden sind zwischen 2024 und 2025 um mehr als 10 % gestiegen.',
      },
      tags: ['missing-info', 'pct-change', 'multi-table'],
      difficulty: 3,
    },
    {
      id: 'n07-02',
      text: {
        fr: 'Entre 2024 et 2025, le nombre d’interventions « eau et canalisations » a augmenté de plus de 25 %.',
        de: 'Zwischen 2024 und 2025 ist die Zahl der Einsätze „Wasser und Kanalisation“ um mehr als 25 % gestiegen.',
      },
      tags: ['pct-change', 'chart-reading'],
      difficulty: 1,
    },
    {
      id: 'n07-03',
      text: {
        fr: 'En 2025, plus de 100 interventions de propreté ont été clôturées en dehors du délai objectif.',
        de: '2025 wurden mehr als 100 Sauberkeitseinsätze außerhalb der Zielfrist abgeschlossen.',
      },
      tags: ['multi-table', 'ratio'],
      difficulty: 2,
    },
    {
      id: 'n07-04',
      text: {
        fr: 'En 2025, le délai moyen réalisé a respecté le délai objectif pour exactement trois des six types d’interventions.',
        de: '2025 hat die tatsächliche durchschnittliche Dauer bei genau drei der sechs Einsatzarten die Zielfrist eingehalten.',
      },
      tags: ['range', 'compare'],
      difficulty: 2,
    },
    {
      id: 'n07-05',
      text: {
        fr: 'En 2025, le délai moyen de traitement, toutes interventions confondues, était inférieur à 6 jours.',
        de: '2025 lag die durchschnittliche Bearbeitungsdauer über alle Einsätze hinweg unter 6 Tagen.',
      },
      tags: ['sum-average', 'multi-table', 'chart-reading'],
      difficulty: 3,
    },
    {
      id: 'n07-06',
      text: {
        fr: 'La part des interventions de propreté clôturées dans le délai objectif a augmenté de plus de 15 % entre 2024 et 2025.',
        de: 'Der Anteil der innerhalb der Zielfrist abgeschlossenen Sauberkeitseinsätze ist zwischen 2024 und 2025 um mehr als 15 % gestiegen.',
      },
      tags: ['pp-vs-pct', 'pct-change'],
      difficulty: 3,
    },
    {
      id: 'n07-07',
      text: {
        fr: 'En 2025, chacune des camionnettes a parcouru plus de 10 000 km.',
        de: '2025 ist jeder der Kleintransporter mehr als 10 000 km gefahren.',
      },
      tags: ['missing-info', 'sum-average'],
      difficulty: 2,
    },
    {
      id: 'n07-08',
      text: {
        fr: 'En 2025, les dépenses de sous-traitance ont dépassé le montant prévu de plus de 20 %.',
        de: '2025 lagen die Ausgaben für Fremdvergabe um mehr als 20 % über dem geplanten Betrag.',
      },
      tags: ['forecast-vs-actual', 'pct-change'],
      difficulty: 2,
    },
    {
      id: 'n07-09',
      text: {
        fr: 'Au 4e trimestre 2025, le délai moyen des interventions d’éclairage public a dépassé le délai objectif.',
        de: 'Im 4. Quartal 2025 lag die durchschnittliche Dauer der Beleuchtungseinsätze über der Zielfrist.',
      },
      tags: ['missing-info', 'chart-reading'],
      difficulty: 2,
    },
    {
      id: 'n07-10',
      text: {
        fr: 'En 2025, c’est l’équipe « eau et canalisations » qui a effectué le plus d’heures supplémentaires par agent.',
        de: '2025 hat das Team „Wasser und Kanalisation“ die meisten Überstunden pro Mitarbeitendem geleistet.',
      },
      tags: ['ratio', 'compare'],
      difficulty: 2,
    },
  ],
};
