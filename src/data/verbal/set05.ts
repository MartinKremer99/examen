import type { VerbalSet } from '../types';

export const set05: VerbalSet = {
  id: 'v05',
  title: 'Subsides aux associations – Commune de Kalbaach 2027',
  themeDe: 'Gemeindezuschüsse für Kultur- und Sportvereine: Kriterien, Beträge, Fristen und Ratsbeschluss',
  tabs: [
    {
      id: 'reglement',
      title: 'Règlement',
      blocks: [
        { t: 'h', text: 'Règlement communal relatif aux subsides aux associations' },
        {
          t: 'p',
          text: "Art. 1 – Peuvent bénéficier d'un subside ordinaire annuel les associations sans but lucratif qui, cumulativement, ont leur siège dans la commune de Kalbaach, sont inscrites au registre communal des associations depuis au moins un an au 1er janvier de l'exercice et proposent des activités ouvertes à de nouveaux membres.",
        },
        {
          t: 'p',
          text: "Art. 2 – Les associations dont moins de la moitié des membres résident dans la commune ne perçoivent que 50 % du montant de base. Les majorations ne sont pas concernées par cette réduction.",
        },
        {
          t: 'p',
          text: "Art. 3 – Le subside ordinaire ne peut pas financer des frais de restauration lors de manifestations réservées aux membres.",
        },
        {
          t: 'p',
          text: "Art. 4 – Un subside extraordinaire peut être accordé pour un projet ponctuel (anniversaire, acquisition de matériel). Il couvre au plus 40 % des dépenses justifiées, sans pouvoir dépasser 2 500 €. Une association ne peut obtenir qu'un seul subside extraordinaire par période de trois exercices consécutifs.",
        },
        {
          t: 'p',
          text: "Art. 5 – Les subsides sont alloués par le conseil communal, sur proposition du collège des bourgmestre et échevins. La commission consultative des sports et de la culture émet un avis préalable, qui ne lie pas le conseil communal.",
        },
        {
          t: 'p',
          text: "Art. 6 – Un dossier incomplet ou remis après la date limite n'est pas pris en considération pour l'exercice concerné, sauf cas de force majeure reconnu par le collège des bourgmestre et échevins.",
        },
      ],
    },
    {
      id: 'bareme',
      title: 'Barème',
      blocks: [
        { t: 'h', text: 'Barème du subside ordinaire' },
        {
          t: 'table',
          head: ['Catégorie', 'Montant de base annuel'],
          rows: [
            ['Associations sportives', '600 €'],
            ['Associations culturelles (musique, théâtre, chant)', '500 €'],
            ['Autres associations (loisirs, amicales, associations de parents)', '250 €'],
          ],
        },
        { t: 'h', text: 'Majorations' },
        {
          t: 'table',
          head: ['Majoration', 'Montant', 'Conditions'],
          rows: [
            ['Jeunes membres', '15 € par membre âgé de moins de 18 ans', 'plafonnée à 1 200 € par association'],
            ['Équipe engagée en championnat national', '300 € par équipe', 'associations sportives uniquement ; au maximum 3 équipes'],
            ['Encadrement qualifié', '200 €', "une seule fois par association, sur présentation du diplôme de l'entraîneur ou du chef de musique"],
          ],
        },
        {
          t: 'p',
          text: "Le subside ordinaire total (montant de base et majorations) est plafonné à 3 000 € par association et par exercice. L'âge des membres est apprécié au 1er janvier de l'exercice.",
        },
      ],
    },
    {
      id: 'echeances',
      title: 'Échéances et pièces',
      blocks: [
        { t: 'h', text: 'Calendrier de la procédure 2027' },
        {
          t: 'table',
          head: ['Étape', 'Date'],
          rows: [
            ['Mise en ligne des formulaires sur le guichet électronique', 'lundi 1er février 2027'],
            ['Date limite de remise des dossiers', 'mercredi 31 mars 2027'],
            ['Avis de la commission consultative', 'au plus tard le 30 avril 2027'],
            ['Décision du conseil communal', 'séance de mai 2027'],
            ['Versement des subsides ordinaires', 'dans les 30 jours suivant la décision du conseil communal'],
            ['Versement des subsides extraordinaires', 'sur présentation des factures acquittées, au plus tard le 15 décembre 2027'],
          ],
        },
        { t: 'p', text: 'Un dossier est complet lorsqu’il comprend les pièces suivantes :' },
        {
          t: 'ul',
          items: [
            'le formulaire de demande signé par deux membres du comité ;',
            "le rapport d'activités de l'année 2026 ;",
            "les comptes 2026 approuvés par l'assemblée générale ;",
            "la liste des membres indiquant l'année de naissance et la commune de résidence de chacun ;",
            "un relevé d'identité bancaire (RIB) au nom de l'association ;",
            'pour les associations sportives : une attestation de la fédération mentionnant les équipes engagées en championnat national.',
          ],
        },
        {
          t: 'p',
          text: 'Les dossiers peuvent être remis par le guichet électronique ou sur papier au secrétariat communal.',
        },
      ],
    },
    {
      id: 'courriel',
      title: 'Courriel du 15/03',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Service Vie associative, administration communale de Kalbaach',
            'À : Présidents des associations inscrites au registre communal',
            'Date : 15 mars 2027',
            'Objet : Rappel – demandes de subsides 2027',
          ],
        },
        { t: 'p', text: 'Madame la Présidente, Monsieur le Président,' },
        {
          t: 'p',
          text: 'À ce jour, 22 des 41 associations inscrites au registre communal ont transmis leur demande de subside ordinaire pour 2027.',
        },
        {
          t: 'p',
          text: "En raison d'une panne du guichet électronique du 8 au 11 mars, le collège des bourgmestre et échevins a décidé de prolonger jusqu'au vendredi 9 avril 2027 le délai de remise des dossiers introduits par le guichet électronique. Pour les dossiers remis sur papier, la date limite du 31 mars 2027 reste inchangée.",
        },
        {
          t: 'p',
          text: "Les associations dont l'assemblée générale se tient après la date limite peuvent joindre à leur dossier des comptes 2026 non encore approuvés, à condition de transmettre la version approuvée au plus tard le 15 mai 2027.",
        },
        {
          t: 'p',
          text: "Enfin, le RIB n'est plus à fournir si les coordonnées bancaires de l'association n'ont pas changé depuis la demande de 2026.",
        },
        { t: 'p', text: "Nous vous prions d'agréer, Madame la Présidente, Monsieur le Président, nos salutations distinguées." },
      ],
    },
    {
      id: 'commission',
      title: 'Rapport de la commission',
      blocks: [
        { t: 'h', text: 'Rapport de la commission consultative des sports et de la culture' },
        {
          t: 'p',
          text: "En 2026, 38 associations ont introduit une demande de subside ordinaire. 35 ont obtenu un subside ; trois dossiers incomplets ont été écartés. Le montant total versé s'est élevé à 41 650 €, contre 39 200 € en 2025.",
        },
        {
          t: 'p',
          text: "Le nombre de membres de moins de 18 ans déclarés est passé de 1 050 en 2025 à 1 176 en 2026. Les associations qui ont enregistré la plus forte hausse de jeunes membres sont aussi celles qui ont organisé des journées portes ouvertes dans les écoles.",
        },
        {
          t: 'p',
          text: 'En 2026, cinq associations ont atteint le plafond de 3 000 € ; il s’agit exclusivement d’associations sportives.',
        },
        { t: 'p', text: "Propositions de la commission pour l'exercice 2027 :" },
        {
          t: 'ul',
          items: [
            'porter la majoration « jeunes membres » de 15 € à 20 € par membre ;',
            'relever le plafond global du subside ordinaire à 3 500 € ;',
            "accorder à l'Harmonie municipale de Kalbaach un subside extraordinaire de 2 500 € pour son 125e anniversaire (dépenses prévues : 7 200 €) ;",
            'rejeter la demande de subside extraordinaire du Tennis-Club Kalbaach, qui a déjà obtenu un tel subside en 2025.',
          ],
        },
      ],
    },
    {
      id: 'deliberation',
      title: 'Délibération',
      blocks: [
        {
          t: 'meta',
          lines: [
            'Extrait du registre aux délibérations du conseil communal de Kalbaach',
            'Séance publique du vendredi 21 mai 2027',
            'Présents : 11 membres sur 13',
            'Objet : Subsides aux associations – exercice 2027',
          ],
        },
        {
          t: 'p',
          text: "Le conseil communal, vu le règlement communal relatif aux subsides aux associations ; vu l'avis de la commission consultative des sports et de la culture ; sur proposition du collège des bourgmestre et échevins ; décide, par 9 voix contre 2 :",
        },
        {
          t: 'ul',
          items: [
            "de fixer la majoration « jeunes membres » à 18 € par membre âgé de moins de 18 ans pour l'exercice 2027, le plafond de cette majoration restant fixé à 1 200 € ;",
            'de maintenir le plafond global du subside ordinaire à 3 000 € par association ;',
            "d'allouer les subsides ordinaires 2027 conformément au tableau annexé, pour un montant total de 44 310 € ;",
            "d'accorder à l'Harmonie municipale de Kalbaach un subside extraordinaire de 2 500 € pour son 125e anniversaire ;",
            "d'ajourner sa décision sur la demande de subside extraordinaire du Tennis-Club Kalbaach, dans l'attente d'informations complémentaires.",
          ],
        },
        {
          t: 'p',
          text: "Le conseil prend acte de ce que deux associations ont remis leur dossier après la date limite en invoquant un cas de force majeure. Il appartient au collège des bourgmestre et échevins de se prononcer sur ces deux demandes.",
        },
      ],
    },
  ],
  statements: [
    {
      id: 'v05-01',
      text: 'Une association qui remet son dossier complet sur papier au secrétariat communal le 6 avril 2027 respecte le délai de remise qui lui est applicable.',
      tags: ['similar-rules', 'dates', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v05-02',
      text: "Calculé selon les règles applicables à l'exercice 2027, le subside ordinaire d'une association sportive dont tous les membres résident à Kalbaach, qui compte 30 membres âgés de moins de 18 ans au 1er janvier 2027 et qui n'a ni équipe en championnat national ni encadrant diplômé, s'élève à 1 140 €.",
      tags: ['combine-tabs', 'conditions'],
      difficulty: 3,
    },
    {
      id: 'v05-03',
      text: 'Les journées portes ouvertes organisées dans les écoles sont à l’origine de la hausse du nombre de jeunes membres des associations entre 2025 et 2026.',
      tags: ['overreach'],
      difficulty: 2,
    },
    {
      id: 'v05-04',
      text: "Calculé selon les règles applicables à l'exercice 2027, le subside ordinaire d'une association culturelle dont un tiers seulement des membres résident à Kalbaach et qui compte 10 membres âgés de moins de 18 ans s'élève à 340 €.",
      tags: ['exception', 'combine-tabs'],
      difficulty: 3,
    },
    {
      id: 'v05-05',
      text: 'Les deux associations qui ont remis leur dossier après la date limite en invoquant un cas de force majeure ne recevront pas de subside ordinaire pour 2027.',
      tags: ['exception', 'missing-info'],
      difficulty: 2,
    },
    {
      id: 'v05-06',
      text: "Une association qui remet son dossier sur papier le 30 mars 2027 et dont l'assemblée générale se tient le 24 avril 2027 peut joindre à son dossier des comptes 2026 qui n'ont pas encore été approuvés.",
      tags: ['exception', 'dates'],
      difficulty: 2,
    },
    {
      id: 'v05-07',
      text: "Pour l'exercice 2027, le plafond global du subside ordinaire est porté à 3 500 € par association.",
      tags: ['overreach', 'combine-tabs'],
      difficulty: 1,
    },
    {
      id: 'v05-08',
      text: 'Les 41 associations inscrites au registre communal ont toutes introduit une demande de subside ordinaire pour 2027.',
      tags: ['missing-info', 'quantifiers'],
      difficulty: 2,
    },
    {
      id: 'v05-09',
      text: "Le subside extraordinaire accordé à l'Harmonie municipale de Kalbaach représente moins de 40 % des dépenses prévues pour son 125e anniversaire.",
      tags: ['combine-tabs', 'conditions'],
      difficulty: 3,
    },
    {
      id: 'v05-10',
      text: 'Le conseil communal a suivi l’avis de la commission en rejetant la demande de subside extraordinaire du Tennis-Club Kalbaach.',
      tags: ['overreach', 'combine-tabs'],
      difficulty: 1,
    },
  ],
};
