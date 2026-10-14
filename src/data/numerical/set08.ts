import type { NumSet } from '../types';

const lines = {
  l1: { fr: 'Ligne L1 (Gare – Centre)', de: 'Linie L1 (Bahnhof – Zentrum)' },
  l2: { fr: 'Ligne L2 (Zone d’activités)', de: 'Linie L2 (Gewerbegebiet)' },
  l3: { fr: 'Ligne L3 (Villages)', de: 'Linie L3 (Ortschaften)' },
};

const y2 = [
  { key: '2024', label: { fr: '2024', de: '2024' } },
  { key: '2025', label: { fr: '2025', de: '2025' } },
];

export const nset08: NumSet = {
  id: 'n08',
  title: { fr: 'Mobilité à Bëschdorf – navette communale et parkings', de: 'Mobilität in Bëschdorf – Gemeindeshuttle und Parkplätze' },
  themeDe: 'Mobilität: Shuttle-Fahrgäste, Pünktlichkeit, Betriebskosten, Parkplatzauslastung und Prognosen',
  tabs: [
    {
      id: 'lignes',
      title: { fr: 'Fréquentation', de: 'Fahrgastzahlen' },
      blocks: [
        {
          t: 'table',
          id: 't_lignes',
          caption: { fr: 'Nombre annuel de passagers de la navette par ligne', de: 'Jährliche Fahrgastzahl des Shuttles nach Linie' },
          cols: y2,
          rows: [
            { key: 'l1', label: lines.l1, values: [152000, 168000] },
            { key: 'l2', label: lines.l2, values: [64000, 71000] },
            { key: 'l3', label: lines.l3, values: [23000, 21500] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Chaque montée dans un véhicule est comptée comme un passager. La navette est gratuite pour tous les usagers.',
            de: 'Jeder Einstieg in ein Fahrzeug wird als ein Fahrgast gezählt. Das Shuttle ist für alle Nutzer kostenlos.',
          },
        },
      ],
    },
    {
      id: 'semaine',
      title: { fr: 'Jours de semaine', de: 'Wochentage' },
      blocks: [
        {
          t: 'bar',
          id: 'b_jours',
          caption: {
            fr: 'Nombre moyen de passagers par jour en 2025, selon le jour de la semaine',
            de: 'Durchschnittliche Fahrgastzahl pro Tag 2025, nach Wochentag',
          },
          cols: [
            { key: 'lun', label: { fr: 'lundi', de: 'Montag' } },
            { key: 'mar', label: { fr: 'mardi', de: 'Dienstag' } },
            { key: 'mer', label: { fr: 'mercredi', de: 'Mittwoch' } },
            { key: 'jeu', label: { fr: 'jeudi', de: 'Donnerstag' } },
            { key: 'ven', label: { fr: 'vendredi', de: 'Freitag' } },
            { key: 'sam', label: { fr: 'samedi', de: 'Samstag' } },
          ],
          rows: [
            { key: 'l1', label: { fr: 'L1', de: 'L1' }, values: [620, 600, 560, 600, 640, 274] },
            { key: 'l2', label: { fr: 'L2', de: 'L2' }, values: [300, 290, 270, 290, 242, 0] },
            { key: 'l3', label: { fr: 'L3', de: 'L3' }, values: [70, 75, 85, 70, 72, 50] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'La navette ne circule pas le dimanche. La ligne L2 ne circule pas le samedi. Le samedi, les lignes L1 et L3 circulent avec une fréquence réduite.',
            de: 'Sonntags fährt das Shuttle nicht. Die Linie L2 fährt samstags nicht. Samstags fahren die Linien L1 und L3 in einem verringerten Takt.',
          },
        },
      ],
    },
    {
      id: 'ponctualite',
      title: { fr: 'Ponctualité', de: 'Pünktlichkeit' },
      blocks: [
        {
          t: 'line',
          id: 'l_ponct',
          caption: {
            fr: 'Ponctualité de la navette par trimestre (toutes lignes confondues)',
            de: 'Pünktlichkeit des Shuttles pro Quartal (alle Linien zusammen)',
          },
          unit: { fr: 'en % des passages à l’arrêt', de: 'in % der Haltestellendurchfahrten' },
          decimals: 1,
          cols: [
            { key: 't1', label: { fr: '1er trim.', de: '1. Quartal' } },
            { key: 't2', label: { fr: '2e trim.', de: '2. Quartal' } },
            { key: 't3', label: { fr: '3e trim.', de: '3. Quartal' } },
            { key: 't4', label: { fr: '4e trim.', de: '4. Quartal' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [91.5, 93.0, 94.2, 88.6] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [89.0, 92.4, 95.1, 86.5] },
          ],
        },
        {
          t: 'facts',
          id: 'f_ponct',
          items: [
            {
              key: 'objectif',
              label: { fr: 'Objectif de ponctualité (au moins)', de: 'Pünktlichkeitsziel (mindestens)' },
              value: 92,
              unit: { fr: '%', de: '%' },
            },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Un passage est considéré comme ponctuel s’il a lieu au plus tard trois minutes après l’heure prévue.',
            de: 'Eine Durchfahrt gilt als pünktlich, wenn sie höchstens drei Minuten nach der planmäßigen Zeit erfolgt.',
          },
        },
      ],
    },
    {
      id: 'couts',
      title: { fr: 'Coûts', de: 'Kosten' },
      blocks: [
        {
          t: 'table',
          id: 't_cout',
          caption: { fr: 'Coût d’exploitation annuel par ligne', de: 'Jährliche Betriebskosten nach Linie' },
          unit: { fr: 'en €', de: 'in €' },
          cols: y2,
          rows: [
            { key: 'l1', label: lines.l1, values: [410000, 436800] },
            { key: 'l2', label: lines.l2, values: [230000, 241400] },
            { key: 'l3', label: lines.l3, values: [150000, 156950] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Le coût d’exploitation comprend le personnel de conduite, le carburant, l’entretien et l’amortissement des véhicules.',
            de: 'Die Betriebskosten umfassen Fahrpersonal, Kraftstoff, Wartung und Abschreibung der Fahrzeuge.',
          },
        },
      ],
    },
    {
      id: 'parkings',
      title: { fr: 'Parkings', de: 'Parkplätze' },
      blocks: [
        {
          t: 'facts',
          id: 'f_park',
          caption: { fr: 'Capacité des parkings communaux (places)', de: 'Kapazität der Gemeindeparkplätze (Stellplätze)' },
          items: [
            { key: 'pr_gare', label: { fr: 'P+R Gare', de: 'P+R Bahnhof' }, value: 300 },
            { key: 'centre', label: { fr: 'Parking du Centre', de: 'Parkplatz Zentrum' }, value: 150 },
            { key: 'piscine', label: { fr: 'Parking de la Piscine', de: 'Parkplatz Schwimmbad' }, value: 90 },
            { key: 'mairie', label: { fr: 'Parking de la Mairie', de: 'Parkplatz Rathaus' }, value: 40 },
          ],
        },
        {
          t: 'bar',
          id: 'b_occ',
          caption: { fr: 'Taux d’occupation moyen des parkings', de: 'Durchschnittliche Auslastung der Parkplätze' },
          unit: { fr: 'en % des places', de: 'in % der Stellplätze' },
          cols: [
            { key: 'pr_gare', label: { fr: 'P+R Gare', de: 'P+R Bahnhof' } },
            { key: 'centre', label: { fr: 'Centre', de: 'Zentrum' } },
            { key: 'piscine', label: { fr: 'Piscine', de: 'Schwimmbad' } },
            { key: 'mairie', label: { fr: 'Mairie', de: 'Rathaus' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [78, 88, 46, 95] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [91, 84, 52, 93] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'L’occupation moyenne est mesurée les jours ouvrables, entre 8 h et 19 h. La capacité des parkings n’a pas changé entre 2024 et 2025.',
            de: 'Die durchschnittliche Auslastung wird an Werktagen zwischen 8 und 19 Uhr gemessen. Die Kapazität der Parkplätze hat sich zwischen 2024 und 2025 nicht verändert.',
          },
        },
      ],
    },
    {
      id: 'previsions',
      title: { fr: 'Prévisions', de: 'Prognosen' },
      blocks: [
        {
          t: 'table',
          id: 't_prev',
          caption: { fr: 'Prévisions de fréquentation de la navette (passagers par an)', de: 'Prognosen der Fahrgastzahlen des Shuttles (Fahrgäste pro Jahr)' },
          cols: [
            { key: 'prev2025', label: { fr: 'Prévision 2025', de: 'Prognose 2025' } },
            { key: 'prev2026', label: { fr: 'Prévision 2026', de: 'Prognose 2026' } },
          ],
          rows: [
            { key: 'l1', label: lines.l1, values: [160000, 175000] },
            { key: 'l2', label: lines.l2, values: [75000, 78000] },
            { key: 'l3', label: lines.l3, values: [25000, 22000] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les prévisions 2025 ont été établies fin 2024 ; les prévisions 2026 tiennent compte des résultats de 2025.',
            de: 'Die Prognosen 2025 wurden Ende 2024 erstellt; die Prognosen 2026 berücksichtigen die Ergebnisse von 2025.',
          },
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n08-01',
      text: {
        fr: 'En 2025, la ligne L1 est la seule ligne dont la fréquentation a dépassé la prévision.',
        de: '2025 ist die Linie L1 die einzige Linie, deren Fahrgastzahl die Prognose übertroffen hat.',
      },
      tags: ['forecast-vs-actual', 'multi-table'],
      difficulty: 1,
    },
    {
      id: 'n08-02',
      text: {
        fr: 'En 2025, pour chacune des trois lignes, le mercredi est le jour le moins fréquenté du lundi au vendredi.',
        de: '2025 ist bei jeder der drei Linien der Mittwoch der Tag mit den wenigsten Fahrgästen von Montag bis Freitag.',
      },
      tags: ['chart-reading', 'compare'],
      difficulty: 2,
    },
    {
      id: 'n08-03',
      text: {
        fr: 'En 2025, la ligne L1 a été plus ponctuelle que la ligne L3.',
        de: '2025 war die Linie L1 pünktlicher als die Linie L3.',
      },
      tags: ['missing-info', 'chart-reading'],
      difficulty: 1,
    },
    {
      id: 'n08-04',
      text: {
        fr: 'En 2025, le coût d’exploitation par passager de la ligne L3 était plus de deux fois supérieur à celui de la ligne L2.',
        de: '2025 waren die Betriebskosten pro Fahrgast der Linie L3 mehr als doppelt so hoch wie die der Linie L2.',
      },
      tags: ['ratio', 'multi-table'],
      difficulty: 2,
    },
    {
      id: 'n08-05',
      text: {
        fr: 'Entre le 3e et le 4e trimestre 2025, la ponctualité a reculé de plus de 9 points de pourcentage.',
        de: 'Zwischen dem 3. und dem 4. Quartal 2025 ist die Pünktlichkeit um mehr als 9 Prozentpunkte gesunken.',
      },
      tags: ['pp-vs-pct', 'chart-reading'],
      difficulty: 3,
    },
    {
      id: 'n08-06',
      text: {
        fr: 'En 2025, le parking du Centre offrait en moyenne davantage de places libres que le P+R Gare.',
        de: '2025 bot der Parkplatz Zentrum im Durchschnitt mehr freie Stellplätze als das P+R Bahnhof.',
      },
      tags: ['ratio', 'compare', 'chart-reading'],
      difficulty: 3,
    },
    {
      id: 'n08-07',
      text: {
        fr: 'En 2025, sur la ligne L1, le nombre moyen de passagers par course était plus élevé le lundi que le samedi.',
        de: '2025 war auf der Linie L1 die durchschnittliche Fahrgastzahl pro Fahrt montags höher als samstags.',
      },
      tags: ['missing-info', 'ratio', 'chart-reading'],
      difficulty: 2,
    },
    {
      id: 'n08-08',
      text: {
        fr: 'En 2025, l’objectif de ponctualité a été atteint au cours d’exactement deux trimestres sur quatre.',
        de: '2025 wurde das Pünktlichkeitsziel in genau zwei von vier Quartalen erreicht.',
      },
      tags: ['range', 'chart-reading'],
      difficulty: 1,
    },
    {
      id: 'n08-09',
      text: {
        fr: 'Entre 2024 et 2025, le coût d’exploitation total de la navette a augmenté plus fortement, en pourcentage, que le nombre total de passagers.',
        de: 'Zwischen 2024 und 2025 sind die gesamten Betriebskosten des Shuttles prozentual stärker gestiegen als die Gesamtzahl der Fahrgäste.',
      },
      tags: ['pct-change', 'sum-average', 'multi-table'],
      difficulty: 3,
    },
    {
      id: 'n08-10',
      text: {
        fr: 'En 2025, la majorité des automobilistes stationnés au P+R Gare ont ensuite emprunté la navette.',
        de: '2025 nutzte die Mehrheit der am P+R Bahnhof parkenden Autofahrer anschließend das Shuttle.',
      },
      tags: ['missing-info', 'multi-table'],
      difficulty: 2,
    },
  ],
};
