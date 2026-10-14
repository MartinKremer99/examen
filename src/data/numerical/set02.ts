import type { NumSet } from '../types';

const KEUR = { fr: 'en milliers d’€', de: 'in Tausend €' };

export const nset02: NumSet = {
  id: 'n02',
  title: { fr: 'Commune de Hoscheltrange – budget ordinaire', de: 'Gemeinde Hoscheltrange – ordentlicher Haushalt' },
  themeDe: 'Gemeindehaushalt: Einnahmen, Ausgaben, Personal, Investitionen, Bevölkerung und Schulden',
  tabs: [
    {
      id: 'recettes',
      title: { fr: 'Recettes', de: 'Einnahmen' },
      blocks: [
        {
          t: 'table',
          id: 't_rec',
          caption: { fr: 'Recettes ordinaires par poste', de: 'Ordentliche Einnahmen nach Posten' },
          unit: KEUR,
          cols: [
            { key: 'b2024', label: { fr: 'Budget 2024', de: 'Haushalt 2024' } },
            { key: 'c2024', label: { fr: 'Compte 2024', de: 'Rechnung 2024' } },
            { key: 'b2025', label: { fr: 'Budget 2025', de: 'Haushalt 2025' } },
            { key: 'b2026', label: { fr: 'Budget 2026', de: 'Haushalt 2026' } },
          ],
          rows: [
            { key: 'fdc', label: { fr: 'Fonds de dotation communale', de: 'Gemeindedotationsfonds' }, values: [18200, 18450, 19200, 20100] },
            { key: 'icc', label: { fr: 'Impôt commercial communal', de: 'Gemeindegewerbesteuer' }, values: [6300, 6820, 6500, 7250] },
            { key: 'foncier', label: { fr: 'Impôt foncier', de: 'Grundsteuer' }, values: [1250, 1240, 1260, 1300] },
            { key: 'redev', label: { fr: 'Redevances (eau, déchets)', de: 'Gebühren (Wasser, Abfall)' }, values: [4300, 4380, 4650, 4900] },
            { key: 'autres', label: { fr: 'Autres recettes', de: 'Sonstige Einnahmen' }, values: [1950, 2110, 1990, 2050] },
            { key: 'total', label: { fr: 'Total des recettes ordinaires', de: 'Ordentliche Einnahmen insgesamt' }, values: [32000, 33000, 33600, 35600] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Le compte présente les montants effectivement encaissés ; le budget présente les montants prévus lors du vote du conseil communal.',
            de: 'Die Rechnung zeigt die tatsächlich vereinnahmten Beträge; der Haushalt zeigt die bei der Abstimmung im Gemeinderat vorgesehenen Beträge.',
          },
        },
      ],
    },
    {
      id: 'depenses',
      title: { fr: 'Dépenses', de: 'Ausgaben' },
      blocks: [
        {
          t: 'bar',
          id: 'b_dep',
          caption: { fr: 'Dépenses ordinaires par poste', de: 'Ordentliche Ausgaben nach Posten' },
          unit: KEUR,
          cols: [
            { key: 'personnel', label: { fr: 'Frais de personnel', de: 'Personalkosten' } },
            { key: 'fonct', label: { fr: 'Fonctionnement', de: 'Betrieb' } },
            { key: 'ens', label: { fr: 'Enseignement et accueil', de: 'Schule und Betreuung' } },
            { key: 'transferts', label: { fr: 'Transferts (syndicats)', de: 'Transfers (Syndikate)' } },
            { key: 'interets', label: { fr: 'Intérêts de la dette', de: 'Schuldzinsen' } },
            { key: 'autres', label: { fr: 'Autres', de: 'Sonstige' } },
          ],
          rows: [
            { key: 'c2024', label: { fr: 'Compte 2024', de: 'Rechnung 2024' }, values: [12600, 6900, 5200, 3800, 450, 1650] },
            { key: 'b2025', label: { fr: 'Budget 2025', de: 'Haushalt 2025' }, values: [13400, 7300, 5500, 4000, 420, 1780] },
            { key: 'b2026', label: { fr: 'Budget 2026', de: 'Haushalt 2026' }, values: [14300, 7450, 6000, 4250, 390, 1610] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les transferts comprennent les participations aux syndicats intercommunaux et au service d’incendie et de secours.',
            de: 'Die Transfers umfassen die Beiträge an interkommunale Syndikate und an den Brand- und Rettungsdienst.',
          },
        },
      ],
    },
    {
      id: 'personnel',
      title: { fr: 'Effectifs', de: 'Personal' },
      blocks: [
        {
          t: 'table',
          id: 't_eff',
          caption: {
            fr: 'Effectifs par service, en équivalents temps plein (ETP)',
            de: 'Personalbestand nach Dienststelle, in Vollzeitäquivalenten (VZÄ)',
          },
          unit: { fr: 'en ETP', de: 'in VZÄ' },
          decimals: 1,
          cols: [
            { key: 'c2024', label: { fr: '2024 (réel)', de: '2024 (Ist)' } },
            { key: 'b2025', label: { fr: '2025 (budget)', de: '2025 (Haushalt)' } },
            { key: 'b2026', label: { fr: '2026 (budget)', de: '2026 (Haushalt)' } },
          ],
          rows: [
            { key: 'admin', label: { fr: 'Administration générale', de: 'Allgemeine Verwaltung' }, values: [24.0, 25.0, 26.5] },
            { key: 'tech', label: { fr: 'Service technique', de: 'Technischer Dienst' }, values: [41.5, 42.0, 43.0] },
            { key: 'mr', label: { fr: 'Maison relais', de: 'Maison relais' }, values: [38.0, 41.5, 44.5] },
            { key: 'culture', label: { fr: 'Culture et sport', de: 'Kultur und Sport' }, values: [12.5, 12.5, 13.0] },
            { key: 'total', label: { fr: 'Total', de: 'Insgesamt' }, values: [116.0, 121.0, 127.0] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Un ETP correspond à un poste à temps plein. Plusieurs agents à temps partiel peuvent se partager un même ETP.',
            de: 'Ein VZÄ entspricht einer Vollzeitstelle. Mehrere Teilzeitkräfte können sich ein VZÄ teilen.',
          },
        },
      ],
    },
    {
      id: 'investissements',
      title: { fr: 'Investissements', de: 'Investitionen' },
      blocks: [
        {
          t: 'table',
          id: 't_inv',
          caption: { fr: 'Principaux projets d’investissement', de: 'Wichtigste Investitionsprojekte' },
          unit: KEUR,
          cols: [
            { key: 'cout', label: { fr: 'Coût total estimé', de: 'Geschätzte Gesamtkosten' } },
            { key: 'r2024', label: { fr: 'Réalisé cumulé au 31.12.2024', de: 'Kumuliert verausgabt bis 31.12.2024' } },
            { key: 'b2025', label: { fr: 'Crédit budget 2025', de: 'Mittel Haushalt 2025' } },
            { key: 'b2026', label: { fr: 'Crédit budget 2026', de: 'Mittel Haushalt 2026' } },
          ],
          rows: [
            { key: 'ecole', label: { fr: 'Extension de l’école fondamentale', de: 'Erweiterung der Grundschule' }, values: [9800, 2150, 4300, 3100] },
            { key: 'voirie', label: { fr: 'Réaménagement de la rue Principale', de: 'Umgestaltung der Hauptstraße' }, values: [2400, 650, 1200, 550] },
            { key: 'pv', label: { fr: 'Installation photovoltaïque du hall sportif', de: 'Photovoltaikanlage der Sporthalle' }, values: [860, 0, 120, 740] },
            { key: 'eau', label: { fr: 'Renouvellement du réseau d’eau', de: 'Erneuerung des Wassernetzes' }, values: [3200, 900, 1100, 800] },
          ],
        },
      ],
    },
    {
      id: 'population',
      title: { fr: 'Population', de: 'Bevölkerung' },
      blocks: [
        {
          t: 'line',
          id: 'l_pop',
          caption: { fr: 'Population au 31 décembre', de: 'Einwohnerzahl am 31. Dezember' },
          unit: { fr: 'habitants', de: 'Einwohner' },
          cols: [
            { key: '2020', label: { fr: '2020', de: '2020' } },
            { key: '2021', label: { fr: '2021', de: '2021' } },
            { key: '2022', label: { fr: '2022', de: '2022' } },
            { key: '2023', label: { fr: '2023', de: '2023' } },
            { key: '2024', label: { fr: '2024', de: '2024' } },
            { key: '2025', label: { fr: '2025', de: '2025' } },
          ],
          rows: [{ key: 'pop', label: { fr: 'Habitants', de: 'Einwohner' }, values: [7840, 7960, 8110, 8260, 8390, 8540] }],
        },
        {
          t: 'facts',
          id: 'f_pop',
          caption: { fr: 'Hypothèse retenue pour le budget 2026', de: 'Annahme für den Haushalt 2026' },
          items: [
            {
              key: 'proj2026',
              label: { fr: 'Population projetée au 31.12.2026', de: 'Prognostizierte Einwohnerzahl am 31.12.2026' },
              value: 8720,
              unit: { fr: 'habitants', de: 'Einwohner' },
            },
          ],
        },
      ],
    },
    {
      id: 'dette',
      title: { fr: 'Dette', de: 'Schulden' },
      blocks: [
        {
          t: 'facts',
          id: 'f_dette',
          caption: { fr: 'Encours de la dette communale', de: 'Schuldenstand der Gemeinde' },
          items: [
            { key: 'fin2024', label: { fr: 'Fin 2024 (compte)', de: 'Ende 2024 (Rechnung)' }, value: 8600, unit: { fr: 'milliers d’€', de: 'Tsd. €' } },
            { key: 'fin2025', label: { fr: 'Fin 2025 (prévision)', de: 'Ende 2025 (Prognose)' }, value: 8100, unit: { fr: 'milliers d’€', de: 'Tsd. €' } },
            { key: 'fin2026', label: { fr: 'Fin 2026 (prévision)', de: 'Ende 2026 (Prognose)' }, value: 10200, unit: { fr: 'milliers d’€', de: 'Tsd. €' } },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'La hausse prévue en 2026 s’explique par un nouvel emprunt destiné au financement de l’extension de l’école fondamentale.',
            de: 'Der für 2026 erwartete Anstieg erklärt sich durch ein neues Darlehen zur Finanzierung der Grundschulerweiterung.',
          },
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n02-01',
      text: {
        fr: 'Au compte 2024, le produit de l’impôt commercial communal a dépassé de plus de 5 % le montant inscrit au budget 2024.',
        de: 'In der Rechnung 2024 lag der Ertrag der Gemeindegewerbesteuer um mehr als 5 % über dem im Haushalt 2024 veranschlagten Betrag.',
      },
      tags: ['forecast-vs-actual', 'pct-change'],
      difficulty: 1,
    },
    {
      id: 'n02-02',
      text: {
        fr: 'Le produit de l’impôt foncier par habitant a été plus élevé en 2024 qu’en 2023.',
        de: 'Der Grundsteuerertrag pro Einwohner war 2024 höher als 2023.',
      },
      tags: ['missing-info', 'ratio', 'multi-table'],
      difficulty: 2,
    },
    {
      id: 'n02-03',
      text: {
        fr: 'Entre 2024 et 2026, la part de la Maison relais dans l’effectif total (en ETP) progresse de plus de 5 points de pourcentage.',
        de: 'Zwischen 2024 und 2026 steigt der Anteil der Maison relais am Gesamtpersonal (in VZÄ) um mehr als 5 Prozentpunkte.',
      },
      tags: ['pp-vs-pct', 'ratio'],
      difficulty: 2,
    },
    {
      id: 'n02-04',
      text: {
        fr: 'Entre le compte 2024 et le budget 2026, les frais de personnel sont le poste de dépenses ordinaires qui progresse le plus en pourcentage.',
        de: 'Zwischen der Rechnung 2024 und dem Haushalt 2026 sind die Personalkosten der Ausgabenposten mit dem stärksten prozentualen Anstieg.',
      },
      tags: ['pct-change', 'compare', 'chart-reading'],
      difficulty: 2,
    },
    {
      id: 'n02-05',
      text: {
        fr: 'Au compte 2024 comme aux budgets 2025 et 2026, les recettes ordinaires dépassent chaque fois les dépenses ordinaires d’au moins 1 million d’euros.',
        de: 'Sowohl in der Rechnung 2024 als auch in den Haushalten 2025 und 2026 übersteigen die ordentlichen Einnahmen die ordentlichen Ausgaben jeweils um mindestens 1 Million Euro.',
      },
      tags: ['sum-average', 'multi-table', 'range'],
      difficulty: 3,
    },
    {
      id: 'n02-06',
      text: {
        fr: 'Selon le budget 2025, les frais de personnel de la Maison relais dépassent 4 millions d’euros.',
        de: 'Laut Haushalt 2025 übersteigen die Personalkosten der Maison relais 4 Millionen Euro.',
      },
      tags: ['missing-info', 'multi-table'],
      difficulty: 3,
    },
    {
      id: 'n02-07',
      text: {
        fr: 'En rapportant la dette communale à la population (population au 31.12.2024, puis population projetée au 31.12.2026), la dette par habitant augmente de plus de 15 % entre fin 2024 et fin 2026.',
        de: 'Bezieht man die Gemeindeschulden auf die Einwohnerzahl (Stand 31.12.2024 bzw. prognostizierte Einwohnerzahl am 31.12.2026), so steigt die Verschuldung pro Einwohner zwischen Ende 2024 und Ende 2026 um mehr als 15 %.',
      },
      tags: ['ratio', 'multi-table', 'pct-change'],
      difficulty: 3,
    },
    {
      id: 'n02-08',
      text: {
        fr: 'Le service technique emploiera davantage de personnes en 2026 qu’en 2024.',
        de: 'Der technische Dienst wird 2026 mehr Personen beschäftigen als 2024.',
      },
      tags: ['missing-info', 'compare'],
      difficulty: 1,
    },
    {
      id: 'n02-09',
      text: {
        fr: 'En additionnant le réalisé cumulé à fin 2024 et les crédits des budgets 2025 et 2026, le coût total estimé de chacun des quatre projets d’investissement est couvert.',
        de: 'Addiert man die bis Ende 2024 kumuliert verausgabten Beträge und die Mittel der Haushalte 2025 und 2026, so sind die geschätzten Gesamtkosten jedes der vier Investitionsprojekte gedeckt.',
      },
      tags: ['sum-average', 'range'],
      difficulty: 2,
    },
    {
      id: 'n02-10',
      text: {
        fr: 'La population projetée pour 2026 suppose une hausse annuelle plus forte que chacune des hausses annuelles observées entre 2020 et 2025.',
        de: 'Die für 2026 prognostizierte Einwohnerzahl setzt einen stärkeren jährlichen Zuwachs voraus als jeder zwischen 2020 und 2025 beobachtete jährliche Zuwachs.',
      },
      tags: ['chart-reading', 'forecast-vs-actual', 'range'],
      difficulty: 2,
    },
  ],
};
