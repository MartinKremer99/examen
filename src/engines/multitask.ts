// Multitasking: three independent streams run at the same time.
// The full timeline is precomputed from a seed; the UI only shows the item
// whose window contains "now", and responses are attributed by timestamp.

import { mulberry32, pick, randInt, type Rng } from '../lib/rng';

export type StreamId = 'a' | 'b' | 'c';

// ---------------------------------------------------------------- rules

export type RuleA =
  | { kind: 'above'; t: number }
  | { kind: 'below'; t: number }
  | { kind: 'riseBy'; d: number }
  | { kind: 'evenAbove'; t: number }
  | { kind: 'between'; lo: number; hi: number };

export type ShapeId = 'kreis' | 'quadrat' | 'dreieck' | 'raute' | 'stern' | 'kreuz' | 'sechseck' | 'halbmond';
export type ColorId = 'blau' | 'rot' | 'gruen' | 'orange';
export const SHAPES: ShapeId[] = ['kreis', 'quadrat', 'dreieck', 'raute', 'stern', 'kreuz', 'sechseck', 'halbmond'];
export const COLORS: ColorId[] = ['blau', 'rot', 'gruen', 'orange'];
export const SHAPE_LABEL: Record<ShapeId, string> = {
  kreis: 'Kreis',
  quadrat: 'Quadrat',
  dreieck: 'Dreieck',
  raute: 'Raute',
  stern: 'Stern',
  kreuz: 'Kreuz',
  sechseck: 'Sechseck',
  halbmond: 'Halbmond',
};
export const COLOR_LABEL: Record<ColorId, string> = { blau: 'blau', rot: 'rot', gruen: 'grün', orange: 'orange' };

export type RuleB = { kind: 'shape'; shape: ShapeId } | { kind: 'shapeColor'; shape: ShapeId; color: ColorId };

export type RuleC =
  | { kind: 'repeat' } // same character twice in a row
  | { kind: 'vowelAfterEven' } // vowel directly after an even digit
  | { kind: 'pair'; first: string; second: string } // e.g. K followed by 7
  | { kind: 'sumTen' }; // two consecutive digits adding up to 10

export interface StreamCfg<R> {
  rule: R;
  intervalMs: number;
  offsetMs: number;
}
export interface MultitaskConfig {
  id: string;
  name: string;
  level: 1 | 2 | 3;
  a: StreamCfg<RuleA>;
  b: StreamCfg<RuleB>;
  c: StreamCfg<RuleC>;
}

export function ruleText(s: StreamId, r: RuleA | RuleB | RuleC): string {
  if (s === 'a') {
    const x = r as RuleA;
    switch (x.kind) {
      case 'above':
        return `Reagieren, wenn der Wert größer als ${x.t} ist.`;
      case 'below':
        return `Reagieren, wenn der Wert kleiner als ${x.t} ist.`;
      case 'riseBy':
        return `Reagieren, wenn der Wert um mehr als ${x.d} gegenüber dem vorherigen Wert steigt.`;
      case 'evenAbove':
        return `Reagieren, wenn der Wert gerade und größer als ${x.t} ist.`;
      case 'between':
        return `Reagieren, wenn der Wert zwischen ${x.lo} und ${x.hi} liegt (einschließlich).`;
    }
  }
  if (s === 'b') {
    const x = r as RuleB;
    return x.kind === 'shape'
      ? `Das Symbol „${SHAPE_LABEL[x.shape]}“ anklicken, wenn es in der Reihe erscheint (Farbe egal).`
      : `Nur das Symbol „${SHAPE_LABEL[x.shape]}, ${COLOR_LABEL[x.color]}“ anklicken.`;
  }
  const x = r as RuleC;
  switch (x.kind) {
    case 'repeat':
      return 'Reagieren, wenn dasselbe Zeichen zweimal hintereinander erscheint.';
    case 'vowelAfterEven':
      return 'Reagieren, wenn ein Vokal direkt auf eine gerade Ziffer folgt.';
    case 'pair':
      return `Reagieren, wenn „${x.second}“ direkt auf „${x.first}“ folgt.`;
    case 'sumTen':
      return 'Reagieren, wenn zwei aufeinanderfolgende Ziffern zusammen 10 ergeben.';
  }
}

// ---------------------------------------------------------- evaluation

export const evalA = (r: RuleA, v: number, prev: number | null): boolean => {
  switch (r.kind) {
    case 'above':
      return v > r.t;
    case 'below':
      return v < r.t;
    case 'riseBy':
      return prev !== null && v - prev > r.d;
    case 'evenAbove':
      return v % 2 === 0 && v > r.t;
    case 'between':
      return v >= r.lo && v <= r.hi;
  }
};

export interface Sym {
  shape: ShapeId;
  color: ColorId;
}
export const symMatches = (r: RuleB, s: Sym): boolean => s.shape === r.shape && (r.kind === 'shape' || s.color === r.color);

const VOWELS = ['A', 'E', 'I', 'O', 'U'];
const CONSONANTS = ['B', 'D', 'F', 'G', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'Z'];
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isDigit = (ch: string) => /^[0-9]$/.test(ch);

export const evalC = (r: RuleC, ch: string, prev: string | null): boolean => {
  if (prev === null) return false;
  switch (r.kind) {
    case 'repeat':
      return ch === prev;
    case 'vowelAfterEven':
      return VOWELS.includes(ch) && isDigit(prev) && Number(prev) % 2 === 0;
    case 'pair':
      return prev === r.first && ch === r.second;
    case 'sumTen':
      return isDigit(ch) && isDigit(prev) && Number(ch) + Number(prev) === 10;
  }
};

// ------------------------------------------------------------ timeline

export interface ItemA {
  t: number;
  value: number;
  target: boolean;
}
export interface ItemB {
  t: number;
  row: Sym[];
  targetPos: number | null; // index of the matching symbol, null if none
  target: boolean;
}
export interface ItemC {
  t: number;
  ch: string;
  target: boolean;
}
export interface Timeline {
  seed: number;
  durationMs: number;
  a: ItemA[];
  b: ItemB[];
  c: ItemC[];
}

const P_TARGET = { a: 0.28, b: 0.4, c: 0.25 };

function genA(rng: Rng, r: RuleA, n: number): number[] {
  const vals: number[] = [];
  for (let i = 0; i < n; i++) {
    const want = i > 0 && rng() < P_TARGET.a;
    const prev = i > 0 ? vals[i - 1] : null;
    let v = 0;
    for (let k = 0; k < 200; k++) {
      v = randInt(rng, 10, 99);
      if (r.kind === 'riseBy' && prev !== null) {
        // keep non-target values low enough that a later rise stays possible
        const room = 99 - prev - r.d;
        v = want && room >= 1
          ? prev + r.d + randInt(rng, 1, Math.min(15, room))
          : randInt(rng, Math.max(10, prev - 30), Math.max(10, Math.min(99 - r.d - 5, prev + r.d)));
      }
      if (evalA(r, v, prev) === want) break;
    }
    vals.push(v);
  }
  return vals;
}

function genB(rng: Rng, r: RuleB): Sym[] {
  const want = rng() < P_TARGET.b;
  const row: Sym[] = [];
  const otherShapes = SHAPES.filter((s) => s !== r.shape);
  for (let i = 0; i < 4; i++) {
    // distractors: other shapes, and for shapeColor also the target shape in another colour
    if (r.kind === 'shapeColor' && rng() < 0.3) {
      row.push({ shape: r.shape, color: pick(rng, COLORS.filter((c) => c !== r.color)) });
    } else {
      row.push({ shape: pick(rng, otherShapes), color: pick(rng, COLORS) });
    }
  }
  if (want) {
    row[randInt(rng, 0, 3)] = { shape: r.shape, color: r.kind === 'shapeColor' ? r.color : pick(rng, COLORS) };
  }
  return row;
}

function preconditionChar(rng: Rng, r: RuleC): string {
  switch (r.kind) {
    case 'repeat':
      return pick(rng, [...CONSONANTS, ...DIGITS]);
    case 'vowelAfterEven':
      return pick(rng, ['0', '2', '4', '6', '8']);
    case 'pair':
      return r.first;
    case 'sumTen':
      return pick(rng, ['1', '2', '3', '4', '6', '7', '8', '9']);
  }
}

function completionChar(rng: Rng, r: RuleC, prev: string): string {
  switch (r.kind) {
    case 'repeat':
      return prev;
    case 'vowelAfterEven':
      return pick(rng, VOWELS);
    case 'pair':
      return r.second;
    case 'sumTen':
      return String(10 - Number(prev));
  }
}

/** Planned as blocks: a target is a precondition character followed by the
 * completing one; decoys show the precondition without completion. */
function genC(rng: Rng, r: RuleC, n: number): string[] {
  const out: string[] = [];
  const pool = [...VOWELS, ...CONSONANTS, ...DIGITS];
  const nonTarget = (prev: string | null, candidates: string[] = pool) => {
    let ch = pick(rng, candidates);
    for (let k = 0; k < 100 && evalC(r, ch, prev); k++) ch = pick(rng, candidates);
    return ch;
  };
  while (out.length < n) {
    const prev = out.length ? out[out.length - 1] : null;
    const roll = rng();
    if (roll < 0.3 && out.length + 2 <= n) {
      // precondition (must not itself complete a pattern), then completion
      let pre = preconditionChar(rng, r);
      for (let k = 0; k < 50 && evalC(r, pre, prev); k++) pre = preconditionChar(rng, r);
      if (evalC(r, pre, prev)) pre = nonTarget(prev);
      out.push(pre);
      out.push(completionChar(rng, r, pre));
    } else if (roll < 0.45 && out.length + 2 <= n) {
      let pre = preconditionChar(rng, r);
      if (evalC(r, pre, prev)) pre = nonTarget(prev);
      out.push(pre);
      out.push(nonTarget(pre));
    } else {
      out.push(nonTarget(prev));
    }
  }
  return out;
}

export function buildTimeline(cfg: MultitaskConfig, seed: number, durationMs: number): Timeline {
  const rng = mulberry32(seed);
  const count = (s: StreamCfg<unknown>) => Math.max(0, Math.ceil((durationMs - s.offsetMs) / s.intervalMs));
  const nA = count(cfg.a);
  const nB = count(cfg.b);
  const nC = count(cfg.c);
  const vals = genA(rng, cfg.a.rule, nA);
  const a = vals.map((value, i) => ({
    t: cfg.a.offsetMs + i * cfg.a.intervalMs,
    value,
    target: evalA(cfg.a.rule, value, i > 0 ? vals[i - 1] : null),
  }));
  const b: ItemB[] = [];
  for (let i = 0; i < nB; i++) {
    const row = genB(rng, cfg.b.rule);
    // the key is recomputed from the row that is shown
    const pos = row.findIndex((s) => symMatches(cfg.b.rule, s));
    b.push({ t: cfg.b.offsetMs + i * cfg.b.intervalMs, row, targetPos: pos >= 0 ? pos : null, target: pos >= 0 });
  }
  const chars = genC(rng, cfg.c.rule, nC);
  const c = chars.map((ch, i) => ({
    t: cfg.c.offsetMs + i * cfg.c.intervalMs,
    ch,
    target: evalC(cfg.c.rule, ch, i > 0 ? chars[i - 1] : null),
  }));
  return { seed, durationMs, a, b, c };
}

/** Index of the item visible at time t (ms since start), or -1. */
export function itemIndexAt(items: { t: number }[], t: number): number {
  let lo = 0;
  let hi = items.length - 1;
  let ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (items[mid].t <= t) {
      ans = mid;
      lo = mid + 1;
    } else hi = mid - 1;
  }
  return ans;
}

// ------------------------------------------------------------- scoring

export interface MtResponse {
  stream: StreamId;
  t: number; // ms since start
  pos?: number; // clicked position for stream b
}

export interface StreamResult {
  targets: number;
  hits: number;
  misses: number;
  falseAlarms: number;
  meanRtMs: number | null;
  score: number; // 0..100
}
export interface MtResult {
  a: StreamResult;
  b: StreamResult;
  c: StreamResult;
  score: number;
  /** per item outcome for the review timeline */
  outcomes: Record<StreamId, ('hit' | 'miss' | 'fa' | 'cr')[]>;
}

/** Each item accepts one response inside its window [t, next.t).
 * Later presses in the same window are ignored. Items that start after the
 * end of the test are not counted. */
export function scoreMultitask(tl: Timeline, responses: MtResponse[], endMs = tl.durationMs): MtResult {
  const res = {} as Record<StreamId, StreamResult>;
  const outcomes = {} as Record<StreamId, ('hit' | 'miss' | 'fa' | 'cr')[]>;
  for (const s of ['a', 'b', 'c'] as StreamId[]) {
    const items = tl[s] as { t: number; target: boolean; targetPos?: number | null }[];
    const shown = items.filter((it) => it.t < endMs);
    const first = new Map<number, MtResponse>();
    for (const r of responses) {
      if (r.stream !== s || r.t < 0 || r.t > endMs) continue;
      const idx = itemIndexAt(items, r.t);
      if (idx < 0 || first.has(idx)) continue;
      first.set(idx, r);
    }
    let hits = 0;
    let fa = 0;
    let misses = 0;
    const rts: number[] = [];
    const out: ('hit' | 'miss' | 'fa' | 'cr')[] = [];
    shown.forEach((it, idx) => {
      const r = first.get(idx);
      const correctClick = r !== undefined && (s !== 'b' || r.pos === it.targetPos);
      if (it.target) {
        if (correctClick) {
          hits++;
          rts.push(r!.t - it.t);
          out.push('hit');
        } else {
          misses++;
          if (r !== undefined) fa++; // wrong symbol clicked
          out.push(r !== undefined ? 'fa' : 'miss');
        }
      } else if (r !== undefined) {
        fa++;
        out.push('fa');
      } else out.push('cr');
    });
    const targets = shown.filter((it) => it.target).length;
    res[s] = {
      targets,
      hits,
      misses,
      falseAlarms: fa,
      meanRtMs: rts.length ? rts.reduce((x, y) => x + y, 0) / rts.length : null,
      score: targets ? (Math.max(0, hits - fa) / targets) * 100 : 0,
    };
    outcomes[s] = out;
  }
  return { ...res, score: (res.a.score + res.b.score + res.c.score) / 3, outcomes };
}
