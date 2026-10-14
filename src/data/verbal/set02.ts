import type { VerbalSet } from '../types';

export const set02: VerbalSet = {
  id: 'v02',
  title: 'Jobs de vacances 2027 – Commune de Mëllerbaach',
  themeDe: 'Ferienjobs für Studierende: Alter, Zeiträume, Vergütung und Vorrangregeln',
  tabs: [
    {
      id: 'conditions',
      title: 'Conditions',
      blocks: [
        { t: 'h', text: 'Conditions de participation – Jobs de vacances 2027' },
        {
          t: 'p',
          text: "Art. 1 – Le programme est ouvert aux étudiants âgés d'au moins 16 ans et de moins de 26 ans au premier jour de la période de travail attribuée. Le candidat doit être inscrit, pour l'année scolaire ou académique 2026/2027, dans un établissement d'enseignement secondaire ou supérieur.",
        },
        {
          t: 'p',
          text: "Art. 2 – Chaque étudiant ne peut se voir attribuer qu'une seule période de travail par été. Une deuxième période peut toutefois lui être attribuée lorsque des postes restent vacants après la clôture des confirmations.",
        },
        {
          t: 'p',
          text: "Art. 3 – Les postes sont attribués en priorité aux candidats résidant dans la commune. Parmi ceux-ci, la priorité est donnée aux candidats qui n'ont encore jamais occupé de job de vacances auprès de la commune. Les candidats non-résidents ne sont retenus que pour les postes restés libres.",
        },
        {
          t: 'p',
          text: 'Art. 4 – Les étudiants âgés de moins de 18 ans au premier jour de la période ne peuvent pas être affectés au service technique.',
        },
        {
          t: 'p',
          text: 'Art. 5 – La durée de travail est de 40 heures par semaine, du lundi au vendredi. Pour les étudiants âgés de moins de 18 ans, elle est réduite à 32 heures par semaine.',
        },
        {
          t: 'p',
          text: 'Art. 6 – Une candidature est complète lorsque le formulaire en ligne a été validé et que toutes les pièces demandées ont été transmises. Les candidatures encore incomplètes à la date limite ne sont pas prises en compte.',
        },
      ],
    },
    {
      id: 'calendrier',
      title: 'Calendrier',
      blocks: [
        { t: 'h', text: 'Échéances et périodes de travail' },
        {
          t: 'table',
          head: ['Étape / période', 'Dates'],
          rows: [
            ['Dépôt des candidatures', 'du 1er février au 15 mars 2027'],
            ['Communication des résultats', 'au plus tard le 30 avril 2027'],
            ['Confirmation par le candidat retenu', 'dans les 10 jours suivant la communication du résultat'],
            ['Période 1', 'du lundi 5 juillet au vendredi 16 juillet 2027'],
            ['Période 2', 'du lundi 19 juillet au vendredi 30 juillet 2027'],
            ['Période 3', 'du lundi 2 août au vendredi 13 août 2027'],
            ['Période 4', 'du lundi 16 août au vendredi 27 août 2027'],
          ],
        },
        {
          t: 'p',
          text: "Le candidat indique au maximum deux périodes souhaitées, par ordre de préférence. Un candidat retenu qui ne confirme pas son poste dans le délai perd le bénéfice de l'attribution ; le poste est alors proposé au candidat suivant sur la liste.",
        },
      ],
    },
    {
      id: 'postes',
      title: 'Postes et salaires',
      blocks: [
        { t: 'h', text: 'Postes proposés et rémunération' },
        {
          t: 'table',
          head: ['Service', 'Postes par période', 'Exigence particulière'],
          rows: [
            ['Accueil et administration', '4', 'aucune'],
            ['Service technique (voirie, espaces verts)', '8', '18 ans révolus au premier jour de la période'],
            ['Piscine en plein air', '5', 'brevet de premiers secours'],
            ['Maison relais (animation)', '6', "brevet d'animateur ou formation équivalente"],
          ],
        },
        {
          t: 'p',
          text: "Rémunération horaire brute : 12,00 € pour les étudiants âgés de moins de 18 ans et 14,50 € pour les étudiants âgés de 18 ans ou plus. L'âge pris en compte est celui atteint au premier jour de la période.",
        },
        {
          t: 'p',
          text: 'Un supplément de 1,50 € brut est versé pour chaque heure prestée au service technique.',
        },
        {
          t: 'p',
          text: 'Le salaire est versé par virement au plus tard à la fin du mois qui suit la période travaillée.',
        },
      ],
    },
    {
      id: 'courriel',
      title: 'Courriel du 8/03',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Service des ressources humaines',
            'À : Candidats et personnes intéressées – jobs de vacances 2027',
            'Date : 8 mars 2027',
            "Objet : Changements pour l'été 2027",
          ],
        },
        { t: 'p', text: 'Madame, Monsieur,' },
        {
          t: 'p',
          text: 'Lors de sa séance du jeudi 4 mars 2027, le collège des bourgmestre et échevins a pris les décisions suivantes.',
        },
        {
          t: 'p',
          text: 'En raison de travaux de rénovation, la piscine en plein air sera fermée à partir du 1er août 2027. Les postes de la piscine sont par conséquent supprimés pour les périodes 3 et 4.',
        },
        {
          t: 'p',
          text: 'Pour compenser, le nombre de postes à la Maison relais est porté à 9 pour les périodes 3 et 4. Les autres services et périodes restent inchangés.',
        },
        {
          t: 'p',
          text: 'La date limite de dépôt des candidatures est reportée, pour tous les candidats, au lundi 22 mars 2027 inclus.',
        },
        {
          t: 'p',
          text: "Les étudiants affectés à la Maison relais devront en outre remettre un extrait récent du casier judiciaire avant le début de leur période.",
        },
        { t: 'p', text: "Nous vous prions d'agréer, Madame, Monsieur, nos salutations distinguées." },
      ],
    },
    {
      id: 'bilan',
      title: 'Bilan 2026',
      blocks: [
        { t: 'h', text: "Bilan de l'édition 2026" },
        {
          t: 'p',
          text: "En 2026, la commune a reçu 214 candidatures pour 92 postes. 87 postes ont été occupés ; les 5 postes restés vacants concernaient la Maison relais, faute de candidats titulaires du brevet d'animateur.",
        },
        {
          t: 'p',
          text: "Parmi les 87 étudiants engagés, 71 résidaient dans la commune et 16 n'y résidaient pas. 23 étudiants avaient moins de 18 ans au début de leur période.",
        },
        {
          t: 'p',
          text: "L'enquête de fin d'été, à laquelle 64 étudiants ont répondu, indique que 90 % des répondants du service technique se déclarent satisfaits, contre 72 % des répondants de l'accueil et de l'administration.",
        },
        {
          t: 'p',
          text: 'Plusieurs chefs de service signalent que des étudiants ont demandé à travailler plus de deux semaines.',
        },
        {
          t: 'p',
          text: 'Recommandation du service des ressources humaines : examiner la possibilité de proposer des périodes de trois semaines.',
        },
      ],
    },
    {
      id: 'faq',
      title: 'FAQ',
      blocks: [
        { t: 'h', text: 'Questions fréquentes' },
        { t: 'p', text: 'Quelles pièces dois-je joindre à ma candidature ?' },
        {
          t: 'p',
          text: "Une copie de votre carte d'identité, un certificat de scolarité pour l'année 2026/2027, un relevé d'identité bancaire et, le cas échéant, une copie du brevet exigé pour le poste. Les candidats mineurs joignent en outre une autorisation parentale signée.",
        },
        { t: 'p', text: 'Puis-je choisir mon service ?' },
        {
          t: 'p',
          text: "Vous pouvez indiquer un service souhaité. La commune s'efforce d'en tenir compte, mais l'affectation est décidée par le service des ressources humaines en fonction des besoins.",
        },
        { t: 'p', text: 'Des frères et sœurs peuvent-ils travailler pendant la même période ?' },
        { t: 'p', text: "Oui, à condition qu'ils ne soient pas affectés au même service." },
        { t: 'p', text: 'Des heures supplémentaires sont-elles possibles ?' },
        {
          t: 'p',
          text: "Non. Aucune heure ne peut être prestée au-delà de la durée de travail fixée à l'article 5 des conditions de participation.",
        },
        { t: 'p', text: 'Que faire en cas de maladie pendant ma période ?' },
        {
          t: 'p',
          text: "Prévenez votre chef de service avant 9h00 le premier jour d'absence et transmettez un certificat médical dans les trois jours. Les journées d'absence ne peuvent pas être rattrapées après la fin de la période.",
        },
      ],
    },
  ],
  statements: [
    {
      id: 'v02-01',
      text: 'Un étudiant de 16 ans peut travailler 40 heures par semaine si son chef de service l’y autorise.',
      tags: ['exception', 'combine-tabs'],
      difficulty: 1,
    },
    {
      id: 'v02-02',
      text: 'Un étudiant âgé de 19 ans au premier jour de sa période et affecté au service technique perçoit 16,00 € brut par heure de travail.',
      tags: ['combine-tabs', 'conditions'],
      difficulty: 1,
    },
    {
      id: 'v02-03',
      text: 'Un candidat résidant dans la commune qui a déjà occupé un job de vacances communal en 2026 n’obtiendra aucun poste en 2027.',
      tags: ['missing-info', 'conditions'],
      difficulty: 2,
    },
    {
      id: 'v02-04',
      text: 'Sur l’ensemble de l’été 2027, la piscine en plein air proposera 20 postes d’étudiants.',
      tags: ['combine-tabs', 'dates'],
      difficulty: 2,
    },
    {
      id: 'v02-05',
      text: 'Une candidate qui fêtera ses 18 ans le mardi 20 juillet 2027 ne pourra pas être affectée au service technique pendant la période 2.',
      tags: ['dates', 'conditions'],
      difficulty: 3,
    },
    {
      id: 'v02-06',
      text: 'Le taux de satisfaction plus élevé observé en 2026 au service technique s’explique par la nature des travaux qui y sont effectués.',
      tags: ['overreach'],
      difficulty: 2,
    },
    {
      id: 'v02-07',
      text: 'Une candidature complète déposée le vendredi 19 mars 2027 sera écartée parce qu’elle est arrivée trop tard.',
      tags: ['dates', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v02-08',
      text: 'Pendant la période 4, la Maison relais offre davantage de postes d’étudiants que le service technique.',
      tags: ['combine-tabs', 'similar-rules'],
      difficulty: 2,
    },
    {
      id: 'v02-09',
      text: 'Deux frères ne peuvent pas être affectés tous les deux à la Maison relais pendant la même période.',
      tags: ['conditions'],
      difficulty: 2,
    },
    {
      id: 'v02-10',
      text: 'Un étudiant ayant obtenu un poste pour la période 1 travaillera également pendant la période 3.',
      tags: ['exception', 'missing-info'],
      difficulty: 3,
    },
  ],
};
