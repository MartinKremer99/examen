import type { VerbalKey } from '../types';

export const key06: VerbalKey = {
  'v06-01': {
    answer: 'F',
    explanation:
      'Nach Art. 6 würde eine Feiertagsabfuhr auf den nächsten Werktag verschoben, sofern die Gemeinde nichts anderes bekannt gibt. Genau das tut die Mitteilung vom 20. November: Die Abfuhr vom 25. Dezember im Sektor Süd wird auf Donnerstag, den 24. Dezember 2026, vorgezogen. Am Samstag, dem 26. Dezember, findet sie nicht statt.',
    sources: [
      { tab: 'reglement', quote: "sauf disposition contraire publiée par l'administration communale" },
      { tab: 'avis', quote: 'sont avancées au jeudi précédent, soit le jeudi 24 décembre 2026 et le jeudi 31 décembre 2026' },
    ],
    whyNot: {
      V: 'Diese Antwort wendet die allgemeine Verschiebungsregel an und übersieht die abweichende Mitteilung. Außerdem ist der 26. Dezember selbst ein Feiertag.',
      I: 'Die Mitteilung legt den neuen Termin eindeutig fest.',
    },
  },
  'v06-02': {
    answer: 'I',
    explanation:
      'Für 2025 ist die Zahl der Besuche bekannt (38 400), für 2024 nicht. Gestiegen ist nur die Zahl der aktiven Badges. Mehr Badges bedeuten nicht zwingend mehr Besuche.',
    sources: [
      { tab: 'bilan', quote: 'En 2025, le parc à conteneurs a enregistré 38 400 passages' },
      { tab: 'bilan', quote: 'Le nombre de badges actifs est passé de 4 610 à la fin de 2024 à 4 950 à la fin de 2025.' },
    ],
    whyNot: {
      V: 'Diese Antwort schließt von der Zahl der Badges auf die Zahl der Besuche. Die Besucherzahl 2024 fehlt.',
      F: 'Ebenso wenig ist belegt, dass die Besuche gleich geblieben oder zurückgegangen sind.',
    },
  },
  'v06-03': {
    answer: 'V',
    explanation:
      'Bis 2 m³ Grünschnitt pro Besuch sind gratis. Die überschüssigen 0,6 m³ bilden einen angefangenen Kubikmeter, und „tout m³ entamé est facturé en entier“: 1 × 15 € = 15 €. Mit insgesamt 2,6 m³ bleibt der Besuch unter dem Höchstvolumen von 3 m³.',
    sources: [
      { tab: 'tarifs', quote: 'Déchets verts (tontes, branchages) | 2 m³ par passage | 15 € par m³ entamé' },
      { tab: 'tarifs', quote: 'Tout m³ entamé est facturé en entier.' },
    ],
    whyNot: {
      F: 'Wer 0,6 × 15 € = 9 € oder den Preis für die ganzen 2,6 m³ berechnet, übersieht die Freimenge bzw. die Regel zum angefangenen Kubikmeter.',
      I: 'Freimenge, Tarif und Rundungsregel sind vollständig angegeben.',
    },
  },
  'v06-04': {
    answer: 'F',
    explanation:
      'Abfälle aus beruflicher Tätigkeit werden nur mittwochs von 8 bis 12 Uhr angenommen, und nur mit einer Genehmigung des technischen Dienstes. Der Haushaltsbadge reicht dafür nicht, und samstags ist es ausgeschlossen.',
    sources: [
      {
        tab: 'parc',
        quote: "Les déchets d'origine professionnelle ne sont acceptés que le mercredi, de 08h00 à 12h00, sur présentation d'une autorisation délivrée par le service technique communal.",
      },
    ],
    whyNot: {
      V: 'Der Wohnsitz in der Gemeinde ändert nichts daran, dass es sich um Berufsabfälle handelt, für die eine Sonderregel gilt.',
      I: '„Ne … que le mercredi“ schließt den Samstag ausdrücklich aus.',
    },
  },
  'v06-05': {
    answer: 'V',
    explanation:
      'Laut Kalender werden die gelben Säcke im Sektor Süd unter anderem am Donnerstag, dem 31. Dezember, abgeholt. Die Restmüllabfuhr vom Freitag, dem 1. Januar (Feiertag), wird laut Mitteilung auf Donnerstag, den 31. Dezember 2026, vorgezogen. Beide Abfuhren finden also am selben Tag statt.',
    sources: [
      { tab: 'calendrier', quote: 'jeudis 3, 17 et 31 décembre ; 14 et 28 janvier' },
      { tab: 'avis', quote: 'le jeudi 24 décembre 2026 et le jeudi 31 décembre 2026' },
    ],
    whyNot: {
      F: 'Wer nur den Kalender liest (Restmüll freitags), übersieht die Vorverlegung durch die Mitteilung.',
      I: 'Beide Termine stehen eindeutig in den Dokumenten.',
    },
  },
  'v06-06': {
    answer: 'I',
    explanation:
      'Die 6 % beziehen sich auf 500 Stichprobenkontrollen, nicht auf alle grünen Tonnen der Gemeinde. Wie viele Tonnen es insgesamt gibt und wie es um die nicht kontrollierten steht, ist unbekannt.',
    sources: [
      {
        tab: 'bilan',
        quote: 'Au cours de 500 contrôles aléatoires de bacs verts réalisés en 2025, des déchets non conformes ont été constatés dans 6 % des cas',
      },
    ],
    whyNot: {
      V: 'Diese Antwort überträgt ein Stichprobenergebnis auf die Gesamtheit aller Tonnen.',
      F: 'Es ist ebenso wenig belegt, dass der Anteil bei allen Tonnen anders liegt.',
    },
  },
  'v06-07': {
    answer: 'F',
    explanation:
      'Laut Tariftabelle kostet Sperrmüll 25 € pro angefangenem Kubikmeter. Die Mitteilung führt aber ab dem 1. Januar 2027 einen kostenlosen Kubikmeter pro Haushalt und Kalenderjahr im Recyclinghof ein. Die erste Abgabe von 1 m³ im Februar 2027 ist daher kostenlos.',
    sources: [
      { tab: 'tarifs', quote: 'Encombrants (meubles, matelas) | – | 25 € par m³ entamé' },
      {
        tab: 'avis',
        quote: "À partir du 1er janvier 2027, chaque ménage peut déposer gratuitement au parc à conteneurs 1 m³ d'encombrants par année civile.",
      },
    ],
    whyNot: {
      V: 'Diese Antwort beruht auf dem alten Tarif und übersieht die spätere Änderung.',
      I: 'Die Mitteilung regelt den Fall eindeutig: erste Abgabe des Jahres, 1 m³, im Recyclinghof.',
    },
  },
  'v06-08': {
    answer: 'V',
    explanation:
      'Normalerweise ist dienstags bis 19 Uhr geöffnet. Vom 1. Dezember 2026 bis zum 28. Februar 2027 schließt der Recyclinghof dienstags und freitags aber schon um 18 Uhr. Am Dienstag, dem 5. Januar 2027, ist er um 18:30 Uhr also geschlossen.',
    sources: [
      { tab: 'parc', quote: 'Mardi | 13h00 – 19h00' },
      {
        tab: 'avis',
        quote: 'Du 1er décembre 2026 au 28 février 2027, le parc à conteneurs fermera à 18h00 au lieu de 19h00 les mardis et vendredis.',
      },
    ],
    whyNot: {
      F: 'Diese Antwort beachtet nur die Normalöffnungszeiten und übersieht die Winterregelung.',
      I: 'Datum und Uhrzeit fallen eindeutig in die Winterregelung.',
    },
  },
  'v06-09': {
    answer: 'I',
    explanation:
      'Die Öffnung am Donnerstagnachmittag ist nur eine Empfehlung der Umweltkommission. Kein Dokument zeigt, dass sie beschlossen oder abgelehnt wurde.',
    sources: [
      {
        tab: 'bilan',
        quote: "Recommandation de la commission consultative de l'environnement : ouvrir le parc à conteneurs le jeudi après-midi dès 2027",
      },
    ],
    whyNot: {
      V: 'Eine Empfehlung ist keine Entscheidung.',
      F: 'Dass der Recyclinghof derzeit donnerstags geschlossen ist, schließt eine spätere Änderung im Jahr 2027 nicht aus.',
    },
  },
  'v06-10': {
    answer: 'V',
    explanation:
      'Grünschnitt ist bis 2 m³ pro Besuch gratis, behandeltes Holz bis 1 m³. Zusammen sind es 3 m³, und die Obergrenze pro Besuch lautet „ne peut dépasser 3 m³“. 3 m³ sind also noch zulässig, und es fallen keine Kosten an.',
    sources: [
      { tab: 'tarifs', quote: 'Déchets verts (tontes, branchages) | 2 m³ par passage' },
      { tab: 'tarifs', quote: 'Bois traité, bois de démolition | 1 m³ par passage' },
      { tab: 'parc', quote: "Le volume total apporté lors d'un même passage ne peut dépasser 3 m³." },
    ],
    whyNot: {
      F: '„Ne peut dépasser 3 m³“ erlaubt genau 3 m³. Beide Mengen liegen innerhalb ihrer Freimengen.',
      I: 'Alle Grenzwerte sind angegeben, der Fall ist entscheidbar.',
    },
  },
};
