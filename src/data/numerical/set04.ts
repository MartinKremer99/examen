import type { NumSet } from '../types';

const EUR = { fr: 'en €', de: 'in €' };
const y2024 = { key: '2024', label: { fr: '2024', de: '2024' } };
const y2025 = { key: '2025', label: { fr: '2025', de: '2025' } };

export const nset04: NumSet = {
  id: 'n04',
  title: { fr: 'Centre aquatique et sportif « Aquabierg » de Schwaarzbach', de: 'Schwimm- und Sportzentrum „Aquabierg“ Schwaarzbach' },
  themeDe: 'Schwimmbad und Sportzentrum: Eintritte, Abonnements, Energiekosten, Personal und Zielerreichung',
  tabs: [
    {
      id: 'entrees',
      title: { fr: 'Entrées', de: 'Eintritte' },
      blocks: [
        {
          t: 'line',
          id: 'l_ent',
          caption: { fr: 'Piscine – entrées mensuelles de janvier à août', de: 'Schwimmbad – monatliche Eintritte von Januar bis August' },
          cols: [
            { key: 'jan', label: { fr: 'janv.', de: 'Jan.' } },
            { key: 'fev', label: { fr: 'févr.', de: 'Feb.' } },
            { key: 'mars', label: { fr: 'mars', de: 'März' } },
            { key: 'avr', label: { fr: 'avr.', de: 'Apr.' } },
            { key: 'mai', label: { fr: 'mai', de: 'Mai' } },
            { key: 'juin', label: { fr: 'juin', de: 'Juni' } },
            { key: 'juil', label: { fr: 'juil.', de: 'Juli' } },
            { key: 'aout', label: { fr: 'août', de: 'Aug.' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [9800, 9200, 10100, 10600, 11900, 13400, 15800, 14200] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [10300, 9500, 10800, 9900, 12600, 14100, 16900, 14900] },
          ],
        },
        {
          t: 'facts',
          id: 'f_ent',
          caption: { fr: 'Entrées annuelles à la piscine (janvier à décembre)', de: 'Jährliche Eintritte im Schwimmbad (Januar bis Dezember)' },
          items: [
            { key: 'an2024', label: { fr: 'Année 2024', de: 'Jahr 2024' }, value: 141200 },
            { key: 'an2025', label: { fr: 'Année 2025', de: 'Jahr 2025' }, value: 146800 },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'En avril 2025, le bassin sportif a été fermé pendant une semaine pour travaux de maintenance.',
            de: 'Im April 2025 war das Sportbecken wegen Wartungsarbeiten eine Woche lang geschlossen.',
          },
        },
      ],
    },
    {
      id: 'abonnements',
      title: { fr: 'Abonnements', de: 'Abonnements' },
      blocks: [
        {
          t: 'bar',
          id: 'b_abo',
          caption: { fr: 'Abonnements annuels vendus par catégorie', de: 'Verkaufte Jahresabonnements nach Kategorie' },
          unit: { fr: 'nombre d’abonnements', de: 'Anzahl Abonnements' },
          cols: [
            { key: 'adultes', label: { fr: 'Adultes', de: 'Erwachsene' } },
            { key: 'jeunes', label: { fr: 'Jeunes (moins de 18 ans)', de: 'Jugendliche (unter 18 Jahren)' } },
            { key: 'seniors', label: { fr: 'Seniors (65 ans et plus)', de: 'Senioren (ab 65 Jahren)' } },
            { key: 'familles', label: { fr: 'Familles', de: 'Familien' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [820, 410, 360, 240] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [860, 470, 352, 275] },
          ],
        },
        {
          t: 'facts',
          id: 'f_prix',
          caption: { fr: 'Prix des abonnements annuels (tarifs en vigueur depuis le 1er janvier 2025)', de: 'Preise der Jahresabonnements (Tarife gültig seit 1. Januar 2025)' },
          items: [
            { key: 'adultes', label: { fr: 'Adultes', de: 'Erwachsene' }, value: 420, unit: { fr: '€', de: '€' } },
            { key: 'jeunes', label: { fr: 'Jeunes', de: 'Jugendliche' }, value: 210, unit: { fr: '€', de: '€' } },
            { key: 'seniors', label: { fr: 'Seniors', de: 'Senioren' }, value: 300, unit: { fr: '€', de: '€' } },
            { key: 'familles', label: { fr: 'Familles', de: 'Familien' }, value: 780, unit: { fr: '€', de: '€' } },
          ],
        },
      ],
    },
    {
      id: 'energie',
      title: { fr: 'Énergie', de: 'Energie' },
      blocks: [
        {
          t: 'table',
          id: 't_nrj',
          caption: { fr: 'Coûts d’énergie du centre (piscine et salle omnisports)', de: 'Energiekosten des Zentrums (Schwimmbad und Mehrzweckhalle)' },
          unit: EUR,
          cols: [{ key: '2023', label: { fr: '2023', de: '2023' } }, y2024, y2025],
          rows: [
            { key: 'elec', label: { fr: 'Électricité', de: 'Strom' }, values: [186000, 214000, 198500] },
            { key: 'gaz', label: { fr: 'Gaz naturel', de: 'Erdgas' }, values: [242000, 205000, 171000] },
            { key: 'chaleur', label: { fr: 'Réseau de chaleur (bois)', de: 'Wärmenetz (Holz)' }, values: [58000, 61000, 63500] },
            { key: 'total', label: { fr: 'Total', de: 'Insgesamt' }, values: [486000, 480000, 433000] },
          ],
        },
        {
          t: 'facts',
          id: 'f_conso',
          caption: { fr: 'Consommation de gaz naturel', de: 'Erdgasverbrauch' },
          items: [
            { key: 'gaz2024', label: { fr: '2024', de: '2024' }, value: 2050, unit: { fr: 'MWh', de: 'MWh' } },
            { key: 'gaz2025', label: { fr: '2025', de: '2025' }, value: 1800, unit: { fr: 'MWh', de: 'MWh' } },
          ],
        },
      ],
    },
    {
      id: 'personnel',
      title: { fr: 'Personnel et horaires', de: 'Personal und Öffnungszeiten' },
      blocks: [
        {
          t: 'table',
          id: 't_pers',
          caption: { fr: 'Personnel par fonction, en équivalents temps plein (ETP)', de: 'Personal nach Funktion, in Vollzeitäquivalenten (VZÄ)' },
          unit: { fr: 'en ETP', de: 'in VZÄ' },
          decimals: 1,
          cols: [y2024, y2025],
          rows: [
            { key: 'mn', label: { fr: 'Maîtres-nageurs', de: 'Bademeister' }, values: [9.0, 10.0] },
            { key: 'accueil', label: { fr: 'Accueil et caisse', de: 'Empfang und Kasse' }, values: [5.5, 5.5] },
            { key: 'tech', label: { fr: 'Technique et entretien', de: 'Technik und Reinigung' }, values: [6.0, 6.5] },
            { key: 'admin', label: { fr: 'Administration', de: 'Verwaltung' }, values: [2.0, 2.0] },
            { key: 'total', label: { fr: 'Total', de: 'Insgesamt' }, values: [22.5, 24.0] },
          ],
        },
        {
          t: 'facts',
          id: 'f_ouv',
          caption: { fr: 'Heures d’ouverture de la piscine au public', de: 'Öffnungszeiten des Schwimmbads für die Öffentlichkeit' },
          items: [
            { key: 'h2024', label: { fr: 'Heures par semaine en 2024', de: 'Stunden pro Woche 2024' }, value: 78, unit: { fr: 'h', de: 'Std.' } },
            { key: 'h2025', label: { fr: 'Heures par semaine en 2025', de: 'Stunden pro Woche 2025' }, value: 84, unit: { fr: 'h', de: 'Std.' } },
          ],
        },
      ],
    },
    {
      id: 'objectifs',
      title: { fr: 'Objectifs 2025', de: 'Ziele 2025' },
      blocks: [
        {
          t: 'table',
          id: 't_obj',
          caption: { fr: 'Objectifs 2025 et résultats', de: 'Ziele 2025 und Ergebnisse' },
          cols: [
            { key: 'obj', label: { fr: 'Objectif 2025', de: 'Ziel 2025' } },
            { key: 'real', label: { fr: 'Réalisé 2025', de: 'Ist 2025' } },
          ],
          rows: [
            { key: 'entrees', label: { fr: 'Entrées à la piscine (nombre)', de: 'Eintritte Schwimmbad (Anzahl)' }, values: [150000, 146800] },
            { key: 'cours', label: { fr: 'Participants aux cours de natation (nombre)', de: 'Teilnehmende an Schwimmkursen (Anzahl)' }, values: [2400, 2610] },
            { key: 'recettes', label: { fr: 'Recettes d’exploitation (€)', de: 'Betriebseinnahmen (€)' }, values: [1150000, 1182000] },
          ],
        },
        {
          t: 'facts',
          id: 'f_plafond',
          caption: { fr: 'Cadre budgétaire 2025', de: 'Haushaltsrahmen 2025' },
          items: [
            { key: 'energie', label: { fr: 'Plafond des coûts d’énergie', de: 'Obergrenze der Energiekosten' }, value: 450000, unit: { fr: '€', de: '€' } },
          ],
        },
      ],
    },
    {
      id: 'salle',
      title: { fr: 'Salle omnisports', de: 'Mehrzweckhalle' },
      blocks: [
        {
          t: 'table',
          id: 't_salle',
          caption: { fr: 'Heures réservées dans la salle omnisports, par utilisateur', de: 'Gebuchte Stunden in der Mehrzweckhalle nach Nutzergruppe' },
          unit: { fr: 'en heures par an', de: 'in Stunden pro Jahr' },
          cols: [y2024, y2025],
          rows: [
            { key: 'clubs', label: { fr: 'Clubs sportifs', de: 'Sportvereine' }, values: [2150, 2260] },
            { key: 'ecoles', label: { fr: 'Écoles', de: 'Schulen' }, values: [1320, 1280] },
            { key: 'public', label: { fr: 'Accès libre au public', de: 'Freier Zugang für die Öffentlichkeit' }, values: [410, 520] },
            { key: 'manif', label: { fr: 'Manifestations', de: 'Veranstaltungen' }, values: [120, 140] },
            { key: 'total', label: { fr: 'Total', de: 'Insgesamt' }, values: [4000, 4200] },
          ],
        },
        {
          t: 'facts',
          id: 'f_salle',
          caption: { fr: 'Disponibilité de la salle', de: 'Verfügbarkeit der Halle' },
          items: [{ key: 'dispo2025', label: { fr: 'Heures disponibles en 2025', de: 'Verfügbare Stunden 2025' }, value: 4800, unit: { fr: 'h', de: 'Std.' } }],
        },
        {
          t: 'text',
          text: {
            fr: 'Depuis janvier 2025, la salle est également ouverte le dimanche matin.',
            de: 'Seit Januar 2025 ist die Halle auch sonntagvormittags geöffnet.',
          },
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n04-01',
      text: {
        fr: 'Le coût total d’énergie du centre, rapporté au nombre annuel d’entrées à la piscine, a diminué de plus de 10 % entre 2024 et 2025.',
        de: 'Die gesamten Energiekosten des Zentrums, bezogen auf die jährlichen Eintritte im Schwimmbad, sind zwischen 2024 und 2025 um mehr als 10 % gesunken.',
      },
      tags: ['ratio', 'multi-table', 'pct-change'],
      difficulty: 3,
    },
    {
      id: 'n04-02',
      text: {
        fr: 'La part des abonnements « Jeunes » dans l’ensemble des abonnements annuels a progressé de plus de 10 % entre 2024 et 2025.',
        de: 'Der Anteil der Jugendabonnements an allen Jahresabonnements ist zwischen 2024 und 2025 um mehr als 10 % gestiegen.',
      },
      tags: ['pp-vs-pct', 'chart-reading', 'ratio'],
      difficulty: 3,
    },
    {
      id: 'n04-03',
      text: {
        fr: 'Les recettes des abonnements « Adultes » ont augmenté entre 2024 et 2025.',
        de: 'Die Einnahmen aus Erwachsenenabonnements sind zwischen 2024 und 2025 gestiegen.',
      },
      tags: ['missing-info', 'multi-table'],
      difficulty: 2,
    },
    {
      id: 'n04-04',
      text: {
        fr: 'De janvier à août, la piscine a enregistré en 2025 plus de 5 % d’entrées de plus que sur la même période de 2024.',
        de: 'Von Januar bis August verzeichnete das Schwimmbad 2025 über 5 % mehr Eintritte als im gleichen Zeitraum 2024.',
      },
      tags: ['sum-average', 'pct-change', 'chart-reading'],
      difficulty: 2,
    },
    {
      id: 'n04-05',
      text: {
        fr: 'Le coût moyen d’un MWh de gaz naturel a baissé de plus de 10 % entre 2024 et 2025.',
        de: 'Die durchschnittlichen Kosten pro MWh Erdgas sind zwischen 2024 und 2025 um mehr als 10 % gesunken.',
      },
      tags: ['ratio', 'pct-change'],
      difficulty: 2,
    },
    {
      id: 'n04-06',
      text: {
        fr: 'Rapporté à l’effectif de maîtres-nageurs (en ETP), le nombre d’heures d’ouverture hebdomadaires de la piscine a diminué entre 2024 et 2025.',
        de: 'Bezogen auf den Bademeisterbestand (in VZÄ) ist die Zahl der wöchentlichen Öffnungsstunden des Schwimmbads zwischen 2024 und 2025 gesunken.',
      },
      tags: ['ratio', 'compare'],
      difficulty: 2,
    },
    {
      id: 'n04-07',
      text: {
        fr: 'Le taux d’occupation de la salle omnisports (heures réservées / heures disponibles) a augmenté entre 2024 et 2025.',
        de: 'Die Auslastung der Mehrzweckhalle (gebuchte Stunden / verfügbare Stunden) ist zwischen 2024 und 2025 gestiegen.',
      },
      tags: ['missing-info', 'ratio'],
      difficulty: 2,
    },
    {
      id: 'n04-08',
      text: {
        fr: 'La consommation d’électricité du centre a diminué entre 2024 et 2025.',
        de: 'Der Stromverbrauch des Zentrums ist zwischen 2024 und 2025 gesunken.',
      },
      tags: ['missing-info'],
      difficulty: 1,
    },
    {
      id: 'n04-09',
      text: {
        fr: 'En 2025, le centre a dépassé de plus de 8 % son objectif de participants aux cours de natation, mais n’a pas atteint son objectif d’entrées à la piscine.',
        de: '2025 hat das Zentrum sein Ziel bei den Teilnehmenden an Schwimmkursen um mehr als 8 % übertroffen, sein Ziel bei den Eintritten im Schwimmbad aber nicht erreicht.',
      },
      tags: ['forecast-vs-actual', 'pct-change'],
      difficulty: 1,
    },
    {
      id: 'n04-10',
      text: {
        fr: 'En 2025, les clubs sportifs ont occupé plus de la moitié des heures disponibles de la salle omnisports.',
        de: '2025 belegten die Sportvereine mehr als die Hälfte der verfügbaren Stunden der Mehrzweckhalle.',
      },
      tags: ['ratio', 'range', 'multi-table'],
      difficulty: 2,
    },
  ],
};
