import type { VerbalKey } from '../types';

export const key05: VerbalKey = {
  'v05-01': {
    answer: 'F',
    explanation:
      'Die Fristverlängerung bis zum 9. April 2027 gilt laut E-Mail nur für Anträge über den guichet électronique. Für Papieranträge bleibt es beim 31. März 2027. Ein Papierantrag vom 6. April ist also verspätet.',
    sources: [
      { tab: 'echeances', quote: 'mercredi 31 mars 2027' },
      { tab: 'courriel', quote: 'Pour les dossiers remis sur papier, la date limite du 31 mars 2027 reste inchangée.' },
    ],
    whyNot: {
      V: 'Diese Antwort wendet die verlängerte Frist (9. April) an, die nur für den elektronischen Weg gilt.',
      I: 'Beide Fristen sind ausdrücklich genannt. Höhere Gewalt ändert nichts daran, dass die Frist selbst nicht eingehalten ist.',
    },
  },
  'v05-02': {
    answer: 'V',
    explanation:
      'Grundbetrag Sportverein: 600 €. Der Gemeinderat hat den Jugendzuschlag für 2027 auf 18 € pro Mitglied unter 18 Jahren festgesetzt: 30 × 18 € = 540 €. Summe: 1 140 €. Die Obergrenzen (1 200 € für den Zuschlag, 3 000 € insgesamt) werden nicht erreicht, und da alle Mitglieder in Kalbaach wohnen, entfällt die 50-%-Kürzung.',
    sources: [
      { tab: 'bareme', quote: 'Associations sportives | 600 €' },
      { tab: 'deliberation', quote: "de fixer la majoration « jeunes membres » à 18 € par membre âgé de moins de 18 ans pour l'exercice 2027" },
    ],
    whyNot: {
      F: 'Wer mit 15 € (Barème, 1 050 €) oder 20 € (Vorschlag der Kommission, 1 200 €) rechnet, übersieht den Ratsbeschluss über 18 €.',
      I: 'Alle Rechengrößen stehen in den Registern „Barème“ und „Délibération“.',
    },
  },
  'v05-03': {
    answer: 'I',
    explanation:
      'Der Bericht stellt nur fest, dass die Vereine mit dem stärksten Zuwachs auch Tage der offenen Tür in Schulen organisiert haben. Das ist ein Zusammenhang, kein Nachweis einer Ursache. Ob die Tage der offenen Tür den Anstieg bewirkt haben, lässt sich nicht entscheiden.',
    sources: [
      {
        tab: 'commission',
        quote: 'Les associations qui ont enregistré la plus forte hausse de jeunes membres sont aussi celles qui ont organisé des journées portes ouvertes dans les écoles.',
      },
    ],
    whyNot: {
      V: 'Gleichzeitiges Auftreten (Korrelation) beweist keine Ursache.',
      F: 'Nichts in den Dokumenten schließt aus, dass die Tage der offenen Tür zum Anstieg beigetragen haben.',
    },
  },
  'v05-04': {
    answer: 'F',
    explanation:
      'Da weniger als die Hälfte der Mitglieder in Kalbaach wohnt, wird nur der Grundbetrag halbiert: 500 € × 50 % = 250 €. Die Zuschläge werden nicht gekürzt: 10 × 18 € = 180 €. Ergebnis: 430 €, nicht 340 €. 340 € ergäbe sich nur, wenn man fälschlich den Gesamtbetrag (500 € + 180 €) halbiert.',
    sources: [
      { tab: 'reglement', quote: 'Les majorations ne sont pas concernées par cette réduction.' },
      { tab: 'bareme', quote: 'Associations culturelles (musique, théâtre, chant) | 500 €' },
      { tab: 'deliberation', quote: 'à 18 € par membre âgé de moins de 18 ans' },
    ],
    whyNot: {
      V: '340 € entsteht nur, wenn auch die Zuschläge halbiert werden. Das schließt Art. 2 ausdrücklich aus.',
      I: 'Alle nötigen Angaben (Kürzungsregel, Grundbetrag, Zuschlag 2027) sind vorhanden. Der Betrag lässt sich eindeutig berechnen.',
    },
  },
  'v05-05': {
    answer: 'I',
    explanation:
      'Verspätete Anträge werden grundsätzlich nicht berücksichtigt, außer bei höherer Gewalt, die der Schöffenrat anerkennt. Laut Beschluss entscheidet der Schöffenrat noch über die beiden Anträge. Wie er entscheidet, steht nirgends.',
    sources: [
      { tab: 'reglement', quote: 'sauf cas de force majeure reconnu par le collège des bourgmestre et échevins' },
      { tab: 'deliberation', quote: 'Il appartient au collège des bourgmestre et échevins de se prononcer sur ces deux demandes.' },
    ],
    whyNot: {
      V: 'Diese Antwort übersieht die Ausnahme für höhere Gewalt, über die noch nicht entschieden ist.',
      F: 'Ob höhere Gewalt anerkannt wird, ist offen. Ein Zuschuss ist also auch nicht gesichert.',
    },
  },
  'v05-06': {
    answer: 'V',
    explanation:
      'Für Papieranträge ist der 31. März 2027 die Frist. Die Generalversammlung am 24. April findet danach statt. Laut E-Mail dürfen in diesem Fall noch nicht genehmigte Abrechnungen beigefügt werden, sofern die genehmigte Fassung bis zum 15. Mai nachgereicht wird.',
    sources: [
      {
        tab: 'courriel',
        quote: "Les associations dont l'assemblée générale se tient après la date limite peuvent joindre à leur dossier des comptes 2026 non encore approuvés",
      },
    ],
    whyNot: {
      F: 'Wer nur die Liste der Unterlagen („comptes 2026 approuvés“) liest, übersieht die Ausnahme in der E-Mail.',
      I: 'Die Ausnahme ist ausdrücklich geregelt, und ihre Voraussetzung (Versammlung nach der Frist) ist erfüllt.',
    },
  },
  'v05-07': {
    answer: 'F',
    explanation:
      'Die Kommission hat zwar 3 500 € vorgeschlagen. Ihr Gutachten bindet den Gemeinderat aber nicht, und der Rat hat beschlossen, die Obergrenze bei 3 000 € zu belassen.',
    sources: [
      { tab: 'commission', quote: 'relever le plafond global du subside ordinaire à 3 500 €' },
      { tab: 'deliberation', quote: 'de maintenir le plafond global du subside ordinaire à 3 000 € par association' },
    ],
    whyNot: {
      V: 'Ein Vorschlag der Kommission ist kein Beschluss. Der Rat ist ihm nicht gefolgt.',
      I: 'Der Ratsbeschluss legt die Obergrenze ausdrücklich fest.',
    },
  },
  'v05-08': {
    answer: 'I',
    explanation:
      'Am 15. März hatten 22 der 41 Vereine einen Antrag gestellt. Die Fristen liefen aber noch bis zum 31. März bzw. 9. April. Wie viele Anträge am Ende eingegangen sind, steht nirgends. Der Beschluss nennt nur den Gesamtbetrag.',
    sources: [
      { tab: 'courriel', quote: 'À ce jour, 22 des 41 associations inscrites au registre communal ont transmis leur demande de subside ordinaire pour 2027.' },
    ],
    whyNot: {
      V: 'Es gibt keinen Beleg, dass tatsächlich alle 41 Vereine einen Antrag gestellt haben.',
      F: 'Der Stand vom 15. März ist eine Zwischenzahl. Spätere Anträge waren noch möglich.',
    },
  },
  'v05-09': {
    answer: 'V',
    explanation:
      'Der Rat hat 2 500 € bewilligt. Bei geplanten Ausgaben von 7 200 € entspricht das 2 500 / 7 200 ≈ 34,7 %, also weniger als 40 %. Die 40 % (2 880 €) wären höher als die Obergrenze von 2 500 € aus Art. 4.',
    sources: [
      { tab: 'deliberation', quote: "d'accorder à l'Harmonie municipale de Kalbaach un subside extraordinaire de 2 500 €" },
      { tab: 'commission', quote: 'dépenses prévues : 7 200 €' },
      { tab: 'reglement', quote: 'Il couvre au plus 40 % des dépenses justifiées, sans pouvoir dépasser 2 500 €.' },
    ],
    whyNot: {
      F: 'Wer annimmt, der Zuschuss betrage immer genau 40 %, übersieht die Obergrenze von 2 500 €.',
      I: 'Betrag und geplante Ausgaben sind bekannt, der Anteil lässt sich berechnen.',
    },
  },
  'v05-10': {
    answer: 'F',
    explanation:
      'Die Kommission hat die Ablehnung empfohlen. Der Gemeinderat hat seine Entscheidung jedoch vertagt („ajourner“). Er hat den Antrag also nicht abgelehnt und ist dem Gutachten nicht gefolgt.',
    sources: [
      { tab: 'commission', quote: 'rejeter la demande de subside extraordinaire du Tennis-Club Kalbaach' },
      { tab: 'deliberation', quote: "d'ajourner sa décision sur la demande de subside extraordinaire du Tennis-Club Kalbaach" },
    ],
    whyNot: {
      V: 'Diese Antwort setzt die Empfehlung der Kommission mit dem Ratsbeschluss gleich.',
      I: 'Der Beschluss sagt ausdrücklich, dass vertagt und nicht abgelehnt wurde.',
    },
  },
};
