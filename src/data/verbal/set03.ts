import type { VerbalSet } from '../types';

export const set03: VerbalSet = {
  id: 'v03',
  title: 'Location des salles communales – Commune de Steinerbach',
  themeDe: 'Vermietung kommunaler Säle: Reglement, Tarife, Stornierung und Sicherheit',
  tabs: [
    {
      id: 'reglement',
      title: 'Règlement',
      blocks: [
        { t: 'h', text: "Règlement d'utilisation des salles communales" },
        {
          t: 'p',
          text: 'Art. 1 – Le présent règlement s’applique à la salle des fêtes ainsi qu’aux deux salles du centre culturel : la salle polyvalente et la salle de réunion.',
        },
        {
          t: 'p',
          text: 'Art. 2 – Les salles peuvent être louées par les associations inscrites au registre communal des associations (ci-après « associations locales »), par les personnes physiques résidant dans la commune et par les personnes non-résidentes.',
        },
        {
          t: 'p',
          text: 'Art. 3 – Les associations locales et les résidents peuvent réserver au plus tôt douze mois avant la date de la manifestation, les non-résidents au plus tôt trois mois avant cette date. Toute réservation doit être introduite au plus tard 21 jours avant la manifestation.',
        },
        {
          t: 'p',
          text: "Art. 4 – La réservation ne devient définitive qu'après la signature du contrat de location et, le cas échéant, le versement de la caution.",
        },
        {
          t: 'p',
          text: "Art. 5 – Les manifestations doivent prendre fin à 1h00. Dans la nuit du vendredi au samedi et dans la nuit du samedi au dimanche, elles peuvent se prolonger jusqu'à 3h00.",
        },
        {
          t: 'p',
          text: "Art. 6 – En cas d'annulation par le locataire plus de 60 jours avant la manifestation, aucun frais n'est dû. En cas d'annulation entre le 60e et le 15e jour avant la manifestation, 50 % du prix de location sont dus. En cas d'annulation moins de 15 jours avant la manifestation, le prix de location est dû en totalité.",
        },
      ],
    },
    {
      id: 'salles',
      title: 'Salles et capacités',
      blocks: [
        { t: 'h', text: 'Description des salles' },
        {
          t: 'table',
          head: ['Salle', 'Capacité maximale', 'Dont places assises à table', 'Cuisine', 'Accès PMR'],
          rows: [
            ['Salle des fêtes', '400 personnes', '250', 'cuisine équipée', 'oui'],
            ['Centre culturel – salle polyvalente', '180 personnes', '120', 'office de réchauffage', 'oui'],
            ['Centre culturel – salle de réunion', '40 personnes', '30', 'aucune', 'non (1er étage sans ascenseur)'],
          ],
        },
        {
          t: 'p',
          text: "La capacité maximale ne peut en aucun cas être dépassée, quel que soit l'aménagement de la salle.",
        },
        {
          t: 'p',
          text: 'Le mobilier (tables, chaises) et la sonorisation de base sont compris dans la location. Le montage et le démontage sont assurés par le locataire.',
        },
      ],
    },
    {
      id: 'tarifs',
      title: 'Tarifs 2027',
      blocks: [
        { t: 'h', text: 'Prix de location par journée' },
        {
          t: 'table',
          head: ['Salle', 'Associations locales', 'Résidents', 'Non-résidents'],
          rows: [
            ['Salle des fêtes', '150 €', '450 €', '900 €'],
            ['Salle polyvalente', '80 €', '250 €', '500 €'],
            ['Salle de réunion', 'gratuit', '60 €', '120 €'],
          ],
        },
        {
          t: 'p',
          text: "Chaque association locale bénéficie d'une location gratuite par année civile, quelle que soit la salle.",
        },
        { t: 'p', text: 'Supplément pour l’utilisation de la cuisine équipée de la salle des fêtes : 75 €.' },
        {
          t: 'p',
          text: 'Caution : 500 € pour la salle des fêtes, 250 € pour les autres salles. Les associations locales sont dispensées de caution, sauf pour la salle des fêtes.',
        },
        {
          t: 'p',
          text: "Si la salle n'est pas rendue propre, un forfait de nettoyage de 200 € (salle des fêtes) ou de 100 € (autres salles) est retenu sur la caution ou facturé.",
        },
      ],
    },
    {
      id: 'note',
      title: 'Note du 16/11',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Secrétariat communal',
            'À : Service des bâtiments ; service de l’accueil',
            'Date : 16 novembre 2026',
            'Objet : Salles communales – décisions du collège du 12 novembre 2026',
          ],
        },
        {
          t: 'p',
          text: 'Lors de sa séance du 12 novembre 2026, le collège des bourgmestre et échevins a arrêté les mesures suivantes, applicables aux manifestations ayant lieu à partir du 1er janvier 2027, sauf indication contraire :',
        },
        {
          t: 'ul',
          items: [
            'La cuisine équipée de la salle des fêtes sera rénovée et ne pourra pas être utilisée du 1er février au 30 avril 2027. La salle des fêtes elle-même reste disponible pendant cette période.',
            'Le prix de location de la salle des fêtes pour les non-résidents passe à 1 100 € pour les manifestations ayant lieu à partir du 1er mars 2027.',
            'En raison de plaintes du voisinage, les manifestations organisées dans la salle polyvalente du centre culturel doivent prendre fin à 1h00, y compris les vendredis et samedis.',
            'Pour la seule salle de réunion, le délai minimal de réservation est ramené de 21 à 7 jours.',
            "La question de l'installation d'un limiteur de son dans la salle des fêtes sera examinée lors d'une séance ultérieure.",
          ],
        },
        { t: 'p', text: 'Merci d’informer les demandeurs en conséquence.' },
      ],
    },
    {
      id: 'bilan',
      title: 'Bilan 2026',
      blocks: [
        { t: 'h', text: "Bilan d'occupation 2026" },
        {
          t: 'p',
          text: "La salle des fêtes a été louée 118 jours en 2026 : 64 jours par des associations locales, 39 jours par des résidents et 15 jours par des non-résidents. Le taux d'occupation des samedis a atteint 96 %.",
        },
        {
          t: 'p',
          text: 'La salle polyvalente a été louée 142 jours et la salle de réunion 203 jours, essentiellement par des associations locales.',
        },
        {
          t: 'p',
          text: 'Pour l’ensemble des salles, une retenue sur caution a été opérée à 9 reprises, dont 7 à la suite de fêtes privées. Les retenues portaient principalement sur des frais de nettoyage.',
        },
        {
          t: 'p',
          text: 'Les riverains ont adressé 11 plaintes pour nuisances sonores nocturnes, dont 8 concernant le centre culturel.',
        },
        {
          t: 'p',
          text: 'Recommandations du service des bâtiments : relever le prix de location de la salle des fêtes pour les non-résidents et équiper la salle des fêtes d’un limiteur de son.',
        },
      ],
    },
    {
      id: 'securite',
      title: 'Consignes de sécurité',
      blocks: [
        { t: 'h', text: 'Consignes de sécurité applicables à toutes les salles' },
        {
          t: 'ul',
          items: [
            'Le locataire désigne une personne responsable, majeure, présente pendant toute la durée de la manifestation.',
            'Les issues de secours et leurs accès doivent rester dégagés en permanence.',
            'Les flammes nues sont interdites. Seules les bougies placées dans un contenant fermé en verre sont tolérées, et uniquement dans la salle des fêtes.',
            'Les appareils de cuisson ou de chauffage fonctionnant au gaz sont interdits.',
            'Les éléments de décoration doivent être ininflammables ; aucune décoration ne peut être fixée au plafond.',
            "Toute manifestation réunissant plus de 200 personnes doit être déclarée au service de sécurité communal au moins dix jours à l'avance et nécessite la présence d'au moins un agent de sécurité qualifié, aux frais du locataire.",
            "Il est interdit de fumer, y compris la cigarette électronique, dans l'ensemble des bâtiments.",
          ],
        },
      ],
    },
  ],
  statements: [
    {
      id: 'v03-01',
      text: 'Une association locale qui a déjà utilisé sa location gratuite de l’année 2027 paiera un prix de location de 80 € pour la salle polyvalente un samedi d’octobre 2027.',
      tags: ['conditions', 'exception'],
      difficulty: 1,
    },
    {
      id: 'v03-02',
      text: 'Un résident qui loue la salle des fêtes pour le samedi 13 mars 2027 pourra utiliser la cuisine équipée moyennant un supplément de 75 €.',
      tags: ['combine-tabs', 'dates'],
      difficulty: 2,
    },
    {
      id: 'v03-03',
      text: 'En 2027, la salle des fêtes sera louée moins de jours par des non-résidents qu’en 2026.',
      tags: ['overreach', 'missing-info'],
      difficulty: 2,
    },
    {
      id: 'v03-04',
      text: 'Aucune bougie n’est admise dans les salles communales.',
      tags: ['quantifiers', 'exception'],
      difficulty: 1,
    },
    {
      id: 'v03-05',
      text: 'Une fête privée organisée à la salle des fêtes dans la nuit du samedi 10 au dimanche 11 avril 2027 peut se prolonger jusqu’à 2h30.',
      tags: ['similar-rules', 'combine-tabs', 'dates'],
      difficulty: 3,
    },
    {
      id: 'v03-06',
      text: 'Un limiteur de son sera installé dans la salle des fêtes au cours de l’année 2027.',
      tags: ['overreach', 'missing-info'],
      difficulty: 2,
    },
    {
      id: 'v03-07',
      text: 'Un non-résident qui souhaite louer la salle des fêtes peut introduire sa réservation six mois avant la date de sa fête.',
      tags: ['similar-rules', 'dates'],
      difficulty: 1,
    },
    {
      id: 'v03-08',
      text: 'Un résident qui annule, 30 jours avant la date prévue, sa location de la salle polyvalente reste redevable de 125 €.',
      tags: ['combine-tabs', 'conditions'],
      difficulty: 2,
    },
    {
      id: 'v03-09',
      text: 'Le nombre plus élevé de retenues sur caution après des fêtes privées s’explique par le manque d’expérience des particuliers dans l’organisation de manifestations.',
      tags: ['overreach'],
      difficulty: 3,
    },
    {
      id: 'v03-10',
      text: 'Une soirée réunissant 220 personnes peut se tenir dans la salle polyvalente du centre culturel, à condition qu’un agent de sécurité qualifié soit présent.',
      tags: ['combine-tabs', 'conditions'],
      difficulty: 2,
    },
  ],
};
