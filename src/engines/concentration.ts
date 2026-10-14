// Concentration test: find every letter E with exactly three dots.
// Each symbol has four dot slots – two above and two below the letter.
// Only these slots count as "surrounding" dots.

import { mulberry32, pick } from '../lib/rng';

export type Dots = [boolean, boolean, boolean, boolean]; // top-left, top-right, bottom-left, bottom-right
export interface Cell {
  letter: string;
  dots: Dots;
}
export interface Field {
  seed: number;
  rows: number;
  cols: number;
  cells: Cell[];
}

export const TARGET_LETTER = 'E';
export const DISTRACTOR_LETTERS = ['F', 'B', 'R', 'H'] as const;

export const dotCount = (c: Cell): number => c.dots.filter(Boolean).length;
export const isTarget = (c: Cell): boolean => c.letter === TARGET_LETTER && dotCount(c) === 3;

/** Distractor kinds every field must contain at least once. */
export type CellKind = 'target' | 'E0' | 'E1' | 'E2' | 'E4' | 'other3' | 'other2' | 'other4';
export const kindOf = (c: Cell): CellKind => {
  const n = dotCount(c);
  if (c.letter === TARGET_LETTER) return n === 3 ? 'target' : (`E${n}` as CellKind);
  return n === 3 ? 'other3' : n === 4 ? 'other4' : 'other2';
};

function dotsWith(rng: () => number, n: number): Dots {
  const slots = [0, 1, 2, 3];
  for (let i = slots.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [slots[i], slots[j]] = [slots[j], slots[i]];
  }
  const on = new Set(slots.slice(0, n));
  return [on.has(0), on.has(1), on.has(2), on.has(3)];
}

// cumulative probabilities of each kind
const MIX: [CellKind, number][] = [
  ['target', 0.25],
  ['E2', 0.17],
  ['E4', 0.13],
  ['E1', 0.05],
  ['E0', 0.04],
  ['other3', 0.2],
  ['other2', 0.1],
  ['other4', 0.06],
];

function makeCell(rng: () => number, kind: CellKind): Cell {
  switch (kind) {
    case 'target':
      return { letter: 'E', dots: dotsWith(rng, 3) };
    case 'E0':
    case 'E1':
    case 'E2':
    case 'E4':
      return { letter: 'E', dots: dotsWith(rng, Number(kind[1])) };
    case 'other3':
      return { letter: pick(rng, DISTRACTOR_LETTERS), dots: dotsWith(rng, 3) };
    case 'other2':
      return { letter: pick(rng, DISTRACTOR_LETTERS), dots: dotsWith(rng, 2) };
    case 'other4':
      return { letter: pick(rng, DISTRACTOR_LETTERS), dots: dotsWith(rng, 4) };
  }
}

export function generateField(seed: number, rows = 12, cols = 20): Field {
  // Retry deterministically until the mix contains every kind.
  for (let attempt = 0; attempt < 50; attempt++) {
    const rng = mulberry32(seed + attempt * 7919);
    const cells: Cell[] = [];
    for (let i = 0; i < rows * cols; i++) {
      const r = rng();
      let acc = 0;
      let kind: CellKind = 'target';
      for (const [k, p] of MIX) {
        acc += p;
        if (r < acc) {
          kind = k;
          break;
        }
      }
      cells.push(makeCell(rng, kind));
    }
    const field = { seed, rows, cols, cells };
    if (validateField(field).length === 0) return field;
  }
  throw new Error('could not generate a valid field');
}

/** Problems with a field; empty = valid. */
export function validateField(f: Field): string[] {
  const errs: string[] = [];
  if (f.cells.length !== f.rows * f.cols) errs.push('cell count mismatch');
  const kinds = new Set(f.cells.map(kindOf));
  for (const k of ['target', 'E0', 'E1', 'E2', 'E4', 'other3', 'other2'] as CellKind[]) {
    if (!kinds.has(k)) errs.push(`missing kind ${k}`);
  }
  for (const c of f.cells) {
    if (c.dots.length !== 4) errs.push('bad dots');
    if (c.letter !== TARGET_LETTER && !(DISTRACTOR_LETTERS as readonly string[]).includes(c.letter)) errs.push(`bad letter ${c.letter}`);
  }
  const t = f.cells.filter(isTarget).length;
  if (t < f.cells.length * 0.15 || t > f.cells.length * 0.35) errs.push(`target share out of range (${t})`);
  return errs;
}

export interface ConcResult {
  targets: number;
  hits: number;
  misses: number;
  falseAlarms: number;
  rowsProcessed: number;
  /** targets inside the processed rows */
  targetsInProcessed: number;
  missesInProcessed: number;
  accuracy: number; // hits / (hits + FA + misses in processed area), 0..100
  score: number; // training score 0..100
  rowsPerMinute: number;
}

/** Training score = max(0, hits − false clicks) / all targets × 100.
 * Not the official formula. */
export function scoreConcentration(f: Field, selected: Iterable<number>, usedMs: number): ConcResult {
  const sel = new Set(selected);
  let hits = 0;
  let fa = 0;
  let maxRow = -1;
  for (const i of sel) {
    if (i < 0 || i >= f.cells.length) continue;
    if (isTarget(f.cells[i])) hits++;
    else fa++;
    maxRow = Math.max(maxRow, Math.floor(i / f.cols));
  }
  const targets = f.cells.filter(isTarget).length;
  const rowsProcessed = maxRow + 1;
  let targetsInProcessed = 0;
  for (let i = 0; i < rowsProcessed * f.cols; i++) if (isTarget(f.cells[i])) targetsInProcessed++;
  const missesInProcessed = targetsInProcessed - hits;
  const denom = hits + fa + missesInProcessed;
  const minutes = Math.max(usedMs, 1) / 60000;
  return {
    targets,
    hits,
    misses: targets - hits,
    falseAlarms: fa,
    rowsProcessed,
    targetsInProcessed,
    missesInProcessed,
    accuracy: denom ? (hits / denom) * 100 : 0,
    score: targets ? (Math.max(0, hits - fa) / targets) * 100 : 0,
    rowsPerMinute: rowsProcessed / minutes,
  };
}
