import type { VerbalKey } from '../types';

export const key02: VerbalKey = {
  'v02-01': {
    answer: 'F',
    explanation:
      'Für Studierende unter 18 Jahren ist die Arbeitszeit laut Art. 5 auf 32 Stunden pro Woche begrenzt. Die FAQ schließt Überstunden über die in Art. 5 festgelegte Dauer ausdrücklich aus. Eine Erlaubnis des Dienststellenleiters ändert daran nichts, 40 Stunden sind für einen 16-Jährigen also nicht möglich.',
    sources: [
      { tab: 'conditions', quote: 'Pour les étudiants âgés de moins de 18 ans, elle est réduite à 32 heures par semaine.' },
      { tab: 'faq', quote: "Aucune heure ne peut être prestée au-delà de la durée de travail fixée à l'article 5 des conditions de participation." },
    ],
    whyNot: {
      V: 'Die 40 Stunden gelten nur für Studierende ab 18 Jahren. Eine Ausnahme mit Zustimmung des Vorgesetzten ist nirgends vorgesehen, Überstunden sind sogar ausdrücklich verboten.',
      I: 'Die Frage ist entscheidbar: Art. 5 und die FAQ schließen den Fall gemeinsam eindeutig aus.',
    },
  },
  'v02-02': {
    answer: 'V',
    explanation:
      'Wer am ersten Tag des Zeitraums 18 Jahre oder älter ist, erhält 14,50 € brutto pro Stunde. Für jede beim technischen Dienst geleistete Stunde kommt ein Zuschlag von 1,50 € hinzu: 14,50 € + 1,50 € = 16,00 €. Die E-Mail vom 8. März ändert die Vergütung nicht.',
    sources: [
      { tab: 'postes', quote: '14,50 € pour les étudiants âgés de 18 ans ou plus' },
      { tab: 'postes', quote: 'Un supplément de 1,50 € brut est versé pour chaque heure prestée au service technique.' },
    ],
    whyNot: {
      F: 'Wer nur den Grundlohn von 14,50 € sieht, übersieht den Zuschlag für den technischen Dienst.',
      I: 'Alter, Dienststelle und Tarife sind bekannt, der Betrag lässt sich genau berechnen.',
    },
  },
  'v02-03': {
    answer: 'I',
    explanation:
      'Art. 3 gibt unter den Einwohnern denjenigen Vorrang, die noch nie einen kommunalen Ferienjob hatten. Ein Vorrang ist aber kein Ausschluss. Ob nach den Erstbewerbern noch Stellen frei bleiben, hängt von der Zahl der Bewerbungen 2027 ab, und die ist unbekannt. Die Zahlen von 2026 (214 Bewerbungen für 92 Stellen) sagen über 2027 nichts Sicheres aus.',
    sources: [
      { tab: 'conditions', quote: "Parmi ceux-ci, la priorité est donnée aux candidats qui n'ont encore jamais occupé de job de vacances auprès de la commune." },
      { tab: 'bilan', quote: 'En 2026, la commune a reçu 214 candidatures pour 92 postes.' },
    ],
    whyNot: {
      V: 'Die Vorrangregel schließt frühere Ferienjobber nicht aus. Sie kommen nur nach den Erstbewerbern zum Zug, und bleiben dann Stellen frei, erhalten sie eine.',
      F: 'Um die Aussage zu widerlegen, müsste feststehen, dass der Bewerber eine Stelle erhält. Bei vielen Erstbewerbern kann er aber leer ausgehen.',
    },
  },
  'v02-04': {
    answer: 'F',
    explanation:
      'Ursprünglich bietet das Freibad 5 Stellen pro Zeitraum an, bei vier Zeiträumen also 20. Laut E-Mail vom 8. März werden die Freibad-Stellen für die Zeiträume 3 und 4 aber gestrichen, weil das Bad ab dem 1. August schließt. Es bleiben 5 + 5 = 10 Stellen, nicht 20.',
    sources: [
      { tab: 'postes', quote: 'Piscine en plein air | 5 | brevet de premiers secours' },
      { tab: 'courriel', quote: 'Les postes de la piscine sont par conséquent supprimés pour les périodes 3 et 4.' },
    ],
    whyNot: {
      V: '20 Stellen ergäben sich nur ohne die Änderung in der E-Mail (5 × 4 Zeiträume).',
      I: 'Die Stellenzahl pro Zeitraum und die gestrichenen Zeiträume sind genau angegeben, die Summe ist also berechenbar.',
    },
  },
  'v02-05': {
    answer: 'V',
    explanation:
      'Zeitraum 2 beginnt am Montag, dem 19. Juli 2027. An diesem Tag ist die Bewerberin noch 17, denn sie wird erst am 20. Juli 18. Maßgeblich ist das Alter am ersten Tag des Zeitraums. Unter 18-Jährige dürfen nicht im technischen Dienst eingesetzt werden.',
    sources: [
      { tab: 'conditions', quote: 'Art. 4 – Les étudiants âgés de moins de 18 ans au premier jour de la période ne peuvent pas être affectés au service technique.' },
      { tab: 'calendrier', quote: 'du lundi 19 juillet au vendredi 30 juillet 2027' },
    ],
    whyNot: {
      F: 'Diese Antwort zählt das Alter, das sie während des Zeitraums erreicht. Entscheidend ist aber der erste Tag, der 19. Juli.',
      I: 'Geburtsdatum, Beginn des Zeitraums und Altersregel sind bekannt. Das Ergebnis steht damit fest.',
    },
  },
  'v02-06': {
    answer: 'I',
    explanation:
      'Die Umfrage zeigt nur, dass 90 % der Antwortenden aus dem technischen Dienst zufrieden waren, gegenüber 72 % beim Empfang. Warum das so ist, steht nirgends. Zudem haben nur 64 Studierende geantwortet. Eine Ursache aus einem Unterschied abzuleiten geht über die Belege hinaus (Korrelation ist keine Kausalität).',
    sources: [
      { tab: 'bilan', quote: "90 % des répondants du service technique se déclarent satisfaits, contre 72 % des répondants de l'accueil et de l'administration" },
    ],
    whyNot: {
      V: 'Der Bericht nennt keine Ursache. Die Erklärung über die Art der Arbeit ist eine Vermutung.',
      F: 'Die Dokumente widerlegen diese Erklärung auch nicht. Sie könnte zutreffen.',
    },
  },
  'v02-07': {
    answer: 'F',
    explanation:
      'Der Kalender nennt zwar den 15. März als Frist. Die E-Mail vom 8. März verschiebt die Frist aber für alle Bewerber auf Montag, den 22. März 2027 einschließlich. Eine vollständige Bewerbung vom 19. März ist also rechtzeitig.',
    sources: [
      { tab: 'calendrier', quote: 'du 1er février au 15 mars 2027' },
      { tab: 'courriel', quote: 'La date limite de dépôt des candidatures est reportée, pour tous les candidats, au lundi 22 mars 2027 inclus.' },
    ],
    whyNot: {
      V: 'Diese Antwort übersieht die Fristverlängerung in der E-Mail.',
      I: 'Die neue Frist ist eindeutig und gilt für alle Bewerber. Die Bewerbung ist laut Aussage vollständig.',
    },
  },
  'v02-08': {
    answer: 'V',
    explanation:
      'Laut E-Mail wird die Zahl der Stellen in der Maison relais für die Zeiträume 3 und 4 auf 9 erhöht. Der technische Dienst bleibt unverändert bei 8 Stellen pro Zeitraum. In Zeitraum 4 gilt also 9 > 8. (In den Zeiträumen 1 und 2 wäre es umgekehrt: 6 < 8.)',
    sources: [
      { tab: 'courriel', quote: 'le nombre de postes à la Maison relais est porté à 9 pour les périodes 3 et 4' },
      { tab: 'postes', quote: 'Service technique (voirie, espaces verts) | 8' },
    ],
    whyNot: {
      F: 'Diese Antwort stützt sich nur auf die ursprüngliche Tabelle (6 Stellen) und übersieht die Erhöhung für die Zeiträume 3 und 4.',
      I: 'Beide Stellenzahlen für Zeitraum 4 lassen sich aus den Registern ablesen.',
    },
  },
  'v02-09': {
    answer: 'V',
    explanation:
      'Laut FAQ dürfen Geschwister im selben Zeitraum arbeiten, aber nur, wenn sie nicht derselben Dienststelle zugeteilt sind. Zwei Brüder in der Maison relais im selben Zeitraum wären dieselbe Dienststelle, das ist ausgeschlossen.',
    sources: [{ tab: 'faq', quote: "Oui, à condition qu'ils ne soient pas affectés au même service." }],
    whyNot: {
      F: 'Geschwister dürfen zwar im selben Zeitraum arbeiten, aber nicht in derselben Dienststelle. Diese Bedingung wird hier übersehen.',
      I: 'Die FAQ regelt genau diesen Fall, und zwar eindeutig.',
    },
  },
  'v02-10': {
    answer: 'I',
    explanation:
      'Grundsätzlich gibt es nur einen Zeitraum pro Sommer. Ein zweiter kann aber vergeben werden, wenn nach Abschluss der Bestätigungen Stellen frei bleiben. Ob 2027 in Zeitraum 3 Stellen frei bleiben und ob der Student einen zweiten Zeitraum erhält, ist nicht bekannt.',
    sources: [
      { tab: 'conditions', quote: "Chaque étudiant ne peut se voir attribuer qu'une seule période de travail par été." },
      { tab: 'conditions', quote: 'Une deuxième période peut toutefois lui être attribuée lorsque des postes restent vacants après la clôture des confirmations.' },
    ],
    whyNot: {
      V: 'Ein zweiter Zeitraum ist nur unter einer Bedingung möglich, deren Eintreten unbekannt ist. Eine Möglichkeit ist keine Gewissheit.',
      F: 'Wer nur die Grundregel liest, übersieht die Ausnahme. Ein zweiter Zeitraum ist nicht ausgeschlossen.',
    },
  },
};
