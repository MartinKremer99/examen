// Arithmetic helpers for numerical items. Everything stays at full
// precision; rounding happens only in display code (fmt) or where a
// statement itself names a rounded figure (approxEq / roundTo).

import type { NumBlock, NumQuery, NumSet, TVI } from '../data/types';

export const sum = (xs: number[]): number => xs.reduce((a, b) => a + b, 0);
export const mean = (xs: number[]): number => (xs.length ? sum(xs) / xs.length : NaN);

/** Relative change from a to b in percent: (b - a) / a * 100. */
export const pctChange = (from: number, to: number): number => ((to - from) / from) * 100;

/** Difference of two percentages in percentage points. */
export const ppDiff = (fromPct: number, toPct: number): number => toPct - fromPct;

/** part / whole in percent. */
export const share = (part: number, whole: number): number => (part / whole) * 100;

export const ratio = (a: number, b: number): number => a / b;

export const roundTo = (x: number, decimals = 0): number => {
  const f = 10 ** decimals;
  return Math.round((x + Number.EPSILON) * f) / f;
};

/** Equality after rounding both sides to `decimals` (for statements that
 * quote a rounded figure such as "environ 12,5 %"). */
export const approxEq = (x: number, y: number, decimals = 1): boolean =>
  roundTo(x, decimals) === roundTo(y, decimals);

/** Turn a boolean claim into V/F. */
export const tf = (claim: boolean): TVI => (claim ? 'V' : 'F');

const LOCALE = { fr: 'fr-LU', de: 'de-LU' } as const;
export function fmt(x: number, decimals = 0, lang: 'fr' | 'de' = 'fr'): string {
  return new Intl.NumberFormat(LOCALE[lang], {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(x);
}

/** Builds the query object a key's compute() receives. Only figures that
 * are displayed in the set are reachable. */
export function makeQuery(set: NumSet): NumQuery {
  const blocks = new Map<string, NumBlock>();
  for (const tab of set.tabs) {
    for (const b of tab.blocks) {
      if (b.t !== 'text') {
        if (blocks.has(b.id)) throw new Error(`${set.id}: duplicate block id ${b.id}`);
        blocks.set(b.id, b);
      }
    }
  }
  const matrix = (id: string) => {
    const b = blocks.get(id);
    if (!b || b.t === 'facts' || b.t === 'text') throw new Error(`${set.id}: no matrix block ${id}`);
    return b;
  };
  const cell = (id: string, rowKey: string, colKey: string): number | null | undefined => {
    const b = matrix(id);
    const ri = b.rows.findIndex((r) => r.key === rowKey);
    const ci = b.cols.findIndex((c) => c.key === colKey);
    if (ri < 0) throw new Error(`${set.id}/${id}: unknown row ${rowKey}`);
    if (ci < 0) throw new Error(`${set.id}/${id}: unknown col ${colKey}`);
    return b.rows[ri].values[ci];
  };
  return {
    v(id, rowKey, colKey) {
      const x = cell(id, rowKey, colKey);
      if (x === null || x === undefined) throw new Error(`${set.id}/${id}: ${rowKey}/${colKey} is not available`);
      return x;
    },
    has(id, rowKey, colKey) {
      const b = blocks.get(id);
      if (!b || b.t === 'facts' || b.t === 'text') return false;
      const ri = b.rows.findIndex((r) => r.key === rowKey);
      const ci = b.cols.findIndex((c) => c.key === colKey);
      if (ri < 0 || ci < 0) return false;
      const x = b.rows[ri].values[ci];
      return x !== null && x !== undefined;
    },
    f(id, itemKey) {
      const b = blocks.get(id);
      if (!b || b.t !== 'facts') throw new Error(`${set.id}: no facts block ${id}`);
      const it = b.items.find((i) => i.key === itemKey);
      if (!it) throw new Error(`${set.id}/${id}: unknown fact ${itemKey}`);
      return it.value;
    },
    row(id, rowKey) {
      const b = matrix(id);
      const r = b.rows.find((x) => x.key === rowKey);
      if (!r) throw new Error(`${set.id}/${id}: unknown row ${rowKey}`);
      return r.values.filter((x): x is number => x !== null);
    },
    col(id, colKey) {
      const b = matrix(id);
      const ci = b.cols.findIndex((c) => c.key === colKey);
      if (ci < 0) throw new Error(`${set.id}/${id}: unknown col ${colKey}`);
      return b.rows.map((r) => r.values[ci]).filter((x): x is number => x !== null && x !== undefined);
    },
  };
}
