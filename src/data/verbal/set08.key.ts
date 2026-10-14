import type { VerbalKey } from '../types';

export const key08: VerbalKey = {
  'v08-01': {
    answer: 'F',
    explanation:
      'In der Nacht von Freitag auf Samstag ist verstärkte Musik bis 1:00 Uhr erlaubt. Eine Ausnahme ist nur für eine einzige Nacht pro Veranstaltung möglich, und der Bürgermeister hat sie für die Nacht von Samstag auf Sonntag erteilt. Am Freitag bleibt es also bei 1:00 Uhr, was auch dem Programm entspricht.',
    sources: [
      { tab: 'conditions', quote: 'pour une seule nuit par manifestation' },
      {
        tab: 'courriel',
        quote: 'Le bourgmestre vous accorde une dérogation permettant la diffusion de musique amplifiée jusqu’à 2h00 dans la nuit du samedi 10 au dimanche 11 juillet 2027.',
      },
    ],
    whyNot: {
      V: 'Diese Antwort überträgt die Ausnahme auf die falsche Nacht. Sie gilt nur von Samstag auf Sonntag.',
      I: 'Die allgemeine Regel (1:00 Uhr) und die einzige mögliche Ausnahme sind eindeutig festgelegt.',
    },
  },
  'v08-02': {
    answer: 'V',
    explanation:
      'Die längste mögliche Frist beträgt acht Wochen vor dem ersten Festtag (Freitag, 9. Juli 2027), also bis Freitag, den 14. Mai 2027. Der Antrag ging am 3. Mai ein und ist damit rechtzeitig, unabhängig davon, ob die Acht- oder die Vier-Wochen-Frist gilt.',
    sources: [
      { tab: 'conditions', quote: 'La demande est introduite au moins huit semaines avant le premier jour de la manifestation' },
      { tab: 'courriel', quote: 'reçue le lundi 3 mai 2027' },
      { tab: 'programme', quote: 'du 9 au 11 juillet 2027' },
    ],
    whyNot: {
      F: 'Vom 3. Mai bis zum 9. Juli sind es mehr als neun Wochen. Die Frist ist also eingehalten.',
      I: 'Eingangsdatum, Festbeginn und Frist sind bekannt. Dass die Versicherungsbescheinigung fehlte, betrifft nicht die Antragsfrist.',
    },
  },
  'v08-03': {
    answer: 'I',
    explanation:
      'Die Sperrung ist nur ein Vorschlag der Polizei, der dem Schöffenrat vorgelegt wird. Ob der Schöffenrat zustimmt, steht in keinem Dokument.',
    sources: [
      {
        tab: 'pv',
        quote: "Le représentant de la police propose de fermer la rue de l'Église à la circulation le samedi à partir de 16h00. Cette proposition sera soumise au collège des bourgmestre et échevins.",
      },
    ],
    whyNot: {
      V: 'Ein Vorschlag ist keine Entscheidung.',
      F: 'Ebenso wenig ist belegt, dass der Vorschlag abgelehnt wurde.',
    },
  },
  'v08-04': {
    answer: 'F',
    explanation:
      'Pro angefangene 250 Personen ist ein Sicherheitsagent vorgeschrieben. Freitag: 800 Personen ergeben 4 Agenten (4 geplant). Sonntag: 600 Personen ergeben 3 Agenten (3 geplant). Samstag: 1 400 / 250 = 5,6, also 6 angefangene Tranchen und 6 Agenten. Geplant sind nur 5. An einem der drei Tage wird das Minimum also nicht erreicht.',
    sources: [
      {
        tab: 'securite',
        quote: 'un agent agréé par tranche entamée de 250 personnes dont la présence simultanée est attendue, avec un minimum de deux agents',
      },
      {
        tab: 'pv',
        quote: "Fréquentation simultanée maximale attendue : 800 personnes le vendredi, 1 400 le samedi et 600 le dimanche. L'organisateur prévoit 4 agents de sécurité le vendredi, 5 le samedi et 3 le dimanche.",
      },
    ],
    whyNot: {
      V: 'Wer 1 400 / 250 auf 5 abrundet, übersieht die Regel „tranche entamée“.',
      I: 'Besucherzahlen, geplante Agenten und Berechnungsregel sind alle angegeben.',
    },
  },
  'v08-05': {
    answer: 'I',
    explanation:
      'Helfer müssen mindestens 16 Jahre alt sein. Das Protokoll sagt nur, dass 9 der Freiwilligen minderjährig sind. Ihr genaues Alter ist unbekannt, und die Bedingungen werden erst noch geprüft. Ob alle neun mindestens 16 sind, lässt sich nicht feststellen.',
    sources: [
      { tab: 'securite', quote: 'Bénévoles : âge minimum de 16 ans.' },
      {
        tab: 'pv',
        quote: '42 personnes se sont proposées comme bénévoles, dont 9 mineurs. La liste définitive sera arrêtée après vérification des conditions requises.',
      },
    ],
    whyNot: {
      V: 'Dass sich jemand als Helfer meldet, beweist nicht, dass er die Altersgrenze erfüllt.',
      F: 'Es ist ebenso wenig belegt, dass einer der Minderjährigen jünger als 16 ist.',
    },
  },
  'v08-06': {
    answer: 'V',
    explanation:
      'Ein Sanitätsposten ist Pflicht, wenn mehr als 1 000 Personen gleichzeitig erwartet werden. Samstag: 1 400, also Pflicht. Sonntag: 600, also keine Pflicht.',
    sources: [
      { tab: 'securite', quote: 'Poste de secours : obligatoire lorsque la fréquentation simultanée attendue dépasse 1 000 personnes' },
      { tab: 'pv', quote: '1 400 le samedi et 600 le dimanche' },
    ],
    whyNot: {
      F: 'Beide Teile der Aussage stimmen mit Schwellenwert und erwarteten Zahlen überein.',
      I: 'Die erwarteten Besucherzahlen stehen im Protokoll, der Schwellenwert in den Sicherheitsanforderungen.',
    },
  },
  'v08-07': {
    answer: 'F',
    explanation:
      'Bei Warnstufe Orange werden nur Zelte und Bauten über 50 m² geräumt. Aktivitäten im Freien dürfen ausdrücklich weiterlaufen. Unterbrochen wird die Veranstaltung erst bei Warnstufe Rot.',
    sources: [
      { tab: 'securite', quote: 'Alerte orange : les chapiteaux et structures de plus de 50 m² sont évacués ; les activités en plein air peuvent se poursuivre.' },
      { tab: 'securite', quote: 'Alerte rouge : la manifestation est interrompue et le site est évacué.' },
    ],
    whyNot: {
      V: 'Diese Antwort verwechselt die Regeln für Orange und Rot.',
      I: 'Die Regel für Orange ist eindeutig und erlaubt Aktivitäten im Freien.',
    },
  },
  'v08-08': {
    answer: 'V',
    explanation:
      'Die Verwaltung hat für die Versicherungsbescheinigung eine Frist bis Freitag, den 4. Juni 2027, gesetzt. Laut Protokoll wurde sie am 28. Mai übermittelt und der Eingang bestätigt. Das liegt vor der Frist.',
    sources: [
      { tab: 'courriel', quote: 'qui doit nous parvenir au plus tard le vendredi 4 juin 2027' },
      { tab: 'pv', quote: "L'organisateur confirme avoir transmis l'attestation d'assurance le 28 mai ; le service des manifestations en accuse réception." },
    ],
    whyNot: {
      F: 'Der 28. Mai liegt vor dem 4. Juni.',
      I: 'Frist und Übermittlungsdatum stehen beide in den Dokumenten, der Eingang wurde bestätigt.',
    },
  },
  'v08-09': {
    answer: 'I',
    explanation:
      'Bei Warnstufe Gelb gibt es keine feste Regel. Der Sicherheitsverantwortliche entscheidet zusammen mit dem Vertreter der Gemeinde über die Maßnahmen. Dass das Zelt 2026 bei Gelb geräumt wurde, verpflichtet nicht für 2027.',
    sources: [
      {
        tab: 'securite',
        quote: "Alerte jaune : le responsable de la sécurité de l'organisateur décide, en concertation avec le représentant de la commune, des mesures à prendre.",
      },
      { tab: 'bilan', quote: 'le responsable de la sécurité a fait évacuer le chapiteau par précaution pendant 30 minutes' },
    ],
    whyNot: {
      V: 'Die Räumung ist bei Gelb nicht vorgeschrieben. Vorgeschrieben ist sie erst bei Orange. Das Beispiel von 2026 ist keine Regel.',
      F: 'Eine Räumung ist bei Gelb durchaus möglich, wenn der Verantwortliche sie anordnet.',
    },
  },
  'v08-10': {
    answer: 'F',
    explanation:
      'Nach Art. 6 hätte der Veranstalter zwölf Stunden nach Festende (Sonntag 20:00 Uhr) Zeit, also bis Montag 8:00 Uhr. Die E-Mail setzt aber eine kürzere Frist, die die Regel aus Art. 6 ersetzt: Die Aufbauten auf dem Schulparkplatz müssen bis Montag, 12. Juli 2027, um 7:00 Uhr abgebaut sein.',
    sources: [
      { tab: 'conditions', quote: 'au plus tard douze heures après la fin de la manifestation, sauf délai plus court fixé par l\'administration communale' },
      { tab: 'programme', quote: 'Dimanche 11 juillet | 10h00 – 20h00' },
      { tab: 'courriel', quote: "devront y être démontés au plus tard le lundi 12 juillet 2027 à 7h00. Ce délai remplace celui de l'article 6 du règlement." },
    ],
    whyNot: {
      V: 'Diese Antwort wendet nur die allgemeine Zwölf-Stunden-Regel an und übersieht die kürzere Frist in der E-Mail.',
      I: 'Die E-Mail legt den Termin ausdrücklich fest.',
    },
  },
};
