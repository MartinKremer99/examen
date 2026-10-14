// Answer key for the "Orientation client" (Kundenorientierung) items.
// Ratings: 4 = most effective … 1 = least effective. Practice ratings for
// training purposes, not the official assessment key.

import type { SjtKey } from '../types';

export const customerKey: SjtKey = {
  c01: {
    ratings: { a: 2, b: 1, c: 4, d: 3 },
    feedback: {
      a: "Entschuldigung und Verständnis sind wichtig, lösen das Problem der Besucher aber nicht. Es fehlen korrekte Informationen, Alternativen und eine Korrektur der Website.",
      b: "Die Besucher werden weitergeschickt, obwohl Sie ihnen direkt helfen könnten. Für sie ist die Gemeinde ein einziger Ansprechpartner – die interne Zuständigkeit ist nicht ihr Problem.",
      c: "Diese Reaktion verbindet Eingeständnis, korrekte Information, konkrete Alternativen und die Behebung der Ursache. So wird dem Ehepaar geholfen, und weitere Besucher werden nicht mehr falsch informiert.",
      d: "Gute, kundenorientierte Hilfe für das Ehepaar. Es fehlt aber die Meldung des Fehlers, sodass weitere Besucher durch die Website falsch informiert werden könnten.",
    },
    summary:
      "Bei einer berechtigten Beschwerde den Fehler anerkennen, korrekte Informationen und Alternativen bieten und die Ursache intern melden, damit sie behoben wird.",
  },
  c02: {
    ratings: { a: 2, b: 4, c: 1, d: 3 },
    feedback: {
      a: "Ruhig und sachlich, aber unverbindlich. Der Bürger erhält weder einen konkreten Stand noch einen Zeitrahmen, sodass sein Ärger bestehen bleibt.",
      b: "Sie nehmen das Anliegen ernst, geben gesicherte Information (Eingang bestätigt) und verpflichten sich zu einem konkreten Rückruf mit realistischem Termin. So steuern Sie Erwartungen, ohne etwas Unsicheres zu versprechen.",
      c: "Sie versprechen ein Ergebnis, über das Sie nicht entscheiden, und geben einen Rat außerhalb Ihrer Zuständigkeit. Trifft das Versprechen nicht ein, wächst der Ärger und die Glaubwürdigkeit der Gemeinde leidet.",
      d: "Der Bürger erhält einen konkreten Ansprechpartner, muss sich aber erneut selbst kümmern. Besser wäre es, den Stand selbst zu klären und ihm verbindlich Rückmeldung zu geben.",
    },
    summary:
      "Bei Verzögerungen Eingang und Stand ehrlich klären, keine Ergebnisse versprechen, über die man nicht entscheidet, und einen verbindlichen Rückruf zusagen.",
  },
  c03: {
    ratings: { a: 1, b: 2, c: 3, d: 4 },
    feedback: {
      a: "Sie umgehen eine verbindliche Dienstanweisung. Auch wenn es gut gemeint ist, gefährdet das die Verlässlichkeit des Dokuments und Ihre eigene Position.",
      b: "Regelkonform und freundlich, aber passiv. Die Bürgerin muss noch einmal kommen, und mögliche zulässige Alternativen werden nicht geprüft.",
      c: "Gute Vorbereitung und eine verbindliche Rückmeldung. Es wird jedoch nicht geprüft, ob eine befugte Vertretung den Termin der Bürgerin noch retten könnte.",
      d: "Sie halten die Regel ein und suchen aktiv nach einer zulässigen Lösung (befugte Vertretung) sowie nach einem Plan B. So verbinden Sie Regeltreue mit echtem Einsatz für die Bürgerin.",
    },
    summary:
      "Regeln nicht umgehen, aber innerhalb der Regeln aktiv nach zulässigen Alternativen suchen und realistische Erwartungen schaffen.",
  },
  c04: {
    ratings: { a: 4, b: 3, c: 1, d: 2 },
    feedback: {
      a: "Sie nutzen Ihre Sprachkenntnisse und die verfügbaren Mittel, um die ganze Frage (Hin- und Rückweg) korrekt zu beantworten. Schriftliche Notizen beugen Missverständnissen vor.",
      b: "Hilfreich für die Wanderung, aber die Rückfahrt – ein wesentlicher Teil der Frage – wird dem Touristen überlassen. Gerade bei Sprachbarrieren ist eine geprüfte, notierte Auskunft wertvoller.",
      c: "Die Sprache wird zur Ausrede, nicht zu helfen. Für eine Tourist-Info ist das klar nicht kundenorientiert, zumal Sie sich auf Englisch verständigen könnten.",
      d: "Einen sprachgewandteren Kollegen einzubeziehen, kann sinnvoll sein, ist hier aber nicht nötig: Ihr Englisch reicht, und der Tourist verliert zwanzig Minuten.",
    },
    summary:
      "Sprachbarrieren pragmatisch überwinden, die vollständige Frage beantworten und wichtige Angaben schriftlich festhalten.",
  },
  c05: {
    ratings: { a: 2, b: 4, c: 3, d: 1 },
    feedback: {
      a: "Formal nachvollziehbar, aber starr und unvollständig: Das Reglement sieht eine Ausnahmemöglichkeit vor, die Sie dem Vorsitzenden verschweigen.",
      b: "Sie bleiben in Ihrer Zuständigkeit, machen den zulässigen Weg für den Kunden aber einfach und verbindlich. Erwartungen werden geklärt, ohne etwas zu versprechen.",
      c: "Korrekte Information über den Entscheidungsweg, aber der Aufwand bleibt beim Vereinsvorsitzenden. Die Anfrage direkt aufzunehmen und weiterzuleiten wäre serviceorientierter.",
      d: "Sie übergehen die Zuständigkeit des Schöffenrats und benachteiligen fristgerecht angemeldete Vereine. Das widerspricht der Gleichbehandlung und ist nicht transparent.",
    },
    summary:
      "Bei Wünschen nach Ausnahmen die Grenzen der eigenen Befugnis klar benennen und den zulässigen Weg für den Kunden aktiv ebnen.",
  },
  c06: {
    ratings: { a: 1, b: 2, c: 4, d: 3 },
    feedback: {
      a: "Die Dame wird wiederholt unterbrochen, und die Schlange wächst. Wer persönlich wartet, sollte nicht ausführlichen Telefonaten weichen müssen.",
      b: "Der Vorrang für die Personen vor Ort ist nachvollziehbar, aber der Anrufer bleibt ohne jede Reaktion, obwohl es eine Umleitungsmöglichkeit gibt.",
      c: "Eine kurze, höfliche Unterbrechung sichert den Anrufer mit einem verbindlichen Rückruf, und die Umleitung schafft danach Ruhe für die Schlange. So bleiben beide Kundengruppen bedient.",
      d: "Pragmatisch und schützt die Schlange. Der Anrufer, der es schon mehrmals versucht hat, erhält jedoch keine direkte Rückmeldung, und das Sekretariat kennt sein Anliegen nicht.",
    },
    summary:
      "Unter Druck Prioritäten setzen: Wartende vor Ort nicht vernachlässigen, Anrufer aber kurz sichern und verfügbare Weiterleitungen nutzen.",
  },
  c07: {
    ratings: { a: 4, b: 3, c: 2, d: 1 },
    feedback: {
      a: "Sie geben Ihre Unsicherheit ehrlich zu und sorgen selbst für eine gesicherte Auskunft. So erhält der Bürger korrekte Informationen ohne zusätzliche Wege.",
      b: "Korrekt und ehrlich, da nicht geraten wird. Der Bürger muss sich jedoch selbst weiter kümmern, obwohl ein kurzer Anruf genügt hätte.",
      c: "Die Aussage wirkt wie eine Bestätigung, beruht aber nur auf vager Erinnerung. Der pauschale Verweis auf die Website hilft zudem wenig.",
      d: "Eine konkrete, aber möglicherweise veraltete Zahl kann zu falschen Planungen und späteren Beschwerden führen. Unsichere Informationen dürfen nicht als Fakten weitergegeben werden.",
    },
    summary:
      "Bei Unsicherheit nicht raten, sondern offen sagen, dass man es prüft, und für eine gesicherte Auskunft sorgen.",
  },
  c08: {
    ratings: { a: 3, b: 1, c: 2, d: 4 },
    feedback: {
      a: "Der Herr erhält alle Optionen samt Erklärung, muss aber selbst auswählen – für einen unsicheren Kunden eine unnötige Hürde. Eine kurze Nachfrage wäre effizienter.",
      b: "Sie raten, statt nachzufragen. Das Risiko ist hoch, dass er das falsche Formular ausfüllt und erneut kommen muss.",
      c: "Für einen älteren, unsicheren Herrn, der persönlich vorspricht, ist der Verweis auf die Website kaum hilfreich und wirkt abweisend.",
      d: "Mit einer gezielten Frage ermitteln Sie das tatsächliche Anliegen und bieten eine passgenaue, vollständige Lösung. Das spart beiden Seiten Zeit.",
    },
    summary: "Durch gezieltes Nachfragen das eigentliche Anliegen klären, bevor man eine Lösung anbietet.",
  },
  c09: {
    ratings: { a: 1, b: 4, c: 2, d: 3 },
    feedback: {
      a: "Statt zu deeskalieren, schicken Sie den Bürger weg. Das verschärft die Konfrontation vor allen Wartenden und löst sein Anliegen nicht.",
      b: "Sie deeskalieren durch Ruhe und Zuhören, nehmen die Fakten auf und sorgen für eine direkte Übergabe an den zuständigen Dienst. Der Bürger wird ernst genommen, ohne dass Sie Ihre Zuständigkeit überschreiten.",
      c: "Viel Entschuldigung, aber eine voreilige Festlegung: Ob ein Fehler vorliegt, wissen Sie nicht. Erweist sich die Rechnung als korrekt, ist die Enttäuschung umso größer.",
      d: "Ruhig und korrekt, aber der Bürger wird nur weitergeschickt. Ein kurzer Anruf beim Einnahmedienst hätte sichergestellt, dass er dort sofort empfangen wird.",
    },
    summary:
      "Aufgebrachte Kunden durch Ruhe und Zuhören deeskalieren, keine voreiligen Zusagen machen und eine aktive Übergabe an den zuständigen Dienst organisieren.",
  },
  c10: {
    ratings: { a: 2, b: 3, c: 4, d: 1 },
    feedback: {
      a: "Die Zusage wird stillschweigend gebrochen. Die Vorsitzende wartet vergeblich auf den Anruf, was Vertrauen kostet.",
      b: "Die Zusage wird eingehalten und die Vorsitzende transparent informiert. Es wurde aber nicht versucht, die Information aktiv einzuholen, obwohl die Kollegin im Haus ist.",
      c: "Sie nehmen Ihre Zusage ernst, holen die fehlende Information aktiv ein und liefern pünktlich eine verlässliche Antwort. Das ist gelebte Verbindlichkeit.",
      d: "Eine ungeprüfte Auskunft kann zu Doppelbuchungen und großem Ärger führen. Pünktlichkeit darf nicht auf Kosten der Richtigkeit gehen.",
    },
    summary:
      "Zusagen einhalten: fehlende Informationen aktiv einholen und, wenn das nicht gelingt, den Kunden fristgerecht über den Stand informieren – nie ungeprüfte Auskünfte geben.",
  },
  c11: {
    ratings: { a: 2, b: 3, c: 1, d: 4 },
    feedback: {
      a: "Formal korrekt, aber für einen unerfahrenen Antragsteller wenig hilfreich. Das Reglement allein beantwortet seine Frage nicht.",
      b: "Eine klare mündliche Erklärung, aber ohne schriftliche Unterstützung gehen Details wie Fristen und Ansprechpartner leicht verloren.",
      c: "Herablassend und nicht serviceorientiert: Es ist Aufgabe der Gemeinde, ihre eigenen Verfahren verständlich zu erklären.",
      d: "Einfache Sprache, eine schriftliche Übersicht und ein konkretes Unterstützungsangebot machen das Verfahren nachvollziehbar und erhöhen die Chance auf einen vollständigen Antrag.",
    },
    summary: "Verwaltungsverfahren in einfacher Sprache, strukturiert und mit schriftlicher Unterstützung erklären.",
  },
  c12: {
    ratings: { a: 4, b: 1, c: 3, d: 2 },
    feedback: {
      a: "Interne Kunden verdienen dieselbe Verbindlichkeit wie externe. Sie klären den Bedarf, halten die Frist ein und behalten Ihre eigene Priorität im Blick.",
      b: "Abweisend gegenüber einem Kollegen, dessen Arbeit von Ihrer Information abhängt. Die Planung der Straßensperrungen und damit die Bürger wären betroffen.",
      c: "Schnell und gut gemeint, aber Sie verlagern die Arbeit auf den Kollegen und erhöhen das Risiko, dass er eine Veranstaltung übersieht.",
      d: "Sie sagen zu, aber zu spät: Die Frist von 14 Uhr wird verpasst, obwohl die Aufgabe zeitlich gut machbar gewesen wäre.",
    },
    summary:
      "Auch Kolleginnen und Kollegen sind Kunden: Bedarf klären, Fristen einhalten und die eigene Arbeit sinnvoll priorisieren.",
  },
  c13: {
    ratings: { a: 1, b: 2, c: 4, d: 3 },
    feedback: {
      a: "Sie übernehmen die persönlichen Zugangsdaten einer Bürgerin – ein klarer Verstoß gegen Sicherheits- und Datenschutzgrundsätze, auch wenn es hilfsbereit gemeint ist.",
      b: "Korrekte Information, aber für eine verunsicherte Bürgerin wenig hilfreich. Die Frist ist knapp, und Sie hätten gerade Zeit für eine direkte Unterstützung.",
      c: "Sie halten die Regel (Online-Anmeldung) ein und befähigen die Bürgerin, die Anmeldung selbst zu erledigen. Die schriftliche Anleitung hilft ihr auch beim nächsten Mal.",
      d: "Hilfreiche Unterstützung, aber angesichts der knappen Frist und Ihrer verfügbaren Zeit bleibt die Chance ungenutzt, das Anliegen sofort zu lösen.",
    },
    summary:
      "Vorgeschriebene Verfahren nicht umgehen, sondern Bürgerinnen und Bürger aktiv befähigen, sie zu nutzen – mit Geduld und klaren Anleitungen.",
  },
  c14: {
    ratings: { a: 2, b: 4, c: 3, d: 1 },
    feedback: {
      a: "Ehrlich, aber gleichgültig: Die Bürgerin bleibt mit ihrem eigentlichen Problem – der Reise – allein, obwohl ein naheliegender Hinweis möglich wäre.",
      b: "Sie korrigieren die Erwartung ehrlich und lenken den Blick auf eine realistische Lösung, ohne Rechtsauskünfte außerhalb Ihrer Kompetenz zu geben. Das eigentliche Anliegen – die Reise – steht im Mittelpunkt.",
      c: "Ehrlich und engagiert. Die naheliegende Lösung über den gültigen Reisepass wird aber nicht angesprochen, und die Bürgerin bleibt bis zur Rückmeldung im Unklaren.",
      d: "Ein Versprechen, das Sie nicht halten können: Die Lieferzeit liegt nicht in Ihrer Hand. Kommt der Ausweis zu spät, ist der Schaden für die Bürgerin groß.",
    },
    summary:
      "Erwartungen früh und ehrlich korrigieren und dabei auf das eigentliche Anliegen des Kunden eingehen, statt Unhaltbares zu versprechen.",
  },
  c15: {
    ratings: { a: 4, b: 3, c: 1, d: 2 },
    feedback: {
      a: "Sie nehmen die Beschwerde ernst, ohne vorschnell über den Kollegen zu urteilen, lösen das eigentliche Anliegen sofort und geben die Beschwerde auf dem richtigen Weg weiter.",
      b: "Professioneller Umgang mit der Beschwerde, aber die Sachfrage hätten Sie direkt beantworten können, statt den Bürger erneut warten zu lassen.",
      c: "Sie stellen einen Kollegen bloß, urteilen, ohne seine Sicht zu kennen, und versprechen Konsequenzen, über die Sie nicht entscheiden. Das ist unloyal und unprofessionell.",
      d: "Neutral gegenüber dem Kollegen, aber abweisend gegenüber dem Bürger: Weder die Beschwerde noch seine Sachfrage werden aufgenommen.",
    },
    summary:
      "Beschwerden über Kollegen sachlich aufnehmen und weiterleiten, loyal bleiben und das eigentliche Anliegen des Kunden lösen.",
  },
  c16: {
    ratings: { a: 1, b: 2, c: 3, d: 4 },
    feedback: {
      a: "Sie entscheiden über eine Rückerstattung, die nicht in Ihre Zuständigkeit fällt, und greifen ohne Grundlage in die Kasse. Das ist nicht nachvollziehbar und kann eine einheitliche Regelung untergraben.",
      b: "Sie versprechen ein Ergebnis, das noch nicht feststeht, und lassen die Touristin am Abreisetag erneut kommen. Das schafft falsche Erwartungen und zusätzlichen Aufwand.",
      c: "Korrekter Verweis auf die zuständige Stelle mit konkreten Hinweisen. Die Touristin muss sich aber selbst kümmern, obwohl Sie den Fall direkt hätten aufnehmen können.",
      d: "Sie respektieren die Zuständigkeit, nehmen der abreisenden Touristin den Aufwand ab und sagen nur zu, was Sie halten können: Weiterleitung und Information über die Entscheidung.",
    },
    summary:
      "Wenn man nicht selbst entscheiden kann, den Fall vollständig aufnehmen, weiterleiten und nur zusagen, was man selbst in der Hand hat.",
  },
  c17: {
    ratings: { a: 2, b: 1, c: 4, d: 3 },
    feedback: {
      a: "Ruhig, aber ineffizient: Die Wartenden erfahren erst spät, was los ist, und Anliegen, die ohne System erledigt werden könnten, werden nicht vorgezogen.",
      b: "Sie lassen sich provozieren und rechtfertigen sich. Das heizt die Stimmung in der Schlange weiter an, statt sie zu beruhigen.",
      c: "Transparente Information an alle, aktive Sortierung der Anliegen und konkrete Alternativen. So nutzen Sie die Wartezeit sinnvoll und behalten die Lage im Griff.",
      d: "Transparent und höflich, das beruhigt die Lage. Es fehlen jedoch konkrete Lösungen, sodass alle untätig warten müssen.",
    },
    summary:
      "Unter Druck ruhig bleiben, alle transparent informieren und aktiv nach Lösungen und Alternativen für die Wartenden suchen.",
  },
  c18: {
    ratings: { a: 3, b: 4, c: 1, d: 2 },
    feedback: {
      a: "Regeltreu, höflich und diskret gegenüber Dritten. Es fehlt aber ein Angebot, das dem Bürger den zweiten Besuch erleichtert.",
      b: "Sie bleiben bei der Regel, erklären ihren Sinn und erleichtern den weiteren Ablauf konkret. So verbinden Sie Verbindlichkeit mit Serviceorientierung.",
      c: "Sie umgehen das vorgeschriebene Verfahren auf Druck des Bürgers und auf Grundlage einer unbelegten Behauptung. Das gefährdet die Richtigkeit des Registers und die Gleichbehandlung.",
      d: "Sie äußern sich ohne Kenntnis des Falls über einen Dritten und wirken konfrontativ. Das hilft dem Bürger nicht weiter und ist auch aus Datenschutzsicht problematisch.",
    },
    summary:
      "Regeln freundlich, aber bestimmt einhalten, ihren Sinn erklären und dem Bürger den regelkonformen Weg so einfach wie möglich machen.",
  },
  c19: {
    ratings: { a: 3, b: 1, c: 2, d: 4 },
    feedback: {
      a: "Engagiert, aber überfordernd: Die Initiative muss sich durch viele irrelevante Informationen arbeiten und riskiert, Wichtiges zu übersehen.",
      b: "Bürokratisch und wenig hilfreich: Wer nicht weiß, was nötig ist, kann keinen vollständigen Antrag stellen. Die Antwort erzeugt eher Frust.",
      c: "Gut gemeint, führt aber zu mehreren unkoordinierten Antworten, ohne dass das eigentliche Vorhaben geklärt ist.",
      d: "Sie klären zuerst den tatsächlichen Bedarf und können dann eine passgenaue, koordinierte Antwort geben. Die Eingangsbestätigung zeigt, dass die Anfrage ernst genommen wird.",
    },
    summary:
      "Bei unklaren Anfragen zuerst den konkreten Bedarf durch gezielte Fragen ermitteln und dann eine passgenaue, koordinierte Antwort geben.",
  },
  c20: {
    ratings: { a: 4, b: 3, c: 2, d: 1 },
    feedback: {
      a: "Sie lösen das Problem der Bürgerin mit einer gesicherten, schriftlichen Auskunft und sorgen dafür, dass die Ursache – uneinheitliche Informationen im Team – angegangen wird.",
      b: "Die Bürgerin erhält endlich eine gesicherte Auskunft. Die Ursache bleibt aber bestehen, sodass andere Bürger ebenfalls widersprüchliche Informationen erhalten könnten.",
      c: "Pragmatisch, aber keine Klärung: Die Bürgerin hat unnötigen Aufwand, und die Unsicherheit bleibt bestehen.",
      d: "Eine dritte, ungeprüfte Auskunft verschärft das Problem. Gerade nach widersprüchlichen Informationen ist eine verlässliche Klärung unerlässlich.",
    },
    summary:
      "Nach widersprüchlichen Auskünften eine verbindliche Information sicherstellen und die Ursache im Team ansprechen.",
  },
  c21: {
    ratings: { a: 2, b: 3, c: 4, d: 1 },
    feedback: {
      a: "Regelkonform, aber knapp und ohne Hilfestellung: Der Mann erfährt nicht, wie er die Urkunde auf zulässigem Weg doch erhalten könnte.",
      b: "Regeltreu und lösungsorientiert. Eine Erklärung, wozu die Regel dient, und der Hinweis auf den Postversand würden Akzeptanz und Service noch erhöhen.",
      c: "Sie bleiben bei der Regel, machen ihren Sinn verständlich und bieten zwei zulässige Wege an. So fühlt sich der Bürger ernst genommen, auch wenn er heute ohne Urkunde geht.",
      d: "Eine telefonische Bestätigung ersetzt keine schriftliche Vollmacht – die Identität am Telefon lässt sich nicht prüfen. Damit umgehen Sie eine Schutzregel für persönliche Dokumente.",
    },
    summary: "Schutzregeln konsequent einhalten, sie verständlich begründen und zulässige Alternativen anbieten.",
  },
  c22: {
    ratings: { a: 2, b: 4, c: 1, d: 3 },
    feedback: {
      a: "Sachlich korrekt, aber belehrend und abweisend. Der Anwohner fühlt sich nicht ernst genommen, was die angedrohte Eskalation eher wahrscheinlicher macht.",
      b: "Sie deeskalieren durch Zuhören, informieren korrekt und sorgen dafür, dass die Beschwerde auf dem vorgesehenen Weg ankommt. Die Drohung nehmen Sie nicht persönlich.",
      c: "Sie machen eine Zusage, über die Sie nicht entscheiden, und versuchen, eine legitime Beschwerde zu unterbinden. Das ist weder ehrlich noch transparent.",
      d: "Verständnisvoll und korrekt, aber der Anwohner muss selbst aktiv werden. Die Beschwerde direkt mit ihm aufzunehmen, wäre kundenfreundlicher.",
    },
    summary:
      "Auch bei Drohungen ruhig bleiben, korrekt informieren und die Beschwerde auf dem vorgesehenen Weg aufnehmen, ohne Unhaltbares zuzusagen.",
  },
};
