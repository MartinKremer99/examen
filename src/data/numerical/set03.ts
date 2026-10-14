import type { NumSet } from '../types';

const EUR = { fr: 'en €', de: 'in €' };

const genres = [
  { key: 'concerts', label: { fr: 'Concerts', de: 'Konzerte' } },
  { key: 'theatre', label: { fr: 'Théâtre', de: 'Theater' } },
  { key: 'jeune', label: { fr: 'Jeune public', de: 'Junges Publikum' } },
  { key: 'cinema', label: { fr: 'Cinéma', de: 'Kino' } },
  { key: 'conf', label: { fr: 'Conférences', de: 'Vorträge' } },
];

const saisons = [
  { key: 's2324', label: { fr: 'Saison 2023/24', de: 'Saison 2023/24' } },
  { key: 's2425', label: { fr: 'Saison 2024/25', de: 'Saison 2024/25' } },
];

export const nset03: NumSet = {
  id: 'n03',
  title: { fr: 'Centre culturel « Am Haff » de Reckenthal – bilan de saison', de: 'Kulturzentrum „Am Haff“ Reckenthal – Saisonbilanz' },
  themeDe: 'Kulturprogramm: Veranstaltungen, Auslastung, Preise, Einnahmen, Publikum und Zufriedenheit',
  tabs: [
    {
      id: 'programme',
      title: { fr: 'Programme', de: 'Programm' },
      blocks: [
        {
          t: 'table',
          id: 't_evt',
          caption: { fr: 'Saison 2024/25 – représentations, places offertes et billets vendus par genre', de: 'Saison 2024/25 – Vorstellungen, angebotene Plätze und verkaufte Karten nach Sparte' },
          cols: [
            { key: 'repr', label: { fr: 'Représentations', de: 'Vorstellungen' } },
            { key: 'places', label: { fr: 'Places offertes', de: 'Angebotene Plätze' } },
            { key: 'billets', label: { fr: 'Billets vendus', de: 'Verkaufte Karten' } },
          ],
          rows: [
            { key: 'concerts', label: genres[0].label, values: [18, 7200, 5940] },
            { key: 'theatre', label: genres[1].label, values: [24, 6000, 4260] },
            { key: 'jeune', label: genres[2].label, values: [30, 4500, 4050] },
            { key: 'cinema', label: genres[3].label, values: [52, 6240, 3432] },
            { key: 'conf', label: genres[4].label, values: [12, 1440, 1008] },
            { key: 'total', label: { fr: 'Total', de: 'Insgesamt' }, values: [136, 25380, 18690] },
          ],
        },
        {
          t: 'table',
          id: 't_prix',
          caption: { fr: 'Saison 2024/25 – prix moyen du billet et recettes de billetterie par genre', de: 'Saison 2024/25 – Durchschnittspreis pro Karte und Kartenerlöse nach Sparte' },
          unit: EUR,
          cols: [
            { key: 'prix', label: { fr: 'Prix moyen du billet', de: 'Durchschnittspreis pro Karte' } },
            { key: 'recettes', label: { fr: 'Recettes de billetterie', de: 'Kartenerlöse' } },
          ],
          rows: [
            { key: 'concerts', label: genres[0].label, values: [24, 142560] },
            { key: 'theatre', label: genres[1].label, values: [18, 76680] },
            { key: 'jeune', label: genres[2].label, values: [8, 32400] },
            { key: 'cinema', label: genres[3].label, values: [7, 24024] },
            { key: 'conf', label: genres[4].label, values: [5, 5040] },
            { key: 'total', label: { fr: 'Total', de: 'Insgesamt' }, values: [null, 280704] },
          ],
        },
      ],
    },
    {
      id: 'occupation',
      title: { fr: 'Occupation', de: 'Auslastung' },
      blocks: [
        {
          t: 'bar',
          id: 'b_occ',
          caption: { fr: 'Taux d’occupation par genre (billets vendus / places offertes)', de: 'Auslastung nach Sparte (verkaufte Karten / angebotene Plätze)' },
          unit: { fr: 'en %', de: 'in %' },
          decimals: 1,
          cols: genres,
          rows: [
            { key: 's2324', label: saisons[0].label, values: [78.0, 74.5, 86.0, 61.0, 64.0] },
            { key: 's2425', label: saisons[1].label, values: [82.5, 71.0, 90.0, 55.0, 70.0] },
          ],
        },
        {
          t: 'facts',
          id: 'f_salles',
          caption: { fr: 'Capacité des salles', de: 'Kapazität der Säle' },
          items: [
            { key: 'grande', label: { fr: 'Grande salle', de: 'Großer Saal' }, value: 400, unit: { fr: 'places', de: 'Plätze' } },
            { key: 'studio', label: { fr: 'Studio', de: 'Studio' }, value: 150, unit: { fr: 'places', de: 'Plätze' } },
            { key: 'audi', label: { fr: 'Auditorium', de: 'Auditorium' }, value: 120, unit: { fr: 'places', de: 'Plätze' } },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les représentations sont réparties entre les trois salles selon les besoins techniques de chaque production.',
            de: 'Die Vorstellungen werden je nach technischen Anforderungen der Produktion auf die drei Säle verteilt.',
          },
        },
      ],
    },
    {
      id: 'finances',
      title: { fr: 'Finances', de: 'Finanzen' },
      blocks: [
        {
          t: 'table',
          id: 't_recc',
          caption: { fr: 'Recettes du centre culturel', de: 'Einnahmen des Kulturzentrums' },
          unit: EUR,
          cols: saisons,
          rows: [
            { key: 'billetterie', label: { fr: 'Billetterie', de: 'Kartenverkauf' }, values: [251300, 280704] },
            { key: 'subvention', label: { fr: 'Subvention communale', de: 'Gemeindezuschuss' }, values: [400000, 420000] },
            { key: 'sponsoring', label: { fr: 'Sponsoring', de: 'Sponsoring' }, values: [38000, 31500] },
          ],
        },
        {
          t: 'table',
          id: 't_depc',
          caption: { fr: 'Dépenses du centre culturel', de: 'Ausgaben des Kulturzentrums' },
          unit: EUR,
          cols: saisons,
          rows: [
            { key: 'cachets', label: { fr: 'Cachets artistiques', de: 'Künstlergagen' }, values: [312000, 335000] },
            { key: 'technique', label: { fr: 'Technique et accueil', de: 'Technik und Empfang' }, values: [141000, 149500] },
            { key: 'communication', label: { fr: 'Communication', de: 'Kommunikation' }, values: [46000, 52000] },
          ],
        },
      ],
    },
    {
      id: 'public',
      title: { fr: 'Public', de: 'Publikum' },
      blocks: [
        {
          t: 'bar',
          id: 'b_age',
          caption: { fr: 'Répartition des billets vendus par tranche d’âge du spectateur', de: 'Verteilung der verkauften Karten nach Altersgruppe der Zuschauer' },
          unit: { fr: 'en % des billets vendus', de: 'in % der verkauften Karten' },
          cols: [
            { key: 'm18', label: { fr: 'Moins de 18 ans', de: 'Unter 18 Jahren' } },
            { key: 'a1829', label: { fr: '18–29 ans', de: '18–29 Jahre' } },
            { key: 'a3044', label: { fr: '30–44 ans', de: '30–44 Jahre' } },
            { key: 'a4564', label: { fr: '45–64 ans', de: '45–64 Jahre' } },
            { key: 'a65', label: { fr: '65 ans et plus', de: '65 Jahre und älter' } },
          ],
          rows: [
            { key: 's2324', label: saisons[0].label, values: [21, 12, 24, 27, 16] },
            { key: 's2425', label: saisons[1].label, values: [25, 11, 21, 26, 17] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'L’âge est relevé lors de l’achat du billet (tarifs par âge et fichier des abonnés).',
            de: 'Das Alter wird beim Kartenkauf erfasst (altersabhängige Tarife und Abonnentendatei).',
          },
        },
      ],
    },
    {
      id: 'evolution',
      title: { fr: 'Évolution et objectifs', de: 'Entwicklung und Ziele' },
      blocks: [
        {
          t: 'line',
          id: 'l_hist',
          caption: { fr: 'Places offertes et billets vendus par saison', de: 'Angebotene Plätze und verkaufte Karten pro Saison' },
          cols: [
            { key: 's1920', label: { fr: '2019/20', de: '2019/20' } },
            { key: 's2021', label: { fr: '2020/21', de: '2020/21' } },
            { key: 's2122', label: { fr: '2021/22', de: '2021/22' } },
            { key: 's2223', label: { fr: '2022/23', de: '2022/23' } },
            { key: 's2324', label: { fr: '2023/24', de: '2023/24' } },
            { key: 's2425', label: { fr: '2024/25', de: '2024/25' } },
          ],
          rows: [
            { key: 'places', label: { fr: 'Places offertes', de: 'Angebotene Plätze' }, values: [17600, 9800, 19500, 21400, 22800, 25380] },
            { key: 'billets', label: { fr: 'Billets vendus', de: 'Verkaufte Karten' }, values: [12400, 5300, 13900, 16100, 17250, 18690] },
          ],
        },
        {
          t: 'facts',
          id: 'f_obj',
          caption: { fr: 'Objectifs fixés par le conseil d’administration', de: 'Vom Verwaltungsrat festgelegte Ziele' },
          items: [
            { key: 'billets2425', label: { fr: 'Billets vendus – objectif 2024/25', de: 'Verkaufte Karten – Ziel 2024/25' }, value: 19000 },
            { key: 'recettes2425', label: { fr: 'Recettes de billetterie – objectif 2024/25', de: 'Kartenerlöse – Ziel 2024/25' }, value: 270000, unit: { fr: '€', de: '€' } },
            { key: 'occ2425', label: { fr: 'Taux d’occupation global – objectif 2024/25', de: 'Gesamtauslastung – Ziel 2024/25' }, value: 75, unit: { fr: '%', de: '%' } },
            { key: 'billets2526', label: { fr: 'Billets vendus – objectif 2025/26', de: 'Verkaufte Karten – Ziel 2025/26' }, value: 20200 },
          ],
        },
      ],
    },
    {
      id: 'enquete',
      title: { fr: 'Enquête', de: 'Umfrage' },
      blocks: [
        {
          t: 'table',
          id: 't_sat',
          caption: { fr: 'Enquête de satisfaction auprès du public', de: 'Zufriedenheitsumfrage beim Publikum' },
          unit: { fr: '% de répondants « satisfaits » ou « très satisfaits »', de: '% der Befragten „zufrieden“ oder „sehr zufrieden“' },
          cols: [
            { key: 'e2024', label: { fr: 'Enquête 2024', de: 'Umfrage 2024' } },
            { key: 'e2025', label: { fr: 'Enquête 2025', de: 'Umfrage 2025' } },
          ],
          rows: [
            { key: 'programmation', label: { fr: 'Programmation', de: 'Programmauswahl' }, values: [88, 91] },
            { key: 'accueil', label: { fr: 'Accueil', de: 'Empfang' }, values: [93, 94] },
            { key: 'prix', label: { fr: 'Prix des billets', de: 'Kartenpreise' }, values: [71, 76] },
            { key: 'confort', label: { fr: 'Confort des salles', de: 'Komfort der Säle' }, values: [69, 66] },
            { key: 'parking', label: { fr: 'Stationnement', de: 'Parkmöglichkeiten' }, values: [52, 58] },
          ],
        },
        {
          t: 'facts',
          id: 'f_enq',
          caption: { fr: 'Participation à l’enquête', de: 'Teilnahme an der Umfrage' },
          items: [
            { key: 'rep2024', label: { fr: 'Répondants 2024', de: 'Befragte 2024' }, value: 510 },
            { key: 'rep2025', label: { fr: 'Répondants 2025', de: 'Befragte 2025' }, value: 640 },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Chaque répondant a évalué l’ensemble des critères.',
            de: 'Alle Befragten haben sämtliche Kriterien bewertet.',
          },
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n03-01',
      text: {
        fr: 'Entre les saisons 2023/24 et 2024/25, la subvention communale a progressé plus fortement, en pourcentage, que les recettes de billetterie.',
        de: 'Zwischen den Saisons 2023/24 und 2024/25 ist der Gemeindezuschuss prozentual stärker gestiegen als die Kartenerlöse.',
      },
      tags: ['pct-change', 'compare'],
      difficulty: 2,
    },
    {
      id: 'n03-02',
      text: {
        fr: 'Entre 2023/24 et 2024/25, la part des moins de 18 ans dans les billets vendus a augmenté de plus de 10 %.',
        de: 'Zwischen 2023/24 und 2024/25 ist der Anteil der unter 18-Jährigen an den verkauften Karten um mehr als 10 % gestiegen.',
      },
      tags: ['pp-vs-pct', 'chart-reading'],
      difficulty: 2,
    },
    {
      id: 'n03-03',
      text: {
        fr: 'Au cours de la saison 2024/25, le taux d’occupation de la grande salle a dépassé 80 %.',
        de: 'In der Saison 2024/25 lag die Auslastung des Großen Saals über 80 %.',
      },
      tags: ['missing-info', 'multi-table'],
      difficulty: 2,
    },
    {
      id: 'n03-04',
      text: {
        fr: 'Lors de la saison 2024/25, le centre a atteint son objectif de recettes de billetterie, mais pas son objectif de billets vendus.',
        de: 'In der Saison 2024/25 hat das Zentrum sein Ziel bei den Kartenerlösen erreicht, nicht aber sein Ziel bei den verkauften Karten.',
      },
      tags: ['forecast-vs-actual', 'multi-table'],
      difficulty: 2,
    },
    {
      id: 'n03-05',
      text: {
        fr: 'Le nombre de billets vendus à des spectateurs de 45 à 64 ans a diminué entre 2023/24 et 2024/25.',
        de: 'Die Zahl der an 45- bis 64-jährige Zuschauer verkauften Karten ist zwischen 2023/24 und 2024/25 gesunken.',
      },
      tags: ['multi-table', 'ratio', 'chart-reading'],
      difficulty: 3,
    },
    {
      id: 'n03-06',
      text: {
        fr: 'En 2024/25, les recettes de billetterie et de sponsoring couvrent ensemble plus de la moitié des dépenses du centre figurant au tableau des dépenses.',
        de: '2024/25 decken Kartenerlöse und Sponsoring zusammen mehr als die Hälfte der in der Ausgabentabelle aufgeführten Ausgaben des Zentrums.',
      },
      tags: ['sum-average', 'ratio'],
      difficulty: 2,
    },
    {
      id: 'n03-07',
      text: {
        fr: 'Le prix moyen d’un billet de concert a augmenté entre 2023/24 et 2024/25.',
        de: 'Der Durchschnittspreis einer Konzertkarte ist zwischen 2023/24 und 2024/25 gestiegen.',
      },
      tags: ['missing-info'],
      difficulty: 1,
    },
    {
      id: 'n03-08',
      text: {
        fr: 'En 2024/25, au moins trois des cinq genres ont atteint un taux d’occupation supérieur à 75 %.',
        de: '2024/25 erreichten mindestens drei der fünf Sparten eine Auslastung von über 75 %.',
      },
      tags: ['range', 'chart-reading'],
      difficulty: 1,
    },
    {
      id: 'n03-09',
      text: {
        fr: 'Selon l’enquête 2025, les spectateurs de 65 ans et plus sont plus satisfaits du prix des billets que les spectateurs de moins de 30 ans.',
        de: 'Laut Umfrage 2025 sind Zuschauer ab 65 Jahren mit den Kartenpreisen zufriedener als Zuschauer unter 30 Jahren.',
      },
      tags: ['missing-info', 'multi-table'],
      difficulty: 1,
    },
    {
      id: 'n03-10',
      text: {
        fr: 'Lors de l’enquête 2025, plus de 400 répondants se sont déclarés satisfaits ou très satisfaits du confort des salles.',
        de: 'Bei der Umfrage 2025 haben sich mehr als 400 Befragte mit dem Komfort der Säle zufrieden oder sehr zufrieden erklärt.',
      },
      tags: ['ratio', 'multi-table'],
      difficulty: 2,
    },
  ],
};
