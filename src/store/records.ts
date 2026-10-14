// Records kept in the practice history.

import type { SjtResponse } from '../engines/behavioral';
import type { MemResponse, StimSet } from '../engines/memory';
import type { MtResponse, StreamResult } from '../engines/multitask';
import type { Lang, SkillTag, TVI } from '../data/types';
import type { ModuleId, Overall } from '../scoring/score';

export type Mode = 'simulation' | 'practice' | 'challenge' | 'review';
export const MODE_LABEL: Record<Mode, string> = {
  simulation: 'Prüfungssimulation',
  practice: 'Übungsmodus',
  challenge: 'Zeit-Challenge',
  review: 'Fehler wiederholen',
};

export interface TviItemResult {
  id: string;
  answer: TVI | null;
  correct: TVI;
  flagged: boolean;
  tags: SkillTag[];
}
export interface TviDetail {
  kind: 'tvi';
  setId: string;
  lang?: Lang;
  items: TviItemResult[];
}
export interface ConcDetail {
  kind: 'concentration';
  seed: number;
  rows: number;
  cols: number;
  selected: number[];
  hits: number;
  misses: number;
  falseAlarms: number;
  targets: number;
  rowsProcessed: number;
  accuracy: number;
  rowsPerMinute: number;
}
export interface MemDetail {
  kind: 'memory';
  seed: number;
  stimSet: StimSet;
  itemMs: number;
  length: number;
  shown: number;
  responses: MemResponse[];
  rts: (number | null)[];
  correct: number;
  incorrect: number;
  missed: number;
  meanRtMs: number | null;
}
export interface MtDetail {
  kind: 'multitask';
  configId: string;
  seed: number;
  durationMs: number;
  a: StreamResult;
  b: StreamResult;
  c: StreamResult;
  responses: MtResponse[];
}
export interface SjtDetail {
  kind: 'sjt';
  lang: Lang;
  items: { id: string; response: SjtResponse | null; score: number }[];
}
export type ModuleDetail = TviDetail | ConcDetail | MemDetail | MtDetail | SjtDetail;

export interface ModuleResult {
  module: ModuleId;
  score: number; // 0..100
  limitMs: number | null;
  usedMs: number;
  expired: boolean;
  correct: number;
  incorrect: number;
  unanswered: number;
  detail: ModuleDetail;
}

export interface SessionRecord {
  id: string;
  mode: Mode;
  startedAt: number;
  finishedAt: number;
  endedEarly: boolean;
  modules: ModuleResult[];
  overall: Overall | null;
}

export interface ErrorEntry {
  module: ModuleId;
  itemId: string;
  lastAnswer: string; // serialised previous answer
  correct: string;
  count: number; // times answered wrong
  lastAt: number;
  resolved: boolean; // answered correctly in a later repetition
}

export interface Settings {
  numLang: Lang;
  sjtLang: Lang;
  sjtMinutes: number;
  sjtCount: number;
  overallLimitMin: number | null; // optional overall countdown for the simulation (≤ 150)
  order: ModuleId[];
  memoryPreset: 'leicht' | 'standard' | 'schnell';
}

export const DEFAULT_SETTINGS: Settings = {
  numLang: 'fr',
  sjtLang: 'de',
  sjtMinutes: 10,
  sjtCount: 10,
  overallLimitMin: null,
  order: ['verbal', 'numerical', 'concentration', 'multitask', 'memory', 'results', 'customer'],
  memoryPreset: 'standard',
};

export interface ProgressState {
  version: 1;
  errors: Record<string, ErrorEntry>;
  flagged: string[]; // statement ids marked for review
  seen: Record<string, number>; // item/set id -> times used, to rotate content
  settings: Settings;
}

export const emptyState = (): ProgressState => ({
  version: 1,
  errors: {},
  flagged: [],
  seen: {},
  settings: { ...DEFAULT_SETTINGS },
});
