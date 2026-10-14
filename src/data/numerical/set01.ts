import type { NumSet } from '../types';

const years = [
  { key: '2023', label: { fr: '2023', de: '2023' } },
  { key: '2024', label: { fr: '2024', de: '2024' } },
  { key: '2025', label: { fr: '2025', de: '2025' } },
];

export const nset01: NumSet = {
  id: 'n01',
  title: { fr: 'Office régional du tourisme – fréquentation des sites', de: 'Regionales Tourismusbüro – Besucherzahlen der Standorte' },
  themeDe: 'Tourismus: Besucherzahlen, Herkunft, Budget und Prognosen',
  tabs: [
    {
      id: 'visiteurs',
      title: { fr: 'Visiteurs', de: 'Besucher' },
      blocks: [
        {
          t: 'table',
          id: 't_vis',
          caption: { fr: 'Nombre annuel de visiteurs par site', de: 'Jährliche Besucherzahl pro Standort' },
          cols: years,
          rows: [
            { key: 'chateau', label: { fr: 'Château de Wiltzerbach', de: 'Schloss Wiltzerbach' }, values: [48200, 51600, 55900] },
            { key: 'musee', label: { fr: 'Musée rural', de: 'Landwirtschaftsmuseum' }, values: [12400, 11800, 13100] },
            { key: 'piscine', label: { fr: 'Piscine en plein air', de: 'Freibad' }, values: [30500, 27900, 31200] },
            { key: 'accueil', label: { fr: "Centre d'accueil", de: 'Besucherzentrum' }, values: [9800, 10400, 10900] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les chiffres du château et du musée correspondent aux entrées enregistrées en billetterie. Ceux de la piscine et du centre d’accueil proviennent de compteurs automatiques.',
            de: 'Die Zahlen von Schloss und Museum entsprechen den an der Kasse erfassten Eintritten. Die Zahlen von Freibad und Besucherzentrum stammen aus automatischen Zählern.',
          },
        },
      ],
    },
    {
      id: 'origine',
      title: { fr: 'Origine', de: 'Herkunft' },
      blocks: [
        {
          t: 'bar',
          id: 'b_orig',
          caption: {
            fr: 'Château de Wiltzerbach – répartition des visiteurs par pays de résidence',
            de: 'Schloss Wiltzerbach – Verteilung der Besucher nach Wohnsitzland',
          },
          unit: { fr: 'en % des visiteurs du château', de: 'in % der Schlossbesucher' },
          decimals: 1,
          cols: [
            { key: 'lu', label: { fr: 'Luxembourg', de: 'Luxemburg' } },
            { key: 'be', label: { fr: 'Belgique', de: 'Belgien' } },
            { key: 'de', label: { fr: 'Allemagne', de: 'Deutschland' } },
            { key: 'nl', label: { fr: 'Pays-Bas', de: 'Niederlande' } },
            { key: 'fr', label: { fr: 'France', de: 'Frankreich' } },
            { key: 'autres', label: { fr: 'Autres', de: 'Andere' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [31, 22, 18, 14, 9, 6] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [28, 21, 20, 17, 8, 6] },
          ],
        },
      ],
    },
    {
      id: 'budget',
      title: { fr: 'Budget 2025', de: 'Budget 2025' },
      blocks: [
        {
          t: 'table',
          id: 't_bud',
          caption: { fr: "Budget de l'office du tourisme 2025", de: 'Budget des Tourismusbüros 2025' },
          unit: { fr: 'en €', de: 'in €' },
          cols: [
            { key: 'prevu', label: { fr: 'Prévu', de: 'Geplant' } },
            { key: 'realise', label: { fr: 'Réalisé', de: 'Ist' } },
          ],
          rows: [
            { key: 'personnel', label: { fr: 'Personnel', de: 'Personal' }, values: [412000, 405300] },
            { key: 'promotion', label: { fr: 'Promotion', de: 'Werbung' }, values: [58000, 63800] },
            { key: 'evenements', label: { fr: 'Événements', de: 'Veranstaltungen' }, values: [95000, 88350] },
            { key: 'entretien', label: { fr: 'Entretien des sites', de: 'Instandhaltung der Standorte' }, values: [37000, 41070] },
          ],
        },
      ],
    },
    {
      id: 'mensuel',
      title: { fr: 'Saison', de: 'Saison' },
      blocks: [
        {
          t: 'line',
          id: 'l_mois',
          caption: {
            fr: "Centre d'accueil – visiteurs par mois (avril à octobre)",
            de: 'Besucherzentrum – Besucher pro Monat (April bis Oktober)',
          },
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
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [820, 1150, 1380, 2040, 2310, 1260, 940] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [860, 1210, 1420, 2180, 2450, 1300, 980] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Le centre d’accueil est également ouvert de novembre à mars, avec des horaires réduits.',
            de: 'Das Besucherzentrum ist auch von November bis März geöffnet, mit verkürzten Öffnungszeiten.',
          },
        },
      ],
    },
    {
      id: 'tarifs',
      title: { fr: 'Tarifs château', de: 'Eintritt Schloss' },
      blocks: [
        {
          t: 'facts',
          id: 'f_tarif',
          caption: { fr: "Tarifs d'entrée et recettes du château", de: 'Eintrittspreise und Einnahmen des Schlosses' },
          items: [
            { key: 'adulte2024', label: { fr: 'Tarif adulte 2024', de: 'Erwachsenentarif 2024' }, value: 9, unit: { fr: '€', de: '€' } },
            { key: 'adulte2025', label: { fr: 'Tarif adulte 2025', de: 'Erwachsenentarif 2025' }, value: 10, unit: { fr: '€', de: '€' } },
            { key: 'reduit2025', label: { fr: 'Tarif réduit 2025 (étudiants, seniors)', de: 'Ermäßigter Tarif 2025 (Studierende, Senioren)' }, value: 6, unit: { fr: '€', de: '€' } },
            { key: 'recettes2025', label: { fr: 'Recettes de billetterie 2025', de: 'Ticketeinnahmen 2025' }, value: 412300, unit: { fr: '€', de: '€' } },
          ],
        },
        {
          t: 'text',
          text: {
            fr: "L'entrée est gratuite pour les enfants de moins de 12 ans.",
            de: 'Für Kinder unter 12 Jahren ist der Eintritt frei.',
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
          caption: { fr: 'Prévisions et objectifs de fréquentation', de: 'Prognosen und Ziele der Besucherzahlen' },
          cols: [
            { key: 'prev2025', label: { fr: 'Prévision 2025', de: 'Prognose 2025' } },
            { key: 'obj2026', label: { fr: 'Objectif 2026', de: 'Ziel 2026' } },
          ],
          rows: [
            { key: 'chateau', label: { fr: 'Château de Wiltzerbach', de: 'Schloss Wiltzerbach' }, values: [54000, 57000] },
            { key: 'musee', label: { fr: 'Musée rural', de: 'Landwirtschaftsmuseum' }, values: [12000, 13500] },
            { key: 'piscine', label: { fr: 'Piscine en plein air', de: 'Freibad' }, values: [33000, 32000] },
            { key: 'accueil', label: { fr: "Centre d'accueil", de: 'Besucherzentrum' }, values: [11000, 11500] },
          ],
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n01-01',
      text: {
        fr: 'Entre 2023 et 2025, la fréquentation du château a augmenté de plus de 15 %.',
        de: 'Zwischen 2023 und 2025 ist die Besucherzahl des Schlosses um mehr als 15 % gestiegen.',
      },
      tags: ['pct-change'],
      difficulty: 1,
    },
    {
      id: 'n01-02',
      text: {
        fr: 'La part des visiteurs résidant en Allemagne a augmenté de 2 % entre 2024 et 2025 au château.',
        de: 'Der Anteil der Schlossbesucher mit Wohnsitz in Deutschland ist zwischen 2024 und 2025 um 2 % gestiegen.',
      },
      tags: ['pp-vs-pct', 'chart-reading'],
      difficulty: 2,
    },
    {
      id: 'n01-03',
      text: {
        fr: 'Le nombre de visiteurs du château résidant en Belgique a diminué entre 2024 et 2025.',
        de: 'Die Zahl der Schlossbesucher mit Wohnsitz in Belgien ist zwischen 2024 und 2025 gesunken.',
      },
      tags: ['multi-table', 'ratio'],
      difficulty: 3,
    },
    {
      id: 'n01-04',
      text: {
        fr: 'En 2025, les dépenses réalisées pour la promotion ont dépassé le montant prévu de 10 %.',
        de: '2025 lagen die tatsächlichen Werbeausgaben 10 % über dem geplanten Betrag.',
      },
      tags: ['forecast-vs-actual', 'pct-change'],
      difficulty: 2,
    },
    {
      id: 'n01-05',
      text: {
        fr: 'Le total des dépenses réalisées en 2025 est inférieur au total du budget prévu.',
        de: 'Die Summe der tatsächlichen Ausgaben 2025 liegt unter der Summe des geplanten Budgets.',
      },
      tags: ['sum-average', 'forecast-vs-actual'],
      difficulty: 2,
    },
    {
      id: 'n01-06',
      text: {
        fr: 'En 2025, la fréquentation de la piscine en plein air a dépassé la prévision établie pour cette année.',
        de: '2025 hat die Besucherzahl des Freibads die für dieses Jahr erstellte Prognose übertroffen.',
      },
      tags: ['forecast-vs-actual', 'multi-table'],
      difficulty: 1,
    },
    {
      id: 'n01-07',
      text: {
        fr: 'Les recettes de billetterie du château ont augmenté entre 2024 et 2025.',
        de: 'Die Ticketeinnahmen des Schlosses sind zwischen 2024 und 2025 gestiegen.',
      },
      tags: ['missing-info'],
      difficulty: 2,
    },
    {
      id: 'n01-08',
      text: {
        fr: "Si le château atteint son objectif 2026, sa fréquentation augmentera de moins de 2 % par rapport à 2025.",
        de: 'Wenn das Schloss sein Ziel für 2026 erreicht, steigt seine Besucherzahl gegenüber 2025 um weniger als 2 %.',
      },
      tags: ['pct-change', 'multi-table'],
      difficulty: 3,
    },
    {
      id: 'n01-09',
      text: {
        fr: 'En 2025, plus de la moitié des visiteurs du château ont payé le tarif adulte.',
        de: '2025 hat mehr als die Hälfte der Schlossbesucher den Erwachsenentarif bezahlt.',
      },
      tags: ['missing-info', 'ratio'],
      difficulty: 3,
    },
    {
      id: 'n01-10',
      text: {
        fr: 'En 2025, le château a accueilli plus de visiteurs résidant aux Pays-Bas que le musée rural n’a accueilli de visiteurs résidant au Luxembourg.',
        de: '2025 kamen mehr Schlossbesucher aus den Niederlanden als Museumsbesucher aus Luxemburg.',
      },
      tags: ['missing-info', 'multi-table'],
      difficulty: 3,
    },
  ],
};
