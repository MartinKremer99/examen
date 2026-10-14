import type { Lang } from '../data/types';
import type { StimSet } from '../engines/memory';
import type { ModuleId } from '../scoring/score';
import type { Mode, ModuleResult } from '../store/records';

export type Step =
  | { module: 'verbal' | 'numerical'; items: string[]; limitMs: number | null; lang: Lang }
  | { module: 'concentration'; seed: number; rows: number; cols: number; limitMs: number | null; tutorial: boolean }
  | { module: 'multitask'; configId: string; seed: number; limitMs: number; untimed: boolean }
  | { module: 'memory'; seed: number; stimSet: StimSet; itemMs: number; length: number; selfPaced: boolean; tutorial: boolean }
  | { module: 'results' | 'customer'; ids: string[]; limitMs: number | null; lang: Lang };

export interface RunPlan {
  mode: Mode;
  feedback: boolean; // immediate feedback (practice / review)
  showIntro: boolean;
  steps: Step[];
  overallLimitMs: number | null;
  /** previous answers for "Fehler wiederholen", shown after the new answer */
  compare?: Record<string, string>;
  title: string;
}

export interface ModuleProps<S extends Step = Step> {
  step: S;
  mode: Mode;
  feedback: boolean;
  submitSignal: number; // incremented by the runner to force submission
  compare?: Record<string, string>;
  stepLabel?: string;
  onFinish: (r: ModuleResult) => void;
}

export const moduleOfStep = (s: Step): ModuleId => s.module;
