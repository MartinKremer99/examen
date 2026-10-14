import type { NumSet } from '../types';

const y2 = [
  { key: '2024', label: { fr: '2024', de: '2024' } },
  { key: '2025', label: { fr: '2025', de: '2025' } },
];

export const nset06: NumSet = {
  id: 'n06',
  title: { fr: 'Camping communal de Bourdenbach – saison 2025', de: 'Gemeindecamping Bourdenbach – Saison 2025' },
  themeDe: 'Camping: Übernachtungen, Herkunft, Auslastung, Tarife, Einnahmen und Prognosen',
  tabs: [
    {
      id: 'nuitees',
      title: { fr: 'Nuitées', de: 'Übernachtungen' },
      blocks: [
        {
          t: 'line',
          id: 'l_nuit',
          caption: { fr: 'Nombre de nuitées par mois (saison d’avril à octobre)', de: 'Zahl der Übernachtungen pro Monat (Saison April bis Oktober)' },
          cols: [
            { key: 'avr', label: { fr: 'avr.', de: 'Apr.' } },
            { key: 'mai', label: { fr: 'mai', de: 'Mai' } },
            { key: 'juin', label: { fr: 'juin', de: 'Juni' } },
            { key: 'juil', label: { fr: 'juil.', de: 'Juli' } },
            { key: 'aout', label: { fr: 'août', de: 'Aug.' } },
            { key: 'sept', label: { fr: 'sept.', de: 'Sept.' } },
            { key: 'oct', label: { fr: 'oct.', de: 'Okt.' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [1200, 2600, 4100, 7800, 8900, 3400, 1000] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [1400, 2900, 4300, 8200, 8700, 3900, 1300] },
          ],
        },
        {
          t: 'facts',
          id: 'f_arr',
          caption: { fr: 'Arrivées', de: 'Ankünfte' },
          items: [{ key: 'arrivees2025', label: { fr: 'Arrivées de clients en 2025 (personnes)', de: 'Ankünfte von Gästen 2025 (Personen)' }, value: 8300 }],
        },
        {
          t: 'text',
          text: {
            fr: 'Une nuitée correspond à une personne passant une nuit au camping. Le camping est fermé de novembre à mars.',
            de: 'Eine Übernachtung entspricht einer Person, die eine Nacht auf dem Campingplatz verbringt. Von November bis März ist der Platz geschlossen.',
          },
        },
      ],
    },
    {
      id: 'pays',
      title: { fr: 'Provenance', de: 'Herkunft' },
      blocks: [
        {
          t: 'bar',
          id: 'b_pays',
          caption: { fr: 'Répartition des nuitées par pays de résidence des clients', de: 'Verteilung der Übernachtungen nach Wohnsitzland der Gäste' },
          unit: { fr: 'en % des nuitées de l’année', de: 'in % der Übernachtungen des Jahres' },
          cols: [
            { key: 'nl', label: { fr: 'Pays-Bas', de: 'Niederlande' } },
            { key: 'be', label: { fr: 'Belgique', de: 'Belgien' } },
            { key: 'lu', label: { fr: 'Luxembourg', de: 'Luxemburg' } },
            { key: 'de', label: { fr: 'Allemagne', de: 'Deutschland' } },
            { key: 'fr', label: { fr: 'France', de: 'Frankreich' } },
            { key: 'autres', label: { fr: 'Autres', de: 'Andere' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [40, 23, 12, 14, 5, 6] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [36, 26, 15, 12, 5, 6] },
          ],
        },
      ],
    },
    {
      id: 'capacite',
      title: { fr: 'Capacité', de: 'Kapazität' },
      blocks: [
        {
          t: 'facts',
          id: 'f_cap',
          caption: { fr: 'Capacité d’hébergement (inchangée en 2024 et 2025)', de: 'Beherbergungskapazität (2024 und 2025 unverändert)' },
          items: [
            { key: 'tentes', label: { fr: 'Emplacements pour tentes', de: 'Zeltstellplätze' }, value: 60 },
            { key: 'caravanes', label: { fr: 'Emplacements caravanes et camping-cars', de: 'Stellplätze für Wohnwagen und Wohnmobile' }, value: 45 },
            { key: 'chalets', label: { fr: 'Chalets', de: 'Chalets' }, value: 12 },
            { key: 'jours', label: { fr: 'Jours d’ouverture par saison', de: 'Öffnungstage pro Saison' }, value: 214 },
          ],
        },
        {
          t: 'table',
          id: 't_occ',
          caption: { fr: 'Taux d’occupation moyen sur la saison', de: 'Durchschnittliche Auslastung über die Saison' },
          unit: { fr: 'en %', de: 'in %' },
          cols: y2,
          rows: [
            { key: 'tentes', label: { fr: 'Emplacements pour tentes', de: 'Zeltstellplätze' }, values: [38, 41] },
            { key: 'caravanes', label: { fr: 'Emplacements caravanes et camping-cars', de: 'Stellplätze für Wohnwagen und Wohnmobile' }, values: [52, 55] },
            { key: 'chalets', label: { fr: 'Chalets', de: 'Chalets' }, values: [71, 78] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Taux d’occupation = nuits louées / (nombre d’unités × jours d’ouverture de la saison).',
            de: 'Auslastung = vermietete Nächte / (Zahl der Einheiten × Öffnungstage der Saison).',
          },
        },
      ],
    },
    {
      id: 'tarifs',
      title: { fr: 'Tarifs', de: 'Tarife' },
      blocks: [
        {
          t: 'table',
          id: 't_tarif',
          caption: { fr: 'Tarif de base par unité et par nuit', de: 'Grundtarif pro Einheit und Nacht' },
          unit: { fr: 'en €', de: 'in €' },
          cols: y2,
          rows: [
            { key: 'tente', label: { fr: 'Emplacement pour tente', de: 'Zeltstellplatz' }, values: [14, 15] },
            { key: 'caravane', label: { fr: 'Emplacement caravane / camping-car', de: 'Stellplatz Wohnwagen / Wohnmobil' }, values: [22, 24] },
            { key: 'chalet', label: { fr: 'Chalet', de: 'Chalet' }, values: [85, 90] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Le tarif de base s’applique par unité louée et par nuit, quel que soit le nombre d’occupants dans la limite de la capacité.',
            de: 'Der Grundtarif gilt pro gemieteter Einheit und Nacht, unabhängig von der Zahl der Personen im Rahmen der Kapazität.',
          },
        },
      ],
    },
    {
      id: 'recettes',
      title: { fr: 'Recettes 2025', de: 'Einnahmen 2025' },
      blocks: [
        {
          t: 'table',
          id: 't_rec',
          caption: { fr: 'Recettes du camping 2025 : prévision et réalisé', de: 'Einnahmen des Campingplatzes 2025: Prognose und Ist' },
          unit: { fr: 'en €', de: 'in €' },
          cols: [
            { key: 'prevu', label: { fr: 'Prévu', de: 'Prognose' } },
            { key: 'realise', label: { fr: 'Réalisé', de: 'Ist' } },
          ],
          rows: [
            { key: 'tentes', label: { fr: 'Emplacements pour tentes', de: 'Zeltstellplätze' }, values: [75000, 79000] },
            { key: 'caravanes', label: { fr: 'Emplacements caravanes et camping-cars', de: 'Stellplätze für Wohnwagen und Wohnmobile' }, values: [132000, 127100] },
            { key: 'chalets', label: { fr: 'Chalets', de: 'Chalets' }, values: [170000, 180300] },
            { key: 'services', label: { fr: 'Services annexes', de: 'Nebenleistungen' }, values: [30000, 27600] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les services annexes comprennent l’électricité, les douches et la laverie.',
            de: 'Die Nebenleistungen umfassen Strom, Duschen und Waschsalon.',
          },
        },
      ],
    },
    {
      id: 'previsions',
      title: { fr: 'Prévisions 2026', de: 'Prognosen 2026' },
      blocks: [
        {
          t: 'facts',
          id: 'f_prev',
          caption: { fr: 'Prévisions pour la saison 2026', de: 'Prognosen für die Saison 2026' },
          items: [
            { key: 'nuitees2026', label: { fr: 'Nuitées prévues', de: 'Erwartete Übernachtungen' }, value: 32000 },
            { key: 'recettes2026', label: { fr: 'Recettes totales prévues', de: 'Erwartete Gesamteinnahmen' }, value: 430000, unit: { fr: '€', de: '€' } },
            { key: 'chalets2026', label: { fr: 'Nombre de chalets (après extension)', de: 'Zahl der Chalets (nach Erweiterung)' }, value: 16 },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les nouveaux chalets seront disponibles dès l’ouverture de la saison 2026.',
            de: 'Die neuen Chalets stehen ab Saisonbeginn 2026 zur Verfügung.',
          },
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n06-01',
      text: {
        fr: 'En 2025, août est le seul mois de la saison où le nombre de nuitées a été inférieur à celui du même mois de 2024.',
        de: '2025 ist der August der einzige Monat der Saison, in dem die Zahl der Übernachtungen unter der des gleichen Monats 2024 lag.',
      },
      tags: ['chart-reading', 'compare'],
      difficulty: 1,
    },
    {
      id: 'n06-02',
      text: {
        fr: 'Entre 2024 et 2025, le taux d’occupation des chalets a augmenté de 7 %.',
        de: 'Zwischen 2024 und 2025 ist die Auslastung der Chalets um 7 % gestiegen.',
      },
      tags: ['pp-vs-pct'],
      difficulty: 2,
    },
    {
      id: 'n06-03',
      text: {
        fr: 'Entre 2024 et 2025, le nombre de nuitées de clients résidant aux Pays-Bas a diminué de 10 %.',
        de: 'Zwischen 2024 und 2025 ist die Zahl der Übernachtungen von Gästen mit Wohnsitz in den Niederlanden um 10 % gesunken.',
      },
      tags: ['multi-table', 'pct-change', 'pp-vs-pct'],
      difficulty: 3,
    },
    {
      id: 'n06-04',
      text: {
        fr: 'En août 2025, le taux d’occupation des emplacements pour tentes a dépassé 80 %.',
        de: 'Im August 2025 lag die Auslastung der Zeltstellplätze über 80 %.',
      },
      tags: ['missing-info', 'range'],
      difficulty: 2,
    },
    {
      id: 'n06-05',
      text: {
        fr: 'En 2025, plus de 9 chalets ont été occupés en moyenne par nuit d’ouverture.',
        de: '2025 waren pro Öffnungsnacht durchschnittlich mehr als 9 Chalets belegt.',
      },
      tags: ['ratio', 'range'],
      difficulty: 2,
    },
    {
      id: 'n06-06',
      text: {
        fr: 'Si la prévision 2026 se réalise, le nombre de nuitées augmentera de plus de 5 % par rapport à 2025.',
        de: 'Wenn die Prognose für 2026 eintrifft, steigt die Zahl der Übernachtungen gegenüber 2025 um mehr als 5 %.',
      },
      tags: ['forecast-vs-actual', 'pct-change', 'sum-average'],
      difficulty: 2,
    },
    {
      id: 'n06-07',
      text: {
        fr: 'En 2025, les clients résidant aux Pays-Bas ont passé davantage de nuits en chalet que les clients résidant en Belgique.',
        de: '2025 verbrachten Gäste aus den Niederlanden mehr Nächte in Chalets als Gäste aus Belgien.',
      },
      tags: ['missing-info', 'multi-table'],
      difficulty: 2,
    },
    {
      id: 'n06-08',
      text: {
        fr: 'En 2025, c’est pour les chalets que l’écart entre recettes réalisées et recettes prévues a été le plus important en valeur absolue.',
        de: '2025 war die Abweichung zwischen tatsächlichen und erwarteten Einnahmen betragsmäßig bei den Chalets am größten.',
      },
      tags: ['forecast-vs-actual', 'compare'],
      difficulty: 2,
    },
    {
      id: 'n06-09',
      text: {
        fr: 'La durée moyenne de séjour des clients a augmenté entre 2024 et 2025.',
        de: 'Die durchschnittliche Aufenthaltsdauer der Gäste ist zwischen 2024 und 2025 gestiegen.',
      },
      tags: ['missing-info', 'ratio'],
      difficulty: 3,
    },
    {
      id: 'n06-10',
      text: {
        fr: 'Entre 2024 et 2025, c’est le tarif du chalet qui a le plus augmenté en pourcentage.',
        de: 'Zwischen 2024 und 2025 ist der Chalet-Tarif prozentual am stärksten gestiegen.',
      },
      tags: ['pct-change', 'compare'],
      difficulty: 2,
    },
  ],
};
