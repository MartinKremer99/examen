import type { VerbalSet } from '../types';

export const set04: VerbalSet = {
  id: 'v04',
  title: 'Transport à la demande « Mobilité Plus » – Ville d’Esch-Bierg',
  themeDe: 'Rufbus für Senioren und Personen mit eingeschränkter Mobilität: Zugang, Zonen, Reservierung, Tarife',
  tabs: [
    {
      id: 'conditions',
      title: 'Conditions d’accès',
      blocks: [
        { t: 'h', text: 'Service « Mobilité Plus » – conditions d’accès' },
        {
          t: 'p',
          text: "Le service est réservé aux personnes inscrites au registre de la population de la Ville d'Esch-Bierg qui remplissent l'une des conditions suivantes :",
        },
        {
          t: 'ul',
          items: [
            'être âgé de 65 ans ou plus ;',
            "présenter une mobilité réduite attestée par un certificat médical, quel que soit l'âge.",
          ],
        },
        {
          t: 'p',
          text: "L'utilisation du service nécessite une inscription préalable auprès du service population. Le demandeur remet le formulaire d'inscription, une copie de sa carte d'identité et, le cas échéant, le certificat médical. Une carte d'usager personnelle lui est ensuite délivrée.",
        },
        {
          t: 'p',
          text: "Une seule personne accompagnatrice peut voyager avec l'usager. Elle voyage gratuitement si le certificat médical de l'usager mentionne la nécessité d'un accompagnement ; dans le cas contraire, elle paie le prix d'un trajet simple de la zone concernée.",
        },
        {
          t: 'p',
          text: "Chaque véhicule peut transporter au maximum deux usagers en fauteuil roulant. Seuls les chiens d'assistance sont admis à bord.",
        },
      ],
    },
    {
      id: 'zones',
      title: 'Zones et horaires',
      blocks: [
        { t: 'h', text: 'Zones desservies et horaires de prise en charge' },
        {
          t: 'table',
          head: ['Zone', 'Destinations', 'Jours', 'Horaires'],
          rows: [
            ['Zone A', 'toute adresse située sur le territoire de la Ville', 'du lundi au vendredi', '7h00 – 19h00'],
            ['Zone A', 'toute adresse située sur le territoire de la Ville', 'samedi', '8h00 – 13h00'],
            [
              'Zone B',
              'centre hospitalier de Kayldorf, maison médicale de Bieschtal, gare de Kayldorf',
              'du lundi au vendredi',
              '8h00 – 17h00',
            ],
          ],
        },
        {
          t: 'p',
          text: 'Toute prise en charge doit avoir lieu à l’intérieur des horaires indiqués. Le service ne fonctionne pas les dimanches et jours fériés.',
        },
        {
          t: 'p',
          text: 'En zone B, le service relie uniquement la Ville aux destinations énumérées ; les trajets entre deux adresses situées hors de la Ville ne sont pas assurés.',
        },
      ],
    },
    {
      id: 'reservation',
      title: 'Réservation et tarifs',
      blocks: [
        { t: 'h', text: 'Réservation, tarifs et annulation' },
        {
          t: 'p',
          text: 'Les trajets se réservent par téléphone auprès de la centrale de réservation, au plus tôt 14 jours à l’avance et au plus tard la veille du trajet avant 16h00. Pour un trajet prévu un lundi, la réservation doit être faite au plus tard le vendredi précédent avant 16h00.',
        },
        {
          t: 'table',
          head: ['Prestation', 'Tarif'],
          rows: [
            ['Trajet simple – zone A', '2,00 €'],
            ['Trajet simple – zone B', '4,00 €'],
            ['Carnet de 10 trajets simples – zone A', '15,00 €'],
            ["Usagers titulaires de la carte « Solidarité » de l'office social", 'gratuit'],
          ],
        },
        { t: 'p', text: 'Un aller-retour compte pour deux trajets simples.' },
        {
          t: 'p',
          text: "Tout trajet qui n'est pas annulé au moins deux heures avant l'heure de prise en charge prévue est facturé. Lorsque, sur une période de trois mois, l'usager ne s'est pas présenté à trois trajets réservés sans les avoir annulés, il peut être suspendu du service pendant un mois.",
        },
      ],
    },
    {
      id: 'note',
      title: 'Note du 15/02',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Cheffe du service mobilité',
            'À : Chauffeurs et centrale de réservation',
            'Date : 15 février 2027',
            'Objet : Adaptations du service « Mobilité Plus » à partir de mars 2027',
          ],
        },
        { t: 'p', text: 'Chères collègues, chers collègues,' },
        {
          t: 'p',
          text: 'Suite à la décision du collège des bourgmestre et échevins du 11 février 2027, les adaptations suivantes entrent en vigueur :',
        },
        {
          t: 'ul',
          items: [
            'À partir du samedi 6 mars 2027, le service du samedi, qui reste limité à la zone A, fonctionne de 8h00 à 17h00.',
            "Le véhicule adapté n° 2 étant immobilisé pour réparation, un seul usager en fauteuil roulant peut être transporté à la fois dans un même véhicule jusqu'au 31 mars 2027 inclus.",
            "À partir du 1er mars 2027, le paiement en espèces n'est plus accepté à bord. Les trajets sont réglés par carte bancaire ou au moyen d'un carnet.",
            'Les délais de réservation restent inchangés.',
          ],
        },
        { t: 'p', text: 'Merci d’informer les usagers de ces changements lors de chaque trajet.' },
      ],
    },
    {
      id: 'rapport',
      title: 'Rapport 2026',
      blocks: [
        { t: 'h', text: "Rapport d'activité 2026 (extrait)" },
        {
          t: 'p',
          text: "Fin 2026, 412 usagers étaient inscrits : 318 au titre de l'âge (65 ans ou plus) et 94 au titre d'une mobilité réduite (moins de 65 ans).",
        },
        {
          t: 'p',
          text: 'Le service a réalisé 9 860 trajets en 2026, contre 8 120 en 2025 ; 71 % des trajets ont été effectués en zone A. Un fauteuil roulant se trouvait à bord lors de 1 240 trajets.',
        },
        {
          t: 'p',
          text: "Cette hausse coïncide avec l'ouverture, en avril 2026, de la maison médicale du quartier Nord.",
        },
        {
          t: 'p',
          text: "6 % des demandes de trajet n'ont pas pu être satisfaites faute de véhicule disponible, principalement le mardi et le jeudi matin.",
        },
        {
          t: 'p',
          text: "Selon l'enquête de satisfaction menée en novembre 2026 auprès de 150 usagers, 88 % des répondants se déclarent satisfaits ou très satisfaits.",
        },
        { t: 'p', text: "Recommandation : étudier l'acquisition d'un troisième véhicule adapté." },
      ],
    },
    {
      id: 'faq',
      title: 'FAQ',
      blocks: [
        { t: 'h', text: 'Questions fréquentes des usagers' },
        { t: 'p', text: 'Puis-je réserver un aller-retour en un seul appel ?' },
        { t: 'p', text: "Oui. L'aller et le retour sont alors enregistrés comme deux trajets simples." },
        { t: 'p', text: 'Le chauffeur peut-il m’aider ?' },
        {
          t: 'p',
          text: "Le chauffeur aide l'usager à monter dans le véhicule et à en descendre, et l'accompagne jusqu'à la porte d'entrée du bâtiment. Il n'est pas autorisé à entrer dans le logement.",
        },
        { t: 'p', text: 'Le service est-il limité à certains motifs de déplacement ?' },
        {
          t: 'p',
          text: 'Non. En zone A, tous les motifs sont admis (rendez-vous médical, courses, visite, loisirs). En zone B, seules les destinations énumérées sont desservies.',
        },
        { t: 'p', text: 'Ma mère, âgée de 75 ans, séjourne quelques semaines chez moi. Peut-elle utiliser le service ?' },
        {
          t: 'p',
          text: 'Non. Le service est réservé aux personnes inscrites au registre de la population de la Ville ; un séjour temporaire ne suffit pas.',
        },
        { t: 'p', text: 'Le carnet peut-il être utilisé par une autre personne ?' },
        { t: 'p', text: "Non. Le carnet est personnel et ne peut être utilisé que par l'usager titulaire." },
      ],
    },
  ],
  statements: [
    {
      id: 'v04-01',
      text: 'Le samedi 13 mars 2027, un usager inscrit peut être pris en charge à 15h00 pour un trajet à l’intérieur de la Ville.',
      tags: ['combine-tabs', 'dates'],
      difficulty: 2,
    },
    {
      id: 'v04-02',
      text: 'Une personne de 75 ans qui séjourne temporairement chez sa fille à Esch-Bierg, sans être inscrite au registre de la population de la Ville, peut utiliser le service.',
      tags: ['conditions'],
      difficulty: 1,
    },
    {
      id: 'v04-03',
      text: 'Un trajet prévu le lundi 8 mars 2027 peut encore être réservé le samedi 6 mars 2027 à 10h00.',
      tags: ['similar-rules', 'dates'],
      difficulty: 2,
    },
    {
      id: 'v04-04',
      text: 'Fin 2026, les usagers inscrits se déplaçant en fauteuil roulant représentaient moins d’un quart de l’ensemble des usagers inscrits.',
      tags: ['missing-info', 'quantifiers'],
      difficulty: 3,
    },
    {
      id: 'v04-05',
      text: 'Une résidente de 72 ans, inscrite au service et sans certificat médical, effectue un trajet simple en zone A accompagnée de sa fille : celle-ci paie 2,00 € pour ce trajet.',
      tags: ['combine-tabs', 'conditions'],
      difficulty: 2,
    },
    {
      id: 'v04-06',
      text: 'Le 22 mars 2027, deux usagers en fauteuil roulant pourront voyager ensemble dans le même véhicule.',
      tags: ['exception', 'dates', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v04-07',
      text: 'La hausse du nombre de trajets entre 2025 et 2026 est due à l’ouverture de la maison médicale du quartier Nord.',
      tags: ['overreach'],
      difficulty: 2,
    },
    {
      id: 'v04-08',
      text: 'Un usager peut se rendre au centre hospitalier de Kayldorf avec le service le samedi 20 mars 2027.',
      tags: ['combine-tabs', 'similar-rules'],
      difficulty: 3,
    },
    {
      id: 'v04-09',
      text: 'En 2026, plus de 85 % des usagers inscrits étaient satisfaits du service.',
      tags: ['overreach', 'quantifiers'],
      difficulty: 2,
    },
    {
      id: 'v04-10',
      text: 'Un usager qui, en l’espace de deux mois, ne s’est pas présenté à trois trajets réservés sans les avoir annulés s’expose à une suspension d’un mois.',
      tags: ['conditions'],
      difficulty: 2,
    },
  ],
};
