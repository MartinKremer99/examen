// Situational-judgement items for the competency "Orientation client"
// (Kundenorientierung). Fictional commune: Gemeinde / Commune de Wiltzerbach.
// The answer key lives in customer.key.ts.

import type { L10n, SjtScenario } from '../types';

const Q_BEST: L10n = {
  de: "Wie reagieren Sie am angemessensten?",
  fr: "Quelle est la réaction la plus appropriée ?",
};

const Q_MOST_LEAST: L10n = {
  de: "Welche Reaktion ist am effektivsten und welche am wenigsten effektiv?",
  fr: "Quelle réaction est la plus efficace et laquelle est la moins efficace ?",
};

export const customerScenarios: SjtScenario[] = [
  {
    id: "c01",
    competency: "customer",
    format: "best",
    topicDe: "Falsche Veranstaltungsinfo auf der Website",
    situation: {
      de: "Sie arbeiten im Tourist-Info-Büro der Gemeinde Wiltzerbach. Ein Ehepaar aus Belgien steht verärgert am Schalter: Laut der Gemeindewebsite sollte heute Abend ein Open-Air-Konzert auf dem Marktplatz stattfinden. Vor Ort haben sie erfahren, dass das Konzert schon vor zwei Wochen auf nächsten Samstag verschoben wurde. Sie sind eigens dafür angereist. Die Website wird vom Kommunikationsdienst der Gemeinde gepflegt.",
      fr: "Vous travaillez au bureau d'information touristique de la commune de Wiltzerbach. Un couple venu de Belgique se présente, mécontent, au guichet : d'après le site internet de la commune, un concert en plein air devait avoir lieu ce soir sur la place du Marché. Sur place, ils ont appris que le concert avait été reporté au samedi suivant il y a déjà deux semaines. Ils ont fait le déplacement spécialement pour l'occasion. Le site internet est géré par le service communication de la commune.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie entschuldigen sich ausführlich im Namen der Gemeinde, zeigen großes Verständnis für den Ärger der beiden und versichern ihnen, dass so etwas nicht vorkommen dürfe.",
          fr: "Vous vous excusez longuement au nom de la commune, montrez beaucoup de compréhension pour leur contrariété et leur assurez qu'une telle erreur ne devrait pas arriver.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären, dass die Website nicht vom Tourist-Info-Büro, sondern vom Kommunikationsdienst der Gemeinde gepflegt wird, und geben ihnen dessen E-Mail-Adresse für ihre Beschwerde.",
          fr: "Vous expliquez que le site internet n'est pas géré par le bureau d'information touristique mais par le service communication de la commune, et leur donnez son adresse e-mail pour leur réclamation.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie räumen den Fehler ein, nennen das bestätigte neue Datum, schlagen Aktivitäten für heute Abend vor und melden den Fehler noch heute dem Kommunikationsdienst zur Korrektur.",
          fr: "Vous reconnaissez l'erreur, indiquez la nouvelle date confirmée, proposez des activités pour ce soir et signalez l'erreur le jour même au service communication pour correction.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie entschuldigen sich kurz, nennen das neue Konzertdatum und geben ihnen den aktuellen Veranstaltungskalender sowie Tipps für Aktivitäten am heutigen Abend mit.",
          fr: "Vous vous excusez brièvement, indiquez la nouvelle date du concert et leur remettez le calendrier actuel des manifestations ainsi que quelques idées d'activités pour ce soir.",
        },
      },
    ],
  },
  {
    id: "c02",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Verzögerte Antwort auf eine Anfrage",
    situation: {
      de: "Ein Bürger ruft im Bürgerbüro an. Er hat vor drei Wochen per E-Mail einen Anwohnerparkausweis beantragt und noch keine Antwort erhalten. Er ist hörbar gereizt: „Bei Ihnen antwortet niemand, und ich habe schon zum zweiten Mal einen Strafzettel bekommen!“ Im System sehen Sie, dass sein Antrag eingegangen ist und bei einer Kollegin in Bearbeitung ist. Über den Antrag entscheiden nicht Sie. Die Kollegin ist heute den ganzen Tag in einer Sitzung.",
      fr: "Un citoyen appelle le bureau de la population. Il a demandé une vignette de stationnement résidentiel par e-mail il y a trois semaines et n'a toujours pas reçu de réponse. Il est visiblement agacé : « Personne ne répond chez vous, et c'est déjà la deuxième fois que je reçois une contravention ! » Dans le système, vous voyez que sa demande a bien été reçue et qu'elle est en cours de traitement chez une collègue. La décision ne relève pas de vous. Cette collègue est en réunion toute la journée.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie erklären ruhig, dass derzeit viele Anträge vorliegen, diese der Reihe nach bearbeitet werden und er sicher bald eine Antwort erhalten wird.",
          fr: "Vous expliquez calmement que de nombreuses demandes sont en attente, qu'elles sont traitées dans l'ordre d'arrivée et qu'il recevra sûrement bientôt une réponse.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie bedauern die Wartezeit, bestätigen den Eingang, klären den Stand mit der Kollegin und rufen ihn bis morgen Mittag mit einem realistischen Termin zurück.",
          fr: "Vous regrettez l'attente, confirmez la réception, vérifiez l'état du dossier avec votre collègue et le rappelez d'ici demain midi avec un délai réaliste.",
        },
      },
      {
        id: "c",
        text: {
          de: "Um ihn zu beruhigen, sichern Sie ihm zu, dass der Ausweis genehmigt wird und noch diese Woche bei ihm ankommt, und raten ihm, den Strafzettel anzufechten.",
          fr: "Pour le calmer, vous lui assurez que sa vignette sera accordée et qu'il la recevra cette semaine, et vous lui conseillez de contester sa contravention.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie entschuldigen sich für die Verzögerung, geben ihm die Durchwahl der zuständigen Kollegin und bitten ihn, sie morgen direkt anzurufen, da sie heute in einer Sitzung ist.",
          fr: "Vous vous excusez pour le retard, lui donnez le numéro direct de la collègue chargée du dossier et lui demandez de l'appeler demain, puisqu'elle est en réunion aujourd'hui.",
        },
      },
    ],
  },
  {
    id: "c03",
    competency: "customer",
    format: "best",
    topicDe: "Bescheinigung heute nicht ausstellbar",
    situation: {
      de: "Eine Bürgerin benötigt eine Bescheinigung, die laut interner Dienstanweisung erst nach Prüfung und Unterschrift durch den zuständigen Sachbearbeiter ausgestellt werden darf. Dieser ist bis morgen Mittag abwesend. Die Bürgerin hat morgen um 9 Uhr einen Termin bei ihrer Bank und braucht das Dokument dringend. Sie kennen das Verfahren und könnten die Bescheinigung technisch selbst erstellen.",
      fr: "Une citoyenne a besoin d'une attestation qui, selon une instruction de service interne, ne peut être délivrée qu'après vérification et signature par l'agent compétent. Celui-ci est absent jusqu'à demain midi. La citoyenne a rendez-vous à sa banque demain à 9 heures et a un besoin urgent du document. Vous connaissez la procédure et pourriez techniquement établir l'attestation vous-même.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Da Sie das Verfahren genau kennen und die Bürgerin es eilig hat, stellen Sie die Bescheinigung ausnahmsweise selbst aus und informieren den Kollegen nach seiner Rückkehr darüber.",
          fr: "Comme vous connaissez bien la procédure et que la citoyenne est pressée, vous établissez exceptionnellement l'attestation vous-même et en informez votre collègue à son retour.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären freundlich, dass die Bescheinigung erst nach der Rückkehr des Kollegen ausgestellt werden kann, und bitten sie, morgen Nachmittag wiederzukommen.",
          fr: "Vous expliquez aimablement que l'attestation ne pourra être délivrée qu'après le retour de votre collègue et lui demandez de revenir demain après-midi.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie nehmen den Antrag mit allen Unterlagen auf, legen ihn dem Kollegen nach seiner Rückkehr vorrangig vor und sagen zu, sie anzurufen, sobald die Bescheinigung bereitliegt.",
          fr: "Vous enregistrez la demande avec toutes les pièces, la soumettez en priorité à votre collègue à son retour et promettez d'appeler la citoyenne dès que l'attestation sera prête.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie erklären die Regel, nehmen den Antrag vollständig auf, klären mit Ihrer Vorgesetzten, ob eine befugte Vertretung unterschreiben kann, und besprechen einen Plan B für den Banktermin.",
          fr: "Vous expliquez la règle, enregistrez la demande complète, vérifiez avec votre supérieure si un remplaçant habilité peut signer et envisagez avec elle une solution de repli pour la banque.",
        },
      },
    ],
  },
  {
    id: "c04",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Tourist spricht nur Englisch",
    situation: {
      de: "Im Tourist-Info-Büro fragt ein Tourist aus Irland, der nur Englisch spricht, nach einer Wanderroute zur Burgruine und danach, wie er anschließend mit dem Bus zurückkommt. Ihr Englisch reicht für einfache Gespräche. Hinter ihm warten zwei weitere Personen. Englischsprachige Wanderkarten sind vorrätig, der Busfahrplan ist auf Ihrem Bildschirm abrufbar.",
      fr: "Au bureau d'information touristique, un touriste irlandais qui ne parle qu'anglais demande un itinéraire de randonnée vers les ruines du château et comment revenir ensuite en bus. Votre anglais suffit pour des conversations simples. Deux autres personnes attendent derrière lui. Des cartes de randonnée en anglais sont disponibles et l'horaire des bus peut être consulté sur votre écran.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie antworten in einfachem Englisch, zeigen die Route auf der englischen Karte, prüfen den Busfahrplan und notieren ihm Haltestelle und Abfahrtszeiten.",
          fr: "Vous répondez dans un anglais simple, montrez l'itinéraire sur la carte en anglais, vérifiez l'horaire des bus et lui notez l'arrêt et les heures de départ.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie geben ihm die englische Wanderkarte, markieren die Route und verweisen ihn für die Busverbindung auf die Fahrplan-App, die er selbst prüfen kann.",
          fr: "Vous lui remettez la carte de randonnée en anglais, y marquez l'itinéraire et le renvoyez à l'application des transports pour vérifier lui-même la liaison en bus.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie erklären ihm auf Französisch und Deutsch, dass Auskünfte in den Landessprachen erteilt werden, und geben ihm eine französische Broschüre mit.",
          fr: "Vous lui expliquez en français et en allemand que les renseignements sont donnés dans les langues du pays et lui remettez une brochure en français.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie bitten ihn freundlich, zur Seite zu treten und zu warten, bis Ihre Kollegin mit sehr gutem Englisch in etwa zwanzig Minuten aus der Pause zurück ist.",
          fr: "Vous lui demandez aimablement de patienter à l'écart jusqu'au retour de pause, dans une vingtaine de minutes, de votre collègue qui parle très bien anglais.",
        },
      },
    ],
  },
  {
    id: "c05",
    competency: "customer",
    format: "best",
    topicDe: "Ausnahme von einer Anmeldefrist",
    situation: {
      de: "Die Anmeldefrist für Stände auf dem Weihnachtsmarkt der Gemeinde ist vor drei Tagen abgelaufen. Der Vorsitzende eines örtlichen Vereins kommt ins Veranstaltungsbüro und möchte seinen Stand jetzt noch anmelden. Er sei die letzten Wochen krank gewesen, und der Erlös gehe an einen guten Zweck. Laut Reglement entscheidet über Ausnahmen der Schöffenrat. Die Standvergabe ist noch nicht abgeschlossen.",
      fr: "Le délai d'inscription pour les stands du marché de Noël de la commune a expiré il y a trois jours. Le président d'une association locale se présente au bureau des manifestations et souhaite encore inscrire son stand. Il explique avoir été malade ces dernières semaines et précise que les bénéfices iront à une bonne cause. Selon le règlement, les exceptions relèvent du collège des bourgmestre et échevins. L'attribution des stands n'est pas encore terminée.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie erklären, dass die Frist für alle gleichermaßen gilt und verspätete Anmeldungen nicht berücksichtigt werden, und weisen auf die Anmeldung im nächsten Jahr hin.",
          fr: "Vous expliquez que le délai est le même pour tous et que les inscriptions tardives ne sont pas prises en compte, puis l'invitez à s'inscrire l'année prochaine.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären, dass Sie selbst keine Ausnahme gewähren dürfen, nehmen die Anmeldung mit Begründung schriftlich auf, legen sie dem Schöffenrat vor und sagen eine Rückmeldung zu.",
          fr: "Vous expliquez que vous ne pouvez pas accorder vous-même d'exception, enregistrez l'inscription motivée par écrit, la soumettez au collège échevinal et promettez un retour.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie zeigen Verständnis für seine Lage und raten ihm, ein formelles, gut begründetes Schreiben an den Schöffenrat zu richten, da dieser laut Reglement über Ausnahmen entscheidet.",
          fr: "Vous vous montrez compréhensif et lui conseillez d'adresser un courrier formel et bien motivé au collège échevinal, puisque c'est lui qui, selon le règlement, décide des exceptions.",
        },
      },
      {
        id: "d",
        text: {
          de: "Da die Standvergabe noch läuft und der Zweck gut ist, tragen Sie seinen Stand einfach noch in die Liste ein, ohne die Verspätung zu vermerken.",
          fr: "Comme l'attribution des stands est en cours et que la cause est bonne, vous ajoutez simplement son stand à la liste sans mentionner le retard.",
        },
      },
    ],
  },
  {
    id: "c06",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Telefon klingelt, Warteschlange am Schalter",
    situation: {
      de: "Sie sind allein am Empfang des Gemeindehauses. Vier Personen warten, und Sie bedienen gerade eine ältere Dame, die Ihnen ihr Anliegen erklärt. Das Telefon klingelt zum dritten Mal hintereinander – offenbar derselbe Anrufer. Eine Mailbox gibt es nicht, Anrufe können aber ans Sekretariat umgeleitet werden.",
      fr: "Vous êtes seul à l'accueil de la maison communale. Quatre personnes attendent et vous êtes en train de servir une dame âgée qui vous explique sa demande. Le téléphone sonne pour la troisième fois d'affilée, apparemment le même correspondant. Il n'y a pas de messagerie vocale, mais les appels peuvent être renvoyés vers le secrétariat.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie unterbrechen das Gespräch mit der Dame und nehmen jeden Anruf an, um die Anliegen der Anrufer gleich am Telefon vollständig zu klären, bevor Sie weitermachen.",
          fr: "Vous interrompez l'entretien avec la dame et prenez chaque appel afin de traiter entièrement les demandes des correspondants au téléphone avant de poursuivre.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie lassen das Telefon klingeln, da die Personen vor Ort Vorrang haben, und konzentrieren sich ganz auf die Dame und die übrigen Wartenden in der Schlange.",
          fr: "Vous laissez sonner le téléphone, car les personnes présentes sont prioritaires, et vous vous concentrez entièrement sur la dame et les autres personnes qui attendent.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie entschuldigen sich kurz bei der Dame, nehmen den Anruf an, notieren Name, Nummer und Anliegen für einen Rückruf und leiten weitere Anrufe ans Sekretariat um.",
          fr: "Vous vous excusez brièvement auprès de la dame, prenez l'appel, notez nom, numéro et objet pour un rappel, puis renvoyez les appels suivants vers le secrétariat.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie leiten das Telefon ans Sekretariat um, ohne den Anruf anzunehmen, und bedienen die Personen am Schalter ohne Unterbrechung weiter.",
          fr: "Vous renvoyez le téléphone vers le secrétariat sans prendre l'appel et continuez à servir les personnes au guichet sans interruption.",
        },
      },
    ],
  },
  {
    id: "c07",
    competency: "customer",
    format: "best",
    topicDe: "Unsichere Auskunft – nicht raten",
    situation: {
      de: "Ein Bürger fragt am Schalter, ob er für den Einbau einer Solaranlage eine Gemeindeprämie erhalten kann und wie hoch sie wäre. Sie erinnern sich vage an ein Rundschreiben vom letzten Jahr, sind aber nicht sicher, ob die Prämie noch gilt und welche Bedingungen daran geknüpft sind. Der zuständige Umweltdienst ist heute telefonisch erreichbar.",
      fr: "Un citoyen demande au guichet s'il peut obtenir une prime communale pour l'installation de panneaux solaires et quel en serait le montant. Vous vous souvenez vaguement d'une circulaire de l'année dernière, mais vous n'êtes pas sûr que la prime soit toujours en vigueur ni des conditions qui s'y rattachent. Le service de l'environnement compétent est joignable par téléphone aujourd'hui.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie sagen offen, dass Sie es nicht sicher wissen, rufen kurz beim Umweltdienst an und geben ihm die bestätigte Auskunft oder vermitteln ihm einen Ansprechpartner.",
          fr: "Vous dites franchement que vous n'en êtes pas sûr, appelez brièvement le service de l'environnement et lui donnez l'information confirmée ou le mettez en contact avec un interlocuteur.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären, dass der Umweltdienst dafür zuständig ist, und geben ihm dessen Telefonnummer und Sprechzeiten, damit er sich dort informieren kann.",
          fr: "Vous expliquez que le service de l'environnement est compétent et lui donnez son numéro et ses heures de permanence pour qu'il puisse s'y renseigner.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie sagen ihm, dass es Ihres Wissens eine solche Prämie gibt, er sich aber für die Einzelheiten und Bedingungen auf der Website der Gemeinde informieren solle.",
          fr: "Vous lui dites qu'à votre connaissance, une telle prime existe, mais qu'il devrait consulter le site internet de la commune pour les détails et les conditions.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie nennen ihm den Betrag aus dem Rundschreiben vom letzten Jahr und weisen darauf hin, dass er damit für seine Planung schon einmal eine erste Orientierung hat.",
          fr: "Vous lui indiquez le montant figurant dans la circulaire de l'an dernier en précisant que cela lui donne déjà une première idée pour planifier son projet.",
        },
      },
    ],
  },
  {
    id: "c08",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Das eigentliche Anliegen erkennen",
    situation: {
      de: "Ein älterer Herr kommt an den Schalter und verlangt „das Formular für die Müllabfuhr“. Die Gemeinde hat vier verschiedene Formulare zum Thema Abfall: Anmeldung neuer Tonnen, Änderung der Tonnengröße, Sperrmüllabholung und Befreiungsantrag. Der Herr wirkt unsicher und etwas ungeduldig.",
      fr: "Un monsieur âgé se présente au guichet et demande « le formulaire pour les poubelles ». La commune propose quatre formulaires différents en matière de déchets : inscription de nouvelles poubelles, changement de taille de poubelle, enlèvement des encombrants et demande d'exemption. Le monsieur semble hésitant et un peu impatient.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie legen ihm alle vier Formulare vor und erklären kurz, wofür jedes einzelne gedacht ist, damit er das passende in Ruhe selbst auswählen kann.",
          fr: "Vous lui présentez les quatre formulaires en expliquant brièvement à quoi sert chacun, pour qu'il choisisse lui-même tranquillement celui qui convient.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie geben ihm das Formular, das am häufigsten verlangt wird, da er es eilig zu haben scheint und so am schnellsten bedient ist.",
          fr: "Vous lui donnez le formulaire le plus souvent demandé, puisqu'il semble pressé et sera ainsi servi le plus rapidement.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie verweisen ihn auf die Website der Gemeinde, auf der alle Formulare mit Erläuterungen zum Herunterladen bereitstehen.",
          fr: "Vous le renvoyez au site internet de la commune, où tous les formulaires sont disponibles en téléchargement avec des explications.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie fragen ihn kurz, worum es konkret geht, geben ihm dann das passende Formular und erklären, wie er es ausfüllt und wo er es abgibt.",
          fr: "Vous lui demandez brièvement de quoi il s'agit concrètement, puis lui remettez le formulaire adapté en expliquant comment le remplir et où le déposer.",
        },
      },
    ],
  },
  {
    id: "c09",
    competency: "customer",
    format: "best",
    topicDe: "Aufgebrachter Bürger am Schalter",
    situation: {
      de: "Ein Bürger kommt aufgebracht an den Schalter. Er hat eine Wasserrechnung der Gemeinde erhalten, die er für viel zu hoch hält, und wird laut: „Das ist Abzocke! Das zahle ich nicht!“ Andere Wartende schauen herüber. Wasserrechnungen werden vom Einnahmedienst im ersten Stock geprüft, der heute besetzt ist.",
      fr: "Un citoyen arrive au guichet très énervé. Il a reçu une facture d'eau de la commune qu'il juge beaucoup trop élevée et hausse le ton : « C'est du vol ! Je ne paierai pas ! » Les autres personnes qui attendent se retournent. Les factures d'eau sont vérifiées par la recette communale au premier étage, qui est occupée aujourd'hui.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie sagen ihm, dass Sie in diesem Ton nicht mit ihm sprechen, und bitten ihn, wiederzukommen, wenn er sich beruhigt hat.",
          fr: "Vous lui dites que vous ne discuterez pas sur ce ton et lui demandez de revenir lorsqu'il se sera calmé.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie bleiben ruhig, hören zu, notieren die Rechnungsdaten und vereinbaren telefonisch mit dem Einnahmedienst, dass ihn dort gleich jemand empfängt.",
          fr: "Vous restez calme, l'écoutez, notez les références de la facture et convenez par téléphone avec la recette communale que quelqu'un le reçoive tout de suite.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie entschuldigen sich mehrmals für die Unannehmlichkeiten, die ihm entstanden sind, und versichern ihm, dass sicher ein Fehler vorliegt, der umgehend korrigiert wird.",
          fr: "Vous vous excusez à plusieurs reprises pour le désagrément qu'il subit et lui assurez qu'il s'agit certainement d'une erreur qui sera rapidement corrigée.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie bleiben ruhig, zeigen Verständnis und erklären ihm genau, wie er zum Einnahmedienst im ersten Stock gelangt, wo die Rechnung geprüft wird.",
          fr: "Vous restez calme, montrez de la compréhension et lui expliquez précisément comment se rendre à la recette communale au premier étage, où la facture sera vérifiée.",
        },
      },
    ],
  },
  {
    id: "c10",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Zugesagten Rückruf einhalten",
    situation: {
      de: "Sie haben einer Vereinsvorsitzenden heute Morgen zugesagt, sie bis 16 Uhr zurückzurufen, ob der Festsaal am 12. Mai noch frei ist. Die Kollegin, die die Saalbelegung verwaltet, hat auf Ihre E-Mail noch nicht geantwortet; sie ist heute im Haus. Es ist 15.45 Uhr, und auf Ihrem Tisch liegen noch drei dringende Akten.",
      fr: "Ce matin, vous avez promis à la présidente d'une association de la rappeler avant 16 heures pour lui dire si la salle des fêtes est encore libre le 12 mai. La collègue qui gère les réservations de la salle n'a pas encore répondu à votre e-mail ; elle est présente aujourd'hui. Il est 15 h 45 et trois dossiers urgents vous attendent encore sur votre bureau.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie warten die Antwort der Kollegin ab und rufen die Vorsitzende an, sobald Sie Bescheid wissen, auch wenn das erst morgen sein sollte.",
          fr: "Vous attendez la réponse de votre collègue et rappelez la présidente dès que vous savez, même si ce ne devait être que demain.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie rufen die Vorsitzende vor 16 Uhr an, erklären, dass Sie noch keine Bestätigung haben, und sagen einen Rückruf für morgen Vormittag zu.",
          fr: "Vous appelez la présidente avant 16 heures, lui expliquez que vous n'avez pas encore de confirmation et promettez de la rappeler demain matin.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie rufen die Kollegin kurz an oder gehen bei ihr vorbei, klären die Belegung und rufen die Vorsitzende vor 16 Uhr mit der Antwort zurück.",
          fr: "Vous appelez brièvement votre collègue ou passez la voir, vérifiez la disponibilité et rappelez la présidente avant 16 heures avec la réponse.",
        },
      },
      {
        id: "d",
        text: {
          de: "Um den Termin einzuhalten, sagen Sie ihr, dass der Saal voraussichtlich frei ist, da Ihnen keine Reservierung für dieses Datum bekannt ist.",
          fr: "Pour respecter le délai, vous lui dites que la salle est probablement libre, puisque vous n'avez connaissance d'aucune réservation à cette date.",
        },
      },
    ],
  },
  {
    id: "c11",
    competency: "customer",
    format: "best",
    topicDe: "Verwaltungsverfahren verständlich erklären",
    situation: {
      de: "Ein neu gegründeter Jugendverein möchte zum ersten Mal den Gemeindesaal für ein Konzert mieten. Der junge Vorsitzende kennt keine Verwaltungsabläufe. Das Verfahren umfasst einen schriftlichen Antrag, den Nachweis einer Haftpflichtversicherung, eine Kaution und für den Getränkeausschank eine gesonderte Genehmigung. Er fragt: „Was muss ich denn jetzt genau machen?“",
      fr: "Une association de jeunes nouvellement créée souhaite louer pour la première fois la salle communale pour un concert. Le jeune président ne connaît pas les démarches administratives. La procédure comprend une demande écrite, une attestation d'assurance responsabilité civile, une caution et, pour la vente de boissons, une autorisation séparée. Il demande : « Qu'est-ce que je dois faire exactement ? »",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie geben ihm das Saalreglement und das Antragsformular mit und bitten ihn, beides zu Hause in Ruhe durchzulesen und sich bei Fragen jederzeit wieder zu melden.",
          fr: "Vous lui remettez le règlement de la salle et le formulaire de demande et lui demandez de les lire tranquillement chez lui et de revenir vers vous en cas de questions.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären ihm mündlich und der Reihe nach die vier Schritte des Verfahrens, beantworten seine Fragen und geben ihm das Antragsformular mit.",
          fr: "Vous lui expliquez oralement, dans l'ordre, les quatre étapes de la procédure, répondez à ses questions et lui remettez le formulaire de demande.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie raten ihm, sich zuerst bei einem erfahrenen Verein der Gemeinde beraten zu lassen, da das Verfahren für Anfänger erfahrungsgemäß recht kompliziert sei.",
          fr: "Vous lui conseillez de demander d'abord conseil à une association expérimentée de la commune, car la procédure serait, d'expérience, assez compliquée pour un débutant.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie erklären die Schritte in einfachen Worten, geben ihm eine Checkliste mit Fristen und Ansprechpartnern mit und bieten an, den Antrag vor der Abgabe durchzusehen.",
          fr: "Vous expliquez les étapes avec des mots simples, lui remettez une liste de contrôle avec délais et interlocuteurs et proposez de relire sa demande avant le dépôt.",
        },
      },
    ],
  },
  {
    id: "c12",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Interner Kunde: dringende Anfrage eines Kollegen",
    situation: {
      de: "Ein Kollege vom technischen Dienst ruft an: Er braucht bis heute 14 Uhr die Liste aller genehmigten Veranstaltungen am kommenden Wochenende, um Straßensperrungen zu planen. Sie führen diese Liste. Es ist 11 Uhr, und Sie bereiten gerade die Unterlagen für eine Sitzung um 15 Uhr vor.",
      fr: "Un collègue du service technique vous appelle : il a besoin, d'ici 14 heures aujourd'hui, de la liste de toutes les manifestations autorisées le week-end prochain pour planifier les fermetures de routes. C'est vous qui tenez cette liste. Il est 11 heures et vous préparez les documents pour une réunion à 15 heures.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie klären kurz, welche Angaben er genau braucht, und schicken ihm die Liste bis 13 Uhr, bevor Sie mit der Sitzungsvorbereitung weitermachen.",
          fr: "Vous clarifiez brièvement les informations dont il a besoin et lui envoyez la liste avant 13 heures, avant de reprendre la préparation de la réunion.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären, dass Sie mit der Sitzungsvorbereitung ausgelastet sind, und bitten ihn, solche Anfragen künftig früher zu stellen.",
          fr: "Vous expliquez que la préparation de la réunion vous occupe entièrement et lui demandez de faire ce type de demande plus tôt à l'avenir.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie schicken ihm sofort die komplette Veranstaltungsliste des ganzen Monats, damit er die für das Wochenende relevanten Termine selbst heraussuchen kann.",
          fr: "Vous lui envoyez immédiatement la liste complète des manifestations de tout le mois, pour qu'il y recherche lui-même les dates qui concernent le week-end.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie sagen ihm zu, die Liste gleich nach Ihrer Sitzung zu schicken, da die Sitzungsvorbereitung heute Vorrang hat.",
          fr: "Vous lui promettez d'envoyer la liste juste après votre réunion, la préparation de celle-ci étant prioritaire aujourd'hui.",
        },
      },
    ],
  },
  {
    id: "c13",
    competency: "customer",
    format: "best",
    topicDe: "Unterstützung beim Online-Portal",
    situation: {
      de: "Eine ältere Bürgerin möchte ihren Enkel für die Ferienaktivitäten der Gemeinde anmelden. Laut Beschluss des Schöffenrats ist die Anmeldung ausschließlich über das Online-Portal möglich; Anmeldeschluss ist übermorgen. Sie hat ein Benutzerkonto, kommt mit dem Portal aber nicht zurecht und ist sichtlich verunsichert. Im Foyer steht ein öffentliches Terminal, und am Schalter ist gerade wenig Betrieb.",
      fr: "Une citoyenne âgée souhaite inscrire son petit-fils aux activités de vacances de la commune. Par décision du collège échevinal, l'inscription se fait exclusivement via le portail en ligne ; la clôture des inscriptions est dans deux jours. Elle a un compte utilisateur, mais ne s'en sort pas avec le portail et semble visiblement désemparée. Une borne publique se trouve dans le hall et il y a peu de monde au guichet en ce moment.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie lassen sich ihre Zugangsdaten geben und erledigen die Anmeldung später in Ruhe selbst für sie, damit sie sich nicht weiter darum kümmern muss.",
          fr: "Vous lui demandez ses identifiants et vous chargez de faire l'inscription pour elle plus tard, à tête reposée, pour qu'elle n'ait plus à s'en occuper.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären ihr, dass die Anmeldung nur online möglich ist, und geben ihr die Adresse des Portals sowie die Nummer der Hotline mit.",
          fr: "Vous lui expliquez que l'inscription se fait uniquement en ligne et lui remettez l'adresse du portail ainsi que le numéro de la hotline.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie gehen mit ihr zum Terminal im Foyer, führen sie Schritt für Schritt durch die Anmeldung, die sie selbst eingibt, und geben ihr eine Kurzanleitung mit.",
          fr: "Vous l'accompagnez à la borne du hall, la guidez pas à pas dans l'inscription qu'elle saisit elle-même et lui remettez un petit guide.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie geben ihr eine bebilderte Schritt-für-Schritt-Anleitung für das Portal und schlagen vor, dass ihr ein Familienmitglied bis übermorgen bei der Anmeldung hilft.",
          fr: "Vous lui remettez un guide illustré du portail, étape par étape, et lui suggérez de se faire aider par un membre de sa famille pour l'inscription d'ici deux jours.",
        },
      },
    ],
  },
  {
    id: "c14",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Erwartungen an die Lieferzeit steuern",
    situation: {
      de: "Eine Bürgerin beantragt am Schalter einen neuen Personalausweis. Sie fliegt in zehn Tagen in den Urlaub und geht davon aus, den Ausweis in zwei, drei Tagen zu erhalten. Laut den aktuellen Angaben der ausstellenden Behörde beträgt die Lieferzeit derzeit etwa drei Wochen. Im Gespräch erwähnt sie, dass ihr Reisepass noch gültig ist.",
      fr: "Une citoyenne demande au guichet une nouvelle carte d'identité. Elle part en vacances en avion dans dix jours et pense recevoir sa carte dans deux ou trois jours. Selon les indications actuelles de l'autorité émettrice, le délai de livraison est actuellement d'environ trois semaines. Au cours de l'entretien, elle mentionne que son passeport est encore valable.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie teilen ihr die Lieferzeit von drei Wochen mit und nehmen den Antrag auf; wie sie ihre Reise organisiert, müsse sie selbst klären.",
          fr: "Vous lui indiquez le délai de trois semaines et enregistrez la demande ; quant à l'organisation de son voyage, c'est à elle de voir.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie nennen die realistische Lieferzeit, weisen darauf hin, dass ihr gültiger Reisepass eine Lösung sein kann, und raten ihr, die Einreiseregeln ihres Ziellandes zu prüfen.",
          fr: "Vous indiquez le délai réaliste, signalez que son passeport valable peut être une solution et lui conseillez de vérifier les règles d'entrée de sa destination.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie erklären die aktuelle Lieferzeit von drei Wochen und erkundigen sich bei Ihrer Vorgesetzten, ob es für solche Fälle ein Eilverfahren gibt, bevor Sie den Antrag aufnehmen.",
          fr: "Vous expliquez le délai actuel de trois semaines et demandez à votre supérieure s'il existe une procédure d'urgence pour ce type de cas avant d'enregistrer la demande.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie beruhigen sie und versprechen, den Antrag als dringend zu kennzeichnen, sodass der Ausweis sicher vor dem Abflug bei ihr ist.",
          fr: "Vous la rassurez et lui promettez de marquer la demande comme urgente, de sorte que la carte lui parviendra à coup sûr avant son départ.",
        },
      },
    ],
  },
  {
    id: "c15",
    competency: "customer",
    format: "best",
    topicDe: "Beschwerde über einen Kollegen",
    situation: {
      de: "Ein Bürger beschwert sich bei Ihnen über Ihren Kollegen Marc: Dieser sei gestern am Telefon „unverschämt“ gewesen und habe einfach aufgelegt. Der Bürger verlangt eine Entschuldigung und möchte endlich eine Antwort auf seine Frage zur Fälligkeit der Hundesteuer – eine Frage, die Sie selbst beantworten können. Marc ist heute nicht im Dienst.",
      fr: "Un citoyen se plaint auprès de vous de votre collègue Marc : celui-ci aurait été « insolent » hier au téléphone et aurait raccroché sans autre forme de procès. Le citoyen exige des excuses et veut enfin une réponse à sa question sur l'échéance de la taxe sur les chiens, une question à laquelle vous pouvez répondre vous-même. Marc n'est pas de service aujourd'hui.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie hören zu, bedauern, dass das Gespräch so verlaufen ist, beantworten seine Frage zur Hundesteuer und leiten die Beschwerde sachlich an Ihre Vorgesetzte weiter.",
          fr: "Vous l'écoutez, regrettez que l'échange se soit déroulé ainsi, répondez à sa question sur la taxe sur les chiens et transmettez la réclamation de façon factuelle à votre supérieure.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie bedauern den Vorfall, notieren die Beschwerde für Ihre Vorgesetzte und sagen ihm zu, dass sich jemand wegen seiner Frage zur Hundesteuer bei ihm meldet.",
          fr: "Vous regrettez l'incident, notez la réclamation pour votre supérieure et lui assurez que quelqu'un le recontactera au sujet de sa question sur la taxe sur les chiens.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie entschuldigen sich ausdrücklich für Marc, räumen ein, dass er öfter so reagiere, und versprechen dem Bürger, dass sein Verhalten Konsequenzen für ihn haben wird.",
          fr: "Vous vous excusez expressément pour Marc, admettez qu'il réagit souvent ainsi et promettez au citoyen que son comportement aura des conséquences pour lui.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie erklären, dass Sie das Verhalten eines Kollegen nicht beurteilen können, und bitten ihn, sich schriftlich beim Gemeindesekretär zu beschweren.",
          fr: "Vous expliquez que vous ne pouvez pas juger le comportement d'un collègue et lui demandez d'adresser une réclamation écrite au secrétaire communal.",
        },
      },
    ],
  },
  {
    id: "c16",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Abgesagte Veranstaltung und Rückerstattung",
    situation: {
      de: "Wegen eines Unwetters wurde das Sommerfest der Gemeinde kurzfristig abgesagt. Eine Touristin, die ihre Eintrittskarten im Tourist-Info-Büro gekauft hat, verlangt sofort ihr Geld zurück, da sie morgen abreist. Über Rückerstattungen entscheidet das Veranstaltungsbüro; eine Regelung ist für morgen angekündigt. Das Veranstaltungsbüro ist heute nicht mehr besetzt.",
      fr: "En raison d'un orage, la fête d'été de la commune a été annulée au dernier moment. Une touriste qui a acheté ses billets au bureau d'information touristique exige d'être remboursée immédiatement, car elle repart demain. Les remboursements relèvent du bureau des manifestations ; une procédure a été annoncée pour demain. Le bureau des manifestations n'est plus occupé aujourd'hui.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie erstatten ihr den Betrag sofort aus der Kasse der Tourist-Info, da sie abreist und der Fall eindeutig zu sein scheint.",
          fr: "Vous la remboursez immédiatement avec la caisse du bureau d'information touristique, puisqu'elle repart et que le cas semble évident.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie versichern ihr, dass sie ihr Geld auf jeden Fall zurückbekommt, und bitten sie, morgen vor ihrer Abreise noch einmal im Tourist-Info-Büro vorbeizukommen.",
          fr: "Vous lui assurez qu'elle sera remboursée quoi qu'il arrive et lui demandez de repasser demain au bureau d'information touristique avant son départ.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie bedauern die Absage und geben ihr die E-Mail-Adresse des Veranstaltungsbüros, damit sie ihre Anfrage mit Kaufbeleg und Bankverbindung selbst dorthin schicken kann.",
          fr: "Vous regrettez l'annulation et lui donnez l'adresse e-mail du bureau des manifestations pour qu'elle y envoie elle-même sa demande avec le justificatif d'achat et ses coordonnées bancaires.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie bedauern die Absage, nehmen Kaufbeleg und Kontaktdaten auf, legen den Fall morgen früh dem Veranstaltungsbüro vor und sagen zu, dass sie per E-Mail Bescheid bekommt.",
          fr: "Vous regrettez l'annulation, relevez le justificatif d'achat et ses coordonnées, transmettez le dossier demain matin au bureau des manifestations et lui assurez qu'elle sera informée par e-mail.",
        },
      },
    ],
  },
  {
    id: "c17",
    competency: "customer",
    format: "best",
    topicDe: "Systemausfall und lange Warteschlange",
    situation: {
      de: "Am Montagmorgen fällt im Bürgerbüro die Software für Wohnsitzbescheinigungen aus. Die IT rechnet mit mindestens einer Stunde. Inzwischen warten acht Personen mit unterschiedlichen Anliegen, einige werden ungeduldig, und ein Mann sagt laut: „Typisch Verwaltung!“ Sie sind mit einer Kollegin am Schalter.",
      fr: "Un lundi matin, le logiciel des certificats de résidence tombe en panne au bureau de la population. Le service informatique prévoit au moins une heure. Entre-temps, huit personnes attendent avec des demandes diverses, certaines s'impatientent et un homme lance à voix haute : « Typique de l'administration ! » Vous êtes au guichet avec une collègue.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie arbeiten konzentriert weiter und erklären jedem, der an die Reihe kommt, dass das System ausgefallen ist und er warten oder später wiederkommen müsse.",
          fr: "Vous continuez à travailler avec concentration et expliquez à chaque personne qui arrive au guichet que le système est en panne et qu'elle doit attendre ou revenir plus tard.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie antworten dem Mann, dass die Verwaltung nichts für den technischen Ausfall könne und er sich wie alle anderen Wartenden auch gedulden müsse.",
          fr: "Vous répondez à l'homme que l'administration n'est pour rien dans cette panne technique et qu'il doit patienter comme toutes les autres personnes.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie informieren alle Wartenden über Ausfall und voraussichtliche Dauer, erledigen Anliegen ohne System sofort und bieten den übrigen Zusendung oder einen späteren Termin an.",
          fr: "Vous informez toutes les personnes en attente de la panne et de sa durée prévue, traitez tout de suite les demandes sans système et proposez aux autres un envoi ou un rendez-vous ultérieur.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie informieren alle Wartenden gemeinsam über den Ausfall, entschuldigen sich ausdrücklich für die Unannehmlichkeiten und bitten um Geduld, bis das System wieder läuft.",
          fr: "Vous informez ensemble toutes les personnes en attente de la panne, vous vous excusez expressément pour le désagrément et leur demandez de patienter jusqu'au rétablissement du système.",
        },
      },
    ],
  },
  {
    id: "c18",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Fehlendes Dokument – keine Ausnahme",
    situation: {
      de: "Ein Bürger möchte sich in der Gemeinde anmelden. Laut Verfahren muss er dafür einen Mietvertrag oder eine Bestätigung des Vermieters vorlegen, die er nicht dabeihat. Er drängt: „Bei meinem Nachbarn ging das letzte Woche auch ohne. Machen Sie doch eine Ausnahme, ich bringe es nächste Woche vorbei.“",
      fr: "Un citoyen souhaite déclarer son arrivée dans la commune. Selon la procédure, il doit présenter un contrat de bail ou une attestation du propriétaire, qu'il n'a pas sur lui. Il insiste : « Pour mon voisin, ça a marché sans la semaine dernière. Faites une exception, je l'apporterai la semaine prochaine. »",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie bleiben freundlich, aber bei der Regel, erklären, dass Sie sich zu anderen Fällen nicht äußern können, und bitten ihn, mit dem fehlenden Dokument wiederzukommen.",
          fr: "Vous restez aimable mais vous en tenez à la règle, expliquez que vous ne pouvez pas vous prononcer sur d'autres dossiers et lui demandez de revenir avec le document manquant.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären, wozu das Dokument nötig ist, nehmen schon alle übrigen Angaben auf und vereinbaren einen kurzen Termin, bei dem er nur noch den Nachweis vorlegen muss.",
          fr: "Vous expliquez à quoi sert le document, enregistrez déjà toutes les autres informations et fixez un court rendez-vous où il n'aura plus qu'à présenter le justificatif.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie nehmen die Anmeldung vollständig vor und vermerken, dass der Nachweis nachgereicht wird, da es beim Nachbarn offenbar auch so gehandhabt wurde.",
          fr: "Vous effectuez la déclaration complète en notant que le justificatif suivra, puisque cela a apparemment été fait ainsi pour le voisin.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie sagen ihm, dass es sich beim Fall seines Nachbarn um einen Fehler handeln müsse, und kündigen an, das intern prüfen zu lassen.",
          fr: "Vous lui dites que le cas de son voisin doit être une erreur et annoncez que vous allez le faire vérifier en interne.",
        },
      },
    ],
  },
  {
    id: "c19",
    competency: "customer",
    format: "best",
    topicDe: "Unklare Anfrage eines Veranstalters",
    situation: {
      de: "Sie erhalten eine E-Mail einer Nachbarschaftsinitiative: „Wir planen im Juni ein Straßenfest in der Rue des Jardins. Was brauchen wir dafür?“ Je nach Größe, Musik, Getränkeausschank und Straßensperrung sind unterschiedliche Dienste und Genehmigungen betroffen. Die E-Mail enthält keine weiteren Angaben.",
      fr: "Vous recevez un e-mail d'un collectif de voisins : « Nous prévoyons une fête de rue en juin dans la rue des Jardins. De quoi avons-nous besoin ? » Selon la taille, la musique, la vente de boissons et la fermeture de la rue, différents services et autorisations sont concernés. L'e-mail ne contient aucune autre précision.",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie schicken eine ausführliche Antwort mit allen denkbaren Genehmigungen, Fristen und Zuständigkeiten, damit die Initiative selbst sieht, was davon auf sie zutrifft.",
          fr: "Vous envoyez une réponse détaillée avec toutes les autorisations, tous les délais et tous les services possibles, pour que le collectif voie lui-même ce qui le concerne.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie antworten, dass die Anfrage in dieser Form zu ungenau ist, um sie zu bearbeiten, und bitten darum, einen vollständigen schriftlichen Antrag einzureichen.",
          fr: "Vous répondez que la demande, sous cette forme, est trop imprécise pour être traitée et invitez le collectif à déposer une demande écrite complète.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie leiten die E-Mail an alle möglicherweise betroffenen Dienste weiter und bitten diese, der Initiative direkt zu antworten.",
          fr: "Vous transférez l'e-mail à tous les services potentiellement concernés en leur demandant de répondre directement au collectif.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie bestätigen den Eingang, stellen gezielte Fragen zu Datum, Umfang, Musik, Getränken und Straßennutzung und kündigen danach eine Übersicht der nötigen Schritte an.",
          fr: "Vous accusez réception, posez des questions ciblées sur la date, l'ampleur, la musique, les boissons et l'utilisation de la rue, et annoncez ensuite un récapitulatif des démarches nécessaires.",
        },
      },
    ],
  },
  {
    id: "c20",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Widersprüchliche Auskünfte",
    situation: {
      de: "Eine Bürgerin ruft zum dritten Mal an. Zwei Ihrer Kolleginnen haben ihr widersprüchliche Auskünfte gegeben, welche Unterlagen sie für die Einschreibung ihres Kindes in der Musikschule der Gemeinde braucht. Sie ist verärgert: „Jeder sagt mir etwas anderes!“ Sie selbst wissen nicht sicher, welche Auskunft stimmt. Der zuständige Dienst ist erreichbar.",
      fr: "Une citoyenne appelle pour la troisième fois. Deux de vos collègues lui ont donné des informations contradictoires sur les documents nécessaires pour inscrire son enfant à l'école de musique communale. Elle est agacée : « Chacun me dit autre chose ! » Vous ne savez pas vous-même avec certitude quelle information est correcte. Le service compétent est joignable.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie entschuldigen sich, klären die Liste mit dem zuständigen Dienst, schicken ihr die verbindliche Auskunft schriftlich und melden die Unstimmigkeit Ihrer Teamleitung.",
          fr: "Vous vous excusez, vérifiez la liste auprès du service compétent, lui envoyez l'information officielle par écrit et signalez l'incohérence à votre responsable d'équipe.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie entschuldigen sich für die Verwirrung, klären mit dem zuständigen Dienst, welche Unterlagen tatsächlich verlangt werden, und rufen sie mit der richtigen Auskunft zurück.",
          fr: "Vous vous excusez pour la confusion, vérifiez auprès du service compétent quels documents sont réellement exigés et la rappelez avec la bonne information.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie raten ihr, sicherheitshalber alle Unterlagen mitzubringen, die ihr von den beiden Kolleginnen genannt wurden, damit bei der Einschreibung nichts fehlt.",
          fr: "Vous lui conseillez d'apporter par précaution tous les documents mentionnés par vos deux collègues, pour que rien ne manque lors de l'inscription.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie sagen ihr, welche der beiden Auskünfte Ihnen nach Ihrer Erfahrung richtiger erscheint, damit sie nicht noch länger auf eine Antwort warten muss.",
          fr: "Vous lui indiquez laquelle des deux informations vous paraît, d'expérience, la plus juste, pour qu'elle n'ait pas à attendre plus longtemps une réponse.",
        },
      },
    ],
  },
  {
    id: "c21",
    competency: "customer",
    format: "best",
    topicDe: "Abholung ohne Vollmacht",
    situation: {
      de: "Ein Mann möchte die Geburtsurkunde abholen, die seine Frau letzte Woche beantragt hat. Laut Verfahren darf das Dokument nur der Antragstellerin selbst oder einer Person mit schriftlicher Vollmacht und Ausweiskopie der Antragstellerin ausgehändigt werden; ein Versand per Post an die Antragstellerin ist ebenfalls möglich. Er hat keine Vollmacht dabei und sagt: „Ich bin doch ihr Mann, rufen Sie sie halt an!“",
      fr: "Un homme souhaite retirer l'acte de naissance que son épouse a demandé la semaine dernière. Selon la procédure, le document ne peut être remis qu'à la demandeuse elle-même ou à une personne munie d'une procuration écrite et d'une copie de sa pièce d'identité ; un envoi postal à la demandeuse est également possible. Il n'a pas de procuration et dit : « Je suis son mari, appelez-la donc ! »",
    },
    question: Q_BEST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie erklären, dass Sie ohne schriftliche Vollmacht nichts aushändigen dürfen, und bitten ihn, dass seine Frau das Dokument während der Öffnungszeiten selbst abholt.",
          fr: "Vous expliquez que vous ne pouvez rien remettre sans procuration écrite et lui demandez que son épouse vienne retirer elle-même le document pendant les heures d'ouverture.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie erklären die Regel und geben ihm ein Vollmachtsformular mit, mit dem er die Urkunde bei seinem nächsten Besuch problemlos abholen kann.",
          fr: "Vous expliquez la règle et lui remettez un formulaire de procuration qui lui permettra de retirer l'acte sans difficulté lors de sa prochaine visite.",
        },
      },
      {
        id: "c",
        text: {
          de: "Sie erklären, wozu die Regel dient, geben ihm das Vollmachtsformular mit und bieten an, die Urkunde auf Wunsch per Post an seine Frau zu schicken.",
          fr: "Vous expliquez à quoi sert la règle, lui remettez le formulaire de procuration et proposez d'envoyer l'acte par la poste à son épouse si elle le souhaite.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie rufen seine Frau an, lassen sich die Abholung durch ihren Mann am Telefon mündlich bestätigen und händigen ihm die Urkunde anschließend aus.",
          fr: "Vous appelez son épouse, lui faites confirmer oralement au téléphone le retrait par son mari et remettez ensuite l'acte à celui-ci.",
        },
      },
    ],
  },
  {
    id: "c22",
    competency: "customer",
    format: "mostLeast",
    topicDe: "Lärmbeschwerde mit Drohung",
    situation: {
      de: "Ein Anwohner ruft an und beschwert sich lautstark über den Lärm beim gestrigen Gemeindefest, das bis 1 Uhr nachts dauerte. Er droht, sich direkt beim Bürgermeister und bei der Presse zu beschweren. Sie wissen, dass das Fest bis 1 Uhr genehmigt war. Für Beschwerden zu Veranstaltungen gibt es ein Formular, das an das Veranstaltungsbüro weitergeleitet wird.",
      fr: "Un riverain appelle et se plaint bruyamment du bruit lors de la fête communale d'hier soir, qui a duré jusqu'à 1 heure du matin. Il menace de s'adresser directement au bourgmestre et à la presse. Vous savez que la fête était autorisée jusqu'à 1 heure. Pour les réclamations concernant les manifestations, il existe un formulaire qui est transmis au bureau des manifestations.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: "a",
        text: {
          de: "Sie teilen ihm mit, dass das Fest ordnungsgemäß bis 1 Uhr genehmigt war, seine Beschwerde daher unbegründet ist und er sich gern an den Bürgermeister wenden kann.",
          fr: "Vous l'informez que la fête était dûment autorisée jusqu'à 1 heure, que sa réclamation n'est donc pas fondée et qu'il peut tout à fait s'adresser au bourgmestre.",
        },
      },
      {
        id: "b",
        text: {
          de: "Sie lassen ihn ausreden, zeigen Verständnis, erklären sachlich, dass das Fest bis 1 Uhr genehmigt war, und nehmen seine Beschwerde direkt für das Veranstaltungsbüro auf.",
          fr: "Vous le laissez parler, montrez de la compréhension, expliquez que la fête était autorisée jusqu'à 1 heure et enregistrez directement sa réclamation pour le bureau des manifestations.",
        },
      },
      {
        id: "c",
        text: {
          de: "Um eine Eskalation zu vermeiden, versichern Sie ihm, dass das Fest künftig früher enden wird, und bitten ihn, von einer Beschwerde abzusehen.",
          fr: "Pour éviter l'escalade, vous lui assurez qu'à l'avenir la fête se terminera plus tôt et lui demandez de renoncer à sa réclamation.",
        },
      },
      {
        id: "d",
        text: {
          de: "Sie zeigen Verständnis für seinen Ärger und erklären ihm genau, wo er das Beschwerdeformular online findet und dass es ans Veranstaltungsbüro weitergeleitet wird.",
          fr: "Vous montrez de la compréhension pour sa contrariété et lui expliquez précisément où trouver le formulaire de réclamation en ligne et qu'il sera transmis au bureau des manifestations.",
        },
      },
    ],
  },
];
