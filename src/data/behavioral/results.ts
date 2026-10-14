// Situational-judgement practice items for the competency "Orientation résultat"
// (Ergebnisorientierung). Fictional commune of Wiltzerbach. These items are
// written for practice; they do not reproduce the official assessment.

import type { SjtScenario } from '../types';

const Q_BEST = {
  de: 'Wie reagieren Sie am angemessensten?',
  fr: 'Quelle est la réaction la plus appropriée ?',
};
const Q_MOST_LEAST = {
  de: 'Welche Reaktion ist am effektivsten und welche am wenigsten effektiv?',
  fr: 'Quelle réaction est la plus efficace et laquelle est la moins efficace ?',
};

export const resultsScenarios: SjtScenario[] = [
  {
    id: 'r01',
    competency: 'results',
    format: 'best',
    topicDe: 'Sitzungsakte des Gemeinderats: fehlende Beiträge',
    situation: {
      de: 'Sie bereiten in der Gemeinde Wiltzerbach die Akte für die nächste Gemeinderatssitzung vor. Sie muss am Freitag um 12 Uhr an die Ratsmitglieder verschickt werden. Es ist Mittwochnachmittag, und zwei Abteilungen haben ihre Beiträge zu Tagesordnungspunkten noch nicht geliefert; eine davon hat auf Ihre E-Mail vom Montag nicht reagiert.',
      fr: "Vous préparez le dossier de la prochaine séance du conseil communal de Wiltzerbach. Il doit être envoyé aux conseillers vendredi à 12 h. Nous sommes mercredi après-midi et deux services n'ont toujours pas transmis leur contribution à l'ordre du jour ; l'un d'eux n'a pas répondu à votre courriel de lundi.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie stellen die vorhandenen Teile fertig und warten mit dem Versand, bis auch die beiden fehlenden Beiträge eingetroffen sind, damit die Ratsmitglieder eine lückenlose Akte erhalten.',
          fr: "Vous finalisez les parties disponibles et attendez, pour l'envoi, que les deux contributions manquantes soient arrivées, afin que les conseillers reçoivent un dossier complet.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie melden dem Gemeindesekretär sofort, dass die Akte nicht rechtzeitig fertig wird, und bitten ihn, sich direkt bei den beiden Abteilungen um die fehlenden Beiträge zu kümmern.',
          fr: "Vous signalez immédiatement au secrétaire communal que le dossier ne sera pas prêt à temps et vous lui demandez de s'occuper directement des contributions manquantes auprès des deux services.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie rufen beide Abteilungen noch heute an, vereinbaren eine verbindliche Abgabe bis Donnerstagmittag, bereiten den Rest vor und weisen den Gemeindesekretär vorsorglich auf das Risiko hin.',
          fr: "Vous appelez les deux services dès aujourd'hui, convenez d'une remise ferme pour jeudi midi, préparez le reste du dossier et signalez par précaution le risque au secrétaire communal.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie schicken beiden Abteilungen eine zweite E-Mail mit deutlichem Hinweis auf die Frist und bereiten in der Zwischenzeit den übrigen Teil der Akte sorgfältig vor.',
          fr: 'Vous envoyez aux deux services un deuxième courriel rappelant clairement le délai et, en attendant, vous préparez soigneusement le reste du dossier.',
        },
      },
    ],
  },
  {
    id: 'r02',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Softwareausfall am letzten Erfassungstag',
    situation: {
      de: 'Heute ist der letzte Tag, an dem die Anmeldungen für die Ferienaktivitäten der Gemeinde erfasst werden müssen, damit die Gruppen morgen eingeteilt werden können. Um 10 Uhr fällt die Software aus; die IT rechnet mit einer Störung von mehreren Stunden. Rund 60 Papierformulare liegen noch auf Ihrem Tisch.',
      fr: "C'est aujourd'hui le dernier jour pour saisir les inscriptions aux activités de vacances de la commune, afin que les groupes puissent être constitués demain. À 10 h, le logiciel tombe en panne ; le service informatique prévoit plusieurs heures d'interruption. Une soixantaine de formulaires papier sont encore sur votre bureau.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie erfassen die Formulare vorläufig in einer einfachen Tabelle, informieren Ihre Vorgesetzte und übertragen die Daten nach der Behebung mit Kontrolle in die Software.',
          fr: "Vous saisissez provisoirement les formulaires dans un tableau simple, informez votre supérieure, puis transférez les données dans le logiciel avec contrôle une fois la panne résolue.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie nutzen die Zeit für andere Aufgaben und bitten Ihre Vorgesetzte, die Gruppeneinteilung um einen Tag zu verschieben, da der Ausfall außerhalb Ihres Einflussbereichs liegt.',
          fr: "Vous consacrez ce temps à d'autres tâches et demandez à votre supérieure de reporter d'un jour la constitution des groupes, puisque la panne échappe à votre contrôle.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie warten, bis die Software wieder läuft, und erfassen dann alle Formulare am Abend in Überstunden, auch wenn Sie dafür auf die übliche Kontrolle der Eingaben verzichten müssen.',
          fr: 'Vous attendez que le logiciel refonctionne, puis saisissez tous les formulaires le soir en heures supplémentaires, quitte à renoncer au contrôle habituel des saisies.',
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie sortieren die Formulare nach Aktivität und Altersgruppe vor, damit die Erfassung nach der Störung schneller geht, und verfolgen die Rückmeldungen der IT aufmerksam.',
          fr: "Vous triez les formulaires par activité et par tranche d'âge pour accélérer la saisie après la panne, et vous suivez attentivement les informations du service informatique.",
        },
      },
    ],
  },
  {
    id: 'r03',
    competency: 'results',
    format: 'best',
    topicDe: 'Fehler in einem verschickten Rundschreiben',
    situation: {
      de: 'Sie haben letzte Woche ein Schreiben an rund 300 Haushalte verschickt, das über die Sperrmüllsammlung informiert. Heute stellen Sie fest, dass Sie das Datum falsch angegeben haben: Die Sammlung findet am 21. statt, nicht am 14. Bisher hat sich niemand gemeldet, und Ihre Vorgesetzte weiß noch nichts davon.',
      fr: "La semaine dernière, vous avez envoyé à quelque 300 ménages un courrier annonçant la collecte des encombrants. Aujourd'hui, vous constatez que vous avez indiqué une mauvaise date : la collecte a lieu le 21 et non le 14. Personne ne s'est encore manifesté et votre supérieure n'est pas au courant.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie veröffentlichen eine Korrektur auf der Website und in den sozialen Netzwerken der Gemeinde; ein neues Schreiben wäre zu aufwendig, und viele Bürger informieren sich ohnehin online.',
          fr: "Vous publiez un rectificatif sur le site internet et les réseaux sociaux de la commune ; un nouveau courrier serait trop lourd et beaucoup de citoyens s'informent de toute façon en ligne.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie informieren Ihre Vorgesetzte und erwähnen dabei, dass der Text vor dem Versand auch von einer Kollegin gegengelesen wurde, damit klar ist, wie der Fehler durchrutschen konnte.',
          fr: "Vous informez votre supérieure en précisant que le texte avait aussi été relu par une collègue avant l'envoi, afin qu'il soit clair comment l'erreur a pu passer.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie warten ab, ob Rückfragen kommen, und hinterlegen am Empfang eine kurze Notiz mit dem richtigen Datum, damit Anrufer sofort die korrekte Auskunft erhalten.',
          fr: "Vous attendez de voir si des questions arrivent et déposez à l'accueil une brève note avec la bonne date, afin que les personnes qui appellent reçoivent immédiatement la bonne information.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie informieren sofort Ihre Vorgesetzte, schlagen ein kurzes Korrekturschreiben an dieselben Haushalte und einen Hinweis auf der Website vor und überlegen, wie sich solche Fehler künftig vermeiden lassen.',
          fr: "Vous informez immédiatement votre supérieure, proposez un bref courrier rectificatif aux mêmes ménages ainsi qu'un avis sur le site internet, et réfléchissez à la manière d'éviter ce type d'erreur à l'avenir.",
        },
      },
    ],
  },
  {
    id: 'r04',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Statistik für den Jahresbericht: Qualität oder Termin',
    situation: {
      de: 'Sie erstellen für den Jahresbericht eine Statistik über die Nutzung der Gemeindesäle; Abgabe ist in drei Tagen. Beim Zusammenführen der Daten stellen Sie fest, dass in zwei Monaten offenbar Buchungen doppelt erfasst wurden. Eine gründliche Bereinigung aller zwölf Monate würde etwa eine Woche dauern.',
      fr: "Vous établissez, pour le rapport annuel, une statistique sur l'utilisation des salles communales ; la remise est prévue dans trois jours. En rassemblant les données, vous constatez que des réservations semblent avoir été saisies deux fois sur deux mois. Un nettoyage approfondi des douze mois prendrait environ une semaine.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie bereinigen alle zwölf Monate gründlich, auch wenn Sie dafür die Abgabefrist um einige Tage überschreiten, denn ein Jahresbericht sollte keine fehlerhaften Zahlen enthalten.',
          fr: "Vous nettoyez soigneusement les douze mois, quitte à dépasser le délai de quelques jours, car un rapport annuel ne devrait contenir aucun chiffre erroné.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie korrigieren die beiden betroffenen Monate, prüfen die übrigen stichprobenartig, geben fristgerecht ab und teilen Ihrer Vorgesetzten mit, welche Prüfungen Sie vorgenommen haben.',
          fr: "Vous corrigez les deux mois concernés, contrôlez les autres par sondage, remettez la statistique dans les délais et indiquez à votre supérieure quels contrôles vous avez effectués.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie geben die Zahlen fristgerecht so ab, wie sie vorliegen, da nur zwei von zwölf Monaten betroffen sind und die Gesamtentwicklung dadurch kaum verfälscht wird.',
          fr: "Vous remettez les chiffres dans les délais tels qu'ils sont, puisque seuls deux mois sur douze sont concernés et que la tendance générale n'en est guère faussée.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie schildern Ihrer Vorgesetzten das Problem und bitten sie zu entscheiden, ob Sie die Frist einhalten oder sich die Zeit für eine gründliche Bereinigung aller Daten nehmen sollen.',
          fr: "Vous exposez le problème à votre supérieure et lui demandez de décider si vous devez respecter le délai ou prendre le temps de nettoyer toutes les données à fond.",
        },
      },
    ],
  },
  {
    id: 'r05',
    competency: 'results',
    format: 'best',
    topicDe: 'Lieferant kann Bestellung nicht vollständig liefern',
    situation: {
      de: 'Sie organisieren den Empfang der Gemeinde zum Nationalfeiertag. Zwei Tage vorher teilt der Verleiher mit, dass er statt der bestellten 200 Stühle nur 120 liefern kann; der Rest wäre frühestens eine Woche später verfügbar. Die Einladungen sind bereits verschickt.',
      fr: "Vous organisez la réception communale de la Fête nationale. Deux jours avant, le loueur vous informe qu'il ne pourra livrer que 120 des 200 chaises commandées ; le reste ne serait disponible qu'une semaine plus tard au plus tôt. Les invitations sont déjà parties.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie bestehen gegenüber dem Verleiher auf der vollständigen Lieferung laut Bestellung und kündigen an, die Rechnung zu kürzen, falls er die vereinbarte Menge nicht rechtzeitig bereitstellt.',
          fr: "Vous exigez du loueur la livraison complète prévue dans la commande et annoncez que la facture sera réduite s'il ne fournit pas à temps la quantité convenue.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie klären kurzfristig, ob der Technische Dienst, die Schule oder ein Verein Stühle ausleihen kann, informieren Ihre Vorgesetzte über die Lösung und passen den Aufbauplan an.',
          fr: "Vous vérifiez sans tarder si le service technique, l'école ou une association peut prêter des chaises, informez votre supérieure de la solution et adaptez le plan de montage.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie informieren Ihre Vorgesetzte über das Lieferproblem und fragen sie, wie Sie weiter vorgehen sollen, da Sie über Mehrkosten für einen anderen Anbieter nicht selbst entscheiden können.',
          fr: "Vous informez votre supérieure du problème de livraison et lui demandez comment procéder, car vous ne pouvez pas décider seul(e) de frais supplémentaires auprès d'un autre fournisseur.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie planen den Empfang auf 120 Sitzplätze und zusätzliche Stehtische um; so entstehen keine weiteren Kosten, auch wenn einige ältere Gäste dann eventuell stehen müssen.',
          fr: "Vous réorganisez la réception avec 120 places assises et des tables hautes supplémentaires ; cela n'entraîne aucun coût, même si certains invités âgés devront peut-être rester debout.",
        },
      },
    ],
  },
  {
    id: 'r06',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Vertretung einer erkrankten Kollegin',
    situation: {
      de: 'Ihre Kollegin aus dem Bevölkerungsbüro ist unerwartet für zwei Wochen krankgeschrieben. Ihre Vorgesetzte bittet Sie, deren Aufgaben zusätzlich zu Ihren eigenen zu übernehmen. Schon am ersten Tag wird klar, dass Sie nicht alles in der normalen Arbeitszeit schaffen werden.',
      fr: "Votre collègue du bureau de la population est en congé de maladie imprévu pour deux semaines. Votre supérieure vous demande de reprendre ses tâches en plus des vôtres. Dès le premier jour, il apparaît que vous ne pourrez pas tout faire pendant vos heures normales.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie bearbeiten alle Vorgänge strikt in der Reihenfolge ihres Eingangs und machen täglich Überstunden, damit niemand benachteiligt wird und nichts liegen bleibt.',
          fr: "Vous traitez tous les dossiers strictement dans l'ordre d'arrivée et faites des heures supplémentaires chaque jour, afin que personne ne soit désavantagé et que rien ne reste en suspens.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie übernehmen nur die Aufgaben Ihrer Kollegin, die Sie bereits kennen, und lassen die übrigen bis zu ihrer Rückkehr ruhen, um Fehler in ungewohnten Abläufen zu vermeiden.',
          fr: "Vous ne reprenez que les tâches de votre collègue que vous connaissez déjà et laissez les autres en attente jusqu'à son retour, pour éviter des erreurs dans des procédures peu familières.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie sagen Ihrer Vorgesetzten gleich zu Beginn, dass die doppelte Arbeitsmenge nicht zu bewältigen ist, und bitten sie, eine Aushilfe aus einer anderen Abteilung zu organisieren.',
          fr: "Vous dites d'emblée à votre supérieure que la double charge de travail n'est pas gérable et lui demandez d'organiser un renfort venant d'un autre service.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie listen alle Aufgaben mit Fristen auf, schlagen Ihrer Vorgesetzten eine Rangfolge vor, klären, was warten kann, und halten sie auf dem Laufenden.',
          fr: "Vous listez toutes les tâches avec leurs échéances, proposez un ordre de priorité à votre supérieure, convenez de ce qui peut attendre et la tenez informée.",
        },
      },
    ],
  },
  {
    id: 'r07',
    competency: 'results',
    format: 'best',
    topicDe: 'Unklares Ziel im Mitarbeitergespräch',
    situation: {
      de: 'Im Jahresgespräch sagt Ihr Vorgesetzter, Sie sollten im kommenden Jahr „die Bearbeitung der Anfragen zur Saalvermietung verbessern“. Weitere Angaben macht er nicht, und das Gespräch ist fast zu Ende.',
      fr: "Lors de votre entretien annuel, votre supérieur vous fixe pour l'année à venir l'objectif d'« améliorer le traitement des demandes de location de salles ». Il n'en dit pas davantage et l'entretien touche à sa fin.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie schlagen vor, das Ziel konkret zu fassen, etwa die Bearbeitungszeit von derzeit rund zehn auf fünf Arbeitstage zu senken, und vereinbaren, wann der Fortschritt gemeinsam überprüft wird.',
          fr: "Vous proposez de préciser l'objectif, par exemple ramener le délai de traitement d'environ dix à cinq jours ouvrables, et convenez avec lui du moment où les progrès seront examinés ensemble.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie nehmen das Ziel so an und überlegen in den nächsten Wochen selbst, welche Verbesserungen sinnvoll sind; im nächsten Jahresgespräch zeigen Sie ihm, was Sie umgesetzt haben.',
          fr: "Vous acceptez l'objectif tel quel et réfléchissez vous-même, dans les semaines qui suivent, aux améliorations utiles ; lors du prochain entretien, vous lui montrez ce que vous avez réalisé.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie fragen nach, was er genau unter „verbessern“ versteht, und bitten ihn, Ihnen seine Erwartungen nach dem Gespräch noch einmal schriftlich zukommen zu lassen.',
          fr: "Vous lui demandez ce qu'il entend exactement par « améliorer » et le priez de vous transmettre ses attentes par écrit après l'entretien.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie beginnen gleich am nächsten Tag, sämtliche Formulare und Abläufe der Saalvermietung zu überarbeiten, damit Sie bis zum nächsten Gespräch möglichst viel vorweisen können.',
          fr: "Dès le lendemain, vous commencez à remanier l'ensemble des formulaires et procédures de location de salles, afin de pouvoir présenter un maximum de résultats au prochain entretien.",
        },
      },
    ],
  },
  {
    id: 'r08',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Absehbare Verzögerung bei der Archivinventur',
    situation: {
      de: 'Sie haben zugesagt, bis Monatsende das Verzeichnis der Archivbestände des Gemeindesekretariats zu aktualisieren. Nach der Hälfte der Zeit haben Sie erst ein Viertel geschafft, weil viele Akten unvollständig beschriftet sind. Ihre Vorgesetzte braucht das Verzeichnis für den geplanten Umzug des Archivs.',
      fr: "Vous vous êtes engagé(e) à mettre à jour, d'ici la fin du mois, l'inventaire des archives du secrétariat communal. À mi-parcours, vous n'en avez réalisé qu'un quart, car de nombreux dossiers sont mal étiquetés. Votre supérieure a besoin de l'inventaire pour le déménagement prévu des archives.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie arbeiten in den verbleibenden zwei Wochen konzentrierter und notfalls länger, um doch noch fertig zu werden, und sprechen die Verzögerung erst an, falls es am Ende knapp wird.',
          fr: "Vous travaillez de manière plus concentrée, et plus longtemps si nécessaire, pendant les deux semaines restantes pour terminer malgré tout, et n'évoquez le retard que si cela devient juste à la fin.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie erfassen ab jetzt nur noch die gut beschrifteten Akten, damit das Verzeichnis zum Termin vollständig aussieht, und kümmern sich um die übrigen nach dem Umzug.',
          fr: "Désormais, vous ne recensez plus que les dossiers bien étiquetés, pour que l'inventaire paraisse complet à l'échéance, et vous vous occuperez des autres après le déménagement.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie informieren Ihre Vorgesetzte jetzt über Rückstand und Ursache, schlagen vor, die für den Umzug wichtigsten Bestände zuerst zu erfassen, und nennen einen realistischen Termin für den Rest.',
          fr: "Vous informez dès maintenant votre supérieure du retard et de sa cause, proposez de traiter d'abord les fonds les plus importants pour le déménagement et indiquez une date réaliste pour le reste.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie bitten eine Kollegin, Ihnen einige Tage beim Beschriften zu helfen, damit Sie schneller vorankommen, und informieren Ihre Vorgesetzte, sobald feststeht, ob es reicht.',
          fr: "Vous demandez à une collègue de vous aider quelques jours à l'étiquetage pour avancer plus vite, et vous informez votre supérieure dès que vous savez si cela suffira.",
        },
      },
    ],
  },
  {
    id: 'r09',
    competency: 'results',
    format: 'best',
    topicDe: 'Verfahrensregel bei großem Andrang einhalten',
    situation: {
      de: 'Am Montagmorgen ist am Schalter des Bürgerbüros viel Betrieb; zwölf Personen warten. Ein Bürger, den Sie vom Sehen kennen, möchte eine Wohnsitzbescheinigung abholen, hat aber seinen Ausweis vergessen. Die interne Regel verlangt eine Identitätsprüfung. Er drängt, da er die Bescheinigung heute noch braucht.',
      fr: "Lundi matin, le guichet du bureau de la population est très fréquenté ; douze personnes attendent. Un citoyen que vous connaissez de vue souhaite retirer un certificat de résidence, mais il a oublié sa pièce d'identité. La règle interne impose une vérification d'identité. Il insiste, car il a besoin du certificat aujourd'hui.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie stellen die Bescheinigung aus, weil Sie ihn vom Sehen kennen, und vermerken, dass er den Ausweis beim nächsten Besuch nachträglich vorzeigen soll, damit die Schlange nicht länger wird.',
          fr: "Vous délivrez le certificat puisque vous le connaissez de vue, et notez qu'il devra présenter sa pièce d'identité lors de sa prochaine visite, afin que la file ne s'allonge pas.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie bitten ihn, kurz zu warten, und fragen eine Kollegin, ob auch sie ihn kennt, damit Sie die Ausgabe der Bescheinigung gemeinsam verantworten können.',
          fr: "Vous lui demandez de patienter un instant et demandez à une collègue si elle le connaît aussi, afin d'assumer ensemble la délivrance du certificat.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie erklären ihm, dass Sie ohne Ausweis nichts ausstellen dürfen, und empfehlen ihm, an einem anderen Tag wiederzukommen, wenn am Schalter weniger Betrieb ist.',
          fr: "Vous lui expliquez que vous ne pouvez rien délivrer sans pièce d'identité et lui conseillez de revenir un autre jour, quand il y aura moins de monde au guichet.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie erklären ihm freundlich die Regel und bereiten die Bescheinigung schon vor, damit er sie heute noch ohne erneutes Anstehen abholen kann, sobald er mit dem Ausweis zurückkommt.',
          fr: "Vous lui expliquez aimablement la règle et préparez déjà le certificat, pour qu'il puisse le retirer aujourd'hui sans refaire la queue dès qu'il revient avec sa pièce d'identité.",
        },
      },
    ],
  },
  {
    id: 'r10',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Online-Angebot verfehlt das Ziel',
    situation: {
      de: 'Ihr Team hat vor zwei Monaten ein Online-Formular eingeführt, über das Bürger einen Termin für die Sperrmüllabholung buchen können, um das Telefon zu entlasten. Ziel war, dass mindestens die Hälfte der Buchungen online erfolgt. Bisher sind es erst 10 %. Mehrere Anrufer sagen, sie hätten das Formular auf der Website nicht gefunden.',
      fr: "Il y a deux mois, votre équipe a mis en place un formulaire en ligne permettant de réserver un rendez-vous pour l'enlèvement des encombrants, afin de soulager le téléphone. L'objectif était qu'au moins la moitié des réservations se fasse en ligne. Pour l'instant, on n'en est qu'à 10 %. Plusieurs appelants disent ne pas avoir trouvé le formulaire sur le site.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie warten noch einige Monate ab, da sich neue Angebote erfahrungsgemäß erst nach und nach durchsetzen, und werten die Buchungszahlen dann erneut aus, bevor Sie Änderungen vorschlagen.',
          fr: "Vous attendez encore quelques mois, car l'expérience montre que les nouveaux services ne s'imposent que progressivement, puis vous analysez à nouveau les réservations avant de proposer des changements.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie fragen Anrufer nach ihren Schwierigkeiten, schlagen dem Team konkrete Anpassungen wie einen gut sichtbaren Link vor und messen nach einem Monat erneut.',
          fr: "Vous interrogez des appelants sur leurs difficultés, proposez à l'équipe des ajustements concrets, comme un lien bien visible, et mesurez à nouveau après un mois.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie schlagen vor, das Online-Formular wieder abzuschaffen, da die Bürger offensichtlich das Telefon bevorzugen und sich der Pflegeaufwand für das Formular nicht lohnt.',
          fr: "Vous proposez de supprimer le formulaire en ligne, puisque les citoyens préfèrent manifestement le téléphone et que l'entretien du formulaire n'en vaut pas la peine.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie erklären Anrufern am Telefon, wo sie das Formular finden, und bitten sie, künftig online zu buchen; so steigt der Online-Anteil nach und nach.',
          fr: "Vous expliquez aux appelants où trouver le formulaire et leur demandez de réserver en ligne à l'avenir ; ainsi, la part des réservations en ligne augmente peu à peu.",
        },
      },
    ],
  },
  {
    id: 'r11',
    competency: 'results',
    format: 'best',
    topicDe: 'Kostenschätzung trotz unbekannter Teilnehmerzahl',
    situation: {
      de: 'Sie sollen bis morgen für den Schöffenrat eine Kostenschätzung für ein neues Seniorenfest erstellen. Die Zahl der Teilnehmenden ist noch unbekannt, da die Anmeldefrist erst in drei Wochen endet. Eine vergleichbare Veranstaltung gab es in Wiltzerbach bisher nicht.',
      fr: "Vous devez remettre demain au collège des bourgmestre et échevins une estimation des coûts pour une nouvelle fête des seniors. Le nombre de participants est encore inconnu, car la période d'inscription ne se termine que dans trois semaines. Wiltzerbach n'a encore jamais organisé d'événement comparable.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie teilen mit, dass eine seriöse Schätzung erst nach Ablauf der Anmeldefrist möglich ist, und schlagen vor, die Kostenschätzung in drei Wochen nachzureichen.',
          fr: "Vous indiquez qu'une estimation sérieuse n'est possible qu'après la clôture des inscriptions et proposez de remettre l'estimation des coûts dans trois semaines.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie schätzen die Teilnehmerzahl aus Ihrer Erfahrung und rechnen nur mit dieser einen Zahl, damit der Schöffenrat eine klare und einfache Entscheidungsgrundlage erhält.',
          fr: "Vous estimez le nombre de participants d'après votre expérience et calculez uniquement sur cette base, afin que le collège dispose d'une base de décision claire et simple.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie rechnen mit drei Varianten, etwa 80, 120 und 160 Personen, legen Ihre Annahmen offen und weisen die Fixkosten getrennt aus.',
          fr: "Vous calculez trois variantes, par exemple 80, 120 et 160 personnes, explicitez vos hypothèses et présentez les coûts fixes à part.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie rufen im Sekretariat des Schöffenrats an und fragen, mit welcher Teilnehmerzahl Sie rechnen sollen, damit die Schätzung auf einer verbindlichen Vorgabe beruht.',
          fr: "Vous appelez le secrétariat du collège pour demander sur quel nombre de participants vous devez vous baser, afin que l'estimation repose sur une donnée validée.",
        },
      },
    ],
  },
  {
    id: 'r12',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Rückstand mit klarem Ziel abbauen',
    situation: {
      de: 'Im Technischen Dienst liegen 120 unbearbeitete Meldungen von Bürgern, etwa zu defekten Straßenlampen oder Schlaglöchern. Ihr Vorgesetzter möchte, dass der Rückstand innerhalb von sechs Wochen abgebaut ist. Sie sind für die administrative Bearbeitung der Meldungen zuständig.',
      fr: "Au service technique, 120 signalements de citoyens sont en souffrance, par exemple des lampadaires défectueux ou des nids-de-poule. Votre supérieur souhaite que ce retard soit résorbé en six semaines. Vous êtes chargé(e) du traitement administratif des signalements.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie teilen das Ziel in Wochenetappen von etwa 20 Meldungen auf, sortieren nach Dringlichkeit, verfolgen den Stand in einer Liste und melden Abweichungen früh.',
          fr: "Vous découpez l'objectif en étapes hebdomadaires d'environ 20 signalements, triez par urgence, tenez un tableau de suivi simple et signalez rapidement tout écart.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie bearbeiten zuerst die einfachen Meldungen, damit die Zahl der offenen Fälle schnell sinkt, und nehmen sich die aufwendigeren gegen Ende der sechs Wochen vor.',
          fr: "Vous traitez d'abord les signalements simples pour faire baisser rapidement le nombre de cas ouverts, et vous vous attaquez aux plus complexes vers la fin des six semaines.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie bearbeiten jeden Tag so viele Meldungen wie möglich und berichten Ihrem Vorgesetzten nach sechs Wochen, wie viele Sie insgesamt erledigt haben.',
          fr: 'Vous traitez chaque jour autant de signalements que possible et indiquez à votre supérieur, au bout des six semaines, combien vous en avez réglé au total.',
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie bitten Ihren Vorgesetzten, für jede Meldung die Priorität festzulegen, damit Sie sicher sein können, in der richtigen Reihenfolge zu arbeiten.',
          fr: "Vous demandez à votre supérieur de fixer la priorité de chaque signalement, afin d'être sûr(e) de travailler dans le bon ordre.",
        },
      },
    ],
  },
  {
    id: 'r13',
    competency: 'results',
    format: 'best',
    topicDe: 'Eigener Fehler in bereits verteilten Ratsunterlagen',
    situation: {
      de: 'Am Tag vor der Gemeinderatssitzung bemerken Sie, dass in einer von Ihnen erstellten Tabelle zu den Kosten der Schulkantine, die bereits an alle Ratsmitglieder verschickt wurde, zwei Zahlen vertauscht sind. Die Gesamtsumme stimmt, die Aufteilung auf die beiden Schulen jedoch nicht.',
      fr: "La veille de la séance du conseil communal, vous remarquez que, dans un tableau que vous avez établi sur les coûts de la cantine scolaire et qui a déjà été envoyé à tous les conseillers, deux chiffres sont intervertis. Le total est juste, mais la répartition entre les deux écoles ne l'est pas.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie korrigieren die Tabelle in Ihren Unterlagen und bereiten eine Notiz vor, die Sie dem Bürgermeister in der Sitzung geben können, falls jemand nach den Zahlen fragt.',
          fr: "Vous corrigez le tableau dans vos documents et préparez une note que vous pourrez remettre au bourgmestre pendant la séance si quelqu'un pose une question sur les chiffres.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie informieren umgehend den Gemeindesekretär über den Fehler, legen eine korrigierte Fassung mit kurzem Änderungshinweis vor und schlagen vor, sie noch heute an die Ratsmitglieder zu senden.',
          fr: "Vous informez sans délai le secrétaire communal de l'erreur, lui soumettez une version corrigée avec une brève mention de la modification et proposez de l'envoyer aux conseillers dès aujourd'hui.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie schicken die korrigierte Tabelle sofort selbst an alle Ratsmitglieder und entschuldigen sich kurz für das Versehen, damit der Fehler so schnell wie möglich behoben ist.',
          fr: "Vous envoyez immédiatement vous-même le tableau corrigé à tous les conseillers en vous excusant brièvement, afin que l'erreur soit réparée le plus vite possible.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie lassen die Tabelle unverändert, da die Gesamtsumme stimmt und die Aufteilung auf die Schulen für die Entscheidung des Rates voraussichtlich keine Rolle spielt.',
          fr: "Vous laissez le tableau tel quel, puisque le total est juste et que la répartition entre les écoles ne devrait pas jouer de rôle dans la décision du conseil.",
        },
      },
    ],
  },
  {
    id: 'r14',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Zwei dringende Aufträge gleichzeitig',
    situation: {
      de: 'Sie arbeiten im Gemeindesekretariat. Am Dienstagmorgen bittet Sie das Büro des Bürgermeisters, bis Mittwochabend einen Flyer für eine Bürgerversammlung zu gestalten. Gleichzeitig braucht der Technische Dienst bis Donnerstag eine Liste aller Bauanträge des Quartals. Beide Aufträge werden als dringend bezeichnet, und zusammen sind sie in der verfügbaren Zeit kaum zu schaffen.',
      fr: "Vous travaillez au secrétariat communal. Mardi matin, le cabinet du bourgmestre vous demande de concevoir pour mercredi soir un dépliant pour une réunion publique. En même temps, le service technique a besoin pour jeudi de la liste de toutes les demandes d'autorisation de bâtir du trimestre. Les deux demandes sont qualifiées d'urgentes et, ensemble, elles sont difficilement réalisables dans le temps disponible.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie erledigen den Auftrag des Bürgermeisterbüros zuerst vollständig, da er von höherer Stelle kommt, und beginnen erst danach mit der Liste für den Technischen Dienst.',
          fr: "Vous réalisez d'abord entièrement la demande du cabinet du bourgmestre, puisqu'elle vient d'un niveau hiérarchique plus élevé, et ne commencez la liste du service technique qu'ensuite.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie arbeiten abwechselnd an beiden Aufgaben, damit keine Seite zu kurz kommt, und hoffen, mit einigen Überstunden beide Fristen einhalten zu können.',
          fr: "Vous alternez entre les deux tâches pour qu'aucune ne soit négligée, en espérant tenir les deux délais grâce à quelques heures supplémentaires.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie schätzen den Aufwand beider Aufgaben, erstellen einen Zeitplan und klären mit Ihrer Vorgesetzten, welche Frist bei Bedarf angepasst oder welcher Teil abgegeben werden kann.',
          fr: "Vous estimez la charge des deux tâches, établissez un planning et convenez avec votre supérieure du délai qui pourrait être adapté ou de la partie qui pourrait être confiée à quelqu'un d'autre.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie fragen beim Technischen Dienst nach, ob die Liste auch einige Tage später noch reichen würde, und erledigen danach beide Aufträge nacheinander.',
          fr: "Vous demandez au service technique si la liste pourrait encore convenir quelques jours plus tard, puis vous traitez les deux demandes l'une après l'autre.",
        },
      },
    ],
  },
  {
    id: 'r15',
    competency: 'results',
    format: 'best',
    topicDe: 'Fehlende Unterschrift kurz vor Fristende',
    situation: {
      de: 'Sie bereiten den Antrag der Gemeinde auf einen staatlichen Zuschuss für ein Kulturprojekt vor. Der Antrag muss bis Freitag eingereicht werden und vom Bürgermeister unterschrieben sein. Am Mittwoch erfahren Sie, dass der Bürgermeister unerwartet bis Montag verreist ist.',
      fr: "Vous préparez la demande de subside de la commune auprès de l'État pour un projet culturel. Elle doit être déposée d'ici vendredi et signée par le bourgmestre. Mercredi, vous apprenez que le bourgmestre est parti en voyage de manière imprévue jusqu'à lundi.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie reichen den Antrag fristgerecht ohne Unterschrift ein und teilen in einem Begleitschreiben mit, dass die fehlende Unterschrift nach der Rückkehr des Bürgermeisters umgehend nachgereicht wird.',
          fr: "Vous déposez la demande dans les délais sans signature et précisez dans un courrier d'accompagnement que la signature manquante sera transmise dès le retour du bourgmestre.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie bitten die zuständige staatliche Stelle um eine kurze Fristverlängerung bis Dienstag und begründen dies damit, dass die Abwesenheit des Bürgermeisters nicht vorhersehbar war.',
          fr: "Vous demandez à l'administration compétente une courte prolongation jusqu'à mardi, en expliquant que l'absence du bourgmestre n'était pas prévisible.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie warten bis Montag und reichen den Antrag dann unterschrieben ein, da eine Verspätung von einem Werktag bei einer Gemeinde in der Regel toleriert wird.',
          fr: "Vous attendez lundi pour déposer la demande signée, car un retard d'un jour ouvrable est généralement toléré pour une commune.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie klären sofort mit dem Gemeindesekretär, wer den Bürgermeister vertreten darf oder ob er aus der Ferne unterschreiben kann, damit der Antrag bis Freitag vollständig ist.',
          fr: "Vous voyez immédiatement avec le secrétaire communal qui peut remplacer le bourgmestre ou s'il peut signer à distance, pour que la demande soit complète vendredi.",
        },
      },
    ],
  },
  {
    id: 'r16',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Druckerei meldet Verzögerung beim Gemeindeblatt',
    situation: {
      de: 'Sie sind für das Gemeindeblatt zuständig, das am Monatsersten an alle Haushalte verteilt wird. Eine Woche vorher meldet die Druckerei, dass sich der Druck wegen eines Maschinenschadens um sechs Tage verzögert. Im Blatt wird unter anderem ein Informationsabend am 4. des Monats angekündigt.',
      fr: "Vous êtes responsable du bulletin communal, distribué à tous les ménages le premier du mois. Une semaine avant, l'imprimerie annonce que l'impression aura six jours de retard en raison d'une panne de machine. Le bulletin annonce notamment une soirée d'information le 4 du mois.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie informieren sofort Ihre Vorgesetzte und schlagen vor, den Informationsabend zusätzlich über Website, Aushänge und soziale Netzwerke anzukündigen und eine zweite Druckerei anzufragen.',
          fr: "Vous informez immédiatement votre supérieure et proposez d'annoncer en plus la soirée d'information sur le site, par affichage et sur les réseaux sociaux, ainsi que de consulter une deuxième imprimerie.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie nehmen die Verzögerung hin, da Sie auf den Maschinenschaden keinen Einfluss haben, und lassen das Blatt wie geplant, nur eben einige Tage später verteilen.',
          fr: "Vous acceptez le retard, puisque vous n'avez aucune prise sur la panne, et faites distribuer le bulletin comme prévu, simplement quelques jours plus tard.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie beauftragen eigenständig eine andere Druckerei, die den Termin halten kann, auch wenn das deutlich teurer wird, damit das Blatt pünktlich erscheint.',
          fr: "Vous confiez de votre propre initiative l'impression à une autre imprimerie capable de tenir le délai, même si cela coûte nettement plus cher, pour que le bulletin paraisse à temps.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie kündigen den Informationsabend sofort auf der Website und in den sozialen Netzwerken an und informieren Ihre Vorgesetzte nach dem Erscheinen des Blattes über die Verzögerung.',
          fr: "Vous annoncez immédiatement la soirée d'information sur le site et les réseaux sociaux, et vous informez votre supérieure du retard une fois le bulletin paru.",
        },
      },
    ],
  },
  {
    id: 'r17',
    competency: 'results',
    format: 'best',
    topicDe: 'Schnelle Übersicht statt perfekter Analyse',
    situation: {
      de: 'Ihre Vorgesetzte bittet Sie am Nachmittag um eine Übersicht, wie stark die Gemeindesäle im letzten Jahr ausgelastet waren. Sie braucht sie morgen um 9 Uhr für eine Besprechung mit dem Schöffenrat. Eine vollständige Auswertung mit allen Details würde mehrere Tage dauern.',
      fr: "En début d'après-midi, votre supérieure vous demande un aperçu du taux d'occupation des salles communales l'an dernier. Elle en a besoin demain à 9 h pour une réunion avec le collège échevinal. Une analyse complète et détaillée prendrait plusieurs jours.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie sagen ihr, dass eine aussagekräftige Übersicht in so kurzer Zeit nicht möglich ist, und schlagen vor, die Auswertung bis Ende der Woche in voller Qualität zu liefern.',
          fr: "Vous lui dites qu'un aperçu fiable n'est pas réalisable en si peu de temps et proposez de livrer l'analyse en qualité complète d'ici la fin de la semaine.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie beginnen mit der vollständigen Auswertung und schicken ihr morgen früh den Stand, den Sie bis dahin erreicht haben, auch wenn einige Säle noch fehlen.',
          fr: "Vous commencez l'analyse complète et lui envoyez demain matin l'état d'avancement atteint, même si certaines salles manquent encore.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie klären kurz, welche Kennzahlen sie für die Besprechung braucht, erstellen dazu eine kompakte Übersicht, prüfen die Zahlen und kennzeichnen, was noch nicht ausgewertet ist.',
          fr: "Vous vérifiez brièvement de quels indicateurs elle a besoin pour la réunion, préparez un aperçu compact, contrôlez les chiffres et signalez ce qui n'a pas encore été analysé.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie erstellen eine kompakte Übersicht mit den Gesamtzahlen pro Saal und bieten an, die Details später nachzuliefern, falls der Schöffenrat genauer nachfragt.',
          fr: "Vous préparez un aperçu compact avec les totaux par salle et proposez de fournir les détails plus tard si le collège souhaite en savoir davantage.",
        },
      },
    ],
  },
  {
    id: 'r18',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Sorgfalt bei Zeitdruck zum Jahresabschluss',
    situation: {
      de: 'Kurz vor dem Jahresabschluss müssen Sie noch rund 80 Rechnungen im Buchhaltungsprogramm erfassen; Frist ist morgen Mittag. Normalerweise prüfen Sie bei jeder Rechnung Betrag, Lieferant und Budgetposten. Die Zeit wird knapp.',
      fr: "Peu avant la clôture de l'exercice, vous devez encore saisir quelque 80 factures dans le logiciel comptable ; le délai est fixé à demain midi. Habituellement, vous vérifiez pour chaque facture le montant, le fournisseur et l'article budgétaire. Le temps devient juste.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie verzichten diesmal ganz auf die Prüfung, um die Frist sicher einzuhalten; eventuelle Fehler lassen sich ja im neuen Jahr noch über Korrekturbuchungen bereinigen.',
          fr: "Vous renoncez cette fois aux vérifications pour être sûr(e) de tenir le délai ; d'éventuelles erreurs pourront être rectifiées l'an prochain par des écritures de correction.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie behalten die übliche Prüfung bei, beginnen mit den höchsten Beträgen und bitten Ihre Vorgesetzte frühzeitig um Unterstützung, falls die Frist sonst nicht zu halten ist.',
          fr: "Vous maintenez les vérifications habituelles, commencez par les montants les plus élevés et demandez tôt un renfort à votre supérieure si le délai risque de ne pas être tenu.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie prüfen nur die Rechnungen über 1 000 € vollständig und erfassen die kleineren ohne Kontrolle, da bei ihnen das Risiko insgesamt geringer ist.',
          fr: "Vous ne vérifiez entièrement que les factures de plus de 1 000 € et saisissez les plus petites sans contrôle, puisque le risque y est globalement plus faible.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie bleiben am Abend so lange im Büro, bis alle Rechnungen mit vollständiger Prüfung erfasst sind, auch wenn das bis spät in die Nacht dauert.',
          fr: "Vous restez au bureau le soir jusqu'à ce que toutes les factures soient saisies avec vérification complète, même si cela dure jusque tard dans la nuit.",
        },
      },
    ],
  },
  {
    id: 'r19',
    competency: 'results',
    format: 'best',
    topicDe: 'Unvollständige Adressliste für den Neubürgerempfang',
    situation: {
      de: 'Sie organisieren den Empfang für Neubürger. Die Einladungen sollen in zehn Tagen verschickt werden. Die Liste aus dem Einwohnerregister, die Sie erhalten haben, endet im Mai; die Zuzüge von Juni bis August fehlen offenbar. Die Kollegin, die die Liste erstellt hat, ist diese Woche im Urlaub.',
      fr: "Vous organisez la réception des nouveaux habitants. Les invitations doivent partir dans dix jours. La liste extraite du registre de la population que vous avez reçue s'arrête en mai ; les arrivées de juin à août semblent manquer. La collègue qui a établi la liste est en congé cette semaine.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie bitten eine andere Kollegin im Bevölkerungsbüro, die fehlenden Monate zu ergänzen, bereiten die Einladungen für die bekannten Haushalte schon vor und informieren Ihre Vorgesetzte über den Stand.',
          fr: "Vous demandez à une autre collègue du bureau de la population de compléter les mois manquants, préparez déjà les invitations des ménages connus et informez votre supérieure de l'état d'avancement.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie verschicken die Einladungen an die Haushalte auf der Liste und kündigen den Empfang zusätzlich im Gemeindeblatt an, damit auch die übrigen Neubürger davon erfahren.',
          fr: "Vous envoyez les invitations aux ménages figurant sur la liste et annoncez en plus la réception dans le bulletin communal, afin que les autres nouveaux habitants en soient aussi informés.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie schreiben Ihrer Kollegin trotz Urlaub eine kurze Nachricht und bitten sie, Ihnen die ergänzte Liste zu schicken, sobald sie einen Moment Zeit findet.',
          fr: "Vous envoyez un bref message à votre collègue malgré son congé et lui demandez de vous transmettre la liste complétée dès qu'elle aura un moment.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie stellen alle Vorbereitungen zurück, bis Ihre Kollegin wieder da ist, da nur sie weiß, wie die Liste erstellt wurde, und verschieben den Versand notfalls um eine Woche.',
          fr: "Vous mettez tous les préparatifs en attente jusqu'au retour de votre collègue, puisqu'elle seule sait comment la liste a été établie, et reportez l'envoi d'une semaine si nécessaire.",
        },
      },
    ],
  },
  {
    id: 'r20',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Kurzfristige Absage des Busunternehmens',
    situation: {
      de: 'Am Vorabend des Seniorenausflugs der Gemeinde sagt das Busunternehmen wegen Fahrermangels ab. 45 Seniorinnen und Senioren sind angemeldet, die Abfahrt ist morgen um 8 Uhr, und Ihr Vorgesetzter ist telefonisch nicht mehr erreichbar.',
      fr: "La veille de l'excursion des seniors organisée par la commune, l'autocariste annule faute de chauffeur. Quarante-cinq seniors sont inscrits, le départ est prévu demain à 8 h et votre supérieur n'est plus joignable par téléphone.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie sagen den Ausflug ab, rufen die Teilnehmenden noch am Abend an, da sich so kurzfristig ohnehin kaum Ersatz finden lässt, und schlagen einen neuen Termin vor.',
          fr: "Vous annulez l'excursion et appelez les participants le soir même, puisqu'il est de toute façon difficile de trouver un remplacement si tard, et proposez une nouvelle date.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie suchen bis spät abends nach einem Ersatzbus; erst wenn das gelingt, kümmern Sie sich um alles Weitere, und Ihren Vorgesetzten informieren Sie am nächsten Morgen.',
          fr: "Vous cherchez un autocar de remplacement jusque tard dans la soirée ; ce n'est qu'en cas de succès que vous vous occupez du reste, et vous informez votre supérieur le lendemain matin.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie hinterlassen Ihrem Vorgesetzten eine Nachricht und warten auf seine Entscheidung, da eine Absage oder zusätzliche Kosten nicht in Ihrer Zuständigkeit liegen.',
          fr: "Vous laissez un message à votre supérieur et attendez sa décision, car une annulation ou des frais supplémentaires ne relèvent pas de votre compétence.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie fragen bei anderen Busunternehmen auch nach Kleinbussen, bereiten parallel eine Telefonliste für eine mögliche Verschiebung vor und informieren Ihren Vorgesetzten per Nachricht über den Stand.',
          fr: "Vous contactez d'autres autocaristes, y compris pour des minibus, préparez en parallèle une liste d'appels pour un éventuel report et informez votre supérieur de la situation par message.",
        },
      },
    ],
  },
  {
    id: 'r21',
    competency: 'results',
    format: 'best',
    topicDe: 'Vergessene Saalreservierung',
    situation: {
      de: 'Sie haben vergessen, den Saal für den Informationsabend zum neuen Mobilitätskonzept zu reservieren. Drei Tage vorher stellen Sie fest, dass er an diesem Abend an einen Verein vermietet ist. Die Einladungen mit Ort und Uhrzeit sind bereits veröffentlicht.',
      fr: "Vous avez oublié de réserver la salle pour la soirée d'information sur le nouveau concept de mobilité. Trois jours avant, vous constatez qu'elle est louée ce soir-là à une association. Les invitations mentionnant le lieu et l'heure sont déjà publiées.",
    },
    question: Q_BEST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie fragen den Verein, ob er in einen anderen Raum ausweichen könnte, und bieten ihm Hilfe beim Umzug an; Ihre Vorgesetzte informieren Sie, sobald das Problem gelöst ist.',
          fr: "Vous demandez à l'association si elle pourrait se replier dans une autre salle et lui proposez votre aide pour ce changement ; vous informerez votre supérieure une fois le problème réglé.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie informieren Ihre Vorgesetzte sofort über Ihr Versäumnis, schlagen einen gleichwertigen Ersatzraum vor und planen Hinweise auf der Website, per Aushang und am ursprünglichen Ort.',
          fr: "Vous informez immédiatement votre supérieure de votre oubli, proposez une salle de remplacement équivalente et prévoyez des avis sur le site, par affichage et à l'ancien lieu.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie informieren Ihre Vorgesetzte über das Versäumnis und fragen sie, ob der Informationsabend unter diesen Umständen nicht besser verschoben werden sollte.',
          fr: "Vous informez votre supérieure de l'oubli et lui demandez s'il ne vaudrait pas mieux, dans ces conditions, reporter la soirée d'information.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie suchen einen Ersatzraum, kündigen den neuen Ort auf der Website an und erklären Ihrer Vorgesetzten, die Reservierung sei im System offenbar nicht gespeichert worden.',
          fr: "Vous cherchez une salle de remplacement, annoncez le nouveau lieu sur le site et expliquez à votre supérieure que la réservation n'a apparemment pas été enregistrée dans le système.",
        },
      },
    ],
  },
  {
    id: 'r22',
    competency: 'results',
    format: 'mostLeast',
    topicDe: 'Erfolg einer Testphase bewerten',
    situation: {
      de: 'Das Tourismusbüro der Gemeinde hatte im Sommer probeweise auch sonntags geöffnet. Ihr Vorgesetzter bittet Sie, bis Ende Oktober einzuschätzen, ob sich die Sonntagsöffnung gelohnt hat, damit der Schöffenrat über die Fortführung entscheiden kann. Besucherzahlen wurden bisher nicht systematisch erfasst.',
      fr: "Cet été, l'office du tourisme de la commune a ouvert à titre d'essai le dimanche. Votre supérieur vous demande d'évaluer d'ici fin octobre si cette ouverture dominicale en valait la peine, afin que le collège échevinal puisse décider de sa poursuite. Le nombre de visiteurs n'a pas été relevé de manière systématique.",
    },
    question: Q_MOST_LEAST,
    options: [
      {
        id: 'a',
        text: {
          de: 'Sie befragen die Kolleginnen, die sonntags gearbeitet haben, ausführlich nach ihrem Eindruck vom Andrang und fassen deren Einschätzungen in einem kurzen, übersichtlichen Bericht zusammen.',
          fr: "Vous interrogez en détail les collègues qui ont travaillé le dimanche sur leur impression de la fréquentation et résumez leurs appréciations dans un rapport bref et clair.",
        },
      },
      {
        id: 'b',
        text: {
          de: 'Sie halten in einem Bericht fest, dass eine Bewertung ohne erfasste Besucherzahlen nicht möglich ist, und empfehlen, die Testphase im nächsten Jahr mit Zählung zu wiederholen.',
          fr: "Vous indiquez dans un rapport qu'une évaluation est impossible sans données de fréquentation et recommandez de répéter l'essai l'an prochain avec un comptage.",
        },
      },
      {
        id: 'c',
        text: {
          de: 'Sie werten vorhandene Daten wie Kassenbelege und ausgegebene Prospekte aus, ergänzen Eindrücke des Personals, nennen die Grenzen der Aussagekraft und schlagen Kennzahlen für künftige Tests vor.',
          fr: "Vous exploitez les données existantes, comme les tickets de caisse et les brochures distribuées, les complétez par les impressions du personnel, précisez les limites de l'analyse et proposez des indicateurs pour les prochains essais.",
        },
      },
      {
        id: 'd',
        text: {
          de: 'Sie empfehlen, die Sonntagsöffnung fortzuführen, da ein erweitertes Angebot für Touristen grundsätzlich positiv ist und eine Schließung Beschwerden auslösen könnte.',
          fr: "Vous recommandez de maintenir l'ouverture dominicale, car un service élargi pour les touristes est positif par principe et une fermeture pourrait susciter des plaintes.",
        },
      },
    ],
  },
];
