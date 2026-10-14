// Situational judgement scoring (training rules, not the official algorithm).
// best:      score = (rating of the chosen option − 1) / 3
// mostLeast: 0.5 for picking the best option as "most effective"
//            (0.25 for the second best) + 0.5 for picking the worst as
//            "least effective" (0.25 for the second worst).

import type { OptionId, SjtFormat, SjtKeyEntry } from '../data/types';

export interface SjtResponse {
  best?: OptionId;
  most?: OptionId;
  least?: OptionId;
}

export function isComplete(format: SjtFormat, r: SjtResponse | undefined): boolean {
  if (!r) return false;
  return format === 'best' ? !!r.best : !!r.most && !!r.least && r.most !== r.least;
}

export function scoreSjt(format: SjtFormat, key: SjtKeyEntry, r: SjtResponse | undefined): number {
  if (!r) return 0;
  if (format === 'best') return r.best ? (key.ratings[r.best] - 1) / 3 : 0;
  let s = 0;
  if (r.most) s += key.ratings[r.most] === 4 ? 0.5 : key.ratings[r.most] === 3 ? 0.25 : 0;
  if (r.least && r.least !== r.most) s += key.ratings[r.least] === 1 ? 0.5 : key.ratings[r.least] === 2 ? 0.25 : 0;
  return s;
}

export const bestOption = (k: SjtKeyEntry): OptionId => (Object.keys(k.ratings) as OptionId[]).find((o) => k.ratings[o] === 4)!;
export const worstOption = (k: SjtKeyEntry): OptionId => (Object.keys(k.ratings) as OptionId[]).find((o) => k.ratings[o] === 1)!;
