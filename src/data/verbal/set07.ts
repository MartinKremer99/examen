import type { VerbalSet } from '../types';

export const set07: VerbalSet = {
  id: 'v07',
  title: 'Maison relais « Am Bongert » – Commune de Hëllefeld',
  themeDe: 'Schulische Betreuung (Maison relais): Anmeldung, Vorrang, Zeiten, Elternbeitrag und Abmeldungen',
  tabs: [
    {
      id: 'reglement',
      title: "Règlement d'ordre intérieur",
      blocks: [
        { t: 'h', text: "Règlement d'ordre intérieur de la maison relais (extraits)" },
        {
          t: 'p',
          text: "Art. 1 – La maison relais « Am Bongert » accueille les enfants scolarisés à l'école fondamentale de Hëllefeld, du cycle 1 au cycle 4. Sa capacité est de 180 places pour la plage de midi et de 140 places pour les plages de l'après-midi.",
        },
        {
          t: 'p',
          text: "Art. 2 – L'inscription est annuelle. Les demandes pour l'année scolaire suivante sont introduites du 1er au 30 avril. Chaque enfant doit être inscrit pour au moins deux plages par semaine.",
        },
        {
          t: 'p',
          text: "Art. 3 – Lorsque le nombre de demandes dépasse le nombre de places, les places sont attribuées selon les critères suivants, appliqués dans l'ordre : 1° enfants dont les deux parents, ou le parent qui en a seul la charge, exercent une activité professionnelle ou suivent une formation ; 2° enfants dont un frère ou une sœur est déjà inscrit ; 3° enfants du cycle 1 ; 4° date de réception de la demande complète. Un critère n'est pris en compte que pour départager des demandes équivalentes au regard des critères précédents.",
        },
        {
          t: 'p',
          text: "Art. 4 – Pendant les vacances scolaires, l'accueil fait l'objet d'une inscription séparée. Une inscription pour l'année scolaire ne donne pas droit à une place pendant les vacances.",
        },
      ],
    },
    {
      id: 'horaires',
      title: 'Horaires',
      blocks: [
        { t: 'h', text: "Plages d'accueil pendant les semaines scolaires" },
        {
          t: 'table',
          head: ['Plage', 'Jours', 'Horaire', 'Heures facturées'],
          rows: [
            ['Accueil du matin', 'du lundi au vendredi', '07h00 – 08h00', '1 heure'],
            ['Plage de midi (repas inclus)', 'du lundi au vendredi', '12h00 – 14h00', '2 heures + repas'],
            ['Après-midi après les cours', 'lundi, mercredi, vendredi', '16h00 – 19h00', '3 heures'],
            ['Après-midi sans cours', 'mardi, jeudi', '14h00 – 19h00', '5 heures'],
          ],
        },
        {
          t: 'p',
          text: "Les enfants doivent être repris au plus tard à 19h00. Le premier retard au cours d'une année scolaire donne lieu à un rappel écrit. À partir du deuxième retard au cours de la même année scolaire, un supplément de 15 € par quart d'heure entamé est facturé.",
        },
        {
          t: 'p',
          text: 'Seules les personnes figurant sur la fiche d’inscription peuvent reprendre l’enfant. Une pièce d’identité peut être demandée.',
        },
      ],
    },
    {
      id: 'bareme',
      title: 'Participation financière',
      blocks: [
        { t: 'h', text: 'Barème communal de participation des parents' },
        {
          t: 'table',
          head: ['Revenu mensuel brut du ménage', 'Prix par heure facturée', 'Prix du repas'],
          rows: [
            ['moins de 3 000 €', '0,50 €', '1,50 €'],
            ['de 3 000 € à 4 999 €', '1,50 €', '3,00 €'],
            ['de 5 000 € à 7 499 €', '3,00 €', '4,50 €'],
            ['7 500 € et plus', '4,50 €', '4,50 €'],
          ],
        },
        {
          t: 'p',
          text: "Pour le deuxième enfant d'un même ménage inscrit à la maison relais, ainsi que pour chaque enfant suivant, le prix par heure est réduit de 50 %. Le prix du repas n'est pas réduit.",
        },
        {
          t: 'p',
          text: "Les ménages qui ne remettent pas de justificatif de revenu sont facturés selon la tranche la plus élevée. La facturation est mensuelle et se fait sur la base des plages réservées, que l'enfant soit présent ou non, sous réserve des règles relatives aux absences.",
        },
      ],
    },
    {
      id: 'faq',
      title: 'FAQ absences',
      blocks: [
        { t: 'h', text: 'Absences et annulations – questions fréquentes' },
        { t: 'p', text: 'Mon enfant est malade. Les plages réservées sont-elles facturées ?' },
        {
          t: 'p',
          text: "Non, si l'absence est signalée au plus tard à 8h30 le jour même. À partir du troisième jour d'absence consécutif, un certificat médical doit être remis ; à défaut, les plages sont facturées à partir de ce troisième jour.",
        },
        { t: 'p', text: 'Puis-je annuler ponctuellement une plage réservée ?' },
        {
          t: 'p',
          text: "Oui, via le portail parents, au plus tard 7 jours calendrier avant la date concernée. Une plage annulée plus tard est facturée, sauf en cas de maladie.",
        },
        { t: 'p', text: "Puis-je modifier l'inscription annuelle ?" },
        {
          t: 'p',
          text: "Une modification est possible une fois par trimestre. Elle prend effet le 1er du mois suivant, sous réserve de places disponibles.",
        },
      ],
    },
    {
      id: 'note',
      title: 'Note aux parents',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Direction de la maison relais « Am Bongert »',
            'À : Parents des enfants inscrits',
            'Date : 25 janvier 2027',
            'Objet : Nouveautés à partir de février 2027',
          ],
        },
        { t: 'p', text: 'Chers parents,' },
        {
          t: 'p',
          text: "À compter du 1er février 2027, une plage d'accueil peut être annulée sans frais via le portail parents au plus tard 48 heures avant son début, au lieu de 7 jours jusqu'à présent. Les repas restent soumis au délai de 7 jours calendrier.",
        },
        {
          t: 'p',
          text: "La maison relais sera fermée le lundi 15 mars 2027 en raison d'une journée de formation du personnel. Les plages réservées ce jour-là ne seront pas facturées.",
        },
        {
          t: 'p',
          text: "Par ailleurs, le collège des bourgmestre et échevins envisage de rendre gratuite la plage de midi à partir de la rentrée 2027. Une proposition en ce sens sera soumise au conseil communal au printemps.",
        },
        { t: 'p', text: "L'équipe éducative" },
      ],
    },
    {
      id: 'bilan',
      title: 'Bilan 2025-2026',
      blocks: [
        { t: 'h', text: "Bilan de l'année scolaire 2025-2026" },
        {
          t: 'p',
          text: "En moyenne, 171 enfants ont fréquenté la plage de midi et 136 enfants les plages de l'après-midi. Le taux d'occupation des plages de l'après-midi a atteint 97 %.",
        },
        {
          t: 'p',
          text: "Une enquête de satisfaction a été adressée aux 260 familles dont un enfant était inscrit ; 212 familles ont répondu. 88 % des familles ayant répondu se déclarent satisfaites ou très satisfaites.",
        },
        {
          t: 'p',
          text: "Les retards à la reprise des enfants ont diminué : 64 retards ont été enregistrés, contre 95 l'année précédente. Le personnel a suivi en moyenne 3,5 jours de formation continue.",
        },
        {
          t: 'p',
          text: "Les familles ayant répondu à l'enquête souhaitent en priorité une plus grande variété des activités sportives et une meilleure information sur les menus.",
        },
      ],
    },
  ],
  statements: [
    {
      id: 'v07-01',
      text: "Lorsque les places sont insuffisantes, un enfant dont la sœur est déjà inscrite, dont le père travaille et dont la mère n'exerce aucune activité professionnelle et ne suit aucune formation, est prioritaire sur un enfant sans frère ni sœur inscrit dont les deux parents travaillent.",
      tags: ['conditions', 'similar-rules'],
      difficulty: 2,
    },
    {
      id: 'v07-02',
      text: 'Un ménage dont le revenu mensuel brut est de 4 200 € et dont un seul enfant est inscrit, le mardi et le jeudi, à la plage de midi et à la plage de l’après-midi, paie 27 € par semaine pour cet accueil.',
      tags: ['combine-tabs', 'conditions'],
      difficulty: 3,
    },
    {
      id: 'v07-03',
      text: "En 2025-2026, des demandes d'accueil pour l'après-midi ont été refusées faute de places.",
      tags: ['missing-info', 'overreach'],
      difficulty: 2,
    },
    {
      id: 'v07-04',
      text: 'Pour un ménage dont le revenu mensuel brut est de 6 000 € et dont deux enfants sont inscrits, le repas du deuxième enfant coûte 2,25 €.',
      tags: ['exception'],
      difficulty: 2,
    },
    {
      id: 'v07-05',
      text: "Un parent qui annule via le portail, le mardi 9 février 2027 à 10h00, la plage de l'après-midi (14h00–19h00) du jeudi 11 février 2027 ne paiera pas cette plage.",
      tags: ['dates', 'combine-tabs'],
      difficulty: 3,
    },
    {
      id: 'v07-06',
      text: "Un parent qui annule via le portail, le lundi 8 février 2027, le repas de midi du jeudi 11 février 2027 de son enfant, qui n'est pas malade, ne paiera pas ce repas.",
      tags: ['similar-rules', 'dates', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v07-07',
      text: 'Plus de 80 % des 260 familles qui ont reçu l’enquête sont satisfaites ou très satisfaites de la maison relais.',
      tags: ['quantifiers', 'overreach'],
      difficulty: 3,
    },
    {
      id: 'v07-08',
      text: "Un enfant malade, absent le lundi et le mardi, dont l'absence a été signalée chaque matin avant 8h00, ne sera facturé pour aucune de ces deux journées, même si ses parents ne remettent pas de certificat médical.",
      tags: ['exception', 'conditions'],
      difficulty: 2,
    },
    {
      id: 'v07-09',
      text: 'La plage de midi sera gratuite à partir de la rentrée scolaire 2027.',
      tags: ['overreach'],
      difficulty: 1,
    },
    {
      id: 'v07-10',
      text: "Un parent qui reprend son enfant à 19h10, pour la première fois en retard depuis la rentrée, devra payer un supplément de 15 €.",
      tags: ['conditions'],
      difficulty: 1,
    },
  ],
};
