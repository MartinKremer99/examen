import type { VerbalKey } from '../types';

export const key04: VerbalKey = {
  'v04-01': {
    answer: 'V',
    explanation:
      'Laut Tabelle fährt der Dienst samstags nur von 8:00 bis 13:00 Uhr. Die Dienstnotiz verlängert den Samstagsdienst in Zone A aber ab Samstag, dem 6. März 2027, auf 8:00 bis 17:00 Uhr. Der 13. März 2027 ist ein Samstag nach diesem Datum, eine Abholung um 15:00 Uhr innerhalb der Stadt (Zone A) ist also möglich.',
    sources: [
      { tab: 'zones', quote: 'samedi | 8h00 – 13h00' },
      { tab: 'note', quote: 'À partir du samedi 6 mars 2027, le service du samedi, qui reste limité à la zone A, fonctionne de 8h00 à 17h00.' },
    ],
    whyNot: {
      F: 'Diese Antwort stützt sich auf die alten Samstagszeiten (bis 13:00 Uhr) und übersieht die Verlängerung in der Notiz.',
      I: 'Datum, Zone und neue Zeiten sind eindeutig, die Aussage ist entscheidbar.',
    },
  },
  'v04-02': {
    answer: 'F',
    explanation:
      'Der Dienst ist Personen vorbehalten, die im Einwohnerregister der Stadt eingetragen sind. Das Alter von 75 Jahren allein genügt nicht. Die FAQ behandelt genau diesen Fall: Ein vorübergehender Aufenthalt reicht nicht aus.',
    sources: [
      { tab: 'conditions', quote: "Le service est réservé aux personnes inscrites au registre de la population de la Ville d'Esch-Bierg" },
      { tab: 'faq', quote: 'un séjour temporaire ne suffit pas' },
    ],
    whyNot: {
      V: 'Die Altersbedingung (65+) ist zwar erfüllt, die Grundvoraussetzung der Eintragung im Einwohnerregister aber nicht.',
      I: 'Die FAQ beantwortet den Fall ausdrücklich mit „Non“.',
    },
  },
  'v04-03': {
    answer: 'F',
    explanation:
      'Grundsätzlich muss ein Trajet am Vortag vor 16:00 Uhr reserviert werden. Für Montagsfahrten gilt aber eine Sonderregel: Reservierung spätestens am vorhergehenden Freitag vor 16:00 Uhr. Für Montag, den 8. März, ist das Freitag, der 5. März. Am Samstag, dem 6. März, ist es zu spät. Die Notiz ändert die Fristen nicht.',
    sources: [
      { tab: 'reservation', quote: 'Pour un trajet prévu un lundi, la réservation doit être faite au plus tard le vendredi précédent avant 16h00.' },
      { tab: 'note', quote: 'Les délais de réservation restent inchangés.' },
    ],
    whyNot: {
      V: 'Diese Antwort wendet die allgemeine Regel („la veille avant 16h00“) an und übersieht die Sonderregel für Montage.',
      I: 'Die Montagsregel ist eindeutig, die Frist ist am Samstag bereits abgelaufen.',
    },
  },
  'v04-04': {
    answer: 'I',
    explanation:
      'Der Bericht nennt 94 Nutzer, die wegen eingeschränkter Mobilität eingetragen sind (unter 65), und 318 wegen ihres Alters. Wie viele Nutzer einen Rollstuhl benutzen, steht nirgends. Nicht jede Person mit eingeschränkter Mobilität nutzt einen Rollstuhl, und auch Nutzer über 65 können einen benutzen. Die 1 240 Fahrten mit Rollstuhl sagen nichts über die Zahl der Personen aus.',
    sources: [
      { tab: 'rapport', quote: "318 au titre de l'âge (65 ans ou plus) et 94 au titre d'une mobilité réduite (moins de 65 ans)" },
      { tab: 'rapport', quote: 'Un fauteuil roulant se trouvait à bord lors de 1 240 trajets.' },
    ],
    whyNot: {
      V: 'Wer 94 / 412 ≈ 23 % rechnet, setzt „mobilité réduite“ mit Rollstuhl gleich und vergisst die Rollstuhlnutzer über 65.',
      F: 'Ebenso wenig ist belegt, dass es ein Viertel oder mehr sind. Die Zahl der Rollstuhlnutzer fehlt.',
    },
  },
  'v04-05': {
    answer: 'V',
    explanation:
      'Die Begleitperson fährt nur dann gratis, wenn das ärztliche Attest des Nutzers eine Begleitung für nötig erklärt. Die Nutzerin hat kein Attest (sie ist wegen ihres Alters berechtigt). Die Tochter zahlt daher den Preis eines einfachen Trajets in der betreffenden Zone: 2,00 € in Zone A. Das Carnet kann sie nicht nutzen, weil es persönlich ist.',
    sources: [
      { tab: 'conditions', quote: "dans le cas contraire, elle paie le prix d'un trajet simple de la zone concernée" },
      { tab: 'reservation', quote: 'Trajet simple – zone A | 2,00 €' },
    ],
    whyNot: {
      F: 'Wer F wählt, nimmt an, die Begleitperson fahre immer gratis, oder rechnet mit dem Carnet-Preis. Beides trifft hier nicht zu.',
      I: 'Ohne Attest ist die Bedingung für die Gratisfahrt sicher nicht erfüllt, der Preis steht fest.',
    },
  },
  'v04-06': {
    answer: 'F',
    explanation:
      'Normalerweise darf ein Fahrzeug bis zu zwei Rollstuhlnutzer befördern. Laut Dienstnotiz darf aber bis einschließlich 31. März 2027 nur ein Rollstuhlnutzer gleichzeitig im selben Fahrzeug transportiert werden. Der 22. März fällt in diesen Zeitraum.',
    sources: [
      { tab: 'conditions', quote: 'Chaque véhicule peut transporter au maximum deux usagers en fauteuil roulant.' },
      { tab: 'note', quote: "un seul usager en fauteuil roulant peut être transporté à la fois dans un même véhicule jusqu'au 31 mars 2027 inclus" },
    ],
    whyNot: {
      V: 'Diese Antwort beachtet nur die allgemeine Regel und übersieht die vorübergehende Einschränkung in der Notiz.',
      I: 'Datum und Zeitraum der Einschränkung sind eindeutig angegeben.',
    },
  },
  'v04-07': {
    answer: 'I',
    explanation:
      'Der Bericht sagt nur, dass der Anstieg mit der Eröffnung der Maison médicale im April 2026 „zusammenfällt“ (coïncide). Ein zeitliches Zusammentreffen beweist keinen Ursachenzusammenhang. Andere Gründe, etwa mehr eingetragene Nutzer, sind nicht ausgeschlossen.',
    sources: [
      { tab: 'rapport', quote: "Cette hausse coïncide avec l'ouverture, en avril 2026, de la maison médicale du quartier Nord." },
    ],
    whyNot: {
      V: '„Coïncide“ beschreibt nur ein zeitliches Zusammentreffen, keine Ursache.',
      F: 'Die Dokumente schließen diese Ursache auch nicht aus. Sie ist nur nicht belegt.',
    },
  },
  'v04-08': {
    answer: 'F',
    explanation:
      'Das Krankenhaus von Kayldorf liegt in Zone B, und Zone B wird nur montags bis freitags bedient. Die Notiz verlängert zwar die Samstagszeiten, hält aber ausdrücklich fest, dass der Samstagsdienst auf Zone A beschränkt bleibt. Der 20. März 2027 ist ein Samstag.',
    sources: [
      { tab: 'zones', quote: 'centre hospitalier de Kayldorf, maison médicale de Bieschtal, gare de Kayldorf | du lundi au vendredi' },
      { tab: 'note', quote: 'le service du samedi, qui reste limité à la zone A' },
    ],
    whyNot: {
      V: 'Die Verlängerung des Samstagsdienstes gilt nur für Zone A. Wer sie auf Zone B überträgt, liest die Notiz falsch.',
      I: 'Tabelle und Notiz schließen Zone B am Samstag eindeutig aus.',
    },
  },
  'v04-09': {
    answer: 'I',
    explanation:
      'Die Umfrage erfasste 150 der 412 eingetragenen Nutzer, und 88 % der Antwortenden waren zufrieden. Über die übrigen 262 Nutzer ist nichts bekannt. Ob mehr als 85 % aller eingetragenen Nutzer zufrieden waren, lässt sich nicht feststellen.',
    sources: [
      { tab: 'rapport', quote: "Selon l'enquête de satisfaction menée en novembre 2026 auprès de 150 usagers, 88 % des répondants se déclarent satisfaits ou très satisfaits." },
      { tab: 'rapport', quote: 'Fin 2026, 412 usagers étaient inscrits' },
    ],
    whyNot: {
      V: 'Die 88 % beziehen sich nur auf die Antwortenden, nicht auf alle eingetragenen Nutzer.',
      F: 'Ebenso wenig ist belegt, dass der Anteil bei allen Nutzern 85 % oder weniger beträgt.',
    },
  },
  'v04-10': {
    answer: 'V',
    explanation:
      'Eine Sperre von einem Monat ist möglich, wenn ein Nutzer innerhalb von drei Monaten drei reservierte, nicht stornierte Fahrten versäumt. Drei solche Fahrten innerhalb von zwei Monaten liegen zwangsläufig auch innerhalb eines Dreimonatszeitraums. „S’expose à“ entspricht dem „peut être suspendu“ der Regel.',
    sources: [
      { tab: 'reservation', quote: "Lorsque, sur une période de trois mois, l'usager ne s'est pas présenté à trois trajets réservés sans les avoir annulés, il peut être suspendu du service pendant un mois." },
    ],
    whyNot: {
      F: 'Zwei Monate liegen innerhalb der Dreimonatsfrist, die Bedingung ist also erfüllt.',
      I: 'Die Aussage behauptet nur die Möglichkeit einer Sperre („s’expose à“), und genau die sieht die Regel vor.',
    },
  },
};
