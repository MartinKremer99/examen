import type { VerbalKey } from '../types';

export const key01: VerbalKey = {
  'v01-01': {
    answer: 'V',
    explanation:
      'Artisans zahlen 450 € pro Chalet. Wer an den drei letzten Ausgaben teilgenommen hat, erhält 20 % Ermäßigung, und Artisans sind davon nicht ausgenommen: 450 € × 0,8 = 360 €. Strom wird getrennt abgerechnet und gehört nicht zur Gebühr.',
    sources: [
      { tab: 'tarifs', quote: 'Artisans' },
      { tab: 'tarifs', quote: 'Une réduction de 20 % est accordée aux exposants qui ont participé aux trois dernières éditions du marché.' },
    ],
    whyNot: {
      F: 'Die Ermäßigung gilt für alle Aussteller außer Vereinen, also auch für Artisans. Der Betrag stimmt genau.',
      I: 'Alle nötigen Angaben (Tarif und Ermäßigungsregel) stehen im Register „Tarifs“.',
    },
  },
  'v01-02': {
    answer: 'F',
    explanation:
      'Die 20-%-Ermäßigung „ne s’applique pas aux associations“. Ein Verein zahlt daher 150 € und nicht 120 €. Die Dokumente widerlegen die Aussage ausdrücklich.',
    sources: [{ tab: 'tarifs', quote: 'Cette réduction ne s’applique pas aux associations.' }],
    whyNot: {
      V: '120 € wäre 150 € minus 20 %. Genau diese Ermäßigung ist für Vereine aber ausgeschlossen.',
      I: 'Die Ausnahme ist ausdrücklich geregelt, die Frage ist also entscheidbar.',
    },
  },
  'v01-03': {
    answer: 'F',
    explanation:
      'Der Kalender nennt zwar Donnerstag, den 26. November. Die E-Mail vom 12. Oktober verlegt die Schlüsselübergabe aber auf Mittwoch, den 25. November. Die spätere Mitteilung ersetzt den Kalender.',
    sources: [
      { tab: 'calendrier', quote: 'jeudi 26 novembre 2026, de 14h00 à 18h00' },
      { tab: 'courriel', quote: 'la remise des clés est avancée au mercredi 25 novembre 2026, aux mêmes horaires' },
    ],
    whyNot: {
      V: 'Diese Antwort übersieht die Änderung in der E-Mail.',
      I: 'Die E-Mail legt das neue Datum eindeutig fest.',
    },
  },
  'v01-04': {
    answer: 'F',
    explanation:
      'Für Artisans und Commerçants endet die Anmeldefrist am 30. September 2026. Der 15. Oktober gilt nur für Vereine. Eine Anmeldung am 10. Oktober kommt für einen Commerçant zu spät.',
    sources: [
      { tab: 'calendrier', quote: "Date limite d'inscription – artisans et commerçants" },
      { tab: 'calendrier', quote: "Date limite d'inscription – associations" },
    ],
    whyNot: {
      V: 'Diese Antwort verwechselt die Vereinsfrist (15.10.) mit der Frist für Commerçants (30.09.).',
      I: 'Beide Fristen sind angegeben. Ob das Dossier vollständig ist, spielt keine Rolle, weil die Frist verpasst ist.',
    },
  },
  'v01-05': {
    answer: 'I',
    explanation:
      'Es gibt nur noch 28 Chalets, und zweite Chalets werden erst vergeben, wenn alle Antragsteller ein erstes erhalten haben. Wie viele Aussteller sich 2026 angemeldet haben, steht nirgends. Ob für alle ein zweites Chalet übrig bleibt, lässt sich daher nicht feststellen.',
    sources: [
      { tab: 'courriel', quote: 'Le nombre de chalets disponibles passe de 32 à 28' },
      { tab: 'courriel', quote: 'Les demandes de deuxième chalet seront donc traitées uniquement après l’attribution d’un premier chalet à tous les demandeurs.' },
    ],
    whyNot: {
      V: 'Dass man bis zu zwei Chalets beantragen darf, garantiert nicht, dass man sie auch bekommt.',
      F: 'Die Anzahl der Anmeldungen 2026 ist unbekannt. Es ist also nicht belegt, dass jemand leer ausgeht.',
    },
  },
  'v01-06': {
    answer: 'I',
    explanation:
      'Der Bericht 2025 empfiehlt, mindestens vier Chalets für lokale Erzeuger zu reservieren. Eine Empfehlung ist keine Entscheidung, und keine Mitteilung bestätigt oder verwirft sie für 2026.',
    sources: [{ tab: 'bilan', quote: 'Recommandation : réserver au moins quatre chalets à des producteurs locaux lors des prochaines éditions.' }],
    whyNot: {
      V: 'Eine Empfehlung als beschlossene Maßnahme zu lesen geht über die Belege hinaus.',
      F: 'Nichts schließt aus, dass die Empfehlung umgesetzt wird.',
    },
  },
  'v01-07': {
    answer: 'V',
    explanation:
      'Grundsätzlich dürfen Vereine keinen Alkohol verkaufen. Art. 2 erlaubt es aber ausdrücklich mit einer vorübergehenden Genehmigung des Schöffenrats. Vin chaud ist ein alkoholisches Getränk, für das diese Ausnahme gilt.',
    sources: [
      { tab: 'reglement', quote: "sauf si elles disposent d'une autorisation temporaire délivrée par le collège des bourgmestre et échevins" },
    ],
    whyNot: {
      F: 'Diese Antwort beachtet nur das Verbot und übersieht die Ausnahme („sauf si …“).',
      I: 'Die Bedingung der Aussage entspricht genau der Ausnahme im Reglement.',
    },
  },
  'v01-08': {
    answer: 'V',
    explanation:
      'Laut FAQ ist die Gebühr bei geteiltem Chalet nur einmal fällig, und zwar vom Verantwortlichen. Beide sind Artisans ohne frühere Teilnahme, eine Ermäßigung entfällt also. Die Gebühr beträgt einmal 450 €.',
    sources: [
      { tab: 'faq', quote: 'La redevance est due une seule fois, par le responsable.' },
      { tab: 'tarifs', quote: 'Artisans' },
    ],
    whyNot: {
      F: 'Wer 900 € erwartet, übersieht, dass die Gebühr pro Chalet nur einmal anfällt.',
      I: 'Weil die Aussage frühere Teilnahmen ausschließt, ist der Betrag eindeutig.',
    },
  },
  'v01-09': {
    answer: 'F',
    explanation:
      'Der Markt ist donnerstags bis sonntags geöffnet. Laut E-Mail fährt der Shuttle „uniquement les samedis et dimanches“. Donnerstags und freitags gibt es also keinen Shuttle.',
    sources: [
      { tab: 'reglement', quote: 'Il est ouvert uniquement du jeudi au dimanche.' },
      { tab: 'courriel', quote: "uniquement les samedis et dimanches" },
    ],
    whyNot: {
      V: '„Tous les jours d’ouverture“ würde auch Donnerstag und Freitag einschließen.',
      I: 'Das Wort „uniquement“ schließt die anderen Tage ausdrücklich aus.',
    },
  },
  'v01-10': {
    answer: 'I',
    explanation:
      'Für 2026 sind nur die Tarife und die Zahl der verfügbaren Chalets (28) bekannt. Wie sich die Aussteller auf die Kategorien verteilen, wer Ermäßigungen erhält und wie viele Chalets tatsächlich vermietet werden, ist offen. Die Einnahmen 2026 lassen sich daher nicht mit den 15 200 € von 2025 vergleichen.',
    sources: [
      { tab: 'bilan', quote: 'Les recettes des redevances se sont élevées à 15 200 €.' },
      { tab: 'courriel', quote: 'Le nombre de chalets disponibles passe de 32 à 28' },
    ],
    whyNot: {
      V: 'Für eine Aussage über künftige Einnahmen fehlen die Daten.',
      F: 'Weniger Chalets bedeuten nicht zwingend weniger Einnahmen. Die Mischung der Kategorien ist unbekannt.',
    },
  },
};
