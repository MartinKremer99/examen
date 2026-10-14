// Answer key for the "Orientation résultat" practice items. Ratings are the
// authors' expert judgement (4 = most effective); they are not official.

import type { SjtKey } from '../types';

export const resultsKey: SjtKey = {
  r01: {
    ratings: { a: 1, b: 2, c: 4, d: 3 },
    feedback: {
      a: 'Vollständigkeit wird über den Termin gestellt: Wer passiv auf die Beiträge wartet, riskiert, dass die Akte zu spät verschickt wird. Die Frist ist hier das eigentliche Ergebnis.',
      b: 'Die Information ist wichtig, kommt aber zu früh und gibt die Verantwortung ab. Sie hätten selbst noch genug Zeit, die Beiträge mit Nachdruck einzufordern.',
      c: 'Verbindet Eigeninitiative (direkter Anruf statt weiterer E-Mail), eine konkrete Zwischenfrist, paralleles Arbeiten und eine frühzeitige Risikomeldung. So bleibt der Termin am Freitag realistisch erreichbar.',
      d: 'Sie bleiben dran und nutzen die Zeit sinnvoll. Eine zweite E-Mail an eine Abteilung, die schon nicht reagiert hat, ist aber wenig wirksam, und niemand wird über das Risiko informiert.',
    },
    summary: 'Termine sichern, indem man fehlende Zulieferungen aktiv und verbindlich einfordert, parallel weiterarbeitet und Risiken früh meldet.',
  },
  r02: {
    ratings: { a: 4, b: 1, c: 2, d: 3 },
    feedback: {
      a: 'Sie finden einen Umweg, der das Ziel (Erfassung heute) trotz Störung sichert, halten die Qualität durch die Kontrolle bei der Übertragung und informieren Ihre Vorgesetzte.',
      b: 'Die Störung wird als Grund genommen, die eigene Aufgabe ruhen zu lassen. Das Ziel wird aufgegeben, ohne Alternativen zu prüfen, und die Verantwortung wird nach außen verschoben.',
      c: 'Sie halten am Ziel fest und zeigen Einsatz, warten aber passiv ab und opfern die Kontrolle. Fehler bei der Gruppeneinteilung sind so wahrscheinlich.',
      d: 'Sinnvolle Vorbereitung, die nach der Störung Zeit spart. Es bleibt aber das Risiko, dass die Störung länger dauert, und die Vorgesetzte weiß nichts davon.',
    },
    summary: 'Bei unerwarteten Hindernissen Alternativen suchen, die das Ziel sichern, ohne Qualitätsstandards aufzugeben, und Betroffene informieren.',
  },
  r03: {
    ratings: { a: 3, b: 2, c: 1, d: 4 },
    feedback: {
      a: 'Sie handeln und korrigieren den Fehler öffentlich. Viele Haushalte erreichen Sie online aber nicht, und Ihre Vorgesetzte wird nicht informiert, obwohl Bürger möglicherweise nachfragen.',
      b: 'Die Information der Vorgesetzten ist richtig, doch der Hinweis auf die Kollegin wirkt wie eine Rechtfertigung. Zur Behebung des Fehlers wird nichts vorgeschlagen.',
      c: 'Abwarten lässt den Fehler wirken: Haushalte stellen ihren Sperrmüll am falschen Tag hinaus. Der Fehler wird nicht offen angesprochen, Verantwortung wird nicht übernommen.',
      d: 'Sie stehen zu Ihrem Fehler, informieren sofort, schlagen eine Korrektur vor, die alle Betroffenen erreicht, und denken an Vorbeugung. Das ist verantwortungsvolles, ergebnisorientiertes Handeln.',
    },
    summary: 'Eigene Fehler offen und rasch melden, wirksam korrigieren und daraus für die Zukunft lernen.',
  },
  r04: {
    ratings: { a: 2, b: 4, c: 1, d: 3 },
    feedback: {
      a: 'Hoher Qualitätsanspruch, aber die Frist wird ohne Absprache gerissen. Perfektionismus geht hier zulasten des Ergebnisses, auf das andere angewiesen sind.',
      b: 'Ausgewogene Lösung: Der bekannte Fehler wird behoben, das Risiko weiterer Fehler stichprobenartig geprüft, der Termin gehalten und das Vorgehen transparent gemacht.',
      c: 'Wissentlich fehlerhafte Zahlen abzugeben, untergräbt die Verlässlichkeit des Berichts. Termintreue rechtfertigt keine bekannten Fehler.',
      d: 'Transparent und korrekt, aber Sie überlassen die Abwägung ganz der Vorgesetzten, ohne einen eigenen Lösungsvorschlag mitzubringen.',
    },
    summary: 'Qualität und Termin klug ausbalancieren: Bekannte Fehler beheben, Restrisiken gezielt prüfen und das Vorgehen offenlegen.',
  },
  r05: {
    ratings: { a: 1, b: 4, c: 2, d: 3 },
    feedback: {
      a: 'Auf dem Vertrag zu bestehen, bringt zwei Tage vor dem Empfang keine Stühle. Der Fokus liegt auf der Schuldfrage statt auf dem Ergebnis.',
      b: 'Lösungsorientiert: Sie nutzen interne und lokale Ressourcen, sichern den Empfang ohne großen Mehraufwand, informieren Ihre Vorgesetzte und passen die Planung an.',
      c: 'Die Rückmeldung an die Vorgesetzte ist sinnvoll, aber Sie bringen keinen eigenen Lösungsansatz mit und geben das Problem vollständig nach oben ab.',
      d: 'Pragmatische Anpassung, die den Empfang sichert. Sie nehmen aber eine Verschlechterung für ältere Gäste in Kauf und prüfen keine Alternativen; die Vorgesetzte wird nicht einbezogen.',
    },
    summary: 'Auf unerwartete Lieferprobleme mit eigenen, pragmatischen Lösungen reagieren und die Planung entsprechend anpassen.',
  },
  r06: {
    ratings: { a: 2, b: 1, c: 3, d: 4 },
    feedback: {
      a: 'Großer Einsatz, aber ohne Prioritäten: Dringende Vorgänge können hinter weniger wichtigen hängen bleiben, und dauerhafte Überstunden sind auf zwei Wochen kaum durchzuhalten.',
      b: 'Teile der Arbeit werden stillschweigend liegen gelassen. Das gefährdet Fristen von Bürgern, und die Vorgesetzte erfährt nicht, was unerledigt bleibt.',
      c: 'Frühe, ehrliche Rückmeldung zur Überlastung ist gut. Es fehlt aber ein eigener Vorschlag, wie mit den vorhandenen Kräften das Wichtigste erledigt werden kann.',
      d: 'Strukturiertes Priorisieren nach Fristen, ein konkreter Vorschlag an die Vorgesetzte und laufende Information: So werden begrenzte Ressourcen gezielt eingesetzt.',
    },
    summary: 'Bei knappen Ressourcen Aufgaben nach Dringlichkeit ordnen, Prioritäten mit der Führungskraft abstimmen und transparent berichten.',
  },
  r07: {
    ratings: { a: 4, b: 2, c: 3, d: 1 },
    feedback: {
      a: 'Sie machen aus einer vagen Absicht ein messbares Ziel und vereinbaren, wie der Fortschritt überprüft wird. Das schafft Klarheit für beide Seiten.',
      b: 'Eigeninitiative ist vorhanden, aber ohne gemeinsames, messbares Ziel lässt sich am Jahresende kaum beurteilen, ob die Erwartungen erfüllt wurden.',
      c: 'Die Nachfrage ist richtig. Sie überlassen die Konkretisierung jedoch dem Vorgesetzten, statt selbst einen messbaren Vorschlag zu machen.',
      d: 'Viel Aktivität ohne klares Ziel: Es ist unklar, ob die Überarbeitung aller Formulare das eigentliche Problem löst. Aufwand ersetzt hier keine Zielklarheit.',
    },
    summary: 'Vage Aufträge in konkrete, messbare Ziele mit vereinbarter Erfolgskontrolle übersetzen.',
  },
  r08: {
    ratings: { a: 2, b: 1, c: 4, d: 3 },
    feedback: {
      a: 'Einsatzbereitschaft ist da, aber die Verzögerung wird zu spät angesprochen. Die Vorgesetzte kann den Umzug so nicht rechtzeitig umplanen.',
      b: 'Das Verzeichnis wirkt vollständig, ist es aber nicht. Das täuscht die Vorgesetzte und kann beim Umzug zu verlorenen oder falsch eingeordneten Akten führen.',
      c: 'Frühe, ehrliche Information mit Ursache, ein Vorschlag zur Priorisierung nach dem eigentlichen Zweck (Umzug) und ein realistischer neuer Termin: vorbildlich.',
      d: 'Sie suchen aktiv Unterstützung, um aufzuholen. Die Vorgesetzte erfährt vom Rückstand aber erst, wenn es eventuell schon zu spät zum Umplanen ist.',
    },
    summary: 'Absehbare Verzögerungen früh melden und zugleich Lösungen und realistische Termine vorschlagen.',
  },
  r09: {
    ratings: { a: 1, b: 2, c: 3, d: 4 },
    feedback: {
      a: 'Unter Zeitdruck wird eine verbindliche Verfahrensregel umgangen. Persönliches Kennen ersetzt keine Identitätsprüfung; das gefährdet die Verlässlichkeit der Verwaltung.',
      b: 'Die Regel wird weiterhin umgangen, nur auf zwei Personen verteilt. Zudem bindet das eine weitere Kollegin, während die Schlange wartet.',
      c: 'Die Regel wird korrekt eingehalten. Der Hinweis, an einem anderen Tag wiederzukommen, geht aber am dringenden Bedürfnis des Bürgers vorbei.',
      d: 'Der Standard wird eingehalten und gleichzeitig ein Weg angeboten, wie der Bürger sein Ziel heute noch erreicht, ohne die Wartenden zu benachteiligen.',
    },
    summary: 'Verbindliche Standards auch unter Druck einhalten und innerhalb der Regeln eine lösungsorientierte Alternative anbieten.',
  },
  r10: {
    ratings: { a: 2, b: 4, c: 1, d: 3 },
    feedback: {
      a: 'Abwarten ignoriert einen klaren Hinweis auf die Ursache (Formular wird nicht gefunden). Das Ziel rückt so nicht näher.',
      b: 'Sie analysieren die Ursache, schlagen gezielte Anpassungen vor und messen den Erfolg erneut. Das ist ein konsequentes Nachsteuern am Ziel.',
      c: 'Das Ziel wird beim ersten Gegenwind aufgegeben, obwohl die Ursache offenbar behebbar ist. Die Annahme, Bürger wollten nur telefonieren, ist nicht belegt.',
      d: 'Hilfreich im Einzelfall und im Sinne des Ziels. Die eigentliche Ursache, die schlechte Auffindbarkeit, bleibt aber bestehen, und das Team erfährt nichts davon.',
    },
    summary: 'Wenn ein geplanter Ansatz das Ziel verfehlt, Ursachen klären, gezielt nachsteuern und die Wirkung erneut messen.',
  },
  r11: {
    ratings: { a: 1, b: 2, c: 4, d: 3 },
    feedback: {
      a: 'Der Auftrag wird nicht erfüllt: Der Schöffenrat braucht die Schätzung jetzt, um planen zu können. Fehlende Information ist kein Grund, gar nichts zu liefern.',
      b: 'Sie liefern termingerecht, verschleiern aber die Unsicherheit. Weicht die Teilnehmerzahl stark ab, ist die Entscheidungsgrundlage irreführend.',
      c: 'Mit Szenarien, offengelegten Annahmen und getrennten Fixkosten liefern Sie trotz Unsicherheit eine belastbare Grundlage, mit der der Schöffenrat arbeiten kann.',
      d: 'Die Rückfrage ist legitim, doch der Schöffenrat kennt die Zahl selbst nicht. Sie verschieben die Unsicherheit, statt sie fachlich zu bearbeiten.',
    },
    summary: 'Mit unvollständigen Informationen arbeiten: Annahmen offenlegen, Varianten rechnen und trotzdem termingerecht liefern.',
  },
  r12: {
    ratings: { a: 4, b: 1, c: 3, d: 2 },
    feedback: {
      a: 'Das Gesamtziel wird in überprüfbare Etappen zerlegt, nach Dringlichkeit geordnet und laufend verfolgt. Abweichungen werden früh sichtbar und können korrigiert werden.',
      b: 'Die Zahl sinkt schnell, aber dringende und womöglich sicherheitsrelevante Fälle wie Schlaglöcher bleiben am längsten liegen. Hier wird die Kennzahl über den Zweck gestellt.',
      c: 'Hoher Einsatz, aber ohne Zwischenziele und Rückmeldung: Ob das Ziel erreichbar ist, zeigt sich erst am Ende, wenn nicht mehr gegengesteuert werden kann.',
      d: 'Der Wunsch nach Sicherheit ist verständlich, doch die Einstufung jeder einzelnen Meldung gehört zu Ihrer Aufgabe. Das belastet den Vorgesetzten und verzögert den Start.',
    },
    summary: 'Messbare Ziele in Etappen planen, nach Dringlichkeit priorisieren und den Fortschritt laufend verfolgen.',
  },
  r13: {
    ratings: { a: 2, b: 4, c: 3, d: 1 },
    feedback: {
      a: 'Sie sind vorbereitet, korrigieren den Fehler aber nicht aktiv. Die Ratsmitglieder bereiten sich weiter mit falschen Zahlen vor.',
      b: 'Sie übernehmen Verantwortung, informieren den zuständigen Gemeindesekretär sofort und legen eine fertige Lösung vor, damit die Korrektur auf dem richtigen Weg und rechtzeitig erfolgt.',
      c: 'Schnell und ehrlich, aber der Versand an den Rat läuft normalerweise über das Sekretariat. Ohne Abstimmung kann das zu Verwirrung oder doppelten Fassungen führen.',
      d: 'Ein erkannter Fehler in offiziellen Unterlagen wird bewusst stehen gelassen. Ob die Aufteilung relevant ist, entscheidet der Rat, nicht Sie.',
    },
    summary: 'Für eigene Fehler einstehen: rasch melden, eine fertige Korrektur liefern und den richtigen Dienstweg einhalten.',
  },
  r14: {
    ratings: { a: 2, b: 1, c: 4, d: 3 },
    feedback: {
      a: 'Es gibt immerhin eine klare Reihenfolge, doch sie richtet sich nach der Hierarchie statt nach Fristen und Auswirkungen. Der Technische Dienst erfährt nicht, dass seine Liste gefährdet ist.',
      b: 'Ohne Plan und mit dem Prinzip Hoffnung riskieren Sie, am Ende beide Fristen zu verfehlen. Niemand wird rechtzeitig gewarnt.',
      c: 'Sie verschaffen sich einen Überblick, planen realistisch und stimmen Prioritäten mit Ihrer Vorgesetzten ab. So werden Konflikte gelöst, bevor eine Frist platzt.',
      d: 'Aktive Klärung mit einem Auftraggeber ist ein guter Schritt und kann den Engpass lösen. Ihre Vorgesetzte bleibt jedoch außen vor, falls der Technische Dienst ablehnt.',
    },
    summary: 'Bei konkurrierenden Aufträgen Aufwand einschätzen, planen und Prioritäten rechtzeitig mit der Führungskraft abstimmen.',
  },
  r15: {
    ratings: { a: 2, b: 3, c: 1, d: 4 },
    feedback: {
      a: 'Der Termin wird formal gehalten, aber ein unvollständiger Antrag kann abgelehnt werden. Das Risiko wird eigenmächtig in Kauf genommen.',
      b: 'Aktiv und offen, aber zu früh nach außen gerichtet: Zuerst sollte geprüft werden, ob die Gemeinde intern noch fristgerecht unterschreiben kann.',
      c: 'Sie verlassen sich auf eine ungeprüfte Annahme und gefährden den Zuschuss. Die Frist wird bewusst überschritten, ohne Alternativen zu suchen.',
      d: 'Sie klären sofort intern die Möglichkeiten (Vertretung, Unterschrift aus der Ferne) und behalten das Ziel, einen vollständigen Antrag bis Freitag, konsequent im Blick.',
    },
    summary: 'Bei Hindernissen kurz vor einer Frist zuerst die internen Lösungswege ausschöpfen und das Ziel konsequent verfolgen.',
  },
  r16: {
    ratings: { a: 4, b: 1, c: 2, d: 3 },
    feedback: {
      a: 'Sie informieren sofort, sichern das zeitkritische Ziel (Bekanntmachung des Infoabends) über andere Kanäle und prüfen eine Alternative für den Druck.',
      b: 'Passives Hinnehmen: Der Informationsabend findet statt, bevor die Bürger davon erfahren. Fehlender Einfluss auf die Ursache heißt nicht fehlender Einfluss auf die Folgen.',
      c: 'Zielorientiert und entschlossen, aber eine deutlich teurere Vergabe sollte nicht ohne Absprache erfolgen. Zudem informieren Sie niemanden.',
      d: 'Sie lösen den kritischsten Teil des Problems schnell. Die Vorgesetzte wird aber erst im Nachhinein informiert, obwohl sie früh hätte mitentscheiden können.',
    },
    summary: 'Verzögerungen sofort kommunizieren und deren Folgen mit Alternativen abfedern.',
  },
  r17: {
    ratings: { a: 1, b: 2, c: 4, d: 3 },
    feedback: {
      a: 'Der Anspruch an Qualität ist hoch, doch die Vorgesetzte braucht die Information morgen. Eine Lieferung nach der Besprechung verfehlt den Zweck.',
      b: 'Sie liefern etwas, aber unstrukturiert und lückenhaft. Ein halbfertiger Ausschnitt einer Detailanalyse ist für eine Besprechung wenig brauchbar.',
      c: 'Sie richten den Umfang am tatsächlichen Bedarf aus, sichern die Qualität der gelieferten Zahlen und machen die Grenzen transparent. Schnell und verlässlich zugleich.',
      d: 'Pragmatisch und rechtzeitig. Ohne kurze Rückfrage zum Bedarf und ohne Hinweis auf die Prüfung besteht aber das Risiko, an den wichtigen Fragen vorbeizuliefern.',
    },
    summary: 'Qualität und Geschwindigkeit ausbalancieren: Umfang am Bedarf ausrichten, Zahlen prüfen, Grenzen offenlegen.',
  },
  r18: {
    ratings: { a: 1, b: 4, c: 2, d: 3 },
    feedback: {
      a: 'Die Prüfung ganz aufzugeben, opfert die Verlässlichkeit der Buchhaltung für den Termin. Spätere Korrekturen verursachen mehr Aufwand und Risiken.',
      b: 'Der Standard bleibt gewahrt, die Reihenfolge folgt dem Risiko, und die Vorgesetzte wird früh einbezogen, um den Termin mit Unterstützung zu sichern.',
      c: 'Eine risikobasierte Abstufung ist nachvollziehbar, wird aber eigenmächtig eingeführt. Fehler bei vielen kleinen Rechnungen bleiben so unbemerkt.',
      d: 'Hohes Engagement, und der Standard bleibt erhalten. Bei großer Müdigkeit steigt jedoch die Fehlerquote, und Unterstützung wird nicht gesucht.',
    },
    summary: 'Qualitätsstandards auch unter Zeitdruck einhalten und Engpässe früh melden, statt Abkürzungen zu nehmen.',
  },
  r19: {
    ratings: { a: 4, b: 3, c: 2, d: 1 },
    feedback: {
      a: 'Sie beschaffen die fehlende Information über einen anderen Weg, arbeiten mit dem Vorhandenen schon weiter und halten Ihre Vorgesetzte auf dem Laufenden.',
      b: 'Pragmatisch und termingerecht. Die bekannte Lücke wird aber nicht geschlossen, sodass viele Neubürger keine persönliche Einladung erhalten.',
      c: 'Die Kollegin im Urlaub zu stören, ist unnötig, solange andere im Team helfen können. Zudem bleibt offen, ob und wann die Liste kommt.',
      d: 'Vollständige Abhängigkeit von einer abwesenden Person: Sie verlieren Zeit und riskieren eine Verschiebung, obwohl andere Lösungen verfügbar wären.',
    },
    summary: 'Bei unvollständigen Informationen fehlende Daten aktiv beschaffen und parallel mit dem Vorhandenen weiterarbeiten.',
  },
  r20: {
    ratings: { a: 2, b: 3, c: 1, d: 4 },
    feedback: {
      a: 'Die Teilnehmenden werden immerhin rechtzeitig informiert. Das Ziel wird aber aufgegeben, ohne überhaupt nach Ersatz gesucht zu haben.',
      b: 'Großer Einsatz für das Ziel. Es fehlt jedoch ein Plan B: Scheitert die Suche spät abends, können die Teilnehmenden kaum noch informiert werden.',
      c: 'Passives Abwarten in einer Lage, die sofortiges Handeln erfordert. Zuständigkeit für Entscheidungen heißt nicht, dass Sie nichts vorbereiten dürfen.',
      d: 'Sie suchen aktiv nach Ersatz, bereiten parallel einen Plan B vor und informieren Ihren Vorgesetzten. So sind Sie auf beide Ausgänge vorbereitet.',
    },
    summary: 'Wenn der Plan kurzfristig scheitert, aktiv Alternativen suchen und gleichzeitig einen Plan B vorbereiten.',
  },
  r21: {
    ratings: { a: 3, b: 4, c: 2, d: 1 },
    feedback: {
      a: 'Lösungsorientiert und um den ursprünglichen Ort bemüht. Die Vorgesetzte wird aber erst nachträglich informiert, und es gibt keinen Plan, falls der Verein ablehnt.',
      b: 'Sie stehen zu Ihrem Versäumnis, informieren sofort und legen einen vollständigen Lösungsplan vor, der auch an die bereits eingeladenen Bürger denkt.',
      c: 'Ehrlich, aber ohne eigenen Lösungsversuch. Eine Verschiebung ist hier nicht nötig und würde die bereits veröffentlichte Einladung entwerten.',
      d: 'Das Problem wird zwar gelöst, aber der eigene Fehler wird auf das System geschoben. Das untergräbt das Vertrauen und verhindert, dass aus dem Fehler gelernt wird.',
    },
    summary: 'Für eigene Versäumnisse ehrlich einstehen und gleichzeitig eine vollständige Lösung anbieten.',
  },
  r22: {
    ratings: { a: 3, b: 2, c: 4, d: 1 },
    feedback: {
      a: 'Liefert eine termingerechte Einschätzung, stützt sich aber nur auf subjektive Eindrücke. Für eine Entscheidung des Schöffenrats ist das eine dünne Grundlage.',
      b: 'Ehrlich hinsichtlich der Datenlage und mit gutem Vorschlag für die Zukunft. Für die anstehende Entscheidung liefert der Bericht aber keine verwertbare Grundlage.',
      c: 'Sie nutzen alle verfügbaren Daten, ergänzen sie um qualitative Hinweise, machen die Grenzen transparent und schlagen messbare Kennzahlen für die Zukunft vor.',
      d: 'Eine Empfehlung ohne Daten, die auf allgemeinen Annahmen beruht. Das Ziel der Bewertung, eine belegte Entscheidungsgrundlage, wird verfehlt.',
    },
    summary: 'Ergebnisse anhand verfügbarer Daten und messbarer Kriterien bewerten und Grenzen der Aussagekraft offenlegen.',
  },
};
