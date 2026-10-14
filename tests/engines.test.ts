import { describe, expect, it } from 'vitest';
import { dotCount, generateField, isTarget, kindOf, scoreConcentration, validateField } from '../src/engines/concentration';
import { generateSequence, isMatch, MEMORY_PRESETS, scoreMemory, type MemResponse } from '../src/engines/memory';
import { buildTimeline, evalA, evalC, itemIndexAt, scoreMultitask, symMatches, type MtResponse } from '../src/engines/multitask';
import { scoreSjt } from '../src/engines/behavioral';
import { MULTITASK_CONFIGS } from '../src/data/multitaskConfigs';
import { overallScore } from '../src/scoring/score';
import { Countdown } from '../src/lib/timer';
import { approxEq, pctChange, ppDiff, roundTo, share } from '../src/lib/calc';
import type { SjtKeyEntry } from '../src/data/types';

describe('calc', () => {
  it('computes percent change and percentage points', () => {
    expect(pctChange(18, 20)).toBeCloseTo(11.111, 3);
    expect(ppDiff(18, 20)).toBe(2);
    expect(share(25, 200)).toBe(12.5);
    expect(roundTo(1.005, 2)).toBe(1.01);
    expect(approxEq(12.46, 12.5, 1)).toBe(true);
  });
});

describe('concentration', () => {
  it('generates valid fields and the target count equals an independent recount', () => {
    for (let seed = 1; seed <= 500; seed++) {
      const f = generateField(seed);
      expect(validateField(f)).toEqual([]);
      const recount = f.cells.filter((c) => c.letter === 'E' && c.dots.filter((d) => d).length === 3).length;
      expect(f.cells.filter(isTarget).length).toBe(recount);
      for (const c of f.cells) expect(dotCount(c)).toBeLessThanOrEqual(4);
    }
  });
  it('is deterministic per seed and varies between seeds', () => {
    expect(generateField(42)).toEqual(generateField(42));
    expect(generateField(42).cells).not.toEqual(generateField(43).cells);
  });
  it('contains every distractor kind', () => {
    const kinds = new Set(generateField(7).cells.map(kindOf));
    for (const k of ['target', 'E0', 'E1', 'E2', 'E4', 'other3', 'other2']) expect(kinds.has(k as never)).toBe(true);
  });
  it('scores hits, misses and false clicks', () => {
    const f = generateField(99);
    const targets = f.cells.map((c, i) => (isTarget(c) ? i : -1)).filter((i) => i >= 0);
    const non = f.cells.map((c, i) => (!isTarget(c) ? i : -1)).filter((i) => i >= 0);
    const all = scoreConcentration(f, targets, 120000);
    expect(all.hits).toBe(targets.length);
    expect(all.misses).toBe(0);
    expect(all.falseAlarms).toBe(0);
    expect(all.score).toBe(100);
    const mixed = scoreConcentration(f, [...targets.slice(0, 10), ...non.slice(0, 4)], 60000);
    expect(mixed.hits).toBe(10);
    expect(mixed.falseAlarms).toBe(4);
    expect(mixed.score).toBeCloseTo((6 / targets.length) * 100);
    expect(scoreConcentration(f, non.slice(0, 50), 1000).score).toBe(0);
  });
});

describe('working memory', () => {
  it('derives the key from the displayed sequence and keeps the match ratio', () => {
    for (let seed = 1; seed <= 300; seed++) {
      const cfg = { seed, length: 30, itemMs: 2000, stimSet: 'shapes' as const };
      const seq = generateSequence(cfg);
      expect(seq).toHaveLength(30);
      const matches = seq.filter((_, i) => isMatch(seq, i)).length;
      expect(matches).toBe(Math.round(28 * 0.35));
      for (let i = 2; i < seq.length; i++) expect(isMatch(seq, i)).toBe(seq[i] === seq[i - 2]);
    }
  });
  it('presets all last one minute', () => {
    for (const p of Object.values(MEMORY_PRESETS)) expect(p.itemMs * p.length).toBe(60000);
  });
  it('scores correct, incorrect and missed responses', () => {
    const seq = [1, 2, 1, 3, 1, 4];
    // i=2 match, i=3 no, i=4 match, i=5 no
    const resp: MemResponse[] = [null, null, 'yes', 'yes', null, 'no'];
    const r = scoreMemory(seq, resp, [null, null, 500, 600, null, 700], 6);
    expect(r.trials).toBe(4);
    expect(r.correct).toBe(2);
    expect(r.incorrect).toBe(1);
    expect(r.missed).toBe(1);
    expect(r.falseAlarms).toBe(1);
    expect(r.accuracy).toBe(50);
  });
});

describe('multitasking', () => {
  it('has at least 10 configurations', () => expect(MULTITASK_CONFIGS.length).toBeGreaterThanOrEqual(10));
  it('timeline keys match the rules and every stream has targets', () => {
    for (const cfg of MULTITASK_CONFIGS) {
      for (let seed = 1; seed <= 20; seed++) {
        const tl = buildTimeline(cfg, seed, 300000);
        tl.a.forEach((it, i) => expect(it.target).toBe(evalA(cfg.a.rule, it.value, i ? tl.a[i - 1].value : null)));
        tl.c.forEach((it, i) => expect(it.target).toBe(evalC(cfg.c.rule, it.ch, i ? tl.c[i - 1].ch : null)));
        for (const it of tl.b) {
          const m = it.row.filter((s) => symMatches(cfg.b.rule, s)).length;
          expect(m).toBeLessThanOrEqual(1);
          expect(it.target).toBe(m === 1);
        }
        for (const s of ['a', 'b', 'c'] as const) {
          const n = tl[s].filter((x) => x.target).length;
          const share = n / tl[s].length;
          expect(share, `${cfg.id}/${s}/${seed}`).toBeGreaterThan(0.1);
          expect(share, `${cfg.id}/${s}/${seed}`).toBeLessThan(0.55);
        }
      }
    }
  });
  it('attributes responses to the right stream and window', () => {
    const cfg = MULTITASK_CONFIGS[0];
    const tl = buildTimeline(cfg, 5, 60000);
    const resp: MtResponse[] = [];
    // perfect responder on a, b; nothing on c
    for (const it of tl.a) if (it.target) resp.push({ stream: 'a', t: it.t + 400 });
    for (const it of tl.b) if (it.target) resp.push({ stream: 'b', t: it.t + 500, pos: it.targetPos! });
    const r = scoreMultitask(tl, resp, 60000);
    expect(r.a.hits).toBe(r.a.targets);
    expect(r.a.falseAlarms).toBe(0);
    expect(r.b.hits).toBe(r.b.targets);
    expect(r.c.hits).toBe(0);
    expect(r.c.misses).toBe(r.c.targets);
    expect(r.a.meanRtMs).toBe(400);
    // a false alarm on a non-target a-item
    const nonA = tl.a.find((x) => !x.target)!;
    const r2 = scoreMultitask(tl, [...resp, { stream: 'a', t: nonA.t + 10 }], 60000);
    expect(r2.a.falseAlarms).toBe(1);
    // double press in the same window counts once
    const tA = tl.a.find((x) => x.target)!;
    const r3 = scoreMultitask(tl, [...resp, { stream: 'a', t: tA.t + 900 }], 60000);
    expect(r3.a.hits).toBe(r.a.hits);
    expect(r3.a.falseAlarms).toBe(0);
    // wrong symbol on a target row = miss + false alarm
    const tB = tl.b.find((x) => x.target)!;
    const wrongPos = (tB.targetPos! + 1) % 4;
    const others = resp.filter((x) => !(x.stream === 'b' && x.t === tB.t + 500));
    const r4 = scoreMultitask(tl, [...others, { stream: 'b', t: tB.t + 100, pos: wrongPos }], 60000);
    expect(r4.b.hits).toBe(r.b.hits - 1);
    expect(r4.b.falseAlarms).toBe(1);
  });
  it('finds the visible item by time', () => {
    const items = [{ t: 0 }, { t: 1000 }, { t: 2000 }];
    expect(itemIndexAt(items, -1)).toBe(-1);
    expect(itemIndexAt(items, 0)).toBe(0);
    expect(itemIndexAt(items, 1999)).toBe(1);
    expect(itemIndexAt(items, 5000)).toBe(2);
  });
});

describe('SJT scoring', () => {
  const key: SjtKeyEntry = {
    ratings: { a: 2, b: 4, c: 1, d: 3 },
    feedback: { a: '', b: '', c: '', d: '' },
    summary: '',
  };
  it('scores the best format', () => {
    expect(scoreSjt('best', key, { best: 'b' })).toBe(1);
    expect(scoreSjt('best', key, { best: 'd' })).toBeCloseTo(2 / 3);
    expect(scoreSjt('best', key, { best: 'c' })).toBe(0);
  });
  it('scores most/least with partial credit', () => {
    expect(scoreSjt('mostLeast', key, { most: 'b', least: 'c' })).toBe(1);
    expect(scoreSjt('mostLeast', key, { most: 'd', least: 'a' })).toBe(0.5);
    expect(scoreSjt('mostLeast', key, { most: 'c', least: 'b' })).toBe(0);
  });
});

describe('weighted score', () => {
  it('applies 50/30/20 with equal weights inside groups', () => {
    const o = overallScore({ verbal: 70, numerical: 90, concentration: 60, multitask: 50, memory: 70, results: 40, customer: 60 });
    expect(o.technical).toBe(80);
    expect(o.information).toBe(60);
    expect(o.behavioral).toBe(50);
    expect(o.overall).toBeCloseTo(68);
  });
  it('withholds the overall score when a group is incomplete', () => {
    expect(overallScore({ verbal: 80, numerical: 80 }).overall).toBeNull();
  });
});

describe('countdown', () => {
  it('clamps at zero, fires once and cannot fire after stop', () => {
    let now = 0;
    const cd = new Countdown(1000, () => now);
    cd.start();
    now = 500;
    expect(cd.remaining()).toBe(500);
    expect(cd.checkExpired()).toBe(false);
    now = 1500;
    expect(cd.remaining()).toBe(0);
    expect(cd.checkExpired()).toBe(true);
    expect(cd.checkExpired()).toBe(false);
    now = 5000;
    expect(cd.remaining()).toBe(0);
    expect(cd.elapsed()).toBe(1000);
    const cd2 = new Countdown(1000, () => now);
    cd2.start();
    now = 5200;
    cd2.stop();
    now = 9000;
    expect(cd2.checkExpired()).toBe(false);
    expect(cd2.elapsed()).toBe(200);
  });
  it('supports untimed mode', () => {
    let now = 0;
    const cd = new Countdown(null, () => now);
    cd.start();
    now = 99999;
    expect(cd.remaining()).toBeNull();
    expect(cd.checkExpired()).toBe(false);
    expect(cd.elapsed()).toBe(99999);
  });
});
