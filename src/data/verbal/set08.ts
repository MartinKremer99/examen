import type { VerbalSet } from '../types';

export const set08: VerbalSet = {
  id: 'v08',
  title: "Fête d'été de Rëmeleng 2027",
  themeDe: 'Öffentliche Veranstaltung (Dorffest): Genehmigung, Fristen, Sicherheit, Lärm, Helfer und Wetter',
  tabs: [
    {
      id: 'conditions',
      title: "Conditions d'autorisation",
      blocks: [
        { t: 'h', text: 'Règlement communal sur les manifestations publiques (extraits)' },
        {
          t: 'p',
          text: "Art. 2 – Toute manifestation publique organisée sur le domaine public est soumise à l'autorisation préalable du collège des bourgmestre et échevins. La demande est introduite au moins huit semaines avant le premier jour de la manifestation lorsque plus de 500 participants sont attendus, et au moins quatre semaines avant dans les autres cas.",
        },
        {
          t: 'p',
          text: "Art. 3 – La demande comprend le formulaire officiel, un plan d'implantation, une attestation d'assurance responsabilité civile et, si plus de 500 participants sont attendus, un plan de sécurité. Les pièces manquantes peuvent être fournies jusqu'à la date fixée par l'administration communale ; à défaut, l'autorisation n'est pas délivrée.",
        },
        {
          t: 'p',
          text: "Art. 5 – La diffusion de musique amplifiée est autorisée jusqu'à 23h00 du dimanche soir au jeudi soir, et jusqu'à 1h00 dans les nuits du vendredi au samedi et du samedi au dimanche. Le bourgmestre peut accorder une dérogation jusqu'à 3h00 au plus tard, pour une seule nuit par manifestation.",
        },
        {
          t: 'p',
          text: "Art. 6 – Le site est nettoyé et le domaine public libéré au plus tard douze heures après la fin de la manifestation, sauf délai plus court fixé par l'administration communale.",
        },
      ],
    },
    {
      id: 'programme',
      title: 'Programme',
      blocks: [
        { t: 'h', text: "Programme de la Fête d'été – du 9 au 11 juillet 2027" },
        {
          t: 'table',
          head: ['Jour', 'Horaire', 'Activités'],
          rows: [
            ['Vendredi 9 juillet', '18h00 – 01h00', 'Ouverture officielle, concert de rock sur le podium'],
            ['Samedi 10 juillet', '14h00 – 02h00', 'Jeux pour enfants, marché artisanal, bal populaire'],
            ['Dimanche 11 juillet', '10h00 – 20h00', 'Brunch sous chapiteau, cortège, concert de la fanfare'],
          ],
        },
        {
          t: 'p',
          text: "Organisateur : Syndicat d'initiative de Rëmeleng asbl. Le podium, les stands et le chapiteau de 300 m² sont installés sur le parking de l'école fondamentale.",
        },
        {
          t: 'p',
          text: 'Montage : à partir du mercredi 7 juillet. Les boissons sont servies exclusivement dans des gobelets réutilisables consignés à 1 €.',
        },
      ],
    },
    {
      id: 'securite',
      title: 'Exigences de sécurité',
      blocks: [
        { t: 'h', text: 'Plan de sécurité – exigences minimales' },
        {
          t: 'ul',
          items: [
            "Agents de sécurité : un agent agréé par tranche entamée de 250 personnes dont la présence simultanée est attendue, avec un minimum de deux agents.",
            'Poste de secours : obligatoire lorsque la fréquentation simultanée attendue dépasse 1 000 personnes ; il est tenu par au moins deux secouristes diplômés.',
            'Bénévoles : âge minimum de 16 ans. Le service de boissons alcoolisées est réservé aux bénévoles majeurs. Chaque bénévole assiste à la séance d’information sur la sécurité.',
            'Issues de secours : au moins deux issues, dégagées en permanence, d’une largeur minimale de 2,40 m.',
          ],
        },
        { t: 'h', text: 'Conditions météorologiques' },
        {
          t: 'ul',
          items: [
            "Alerte jaune : le responsable de la sécurité de l'organisateur décide, en concertation avec le représentant de la commune, des mesures à prendre.",
            "Alerte orange : les chapiteaux et structures de plus de 50 m² sont évacués ; les activités en plein air peuvent se poursuivre.",
            'Alerte rouge : la manifestation est interrompue et le site est évacué.',
          ],
        },
      ],
    },
    {
      id: 'courriel',
      title: 'Courriel du 12/05',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Service des manifestations, administration communale de Rëmeleng',
            "À : Syndicat d'initiative de Rëmeleng asbl",
            'Date : 12 mai 2027',
            "Objet : Votre demande d'autorisation – Fête d'été 2027",
          ],
        },
        { t: 'p', text: 'Madame, Monsieur,' },
        {
          t: 'p',
          text: "Nous accusons réception de votre demande d'autorisation, reçue le lundi 3 mai 2027. Le dossier est complet, à l'exception de l'attestation d'assurance responsabilité civile, qui doit nous parvenir au plus tard le vendredi 4 juin 2027.",
        },
        {
          t: 'p',
          text: 'Le bourgmestre vous accorde une dérogation permettant la diffusion de musique amplifiée jusqu’à 2h00 dans la nuit du samedi 10 au dimanche 11 juillet 2027.',
        },
        {
          t: 'p',
          text: "Le parking de l'école devant être accessible aux parents d'élèves dès 7h30, le podium, les stands et le chapiteau devront y être démontés au plus tard le lundi 12 juillet 2027 à 7h00. Ce délai remplace celui de l'article 6 du règlement.",
        },
        { t: 'p', text: 'Veuillez agréer, Madame, Monsieur, nos salutations distinguées.' },
      ],
    },
    {
      id: 'pv',
      title: 'PV de coordination',
      blocks: [
        {
          t: 'meta',
          lines: [
            'Procès-verbal de la réunion de coordination du jeudi 17 juin 2027',
            "Présents : représentants du service des manifestations, de la police, du service d'incendie et de secours et du Syndicat d'initiative",
          ],
        },
        {
          t: 'p',
          text: "1. Fréquentation. Fréquentation simultanée maximale attendue : 800 personnes le vendredi, 1 400 le samedi et 600 le dimanche. L'organisateur prévoit 4 agents de sécurité le vendredi, 5 le samedi et 3 le dimanche.",
        },
        {
          t: 'p',
          text: "2. Assurance. L'organisateur confirme avoir transmis l'attestation d'assurance le 28 mai ; le service des manifestations en accuse réception.",
        },
        {
          t: 'p',
          text: "3. Bénévoles. 42 personnes se sont proposées comme bénévoles, dont 9 mineurs. La liste définitive sera arrêtée après vérification des conditions requises.",
        },
        {
          t: 'p',
          text: "4. Circulation. Le représentant de la police propose de fermer la rue de l'Église à la circulation le samedi à partir de 16h00. Cette proposition sera soumise au collège des bourgmestre et échevins.",
        },
        {
          t: 'p',
          text: '5. Météo. En cas de pluie le dimanche matin, le brunch sera déplacé dans la salle des fêtes.',
        },
      ],
    },
    {
      id: 'bilan',
      title: 'Bilan 2026',
      blocks: [
        { t: 'h', text: "Bilan de l'édition 2026" },
        {
          t: 'p',
          text: "L'édition 2026 a attiré environ 4 100 visiteurs sur trois jours, contre 3 700 en 2025. 38 bénévoles y ont participé.",
        },
        {
          t: 'p',
          text: "Le samedi, une alerte météorologique jaune a été émise en fin d'après-midi ; le responsable de la sécurité a fait évacuer le chapiteau par précaution pendant 30 minutes.",
        },
        {
          t: 'p',
          text: "Les secouristes sont intervenus à 11 reprises, sans hospitalisation. Trois plaintes pour nuisances sonores ont été enregistrées, toutes concernant la nuit du samedi au dimanche.",
        },
        {
          t: 'p',
          text: 'Sur 9 500 gobelets réutilisables mis en circulation, 7 % n’ont pas été restitués.',
        },
      ],
    },
  ],
  statements: [
    {
      id: 'v08-01',
      text: 'Dans la nuit du vendredi 9 au samedi 10 juillet 2027, la musique amplifiée pourra être diffusée jusqu’à 2h00.',
      tags: ['exception', 'dates', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v08-02',
      text: "La demande d'autorisation de la Fête d'été a été introduite dans le délai prévu par le règlement communal.",
      tags: ['dates', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v08-03',
      text: "La rue de l'Église sera fermée à la circulation à partir de 16h00 le samedi 10 juillet 2027.",
      tags: ['overreach', 'missing-info'],
      difficulty: 1,
    },
    {
      id: 'v08-04',
      text: "Pour chacun des trois jours, le nombre d'agents de sécurité prévu par l'organisateur atteint le minimum exigé.",
      tags: ['quantifiers', 'combine-tabs'],
      difficulty: 3,
    },
    {
      id: 'v08-05',
      text: "Les neuf mineurs qui se sont proposés comme bénévoles remplissent tous la condition d'âge pour être affectés à l'accueil des visiteurs.",
      tags: ['missing-info', 'quantifiers'],
      difficulty: 2,
    },
    {
      id: 'v08-06',
      text: 'Compte tenu des fréquentations attendues, un poste de secours est obligatoire le samedi, mais pas le dimanche.',
      tags: ['conditions', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v08-07',
      text: "En cas d'alerte météorologique orange, toutes les activités de la fête doivent être interrompues.",
      tags: ['similar-rules'],
      difficulty: 2,
    },
    {
      id: 'v08-08',
      text: "L'attestation d'assurance responsabilité civile a été transmise dans le délai fixé par l'administration communale.",
      tags: ['dates', 'combine-tabs'],
      difficulty: 1,
    },
    {
      id: 'v08-09',
      text: 'En cas d’alerte météorologique jaune pendant la fête, le chapiteau devra être évacué.',
      tags: ['similar-rules', 'missing-info'],
      difficulty: 2,
    },
    {
      id: 'v08-10',
      text: "L'organisateur dispose jusqu'au lundi 12 juillet 2027 à 8h00 pour démonter le chapiteau installé sur le parking de l'école.",
      tags: ['exception', 'dates', 'combine-tabs'],
      difficulty: 3,
    },
  ],
};
