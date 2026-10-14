import type { VerbalKey } from '../types';

export const key07: VerbalKey = {
  'v07-01': {
    answer: 'F',
    explanation:
      'Die Kriterien werden in fester Reihenfolge angewandt. Kriterium 1 (beide Eltern berufstätig oder in Ausbildung) erfüllt nur das zweite Kind. Das Geschwisterkriterium (2) zählt erst, wenn zwei Anträge nach Kriterium 1 gleichwertig sind. Das Kind ohne Geschwister, dessen Eltern beide arbeiten, hat also Vorrang.',
    sources: [
      {
        tab: 'reglement',
        quote: "Un critère n'est pris en compte que pour départager des demandes équivalentes au regard des critères précédents.",
      },
      {
        tab: 'reglement',
        quote: 'exercent une activité professionnelle ou suivent une formation ; 2° enfants dont un frère ou une sœur est déjà inscrit',
      },
    ],
    whyNot: {
      V: 'Diese Antwort behandelt das Geschwisterkriterium so, als stünde es über dem Kriterium der Berufstätigkeit.',
      I: 'Reihenfolge und Funktionsweise der Kriterien sind ausdrücklich geregelt. Der Fall ist entscheidbar.',
    },
  },
  'v07-02': {
    answer: 'V',
    explanation:
      'Bei 4 200 € Einkommen kostet eine Stunde 1,50 € und ein Essen 3,00 €. Pro Dienstag oder Donnerstag werden für die Mittagszeit 2 Stunden plus Essen und für den Nachmittag ohne Unterricht 5 Stunden berechnet: 7 × 1,50 € + 3,00 € = 13,50 €. Für zwei Tage sind das 27 €.',
    sources: [
      { tab: 'horaires', quote: 'Plage de midi (repas inclus) | du lundi au vendredi | 12h00 – 14h00 | 2 heures + repas' },
      { tab: 'horaires', quote: 'Après-midi sans cours | mardi, jeudi | 14h00 – 19h00 | 5 heures' },
      { tab: 'bareme', quote: 'de 3 000 € à 4 999 € | 1,50 € | 3,00 €' },
    ],
    whyNot: {
      F: 'Wer auf 21 € kommt, hat die beiden abgerechneten Stunden der Mittagszeit vergessen.',
      I: 'Abgerechnete Stunden und Tarife stehen vollständig in den Registern „Horaires“ und „Participation financière“.',
    },
  },
  'v07-03': {
    answer: 'I',
    explanation:
      'Eine Auslastung von 97 % zeigt nur, dass die Nachmittagsplätze fast voll belegt waren. Ob Anträge mangels Plätzen abgelehnt wurden, steht nirgends. Eine Warteliste für 2025-2026 wird in der Bilanz nicht erwähnt.',
    sources: [{ tab: 'bilan', quote: "Le taux d'occupation des plages de l'après-midi a atteint 97 %." }],
    whyNot: {
      V: 'Eine hohe Auslastung beweist nicht, dass Kinder abgewiesen wurden. Im Durchschnitt waren sogar noch Plätze frei.',
      F: 'Ebenso wenig ist belegt, dass alle Anträge angenommen wurden. Abgelehnte Anträge würden in der Belegungsquote nicht erscheinen.',
    },
  },
  'v07-04': {
    answer: 'F',
    explanation:
      'Ab dem zweiten Kind wird nur der Stundenpreis um 50 % gesenkt, der Essenspreis ausdrücklich nicht. Bei 6 000 € Einkommen kostet das Essen 4,50 €, auch für das zweite Kind.',
    sources: [
      { tab: 'bareme', quote: 'de 5 000 € à 7 499 € | 3,00 € | 4,50 €' },
      { tab: 'bareme', quote: "Le prix du repas n'est pas réduit." },
    ],
    whyNot: {
      V: '2,25 € wäre der halbierte Essenspreis. Die Geschwisterermäßigung gilt aber nur für den Stundenpreis.',
      I: 'Die Ausnahme für das Essen ist ausdrücklich geregelt.',
    },
  },
  'v07-05': {
    answer: 'V',
    explanation:
      'Seit dem 1. Februar 2027 kann eine Betreuungszeit bis 48 Stunden vor Beginn kostenlos abgesagt werden. Die Zeit beginnt am Donnerstag, dem 11. Februar, um 14 Uhr; die Frist endet also am Dienstag, dem 9. Februar, um 14 Uhr. Eine Absage um 10 Uhr liegt 52 Stunden vorher und ist rechtzeitig. Die alte 7-Tage-Regel aus der FAQ gilt hier nicht mehr.',
    sources: [
      {
        tab: 'note',
        quote: "À compter du 1er février 2027, une plage d'accueil peut être annulée sans frais via le portail parents au plus tard 48 heures avant son début",
      },
      { tab: 'faq', quote: 'au plus tard 7 jours calendrier avant la date concernée' },
    ],
    whyNot: {
      F: 'Diese Antwort wendet die alte 7-Tage-Frist an, die die Mitteilung vom 25. Januar für Betreuungszeiten ersetzt hat.',
      I: 'Frist, Beginn der Betreuungszeit und Zeitpunkt der Absage sind bekannt, die Rechnung ist eindeutig.',
    },
  },
  'v07-06': {
    answer: 'F',
    explanation:
      'Die neue 48-Stunden-Frist gilt nur für Betreuungszeiten. Mahlzeiten müssen weiterhin 7 Kalendertage im Voraus abgesagt werden. Zwischen dem 8. und dem 11. Februar liegen nur drei Tage, und eine Krankheit liegt nicht vor. Das Essen wird also berechnet.',
    sources: [
      { tab: 'note', quote: 'Les repas restent soumis au délai de 7 jours calendrier.' },
      { tab: 'faq', quote: 'Une plage annulée plus tard est facturée, sauf en cas de maladie.' },
    ],
    whyNot: {
      V: 'Diese Antwort überträgt die 48-Stunden-Regel auf Mahlzeiten, für die sie ausdrücklich nicht gilt.',
      I: 'Die Regel für Mahlzeiten ist eindeutig, und der Krankheitsfall ist ausgeschlossen.',
    },
  },
  'v07-07': {
    answer: 'I',
    explanation:
      'Die 88 % beziehen sich nur auf die 212 antwortenden Familien, also etwa 187 Familien. Das sind rund 72 % der 260 befragten Familien. Wie zufrieden die 48 Familien sind, die nicht geantwortet haben, ist unbekannt. Je nach ihrer Meinung läge der Anteil zwischen etwa 72 % und 91 %, also unter oder über 80 %.',
    sources: [
      {
        tab: 'bilan',
        quote: '212 familles ont répondu. 88 % des familles ayant répondu se déclarent satisfaites ou très satisfaites.',
      },
    ],
    whyNot: {
      V: 'Diese Antwort überträgt den Anteil unter den Antwortenden auf alle befragten Familien.',
      F: 'Auch das Gegenteil ist nicht belegt: Wären die Nichtantwortenden überwiegend zufrieden, läge der Anteil über 80 %. Dass sie sich nicht geäußert haben, sagt nichts über ihre Zufriedenheit.',
    },
  },
  'v07-08': {
    answer: 'V',
    explanation:
      'Bei Krankheit werden die Betreuungszeiten nicht berechnet, wenn die Abwesenheit bis 8:30 Uhr am selben Tag gemeldet wird. Ein ärztliches Attest ist erst ab dem dritten Fehltag in Folge nötig. Bei zwei Tagen mit Meldung vor 8 Uhr wird also nichts berechnet.',
    sources: [
      { tab: 'faq', quote: "Non, si l'absence est signalée au plus tard à 8h30 le jour même." },
      { tab: 'faq', quote: "À partir du troisième jour d'absence consécutif, un certificat médical doit être remis" },
    ],
    whyNot: {
      F: 'Die Attestpflicht beginnt erst am dritten Tag. Für zwei Tage ist sie nicht erforderlich.',
      I: 'Meldezeit und Dauer der Abwesenheit erfüllen die Bedingungen eindeutig.',
    },
  },
  'v07-09': {
    answer: 'I',
    explanation:
      'Der Schöffenrat „erwägt“ die kostenlose Mittagszeit nur. Darüber entscheiden muss der Gemeinderat, und sein Beschluss liegt nicht vor.',
    sources: [
      {
        tab: 'note',
        quote: 'le collège des bourgmestre et échevins envisage de rendre gratuite la plage de midi à partir de la rentrée 2027',
      },
    ],
    whyNot: {
      V: 'Ein Vorhaben ist noch kein Beschluss.',
      F: 'Nichts deutet darauf hin, dass der Vorschlag abgelehnt wurde.',
    },
  },
  'v07-10': {
    answer: 'F',
    explanation:
      'Beim ersten Zuspätkommen im Schuljahr gibt es nur eine schriftliche Erinnerung. Der Zuschlag von 15 € pro angefangener Viertelstunde fällt erst ab dem zweiten Zuspätkommen an.',
    sources: [
      {
        tab: 'horaires',
        quote: "Le premier retard au cours d'une année scolaire donne lieu à un rappel écrit. À partir du deuxième retard au cours de la même année scolaire",
      },
    ],
    whyNot: {
      V: 'Diese Antwort übersieht, dass der Zuschlag erst ab dem zweiten Zuspätkommen gilt.',
      I: 'Die Regel für das erste Zuspätkommen ist ausdrücklich festgelegt.',
    },
  },
};
