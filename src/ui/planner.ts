// Builds run plans for the four modes.

import { CUSTOMER_SCENARIOS, NUM_SETS, RESULTS_SCENARIOS, VERBAL_SETS } from '../data/bank';
import { MULTITASK_CONFIGS } from '../data/multitaskConfigs';
import type { Lang } from '../data/types';
import { MEMORY_PRESETS, type StimSet } from '../engines/memory';
import { newSeed, mulberry32, shuffle } from '../lib/rng';
import type { ModuleId } from '../scoring/score';
import type { ProgressState, Settings } from '../store/records';
import type { RunPlan, Step } from './plan';

const MIN = 60000;
export const OFFICIAL_MS: Record<'verbal' | 'numerical' | 'concentration' | 'multitask' | 'memory', number> = {
  verbal: 12 * MIN,
  numerical: 12 * MIN,
  concentration: 2 * MIN,
  multitask: 5 * MIN,
  memory: 1 * MIN,
};

/** Least-used first, random among ties. */
function leastSeen<T extends { id: string }>(xs: T[], seen: Record<string, number>, rng: () => number): T[] {
  return shuffle(rng, xs).sort((a, b) => (seen[a.id] ?? 0) - (seen[b.id] ?? 0));
}

export interface StepOptions {
  length: 'kurz' | 'voll';
  timed: boolean;
  setId?: string; // verbal / numerical
  configId?: string; // multitask
  stimSet?: StimSet;
  memoryPreset?: 'leicht' | 'standard' | 'schnell';
  tutorial?: boolean;
  numLang?: Lang;
  sjtLang?: Lang;
}

export function buildStep(module: ModuleId, state: ProgressState, opt: StepOptions): Step {
  const rng = mulberry32(newSeed());
  const settings = state.settings;
  switch (module) {
    case 'verbal':
    case 'numerical': {
      const sets: { id: string; statements: { id: string }[] }[] = module === 'verbal' ? VERBAL_SETS : NUM_SETS;
      const set = sets.find((s) => s.id === opt.setId) ?? leastSeen(sets, state.seen, rng)[0];
      const ids = set.statements.map((s) => s.id);
      const n = opt.length === 'kurz' ? 5 : ids.length;
      // presentation order is shuffled so answer positions carry no pattern
      const items = shuffle(rng, ids).slice(0, n);
      // official pace: 12 minutes for 10 statements
      return {
        module,
        items,
        limitMs: opt.timed ? Math.round(OFFICIAL_MS[module] * (n / 10)) : null,
        lang: module === 'verbal' ? 'fr' : (opt.numLang ?? settings.numLang),
      };
    }
    case 'concentration':
      return {
        module,
        seed: newSeed(),
        rows: opt.length === 'kurz' ? 6 : 12,
        cols: 20,
        limitMs: opt.timed ? (opt.length === 'kurz' ? MIN : OFFICIAL_MS.concentration) : null,
        tutorial: !!opt.tutorial,
      };
    case 'multitask': {
      const cfg = MULTITASK_CONFIGS.find((c) => c.id === opt.configId) ?? leastSeen(MULTITASK_CONFIGS, state.seen, rng)[0];
      return {
        module,
        configId: cfg.id,
        seed: newSeed(),
        limitMs: opt.length === 'kurz' ? 2 * MIN : OFFICIAL_MS.multitask,
        untimed: !opt.timed,
      };
    }
    case 'memory': {
      const preset = MEMORY_PRESETS[opt.memoryPreset ?? settings.memoryPreset];
      const sets: StimSet[] = ['shapes', 'patterns', 'symbols'];
      return {
        module,
        seed: newSeed(),
        stimSet: opt.stimSet ?? sets[Math.floor(rng() * 3)],
        itemMs: preset.itemMs,
        length: opt.length === 'kurz' ? Math.round(preset.length / 2) : preset.length,
        selfPaced: !opt.timed,
        tutorial: !!opt.tutorial,
      };
    }
    case 'results':
    case 'customer': {
      const pool = module === 'results' ? RESULTS_SCENARIOS : CUSTOMER_SCENARIOS;
      const n = opt.length === 'kurz' ? 5 : settings.sjtCount;
      const ids = leastSeen(pool, state.seen, rng)
        .slice(0, n)
        .map((s) => s.id);
      return {
        module,
        ids,
        limitMs: opt.timed ? Math.round(settings.sjtMinutes * MIN * (n / settings.sjtCount)) : null,
        lang: opt.sjtLang ?? settings.sjtLang,
      };
    }
  }
}

export function simulationPlan(state: ProgressState, s: Settings): RunPlan {
  return {
    mode: 'simulation',
    feedback: false,
    showIntro: true,
    title: 'Prüfungssimulation',
    overallLimitMs: s.overallLimitMin ? Math.min(150, s.overallLimitMin) * MIN : null,
    steps: s.order.map((m) =>
      buildStep(m, state, { length: 'voll', timed: true, memoryPreset: 'standard', tutorial: false }),
    ),
  };
}

export function challengePlan(module: ModuleId, state: ProgressState): RunPlan {
  return {
    mode: 'challenge',
    feedback: false,
    showIntro: false,
    title: 'Zeit-Challenge',
    overallLimitMs: null,
    steps: [buildStep(module, state, { length: 'voll', timed: true, memoryPreset: 'standard' })],
  };
}

export function practicePlan(module: ModuleId, state: ProgressState, opt: StepOptions): RunPlan {
  return {
    mode: 'practice',
    feedback: true,
    showIntro: true,
    title: 'Übungsmodus',
    overallLimitMs: null,
    steps: [buildStep(module, state, opt)],
  };
}

/** Repeat open errors of one module (statements or scenarios). */
export function reviewPlan(module: ModuleId, state: ProgressState, itemIds: string[]): RunPlan | null {
  if (!itemIds.length) return null;
  const compare: Record<string, string> = {};
  for (const id of itemIds) compare[id] = state.errors[id]?.lastAnswer ?? '';
  let step: Step;
  if (module === 'verbal' || module === 'numerical') {
    step = { module, items: itemIds.slice(0, 15), limitMs: null, lang: module === 'verbal' ? 'fr' : state.settings.numLang };
  } else if (module === 'results' || module === 'customer') {
    step = { module, ids: itemIds.slice(0, 15), limitMs: null, lang: state.settings.sjtLang };
  } else return null;
  return { mode: 'review', feedback: true, showIntro: false, title: 'Fehler wiederholen', overallLimitMs: null, steps: [step], compare };
}

/** Content ids a step used, for rotation. */
export function usedIds(step: Step): string[] {
  switch (step.module) {
    case 'verbal':
    case 'numerical':
      return [step.items[0].split('-')[0]];
    case 'multitask':
      return [step.configId];
    case 'results':
    case 'customer':
      return step.ids;
    default:
      return [];
  }
}
