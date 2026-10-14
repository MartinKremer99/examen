import type { NumSet } from '../types';

export const nset05: NumSet = {
  id: 'n05',
  title: { fr: 'Bibliothèque communale de Kéiwelbach – activité 2023-2025', de: 'Gemeindebibliothek Kéiwelbach – Tätigkeit 2023–2025' },
  themeDe: 'Bibliothek: Ausleihen, Leser, Öffnungszeiten, Budget und Veranstaltungen',
  tabs: [
    {
      id: 'prets',
      title: { fr: 'Prêts', de: 'Ausleihen' },
      blocks: [
        {
          t: 'table',
          id: 't_prets',
          caption: { fr: 'Nombre annuel de prêts par catégorie de documents', de: 'Jährliche Zahl der Ausleihen nach Medienkategorie' },
          cols: [
            { key: '2023', label: { fr: '2023', de: '2023' } },
            { key: '2024', label: { fr: '2024', de: '2024' } },
            { key: '2025', label: { fr: '2025', de: '2025' } },
          ],
          rows: [
            { key: 'romans', label: { fr: 'Romans adultes', de: 'Romane für Erwachsene' }, values: [18400, 18900, 19300] },
            { key: 'documentaires', label: { fr: 'Documentaires', de: 'Sachbücher' }, values: [9600, 9100, 8700] },
            { key: 'jeunesse', label: { fr: 'Livres jeunesse', de: 'Kinder- und Jugendbücher' }, values: [22800, 23900, 25100] },
            { key: 'bd', label: { fr: 'Bandes dessinées', de: 'Comics' }, values: [7300, 7900, 8600] },
            { key: 'medias', label: { fr: 'Médias (DVD, CD)', de: 'Medien (DVD, CD)' }, values: [5200, 4300, 3500] },
            { key: 'numerique', label: { fr: 'Livres numériques', de: 'E-Books' }, values: [3100, 4800, 6900] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les prolongations de prêt ne sont pas comptées comme de nouveaux prêts. Les livres numériques sont empruntés via la plateforme en ligne de la bibliothèque.',
            de: 'Verlängerungen werden nicht als neue Ausleihen gezählt. E-Books werden über die Online-Plattform der Bibliothek ausgeliehen.',
          },
        },
      ],
    },
    {
      id: 'periodes',
      title: { fr: 'Prêts par période', de: 'Ausleihen nach Zeitraum' },
      blocks: [
        {
          t: 'line',
          id: 'l_mois',
          caption: {
            fr: 'Nombre total de prêts par période de deux mois (toutes catégories confondues)',
            de: 'Gesamtzahl der Ausleihen pro Zweimonatszeitraum (alle Kategorien)',
          },
          cols: [
            { key: 'jf', label: { fr: 'janv.-févr.', de: 'Jan.–Feb.' } },
            { key: 'ma', label: { fr: 'mars-avr.', de: 'März–Apr.' } },
            { key: 'mj', label: { fr: 'mai-juin', de: 'Mai–Juni' } },
            { key: 'ja', label: { fr: 'juil.-août', de: 'Juli–Aug.' } },
            { key: 'so', label: { fr: 'sept.-oct.', de: 'Sept.–Okt.' } },
            { key: 'nd', label: { fr: 'nov.-déc.', de: 'Nov.–Dez.' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [11900, 12300, 11200, 9100, 12100, 12300] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [12400, 12900, 11800, 10200, 12600, 12200] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Chaque point du graphique correspond à une période de deux mois.',
            de: 'Jeder Punkt des Diagramms entspricht einem Zeitraum von zwei Monaten.',
          },
        },
      ],
    },
    {
      id: 'lecteurs',
      title: { fr: 'Lecteurs', de: 'Leser' },
      blocks: [
        {
          t: 'bar',
          id: 'b_age',
          caption: { fr: 'Répartition des lecteurs inscrits par tranche d’âge', de: 'Verteilung der eingeschriebenen Leser nach Altersgruppe' },
          unit: { fr: 'en % des lecteurs inscrits', de: 'in % der eingeschriebenen Leser' },
          cols: [
            { key: 'a0_11', label: { fr: '0-11 ans', de: '0–11 Jahre' } },
            { key: 'a12_17', label: { fr: '12-17 ans', de: '12–17 Jahre' } },
            { key: 'a18_29', label: { fr: '18-29 ans', de: '18–29 Jahre' } },
            { key: 'a30_59', label: { fr: '30-59 ans', de: '30–59 Jahre' } },
            { key: 'a60', label: { fr: '60 ans et plus', de: '60 Jahre und älter' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [26, 12, 11, 33, 18] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [25, 10, 11, 32, 22] },
          ],
        },
        {
          t: 'facts',
          id: 'f_lect',
          caption: { fr: 'Lecteurs inscrits au 31 décembre', de: 'Eingeschriebene Leser am 31. Dezember' },
          items: [
            { key: 'inscrits2024', label: { fr: 'Lecteurs inscrits 2024', de: 'Eingeschriebene Leser 2024' }, value: 2500 },
            { key: 'inscrits2025', label: { fr: 'Lecteurs inscrits 2025', de: 'Eingeschriebene Leser 2025' }, value: 2800 },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Un lecteur est compté comme inscrit s’il dispose d’une carte de lecteur valable au 31 décembre.',
            de: 'Als eingeschrieben gilt, wer am 31. Dezember einen gültigen Leserausweis besitzt.',
          },
        },
      ],
    },
    {
      id: 'horaires',
      title: { fr: 'Horaires', de: 'Öffnungszeiten' },
      blocks: [
        {
          t: 'table',
          id: 't_heures',
          caption: { fr: 'Heures d’ouverture par jour de la semaine', de: 'Öffnungsstunden pro Wochentag' },
          unit: { fr: 'en heures', de: 'in Stunden' },
          cols: [
            { key: 'mar', label: { fr: 'Mardi', de: 'Dienstag' } },
            { key: 'mer', label: { fr: 'Mercredi', de: 'Mittwoch' } },
            { key: 'jeu', label: { fr: 'Jeudi', de: 'Donnerstag' } },
            { key: 'ven', label: { fr: 'Vendredi', de: 'Freitag' } },
            { key: 'sam', label: { fr: 'Samedi', de: 'Samstag' } },
          ],
          rows: [
            { key: '2024', label: { fr: '2024', de: '2024' }, values: [5, 8, 5, 6, 4] },
            { key: '2025', label: { fr: '2025', de: '2025' }, values: [6, 8, 6, 6, 5] },
          ],
        },
        {
          t: 'facts',
          id: 'f_sem',
          caption: { fr: 'Semaines d’ouverture', de: 'Öffnungswochen' },
          items: [
            { key: 'sem2024', label: { fr: 'Nombre de semaines d’ouverture 2024', de: 'Zahl der Öffnungswochen 2024' }, value: 47 },
            { key: 'sem2025', label: { fr: 'Nombre de semaines d’ouverture 2025', de: 'Zahl der Öffnungswochen 2025' }, value: 46 },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'La bibliothèque est fermée le dimanche et le lundi. Les horaires indiqués s’appliquent à chaque semaine d’ouverture de l’année concernée.',
            de: 'Die Bibliothek ist sonntags und montags geschlossen. Die angegebenen Zeiten gelten für jede Öffnungswoche des jeweiligen Jahres.',
          },
        },
      ],
    },
    {
      id: 'budget',
      title: { fr: 'Budget 2025', de: 'Budget 2025' },
      blocks: [
        {
          t: 'table',
          id: 't_budget',
          caption: { fr: 'Budget de la bibliothèque 2025', de: 'Budget der Bibliothek 2025' },
          unit: { fr: 'en €', de: 'in €' },
          cols: [
            { key: 'prevu', label: { fr: 'Prévu', de: 'Geplant' } },
            { key: 'realise', label: { fr: 'Réalisé', de: 'Ist' } },
          ],
          rows: [
            { key: 'livres', label: { fr: 'Achat de livres', de: 'Kauf von Büchern' }, values: [42000, 44100] },
            { key: 'numerique', label: { fr: 'Ressources numériques (licences)', de: 'Digitale Ressourcen (Lizenzen)' }, values: [9000, 11700] },
            { key: 'medias', label: { fr: 'Achat de médias (DVD, CD)', de: 'Kauf von Medien (DVD, CD)' }, values: [6000, 3900] },
            { key: 'animations', label: { fr: 'Animations', de: 'Veranstaltungen' }, values: [8000, 7200] },
            { key: 'equipement', label: { fr: 'Équipement et reliure', de: 'Ausstattung und Einbände' }, values: [5000, 4600] },
          ],
        },
        {
          t: 'facts',
          id: 'f_acq',
          caption: { fr: 'Acquisitions 2025', de: 'Neuerwerbungen 2025' },
          items: [
            { key: 'docs', label: { fr: 'Documents physiques acquis (livres et médias)', de: 'Erworbene physische Medien (Bücher und DVD/CD)' }, value: 2400 },
            { key: 'retires', label: { fr: 'Documents retirés du fonds', de: 'Aus dem Bestand entfernte Medien' }, value: 1300 },
          ],
        },
      ],
    },
    {
      id: 'animations',
      title: { fr: 'Animations', de: 'Veranstaltungen' },
      blocks: [
        {
          t: 'table',
          id: 't_anim',
          caption: { fr: 'Animations proposées en 2025', de: 'Veranstaltungsangebot 2025' },
          cols: [
            { key: 'seances', label: { fr: 'Séances', de: 'Termine' } },
            { key: 'places', label: { fr: 'Places offertes', de: 'Angebotene Plätze' } },
            { key: 'participants', label: { fr: 'Participants', de: 'Teilnehmende' } },
          ],
          rows: [
            { key: 'conte', label: { fr: 'Heure du conte', de: 'Vorlesestunde' }, values: [30, 600, 570] },
            { key: 'numerique', label: { fr: 'Ateliers numériques', de: 'Digitale Workshops' }, values: [18, 216, 162] },
            { key: 'clubs', label: { fr: 'Clubs de lecture', de: 'Lesekreise' }, values: [20, 300, 228] },
            { key: 'auteurs', label: { fr: 'Rencontres d’auteurs', de: 'Autorenbegegnungen' }, values: [6, 360, 180] },
          ],
        },
        {
          t: 'text',
          text: {
            fr: 'Les places offertes correspondent au nombre de séances multiplié par la capacité d’accueil du format. Chaque présence à une séance compte comme un participant.',
            de: 'Die angebotenen Plätze entsprechen der Zahl der Termine mal der Kapazität des Formats. Jede Anwesenheit bei einem Termin zählt als eine teilnehmende Person.',
          },
        },
      ],
    },
  ],
  statements: [
    {
      id: 'n05-01',
      text: {
        fr: 'Entre 2024 et 2025, le nombre annuel d’heures d’ouverture de la bibliothèque a augmenté de plus de 10 %.',
        de: 'Zwischen 2024 und 2025 ist die jährliche Zahl der Öffnungsstunden der Bibliothek um mehr als 10 % gestiegen.',
      },
      tags: ['pct-change', 'sum-average', 'multi-table'],
      difficulty: 3,
    },
    {
      id: 'n05-02',
      text: {
        fr: 'Le nombre de prêts de la période juillet-août a augmenté de plus de 10 % entre 2024 et 2025.',
        de: 'Die Zahl der Ausleihen im Zeitraum Juli–August ist zwischen 2024 und 2025 um mehr als 10 % gestiegen.',
      },
      tags: ['pct-change', 'chart-reading'],
      difficulty: 1,
    },
    {
      id: 'n05-03',
      text: {
        fr: 'Fin 2025, la bibliothèque comptait plus de 600 lecteurs inscrits âgés de 60 ans et plus.',
        de: 'Ende 2025 zählte die Bibliothek mehr als 600 eingeschriebene Leser ab 60 Jahren.',
      },
      tags: ['ratio', 'chart-reading', 'range'],
      difficulty: 2,
    },
    {
      id: 'n05-04',
      text: {
        fr: 'En 2025, plus de la moitié des prêts ont été effectués par des lecteurs âgés de moins de 18 ans.',
        de: '2025 wurde mehr als die Hälfte der Ausleihen von Lesern unter 18 Jahren getätigt.',
      },
      tags: ['missing-info', 'ratio', 'multi-table'],
      difficulty: 3,
    },
    {
      id: 'n05-05',
      text: {
        fr: 'Entre 2024 et 2025, la part des lecteurs inscrits âgés de 60 ans et plus a augmenté de 4 %.',
        de: 'Zwischen 2024 und 2025 ist der Anteil der eingeschriebenen Leser ab 60 Jahren um 4 % gestiegen.',
      },
      tags: ['pp-vs-pct', 'chart-reading'],
      difficulty: 2,
    },
    {
      id: 'n05-06',
      text: {
        fr: 'En 2025, le total des dépenses réalisées de la bibliothèque est resté inférieur au total prévu.',
        de: '2025 blieb die Summe der tatsächlichen Ausgaben der Bibliothek unter der geplanten Summe.',
      },
      tags: ['forecast-vs-actual', 'sum-average', 'compare'],
      difficulty: 2,
    },
    {
      id: 'n05-07',
      text: {
        fr: 'En 2025, le prix moyen d’un livre acquis par la bibliothèque était inférieur à 20 €.',
        de: '2025 lag der Durchschnittspreis eines von der Bibliothek erworbenen Buches unter 20 €.',
      },
      tags: ['missing-info', 'ratio'],
      difficulty: 3,
    },
    {
      id: 'n05-08',
      text: {
        fr: 'En 2025, plus des trois quarts des places offertes lors des animations ont été occupées.',
        de: '2025 waren mehr als drei Viertel der bei Veranstaltungen angebotenen Plätze besetzt.',
      },
      tags: ['ratio', 'sum-average', 'range'],
      difficulty: 2,
    },
    {
      id: 'n05-09',
      text: {
        fr: 'En 2025, la bibliothèque a enregistré en moyenne plus de 6 200 prêts par mois.',
        de: '2025 verzeichnete die Bibliothek durchschnittlich mehr als 6 200 Ausleihen pro Monat.',
      },
      tags: ['sum-average', 'chart-reading', 'range'],
      difficulty: 2,
    },
    {
      id: 'n05-10',
      text: {
        fr: 'En 2025, les prêts de bandes dessinées ont été plus nombreux en juillet-août qu’en janvier-février.',
        de: '2025 gab es im Juli–August mehr Comic-Ausleihen als im Januar–Februar.',
      },
      tags: ['missing-info', 'chart-reading'],
      difficulty: 1,
    },
  ],
};
