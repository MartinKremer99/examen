import type { VerbalSet } from '../types';

export const set01: VerbalSet = {
  id: 'v01',
  title: 'Marché de Noël de Wiltzerbach 2026',
  themeDe: 'Weihnachtsmarkt: Regeln, Fristen und Gebühren für Aussteller',
  tabs: [
    {
      id: 'reglement',
      title: 'Règlement',
      blocks: [
        { t: 'h', text: 'Règlement du Marché de Noël 2026' },
        {
          t: 'p',
          text: "Art. 1 – Le marché se tient sur la place de l'Église du vendredi 27 novembre au dimanche 20 décembre 2026. Il est ouvert uniquement du jeudi au dimanche.",
        },
        {
          t: 'p',
          text: "Art. 2 – Peuvent participer les associations établies dans la commune, les artisans et les commerçants. Les associations ne peuvent pas vendre de boissons alcoolisées, sauf si elles disposent d'une autorisation temporaire délivrée par le collège des bourgmestre et échevins.",
        },
        {
          t: 'p',
          text: 'Art. 3 – Chaque chalet mesure 3 m sur 2 m. Un exposant peut demander au maximum deux chalets. Les associations sont limitées à un chalet.',
        },
        {
          t: 'p',
          text: 'Art. 4 – Les chalets doivent être ouverts au public au minimum de 16h00 à 21h00 les jeudis et vendredis, et de 11h00 à 21h00 les samedis et dimanches.',
        },
        {
          t: 'p',
          text: "Art. 5 – L'utilisation d'appareils de chauffage électrique d'une puissance supérieure à 2 000 W est interdite. Les appareils à gaz sont interdits sans exception.",
        },
        {
          t: 'p',
          text: "Art. 6 – Un exposant qui ne respecte pas les horaires d'ouverture à deux reprises reçoit un avertissement écrit. En cas de troisième manquement, il peut être exclu du marché sans remboursement.",
        },
      ],
    },
    {
      id: 'calendrier',
      title: 'Calendrier',
      blocks: [
        { t: 'h', text: 'Calendrier des inscriptions' },
        {
          t: 'table',
          head: ['Étape', 'Date'],
          rows: [
            ['Ouverture des inscriptions', '1er septembre 2026'],
            ["Date limite d'inscription – artisans et commerçants", '30 septembre 2026'],
            ["Date limite d'inscription – associations", '15 octobre 2026'],
            ["Communication de l'attribution des chalets", 'au plus tard le 31 octobre 2026'],
            ['Paiement de la redevance', "dans les 14 jours suivant la communication de l'attribution"],
            ['Remise des clés des chalets', 'jeudi 26 novembre 2026, de 14h00 à 18h00'],
            ['Restitution des clés', 'lundi 21 décembre 2026, avant 12h00'],
          ],
        },
        {
          t: 'p',
          text: "Les inscriptions incomplètes ne sont pas prises en compte. Une inscription est complète lorsque le formulaire signé, une copie de l'autorisation d'établissement (pour les artisans et commerçants) et une attestation d'assurance responsabilité civile ont été remis.",
        },
      ],
    },
    {
      id: 'tarifs',
      title: 'Tarifs',
      blocks: [
        { t: 'h', text: 'Redevances et frais' },
        {
          t: 'table',
          head: ['Catégorie', 'Redevance par chalet pour toute la durée du marché'],
          rows: [
            ['Commerçants', '650 €'],
            ['Artisans', '450 €'],
            ['Associations établies dans la commune', '150 €'],
          ],
        },
        {
          t: 'p',
          text: 'Une réduction de 20 % est accordée aux exposants qui ont participé aux trois dernières éditions du marché. Cette réduction ne s’applique pas aux associations.',
        },
        {
          t: 'p',
          text: "La consommation d'électricité est facturée séparément selon le relevé du compteur de chaque chalet, au tarif de 0,32 € par kWh.",
        },
        {
          t: 'p',
          text: "Une caution de 200 € par chalet est exigée lors de la remise des clés. Elle est remboursée après l'état des lieux de sortie, déduction faite des frais éventuels de remise en état.",
        },
      ],
    },
    {
      id: 'courriel',
      title: 'Courriel du 12/10',
      blocks: [
        {
          t: 'meta',
          lines: [
            'De : Service des fêtes et manifestations',
            'À : Exposants inscrits',
            'Date : 12 octobre 2026',
            "Objet : Modifications pour l'édition 2026",
          ],
        },
        { t: 'p', text: 'Madame, Monsieur,' },
        {
          t: 'p',
          text: 'Suite à la réunion du collège des bourgmestre et échevins du 8 octobre, nous vous informons des modifications suivantes.',
        },
        {
          t: 'p',
          text: 'En raison des travaux de voirie rue de la Gare, la remise des clés est avancée au mercredi 25 novembre 2026, aux mêmes horaires. La date de restitution reste inchangée.',
        },
        {
          t: 'p',
          text: 'Le nombre de chalets disponibles passe de 32 à 28, la partie nord de la place restant inaccessible. Les demandes de deuxième chalet seront donc traitées uniquement après l’attribution d’un premier chalet à tous les demandeurs.',
        },
        {
          t: 'p',
          text: "Une navette gratuite reliera le parking P+R à la place de l'Église, uniquement les samedis et dimanches.",
        },
        { t: 'p', text: 'Veuillez agréer, Madame, Monsieur, nos salutations distinguées.' },
      ],
    },
    {
      id: 'bilan',
      title: 'Bilan 2025',
      blocks: [
        { t: 'h', text: "Rapport d'évaluation – édition 2025" },
        {
          t: 'p',
          text: "L'édition 2025 a accueilli 30 exposants : 14 commerçants, 9 artisans et 7 associations. La fréquentation a été estimée à 41 000 visiteurs, contre 36 000 en 2024.",
        },
        {
          t: 'p',
          text: "Les recettes des redevances se sont élevées à 15 200 €. Deux exposants ont reçu un avertissement écrit pour non-respect des horaires ; aucun n'a été exclu.",
        },
        {
          t: 'p',
          text: "Les visiteurs interrogés (enquête auprès de 400 personnes) ont surtout regretté le manque de places assises et l'absence de produits locaux le jeudi.",
        },
        {
          t: 'p',
          text: 'Recommandation : réserver au moins quatre chalets à des producteurs locaux lors des prochaines éditions.',
        },
      ],
    },
    {
      id: 'faq',
      title: 'FAQ',
      blocks: [
        { t: 'h', text: 'Questions fréquentes des exposants' },
        { t: 'p', text: 'Puis-je partager un chalet avec un autre exposant ?' },
        {
          t: 'p',
          text: "Oui, à condition que les deux exposants soient inscrits individuellement et que l'un d'eux soit désigné comme responsable du chalet. La redevance est due une seule fois, par le responsable.",
        },
        { t: 'p', text: 'Les mineurs peuvent-ils tenir un chalet ?' },
        { t: 'p', text: 'Les mineurs de plus de 16 ans peuvent tenir un chalet en présence d’un adulte inscrit.' },
        { t: 'p', text: "Que se passe-t-il en cas d'annulation ?" },
        {
          t: 'p',
          text: 'Une annulation communiquée avant le 1er novembre donne droit au remboursement de 50 % de la redevance. Après cette date, aucun remboursement n’est accordé.',
        },
        { t: 'p', text: 'Est-il permis de diffuser de la musique ?' },
        {
          t: 'p',
          text: 'La diffusion de musique amplifiée est interdite dans les chalets. Les associations peuvent organiser des concerts sur le podium central après accord du service des fêtes.',
        },
      ],
    },
  ],
  statements: [
    {
      id: 'v01-01',
      text: 'Un artisan ayant participé aux trois dernières éditions du marché paiera une redevance de 360 € pour un chalet.',
      tags: ['conditions'],
      difficulty: 1,
    },
    {
      id: 'v01-02',
      text: 'Une association ayant participé aux trois dernières éditions du marché paiera une redevance de 120 € pour son chalet.',
      tags: ['exception'],
      difficulty: 2,
    },
    {
      id: 'v01-03',
      text: 'Les clés des chalets seront remises aux exposants le jeudi 26 novembre 2026.',
      tags: ['dates', 'combine-tabs'],
      difficulty: 2,
    },
    {
      id: 'v01-04',
      text: "Un commerçant qui dépose un dossier d'inscription complet le 10 octobre 2026 verra son inscription prise en compte.",
      tags: ['similar-rules', 'dates'],
      difficulty: 2,
    },
    {
      id: 'v01-05',
      text: 'En 2026, chaque exposant ayant demandé deux chalets en obtiendra deux.',
      tags: ['missing-info', 'combine-tabs'],
      difficulty: 3,
    },
    {
      id: 'v01-06',
      text: "Lors de l'édition 2026, au moins quatre chalets seront réservés à des producteurs locaux.",
      tags: ['overreach'],
      difficulty: 2,
    },
    {
      id: 'v01-07',
      text: "Une association peut vendre du vin chaud dans son chalet si elle a obtenu une autorisation temporaire du collège des bourgmestre et échevins.",
      tags: ['exception'],
      difficulty: 1,
    },
    {
      id: 'v01-08',
      text: "Deux artisans n'ayant jamais participé au marché qui partagent un chalet paient ensemble une redevance de 450 €.",
      tags: ['combine-tabs', 'conditions'],
      difficulty: 3,
    },
    {
      id: 'v01-09',
      text: "La navette gratuite circulera tous les jours d'ouverture du marché.",
      tags: ['combine-tabs', 'quantifiers'],
      difficulty: 2,
    },
    {
      id: 'v01-10',
      text: 'Les recettes des redevances de l’édition 2026 dépasseront celles de l’édition 2025.',
      tags: ['missing-info', 'overreach'],
      difficulty: 2,
    },
  ],
};
