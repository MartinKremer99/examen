import type { VerbalSet } from '../types';

export const set06: VerbalSet = {
  id: 'v06',
  title: 'Collecte des déchets et parc à conteneurs – Commune de Bréckeldall',
  themeDe: 'Müllabfuhr und Recyclinghof: Abfuhrkalender, Feiertage, Zugang, Mengen und Tarife',
  tabs: [
    {
      id: 'reglement',
      title: 'Règlement de collecte',
      blocks: [
        { t: 'h', text: 'Règlement communal relatif à la collecte des déchets ménagers (extraits)' },
        {
          t: 'p',
          text: "Art. 3 – Les déchets ménagers sont collectés en porte-à-porte selon quatre flux : déchets résiduels (bac gris), biodéchets (bac vert), papier et carton (bac bleu) et emballages PMC (sacs jaunes). Le verre n'est pas collecté en porte-à-porte ; il est déposé dans les conteneurs à verre ou au parc à conteneurs.",
        },
        {
          t: 'p',
          text: "Art. 4 – Les bacs et sacs sont déposés en bordure de la voie publique au plus tôt la veille de la collecte à 18h00 et au plus tard le jour de la collecte à 6h00. Ils sont retirés de la voie publique le jour même de la collecte.",
        },
        {
          t: 'p',
          text: "Art. 5 – Les bacs contenant des déchets non conformes au flux concerné ne sont pas vidés. Un autocollant indiquant le motif du refus est apposé sur le bac.",
        },
        {
          t: 'p',
          text: "Art. 6 – Lorsqu'un jour de collecte coïncide avec un jour férié, la collecte est reportée au premier jour ouvrable suivant, sauf disposition contraire publiée par l'administration communale.",
        },
        {
          t: 'p',
          text: "Art. 7 – Les biodéchets comprennent les restes de repas, les épluchures et les petits déchets de jardin. Les sacs en plastique, y compris ceux dits « biodégradables », sont interdits dans le bac vert.",
        },
      ],
    },
    {
      id: 'calendrier',
      title: 'Calendrier déc.–janv.',
      blocks: [
        { t: 'h', text: 'Calendrier des collectes – décembre 2026 et janvier 2027' },
        {
          t: 'table',
          head: ['Collecte', 'Secteur Nord', 'Secteur Sud'],
          rows: [
            ['Déchets résiduels (bac gris)', 'chaque mardi', 'chaque vendredi'],
            ['Biodéchets (bac vert)', 'mercredis 2, 16 et 30 décembre ; 13 et 27 janvier', 'mercredis 9 et 23 décembre ; 6 et 20 janvier'],
            ['Papier et carton (bac bleu)', 'lundis 7 décembre et 4 janvier', 'lundis 14 décembre et 11 janvier'],
            ['Emballages PMC (sacs jaunes)', 'jeudis 10 et 24 décembre ; 7 et 21 janvier', 'jeudis 3, 17 et 31 décembre ; 14 et 28 janvier'],
            ['Sapins de Noël', 'mardi 12 janvier', 'vendredi 15 janvier'],
          ],
        },
        {
          t: 'p',
          text: 'Jours fériés de la période : vendredi 25 décembre 2026, samedi 26 décembre 2026 et vendredi 1er janvier 2027.',
        },
        {
          t: 'p',
          text: 'Le secteur Nord comprend les localités situées au nord de la Sûre ; le secteur Sud comprend le centre de Bréckeldall et les localités situées au sud de la rivière.',
        },
      ],
    },
    {
      id: 'parc',
      title: 'Parc à conteneurs',
      blocks: [
        { t: 'h', text: "Parc à conteneurs – conditions d'accès" },
        {
          t: 'p',
          text: "L'accès au parc à conteneurs est réservé aux ménages résidant dans la commune de Bréckeldall, sur présentation du badge personnel du ménage. Le premier badge est délivré gratuitement par le secrétariat communal ; le remplacement d'un badge perdu ou détérioré est facturé 10 €.",
        },
        {
          t: 'table',
          head: ['Jour', "Heures d'ouverture"],
          rows: [
            ['Mardi', '13h00 – 19h00'],
            ['Mercredi', '08h00 – 12h00'],
            ['Vendredi', '13h00 – 19h00'],
            ['Samedi', '08h00 – 17h00'],
          ],
        },
        { t: 'p', text: 'Le parc est fermé le dimanche, le lundi, le jeudi et les jours fériés.' },
        {
          t: 'p',
          text: "Le volume total apporté lors d'un même passage ne peut dépasser 3 m³. Les remorques dont la masse maximale autorisée dépasse 750 kg ne sont pas admises.",
        },
        {
          t: 'p',
          text: "Les déchets d'origine professionnelle ne sont acceptés que le mercredi, de 08h00 à 12h00, sur présentation d'une autorisation délivrée par le service technique communal.",
        },
      ],
    },
    {
      id: 'tarifs',
      title: 'Quantités et tarifs',
      blocks: [
        { t: 'h', text: 'Quantités admises gratuitement et tarifs' },
        {
          t: 'table',
          head: ['Fraction', 'Gratuit jusqu’à', 'Au-delà'],
          rows: [
            ['Déchets verts (tontes, branchages)', '2 m³ par passage', '15 € par m³ entamé'],
            ['Bois traité, bois de démolition', '1 m³ par passage', '20 € par m³ entamé'],
            ['Gravats inertes', '0,5 m³ par passage', '40 € par m³ entamé'],
            ['Encombrants (meubles, matelas)', '–', '25 € par m³ entamé'],
            ['Pneus sans jante', '4 pneus par an', '3 € par pneu'],
            ['Verre, papier, métaux, appareils électriques', 'sans limite', 'gratuit'],
          ],
        },
        {
          t: 'p',
          text: "Tout m³ entamé est facturé en entier. Les volumes sont estimés par le préposé du parc, dont l'appréciation fait foi. Le paiement s'effectue uniquement par carte bancaire.",
        },
        {
          t: 'p',
          text: "Enlèvement des encombrants à domicile : sur rendez-vous, forfait de 45 € jusqu'à 2 m³, puis 25 € par m³ supplémentaire entamé. Deux enlèvements au maximum par ménage et par année civile.",
        },
      ],
    },
    {
      id: 'avis',
      title: 'Avis du 20/11',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Service écologique, administration communale de Bréckeldall',
            'À : Tous les ménages',
            'Date : 20 novembre 2026',
            'Objet : Collectes de fin d’année et modifications à partir de 2027',
          ],
        },
        {
          t: 'p',
          text: "Par dérogation à l'article 6 du règlement de collecte, les collectes des déchets résiduels du secteur Sud prévues le vendredi 25 décembre 2026 et le vendredi 1er janvier 2027 sont avancées au jeudi précédent, soit le jeudi 24 décembre 2026 et le jeudi 31 décembre 2026. Les autres collectes ont lieu aux dates du calendrier.",
        },
        {
          t: 'p',
          text: 'Du 1er décembre 2026 au 28 février 2027, le parc à conteneurs fermera à 18h00 au lieu de 19h00 les mardis et vendredis.',
        },
        {
          t: 'p',
          text: "À partir du 1er janvier 2027, chaque ménage peut déposer gratuitement au parc à conteneurs 1 m³ d'encombrants par année civile. Au-delà, le tarif de 25 € par m³ entamé reste applicable. L'enlèvement à domicile reste facturé selon le forfait en vigueur.",
        },
        {
          t: 'p',
          text: 'Les sapins de Noël sont collectés sans décorations, sans pied et sans sac. Les sapins de plus de 2 m doivent être coupés en deux.',
        },
      ],
    },
    {
      id: 'bilan',
      title: 'Bilan 2025',
      blocks: [
        { t: 'h', text: 'Rapport annuel 2025 du service écologique (extraits)' },
        {
          t: 'p',
          text: 'Les déchets résiduels collectés ont atteint 164 kg par habitant en 2025, contre 178 kg en 2024. Les biodéchets collectés sont passés de 61 kg à 72 kg par habitant.',
        },
        {
          t: 'p',
          text: 'En 2025, le parc à conteneurs a enregistré 38 400 passages, dont 46 % le samedi. Le nombre de badges actifs est passé de 4 610 à la fin de 2024 à 4 950 à la fin de 2025.',
        },
        {
          t: 'p',
          text: 'Au cours de 500 contrôles aléatoires de bacs verts réalisés en 2025, des déchets non conformes ont été constatés dans 6 % des cas, principalement des sacs en plastique.',
        },
        {
          t: 'p',
          text: "Recommandation de la commission consultative de l'environnement : ouvrir le parc à conteneurs le jeudi après-midi dès 2027, afin de réduire l'affluence du samedi.",
        },
      ],
    },
  ],
  statements: [
    {
      id: 'v06-01',
      text: 'Dans le secteur Sud, la collecte du bac gris prévue le vendredi 25 décembre 2026 aura lieu le samedi 26 décembre 2026.',
      tags: ['dates', 'exception', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v06-02',
      text: 'Le parc à conteneurs a enregistré davantage de passages en 2025 qu’en 2024.',
      tags: ['missing-info', 'overreach'],
      difficulty: 2,
    },
    {
      id: 'v06-03',
      text: 'Un ménage de la commune qui dépose 2,6 m³ de déchets verts lors d’un seul passage au parc à conteneurs paie 15 €.',
      tags: ['conditions'],
      difficulty: 2,
    },
    {
      id: 'v06-04',
      text: "Un menuisier établi à Bréckeldall peut déposer un samedi au parc à conteneurs des chutes de bois provenant de son activité professionnelle, s'il présente le badge de son ménage.",
      tags: ['exception', 'conditions'],
      difficulty: 1,
    },
    {
      id: 'v06-05',
      text: 'Dans le secteur Sud, le bac gris et les sacs jaunes seront collectés le même jour, le jeudi 31 décembre 2026.',
      tags: ['combine-tabs', 'dates'],
      difficulty: 3,
    },
    {
      id: 'v06-06',
      text: 'En 2025, des déchets non conformes se trouvaient dans 6 % de l’ensemble des bacs verts de la commune.',
      tags: ['quantifiers', 'overreach'],
      difficulty: 2,
    },
    {
      id: 'v06-07',
      text: "En février 2027, un ménage qui dépose au parc à conteneurs, pour la première fois de l'année, 1 m³ d'encombrants paie 25 €.",
      tags: ['combine-tabs', 'exception', 'dates'],
      difficulty: 2,
    },
    {
      id: 'v06-08',
      text: 'Un habitant qui se présente au parc à conteneurs le mardi 5 janvier 2027 à 18h30 trouvera le parc fermé.',
      tags: ['dates', 'exception', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v06-09',
      text: 'Au cours de l’année 2027, le parc à conteneurs ouvrira également le jeudi après-midi.',
      tags: ['overreach', 'missing-info'],
      difficulty: 1,
    },
    {
      id: 'v06-10',
      text: 'Lors d’un même passage, un ménage de la commune peut déposer sans frais 2 m³ de déchets verts et 1 m³ de bois traité.',
      tags: ['conditions', 'combine-tabs'],
      difficulty: 3,
    },
  ],
};
