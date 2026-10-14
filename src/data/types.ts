// Shared content schemas. Rendered questions never carry their answers:
// every bank exports the questions and a separate answer key.

export type TVI = 'V' | 'F' | 'I';
export type Lang = 'fr' | 'de';
export type L10n = { fr: string; de: string };

export const TVI_LABEL: Record<TVI, string> = { V: 'Vrai', F: 'Faux', I: 'Indéterminé' };

/** Skill tags drive the "Meine Schwächen" analysis. */
export type SkillTag =
  // verbal
  | 'combine-tabs' // needs facts from two or more tabs
  | 'exception' // an exception or special case changes the result
  | 'dates' // dates, deadlines, periods
  | 'similar-rules' // two similar rules must be distinguished
  | 'missing-info' // the documents do not settle the question
  | 'overreach' // the conclusion goes beyond the evidence
  | 'conditions' // cumulative or alternative conditions
  | 'quantifiers' // tous / certains / aucun / au moins
  // numerical
  | 'pct-change'
  | 'pp-vs-pct'
  | 'ratio'
  | 'compare'
  | 'forecast-vs-actual'
  | 'multi-table'
  | 'range'
  | 'sum-average'
  | 'chart-reading';

export const TAG_LABEL: Record<SkillTag, string> = {
  'combine-tabs': 'Informationen aus mehreren Registern kombinieren',
  exception: 'Ausnahmen und Sonderfälle',
  dates: 'Daten, Fristen und Zeiträume',
  'similar-rules': 'Ähnliche Regeln unterscheiden',
  'missing-info': 'Fehlende Information erkennen (Indéterminé)',
  overreach: 'Schlussfolgerungen, die über die Belege hinausgehen',
  conditions: 'Kumulative und alternative Bedingungen',
  quantifiers: 'Mengenangaben (alle / einige / keine)',
  'pct-change': 'Prozentuale Veränderungen',
  'pp-vs-pct': 'Prozentpunkte vs. Prozent',
  ratio: 'Verhältnisse und Anteile',
  compare: 'Werte vergleichen',
  'forecast-vs-actual': 'Prognose vs. Ist-Werte',
  'multi-table': 'Mehrere Tabellen verknüpfen',
  range: 'Spannweiten und Schwellenwerte',
  'sum-average': 'Summen und Durchschnitte',
  'chart-reading': 'Diagramme lesen',
};

export type Difficulty = 1 | 2 | 3;

export interface Statement {
  id: string;
  text: string;
  tags: SkillTag[];
  difficulty: Difficulty;
}

// ---------------------------------------------------------------- verbal

export type DocBlock =
  | { t: 'meta'; lines: string[] } // header lines, e.g. "De : …", "Objet : …"
  | { t: 'h'; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] };

export interface VerbalTab {
  id: string;
  title: string; // short tab label in French
  blocks: DocBlock[];
}

export interface VerbalSet {
  id: string;
  title: string; // French title of the dossier
  themeDe: string; // one-line German description for menus
  tabs: VerbalTab[]; // exactly 6
  statements: Statement[]; // exactly 10, French
}

export interface SourceRef {
  tab: string; // tab id
  quote: string; // verbatim excerpt from that tab (checked by tests)
}

export interface VerbalKeyEntry {
  answer: TVI;
  explanation: string; // German
  sources: SourceRef[];
  whyNot: Partial<Record<TVI, string>>; // German, for the two wrong options
}
export type VerbalKey = Record<string, VerbalKeyEntry>;

// ------------------------------------------------------------- numerical

export interface Col {
  key: string;
  label: L10n;
}
export interface Row {
  key: string;
  label: L10n;
  values: (number | null)[]; // aligned with cols; null = "n. d." (not available)
}

/** Tables and charts share one matrix shape: rows × cols. For charts the
 * cols are the categories on the x axis and each row is a series. */
export interface MatrixBlock {
  t: 'table' | 'bar' | 'line';
  id: string;
  caption: L10n;
  cols: Col[];
  rows: Row[];
  unit?: L10n; // e.g. { fr: 'en €', de: 'in €' }
  decimals?: number; // display decimals (default 0)
}

export interface FactsBlock {
  t: 'facts';
  id: string;
  caption?: L10n;
  items: { key: string; label: L10n; value: number; unit?: L10n; decimals?: number }[];
}

export interface TextBlock {
  t: 'text';
  text: L10n; // must not contain figures that statements depend on
}

export type NumBlock = MatrixBlock | FactsBlock | TextBlock;

export interface NumTab {
  id: string;
  title: L10n;
  blocks: NumBlock[];
}

export interface NumStatement {
  id: string;
  text: L10n;
  tags: SkillTag[];
  difficulty: Difficulty;
}

export interface NumSet {
  id: string;
  title: L10n;
  themeDe: string;
  tabs: NumTab[]; // exactly 6
  statements: NumStatement[]; // exactly 10
}

/** Read access to the figures that are displayed. Throws on unknown keys. */
export interface NumQuery {
  /** Cell value of a table/chart. Throws if the cell is null or missing. */
  v(blockId: string, rowKey: string, colKey: string): number;
  /** Whether a cell exists and is not null. */
  has(blockId: string, rowKey: string, colKey: string): boolean;
  /** Value of a facts item. */
  f(blockId: string, itemKey: string): number;
  /** All non-null values of a row, in column order. */
  row(blockId: string, rowKey: string): number[];
  /** All values of a column across rows (nulls skipped). */
  col(blockId: string, colKey: string): number[];
}

export interface NumKeyEntry {
  answer: TVI;
  /** Recomputes the answer from the displayed data. For 'I' items it must
   * still return 'I' and `missing` must say what the data lack. */
  compute: (q: NumQuery) => TVI;
  missing?: string; // German, required when answer === 'I'
  explanation: string; // German, with the worked calculation
  sources: { tab: string; block: string }[];
  whyNot: Partial<Record<TVI, string>>;
}
export type NumKey = Record<string, NumKeyEntry>;

// ------------------------------------------------------------ behavioral

export type OptionId = 'a' | 'b' | 'c' | 'd';
export type SjtFormat = 'best' | 'mostLeast';
export type Competency = 'results' | 'customer';

export interface SjtScenario {
  id: string;
  competency: Competency;
  format: SjtFormat;
  topicDe: string; // short German topic label
  situation: L10n;
  question: L10n;
  options: { id: OptionId; text: L10n }[]; // exactly 4, ids a-d
}

export interface SjtKeyEntry {
  /** Expert effectiveness ratings, a permutation of 1..4 (4 = best). */
  ratings: Record<OptionId, 1 | 2 | 3 | 4>;
  feedback: Record<OptionId, string>; // German, why this option rates as it does
  summary: string; // German, the behaviour the item is about
}
export type SjtKey = Record<string, SjtKeyEntry>;
