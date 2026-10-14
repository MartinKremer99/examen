// Working memory (2-back): is the current image identical to the image
// shown two positions earlier ("vorletztes Bild")? The answer key is
// always derived from the sequence that was actually displayed.

import { mulberry32, randInt } from '../lib/rng';

export type StimSet = 'shapes' | 'patterns' | 'symbols';
export const VARIANTS = 8; // distinct images per stimulus set

export interface MemoryConfig {
  seed: number;
  length: number;
  itemMs: number;
  stimSet: StimSet;
  matchRate?: number; // share of 2-back matches among answerable trials
  lureRate?: number; // share of 1-back repeats (look similar, are not matches)
}

export function generateSequence(cfg: MemoryConfig): number[] {
  const rng = mulberry32(cfg.seed);
  const matchRate = cfg.matchRate ?? 0.35;
  const lureRate = cfg.lureRate ?? 0.12;
  const seq: number[] = [];
  const answerable = Math.max(0, cfg.length - 2);
  // Fix the number of matches so every sequence has a controlled proportion.
  const nMatch = Math.round(answerable * matchRate);
  const matchPositions = new Set<number>();
  while (matchPositions.size < nMatch) matchPositions.add(randInt(rng, 2, cfg.length - 1));
  for (let i = 0; i < cfg.length; i++) {
    if (i < 2) {
      let v = randInt(rng, 0, VARIANTS - 1);
      if (i === 1) while (v === seq[0]) v = randInt(rng, 0, VARIANTS - 1);
      seq.push(v);
      continue;
    }
    if (matchPositions.has(i)) {
      seq.push(seq[i - 2]);
      continue;
    }
    if (rng() < lureRate && seq[i - 1] !== seq[i - 2]) {
      seq.push(seq[i - 1]);
      continue;
    }
    let v = randInt(rng, 0, VARIANTS - 1);
    while (v === seq[i - 2]) v = randInt(rng, 0, VARIANTS - 1);
    seq.push(v);
  }
  return seq;
}

/** True when position i must be answered "Ja". Positions 0 and 1 have no
 * reference image and are not scored. */
export const isMatch = (seq: number[], i: number): boolean => i >= 2 && seq[i] === seq[i - 2];

export type MemResponse = 'yes' | 'no' | null;

export interface MemResult {
  trials: number; // answerable trials shown
  correct: number;
  incorrect: number;
  missed: number;
  hits: number; // correct "Ja"
  falseAlarms: number; // "Ja" on a non-match
  meanRtMs: number | null;
  accuracy: number; // correct / trials × 100
  score: number;
}

export function scoreMemory(seq: number[], responses: MemResponse[], rts: (number | null)[], shown: number): MemResult {
  let correct = 0;
  let incorrect = 0;
  let missed = 0;
  let hits = 0;
  let fa = 0;
  const rtList: number[] = [];
  const last = Math.min(shown, seq.length);
  for (let i = 2; i < last; i++) {
    const r = responses[i] ?? null;
    const m = isMatch(seq, i);
    if (r === null) {
      missed++;
      continue;
    }
    const ok = (r === 'yes') === m;
    if (ok) correct++;
    else incorrect++;
    if (r === 'yes' && m) hits++;
    if (r === 'yes' && !m) fa++;
    const rt = rts[i];
    if (rt != null) rtList.push(rt);
  }
  const trials = Math.max(0, last - 2);
  const accuracy = trials ? (correct / trials) * 100 : 0;
  return {
    trials,
    correct,
    incorrect,
    missed,
    hits,
    falseAlarms: fa,
    meanRtMs: rtList.length ? rtList.reduce((a, b) => a + b, 0) / rtList.length : null,
    accuracy,
    score: accuracy,
  };
}

export const MEMORY_PRESETS = {
  leicht: { itemMs: 2500, length: 24 },
  standard: { itemMs: 2000, length: 30 },
  schnell: { itemMs: 1500, length: 40 },
} as const;
export type MemoryPreset = keyof typeof MEMORY_PRESETS;
