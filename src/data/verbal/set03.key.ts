import type { VerbalKey } from '../types';

export const key03: VerbalKey = {
  'v03-01': {
    answer: 'V',
    explanation:
      'Jeder lokale Verein hat pro Kalenderjahr nur eine kostenlose Vermietung. Ist sie 2027 bereits genutzt, gilt der normale Vereinstarif für den Mehrzwecksaal: 80 € pro Tag. Die Notiz vom 16. November ändert diesen Tarif nicht.',
    sources: [
      { tab: 'tarifs', quote: "Chaque association locale bénéficie d'une location gratuite par année civile, quelle que soit la salle." },
      { tab: 'tarifs', quote: 'Salle polyvalente | 80 €' },
    ],
    whyNot: {
      F: 'Die kostenlose Vermietung gibt es nur einmal pro Jahr, und der Vereinstarif beträgt genau 80 €.',
      I: 'Tarif und Regel zur kostenlosen Vermietung reichen aus, um den Preis zu bestimmen.',
    },
  },
  'v03-02': {
    answer: 'F',
    explanation:
      'Der Zuschlag für die Küche beträgt zwar 75 €. Laut Notiz kann die Küche der Salle des fêtes vom 1. Februar bis 30. April 2027 wegen Renovierung aber nicht genutzt werden. Der 13. März 2027 liegt in diesem Zeitraum. Nur der Saal selbst bleibt verfügbar.',
    sources: [
      { tab: 'tarifs', quote: 'Supplément pour l’utilisation de la cuisine équipée de la salle des fêtes : 75 €.' },
      { tab: 'note', quote: 'ne pourra pas être utilisée du 1er février au 30 avril 2027' },
    ],
    whyNot: {
      V: 'Diese Antwort beachtet nur den Tarif und übersieht die Schließung der Küche in der Notiz.',
      I: 'Datum und Schließungszeitraum sind eindeutig, die Küche ist an diesem Tag ausgeschlossen.',
    },
  },
  'v03-03': {
    answer: 'I',
    explanation:
      'Bekannt sind nur die 15 Miettage durch Nicht-Einwohner im Jahr 2026 und die Preiserhöhung auf 1 100 € ab dem 1. März 2027. Wie viele Nicht-Einwohner 2027 tatsächlich mieten, ist offen. Dass eine Preiserhöhung die Nachfrage senkt, ist eine Vermutung und keine Information aus den Dokumenten.',
    sources: [
      { tab: 'bilan', quote: '15 jours par des non-résidents' },
      { tab: 'note', quote: 'Le prix de location de la salle des fêtes pour les non-résidents passe à 1 100 €' },
    ],
    whyNot: {
      V: 'Höhere Preise führen nicht zwingend zu weniger Buchungen. Die Dokumente enthalten keine Daten für 2027.',
      F: 'Ebenso wenig ist belegt, dass die Zahl gleich bleibt oder steigt.',
    },
  },
  'v03-04': {
    answer: 'F',
    explanation:
      'Offene Flammen sind zwar verboten, die Sicherheitsvorschriften dulden aber Kerzen in einem geschlossenen Glasbehälter, und zwar in der Salle des fêtes. „Aucune bougie“ ist damit widerlegt.',
    sources: [
      { tab: 'securite', quote: 'Seules les bougies placées dans un contenant fermé en verre sont tolérées, et uniquement dans la salle des fêtes.' },
    ],
    whyNot: {
      V: 'Diese Antwort beachtet nur das allgemeine Flammenverbot und übersieht die Ausnahme für Kerzen im Glasbehälter.',
      I: 'Die Ausnahme ist ausdrücklich geregelt. Die Aussage „aucune“ lässt sich also widerlegen.',
    },
  },
  'v03-05': {
    answer: 'V',
    explanation:
      'Laut Art. 5 dürfen Veranstaltungen in der Nacht von Samstag auf Sonntag bis 3:00 Uhr dauern. Die Notiz verkürzt die Endzeit auf 1:00 Uhr, aber nur für den Mehrzwecksaal des Kulturzentrums, nicht für die Salle des fêtes. Für die Salle des fêtes bleibt es bei 3:00 Uhr, 2:30 Uhr ist also erlaubt.',
    sources: [
      { tab: 'reglement', quote: "Dans la nuit du vendredi au samedi et dans la nuit du samedi au dimanche, elles peuvent se prolonger jusqu'à 3h00." },
      { tab: 'note', quote: 'les manifestations organisées dans la salle polyvalente du centre culturel doivent prendre fin à 1h00, y compris les vendredis et samedis' },
    ],
    whyNot: {
      F: 'Wer F wählt, überträgt die neue 1-Uhr-Regel des Mehrzwecksaals fälschlich auf die Salle des fêtes oder wendet die allgemeine 1-Uhr-Regel an, obwohl es sich um eine Samstagnacht handelt.',
      I: 'Wochentag, Saal und geltende Regel sind bekannt, die Aussage ist entscheidbar.',
    },
  },
  'v03-06': {
    answer: 'I',
    explanation:
      'Der Bilanzbericht empfiehlt einen Schallbegrenzer, und laut Notiz wird die Frage in einer späteren Sitzung geprüft. Eine Empfehlung und eine angekündigte Prüfung sind keine Entscheidung. Ob und wann der Begrenzer installiert wird, ist offen.',
    sources: [
      { tab: 'bilan', quote: 'équiper la salle des fêtes d’un limiteur de son' },
      { tab: 'note', quote: "La question de l'installation d'un limiteur de son dans la salle des fêtes sera examinée lors d'une séance ultérieure." },
    ],
    whyNot: {
      V: 'Eine Empfehlung als beschlossene Maßnahme zu lesen geht über die Belege hinaus.',
      F: 'Die Frage ist nur vertagt, nicht abgelehnt. Eine Installation 2027 bleibt möglich.',
    },
  },
  'v03-07': {
    answer: 'F',
    explanation:
      'Nicht-Einwohner dürfen frühestens drei Monate vor der Veranstaltung reservieren. Die Frist von zwölf Monaten gilt nur für lokale Vereine und Einwohner. Eine Reservierung sechs Monate vorher ist für einen Nicht-Einwohner zu früh.',
    sources: [
      { tab: 'reglement', quote: 'les non-résidents au plus tôt trois mois avant cette date' },
    ],
    whyNot: {
      V: 'Diese Antwort verwechselt die Regel für Einwohner und Vereine (12 Monate) mit der für Nicht-Einwohner (3 Monate).',
      I: 'Die Vorlaufzeit für Nicht-Einwohner ist ausdrücklich festgelegt.',
    },
  },
  'v03-08': {
    answer: 'V',
    explanation:
      'Eine Stornierung 30 Tage vorher liegt zwischen dem 60. und dem 15. Tag vor der Veranstaltung. Dann sind 50 % des Mietpreises fällig. Ein Einwohner zahlt für den Mehrzwecksaal 250 €, die Hälfte davon sind 125 €.',
    sources: [
      { tab: 'reglement', quote: "En cas d'annulation entre le 60e et le 15e jour avant la manifestation, 50 % du prix de location sont dus." },
      { tab: 'tarifs', quote: 'Salle polyvalente | 80 € | 250 €' },
    ],
    whyNot: {
      F: 'Wer 250 € oder 0 € erwartet, ordnet die 30 Tage der falschen Stornostufe zu.',
      I: 'Tarif und Stornoregel ergeben zusammen einen eindeutigen Betrag.',
    },
  },
  'v03-09': {
    answer: 'I',
    explanation:
      'Der Bericht stellt nur fest, dass 7 der 9 Einbehalte auf private Feiern folgten. Eine Ursache nennt er nicht. Hinzu kommt, dass lokale Vereine außer für die Salle des fêtes keine Kaution hinterlegen, bei ihnen also seltener etwas einbehalten werden kann. Die Erklärung mit mangelnder Erfahrung ist eine nicht belegte Vermutung.',
    sources: [
      { tab: 'bilan', quote: 'une retenue sur caution a été opérée à 9 reprises, dont 7 à la suite de fêtes privées' },
      { tab: 'tarifs', quote: 'Les associations locales sont dispensées de caution, sauf pour la salle des fêtes.' },
    ],
    whyNot: {
      V: 'Aus einer Häufung lässt sich keine Ursache ableiten. Die Dokumente nennen keinen Grund.',
      F: 'Die Dokumente widerlegen die Erklärung auch nicht. Sie ist nur nicht belegt.',
    },
  },
  'v03-10': {
    answer: 'F',
    explanation:
      'Der Mehrzwecksaal fasst höchstens 180 Personen, und diese Kapazität darf „en aucun cas“ überschritten werden. Ein Sicherheitsagent ist bei mehr als 200 Personen zusätzlich vorgeschrieben, erlaubt aber keine Überschreitung der Kapazität. 220 Personen sind dort also ausgeschlossen.',
    sources: [
      { tab: 'salles', quote: 'Centre culturel – salle polyvalente | 180 personnes' },
      { tab: 'salles', quote: "La capacité maximale ne peut en aucun cas être dépassée, quel que soit l'aménagement de la salle." },
      { tab: 'securite', quote: "nécessite la présence d'au moins un agent de sécurité qualifié" },
    ],
    whyNot: {
      V: 'Der Sicherheitsagent ist eine zusätzliche Pflicht und keine Ausnahme von der Höchstkapazität.',
      I: 'Kapazität und Verbot der Überschreitung sind eindeutig angegeben.',
    },
  },
};
