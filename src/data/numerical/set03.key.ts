import { pctChange, share, sum, tf } from '../../lib/calc';
import type { NumKey } from '../types';

const GENRES = ['concerts', 'theatre', 'jeune', 'cinema', 'conf'];

export const nkey03: NumKey = {
  'n03-01': {
    answer: 'F',
    compute: (q) =>
      tf(
        pctChange(q.v('t_recc', 'subvention', 's2324'), q.v('t_recc', 'subvention', 's2425')) >
          pctChange(q.v('t_recc', 'billetterie', 's2324'), q.v('t_recc', 'billetterie', 's2425')),
      ),
    explanation:
      'Gemeindezuschuss: 400 000 → 420 000 € = +5,0 %. Kartenerlöse: 251 300 → 280 704 € = 29 404 / 251 300 ≈ +11,7 %. Die Kartenerlöse sind prozentual stärker gestiegen.',
    sources: [{ tab: 'finances', block: 't_recc' }],
    whyNot: {
      V: 'Der Zuschuss ist der größte Einnahmenposten, sein prozentualer Zuwachs (+5 %) ist aber kleiner als der der Kartenerlöse.',
      I: 'Beide Einnahmenposten sind für beide Saisons angegeben.',
    },
  },
  'n03-02': {
    answer: 'V',
    compute: (q) => tf(pctChange(q.v('b_age', 's2324', 'm18'), q.v('b_age', 's2425', 'm18')) > 10),
    explanation:
      'Der Anteil steigt von 21 % auf 25 %, also um 4 Prozentpunkte. Relativ entspricht das (25 − 21) / 21 ≈ +19 %. Die Aussage „um mehr als 10 %“ (relative Veränderung) ist daher wahr.',
    sources: [{ tab: 'public', block: 'b_age' }],
    whyNot: {
      F: 'Falle: Der Anstieg beträgt nur 4 Prozentpunkte, „10 %“ bezieht sich aber auf die relative Veränderung des Anteils (+19 %).',
      I: 'Beide Anteile stehen im Diagramm.',
    },
  },
  'n03-03': {
    answer: 'I',
    compute: (q) => (q.f('f_salles', 'grande') > 0 && !q.has('t_evt', 'grande', 'billets') ? 'I' : 'F'),
    missing: 'Billetverkäufe und Plätze werden nur nach Sparten angegeben, nicht nach Sälen; die Verteilung der Vorstellungen auf die Säle ist unbekannt.',
    explanation:
      'Man kennt nur die Kapazität des Großen Saals (400 Plätze) und die Auslastung pro Sparte. Welche Vorstellungen im Großen Saal stattfanden, wird nicht angegeben. Eine Auslastung des Saals lässt sich nicht berechnen.',
    sources: [
      { tab: 'occupation', block: 'f_salles' },
      { tab: 'occupation', block: 'b_occ' },
    ],
    whyNot: {
      V: 'Die hohe Auslastung der Konzerte (82,5 %) darf nicht auf den Großen Saal übertragen werden; die Zuordnung der Vorstellungen zu den Sälen ist unbekannt.',
      F: 'Auch das Gegenteil lässt sich ohne Angaben pro Saal nicht zeigen.',
    },
  },
  'n03-04': {
    answer: 'V',
    compute: (q) =>
      tf(
        q.v('t_prix', 'total', 'recettes') >= q.f('f_obj', 'recettes2425') &&
          q.v('l_hist', 'billets', 's2425') < q.f('f_obj', 'billets2425'),
      ),
    explanation:
      'Kartenerlöse 2024/25: 280 704 € ≥ Ziel 270 000 € (erreicht). Verkaufte Karten: 18 690 < Ziel 19 000 (verfehlt um 310). Beide Teile der Aussage treffen zu.',
    sources: [
      { tab: 'programme', block: 't_prix' },
      { tab: 'programme', block: 't_evt' },
      { tab: 'evolution', block: 'f_obj' },
    ],
    whyNot: {
      F: 'Wer annimmt, höhere Erlöse setzten mehr verkaufte Karten voraus, übersieht die Preisstruktur: Das Erlösziel wurde erreicht, das Kartenziel nicht.',
      I: 'Ziele und Ist-Werte stehen in den Registern „Programme“ und „Évolution et objectifs“.',
    },
  },
  'n03-05': {
    answer: 'F',
    compute: (q) => {
      const a = (q.v('b_age', 's2324', 'a4564') / 100) * q.v('l_hist', 'billets', 's2324');
      const b = (q.v('b_age', 's2425', 'a4564') / 100) * q.v('l_hist', 'billets', 's2425');
      return tf(b < a);
    },
    explanation:
      '2023/24: 27 % × 17 250 ≈ 4 658 Karten. 2024/25: 26 % × 18 690 ≈ 4 859 Karten. Der Anteil sinkt zwar um 1 Prozentpunkt, wegen der gestiegenen Gesamtzahl wächst die Zahl der Karten aber um rund 200.',
    sources: [
      { tab: 'public', block: 'b_age' },
      { tab: 'evolution', block: 'l_hist' },
    ],
    whyNot: {
      V: 'Ein sinkender Anteil bedeutet nicht automatisch eine sinkende Zahl, wenn die Gesamtzahl der Karten steigt.',
      I: 'Anteile und Gesamtzahlen der verkauften Karten sind für beide Saisons angegeben; die absolute Zahl lässt sich berechnen.',
    },
  },
  'n03-06': {
    answer: 'V',
    compute: (q) => {
      const rec = q.v('t_recc', 'billetterie', 's2425') + q.v('t_recc', 'sponsoring', 's2425');
      const dep = sum(q.col('t_depc', 's2425'));
      return tf(share(rec, dep) > 50);
    },
    explanation:
      'Kartenerlöse + Sponsoring 2024/25: 280 704 + 31 500 = 312 204 €. Ausgaben: 335 000 + 149 500 + 52 000 = 536 500 €. 312 204 / 536 500 ≈ 58,2 %, also mehr als die Hälfte.',
    sources: [{ tab: 'finances', block: 't_recc' }, { tab: 'finances', block: 't_depc' }],
    whyNot: {
      F: 'Ohne Gemeindezuschuss bleibt zwar eine Lücke, die Hälfte der Ausgaben (268 250 €) wird aber übertroffen.',
      I: 'Alle Einnahmen- und Ausgabenposten der Saison 2024/25 stehen in den Tabellen.',
    },
  },
  'n03-07': {
    answer: 'I',
    compute: (q) => (q.has('t_prix', 'concerts', 'prix') && !q.has('t_prix', 'concerts', 'prix2324') ? 'I' : 'F'),
    missing: 'Der Durchschnittspreis pro Karte wird nur für die Saison 2024/25 angegeben.',
    explanation:
      'Für 2024/25 beträgt der Durchschnittspreis einer Konzertkarte 24 €. Für 2023/24 gibt es weder einen Preis noch Konzerterlöse oder -kartenzahlen, aus denen man ihn berechnen könnte (nur die Auslastung von 78 %).',
    sources: [
      { tab: 'programme', block: 't_prix' },
      { tab: 'occupation', block: 'b_occ' },
    ],
    whyNot: {
      V: 'Die gestiegenen Gesamterlöse belegen keinen höheren Konzertpreis.',
      F: 'Ein Preisrückgang lässt sich ebenso wenig belegen.',
    },
  },
  'n03-08': {
    answer: 'F',
    compute: (q) => {
      const rates = GENRES.map((g) => share(q.v('t_evt', g, 'billets'), q.v('t_evt', g, 'places')));
      return tf(rates.filter((r) => r > 75).length >= 3);
    },
    explanation:
      'Auslastung 2024/25: Konzerte 82,5 %, Junges Publikum 90,0 %, Theater 71,0 %, Vorträge 70,0 %, Kino 55,0 %. Nur zwei Sparten liegen über 75 %.',
    sources: [
      { tab: 'occupation', block: 'b_occ' },
      { tab: 'programme', block: 't_evt' },
    ],
    whyNot: {
      V: 'Nur Konzerte (82,5 %) und Junges Publikum (90,0 %) liegen über 75 %. Theater (71,0 %) und Vorträge (70,0 %) liegen zwar über dem Kino, aber unter der Schwelle.',
      I: 'Die Auslastungen sind im Diagramm angegeben und lassen sich auch aus der Programmtabelle berechnen.',
    },
  },
  'n03-09': {
    answer: 'I',
    compute: (q) => (q.has('t_sat', 'prix', 'e2025') && !q.has('t_sat', 'prix_65', 'e2025') ? 'I' : 'F'),
    missing: 'Die Umfrageergebnisse werden nicht nach Altersgruppen aufgeschlüsselt.',
    explanation:
      'Bekannt ist nur, dass 2025 insgesamt 76 % mit den Preisen zufrieden waren. Die Altersverteilung im Register „Public“ betrifft die verkauften Karten, nicht die Antworten der Umfrage. Ein Vergleich nach Alter ist nicht möglich.',
    sources: [
      { tab: 'enquete', block: 't_sat' },
      { tab: 'public', block: 'b_age' },
    ],
    whyNot: {
      V: 'Die Vermutung, ältere Zuschauer seien preisunempfindlicher, wird durch keine Zahl gestützt.',
      F: 'Auch das Gegenteil lässt sich ohne Aufschlüsselung nach Alter nicht zeigen.',
    },
  },
  'n03-10': {
    answer: 'V',
    compute: (q) => tf((q.v('t_sat', 'confort', 'e2025') / 100) * q.f('f_enq', 'rep2025') > 400),
    explanation:
      '66 % von 640 Befragten = 422,4, also rund 422 Personen. Das sind mehr als 400, obwohl der Prozentsatz gegenüber 2024 (69 %) gesunken ist.',
    sources: [
      { tab: 'enquete', block: 't_sat' },
      { tab: 'enquete', block: 'f_enq' },
    ],
    whyNot: {
      F: 'Der Prozentsatz ist gesunken, die Zahl der Befragten aber gestiegen (510 → 640). 2024 waren es nur rund 352 Personen, 2025 rund 422.',
      I: 'Prozentsatz und Zahl der Befragten sind angegeben; laut Hinweis haben alle Befragten jedes Kriterium bewertet.',
    },
  },
};
