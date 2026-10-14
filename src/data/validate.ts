// Structural and answer-key validation for the content banks. Used by the
// test suite; returns a list of problems (empty = valid).

import { makeQuery } from '../lib/calc';
import type { DocBlock, NumKey, NumSet, OptionId, SjtKey, SjtScenario, TVI, VerbalKey, VerbalSet } from './types';

const TVIS: TVI[] = ['V', 'F', 'I'];

export function blockText(b: DocBlock): string {
  switch (b.t) {
    case 'meta':
      return b.lines.join('\n');
    case 'h':
    case 'p':
      return b.text;
    case 'ul':
      return b.items.join('\n');
    case 'table':
      return [b.head.join(' | '), ...b.rows.map((r) => r.join(' | '))].join('\n');
  }
}

const norm = (s: string) => s.replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();

export function validateVerbal(set: VerbalSet, key: VerbalKey): string[] {
  const errs: string[] = [];
  const p = `${set.id}:`;
  if (set.tabs.length !== 6) errs.push(`${p} expected 6 tabs, got ${set.tabs.length}`);
  if (set.statements.length !== 10) errs.push(`${p} expected 10 statements, got ${set.statements.length}`);
  const tabIds = new Set(set.tabs.map((t) => t.id));
  if (tabIds.size !== set.tabs.length) errs.push(`${p} duplicate tab ids`);
  const tabText = new Map(set.tabs.map((t) => [t.id, norm(t.blocks.map(blockText).join('\n'))]));
  for (const t of set.tabs) if (t.blocks.length === 0) errs.push(`${p} tab ${t.id} is empty`);
  const counts: Record<TVI, number> = { V: 0, F: 0, I: 0 };
  for (const s of set.statements) {
    const k = key[s.id];
    if (!s.id.startsWith(set.id + '-')) errs.push(`${p} statement id ${s.id} must start with ${set.id}-`);
    if (!k) {
      errs.push(`${p} no key for ${s.id}`);
      continue;
    }
    if (!TVIS.includes(k.answer)) errs.push(`${p} ${s.id} invalid answer`);
    counts[k.answer]++;
    if (k.explanation.length < 40) errs.push(`${p} ${s.id} explanation too short`);
    if (s.tags.length === 0) errs.push(`${p} ${s.id} has no tags`);
    if (k.sources.length === 0) errs.push(`${p} ${s.id} has no sources`);
    for (const src of k.sources) {
      const txt = tabText.get(src.tab);
      if (txt === undefined) errs.push(`${p} ${s.id} source tab ${src.tab} does not exist`);
      else if (!txt.includes(norm(src.quote))) errs.push(`${p} ${s.id} quote not found in tab ${src.tab}: "${src.quote}"`);
    }
    for (const alt of TVIS) {
      if (alt !== k.answer && !k.whyNot[alt]) errs.push(`${p} ${s.id} missing whyNot.${alt}`);
    }
  }
  for (const k of Object.keys(key)) {
    if (!set.statements.some((s) => s.id === k)) errs.push(`${p} key ${k} has no statement`);
  }
  for (const a of TVIS) if (counts[a] < 2) errs.push(`${p} answer ${a} appears only ${counts[a]}×, need at least 2`);
  return errs;
}

export function validateNumerical(set: NumSet, key: NumKey): string[] {
  const errs: string[] = [];
  const p = `${set.id}:`;
  if (set.tabs.length !== 6) errs.push(`${p} expected 6 tabs, got ${set.tabs.length}`);
  if (set.statements.length !== 10) errs.push(`${p} expected 10 statements, got ${set.statements.length}`);
  let q;
  try {
    q = makeQuery(set);
  } catch (e) {
    return [...errs, `${p} ${(e as Error).message}`];
  }
  const blockIds = new Map<string, string>();
  for (const t of set.tabs) {
    if (t.blocks.length === 0) errs.push(`${p} tab ${t.id} is empty`);
    for (const b of t.blocks) {
      if (b.t === 'text') continue;
      blockIds.set(b.id, t.id);
      if (b.t !== 'facts') {
        for (const r of b.rows) {
          if (r.values.length !== b.cols.length) errs.push(`${p} ${b.id}/${r.key}: ${r.values.length} values for ${b.cols.length} cols`);
        }
        const rk = new Set(b.rows.map((r) => r.key));
        const ck = new Set(b.cols.map((c) => c.key));
        if (rk.size !== b.rows.length) errs.push(`${p} ${b.id}: duplicate row keys`);
        if (ck.size !== b.cols.length) errs.push(`${p} ${b.id}: duplicate col keys`);
      }
    }
  }
  const counts: Record<TVI, number> = { V: 0, F: 0, I: 0 };
  for (const s of set.statements) {
    const k = key[s.id];
    if (!s.id.startsWith(set.id + '-')) errs.push(`${p} statement id ${s.id} must start with ${set.id}-`);
    if (!s.text.fr || !s.text.de) errs.push(`${p} ${s.id} needs fr and de text`);
    if (!k) {
      errs.push(`${p} no key for ${s.id}`);
      continue;
    }
    counts[k.answer]++;
    let got: TVI | string;
    try {
      got = k.compute(q);
    } catch (e) {
      got = `error: ${(e as Error).message}`;
    }
    if (got !== k.answer) errs.push(`${p} ${s.id} compute() returned ${got}, key says ${k.answer}`);
    if (k.answer === 'I' && !k.missing) errs.push(`${p} ${s.id} is I but has no "missing" note`);
    if (k.explanation.length < 30) errs.push(`${p} ${s.id} explanation too short`);
    for (const src of k.sources) {
      const tab = blockIds.get(src.block);
      if (!tab) errs.push(`${p} ${s.id} source block ${src.block} does not exist`);
      else if (tab !== src.tab) errs.push(`${p} ${s.id} block ${src.block} is in tab ${tab}, not ${src.tab}`);
    }
    for (const alt of TVIS) if (alt !== k.answer && !k.whyNot[alt]) errs.push(`${p} ${s.id} missing whyNot.${alt}`);
  }
  for (const a of TVIS) if (counts[a] < 2) errs.push(`${p} answer ${a} appears only ${counts[a]}×, need at least 2`);
  return errs;
}

const OPTS: OptionId[] = ['a', 'b', 'c', 'd'];

export function validateSjt(items: SjtScenario[], key: SjtKey): string[] {
  const errs: string[] = [];
  const ids = new Set<string>();
  const bestPos: Record<OptionId, number> = { a: 0, b: 0, c: 0, d: 0 };
  for (const s of items) {
    if (ids.has(s.id)) errs.push(`${s.id}: duplicate id`);
    ids.add(s.id);
    if (s.options.length !== 4 || s.options.some((o, i) => o.id !== OPTS[i])) errs.push(`${s.id}: options must be a,b,c,d`);
    if (!s.situation.fr || !s.situation.de || !s.question.fr || !s.question.de) errs.push(`${s.id}: missing translation`);
    for (const o of s.options) if (!o.text.fr || !o.text.de) errs.push(`${s.id}/${o.id}: missing translation`);
    const k = key[s.id];
    if (!k) {
      errs.push(`${s.id}: no key`);
      continue;
    }
    const r = OPTS.map((o) => k.ratings[o]).sort();
    if (r.join() !== '1,2,3,4') errs.push(`${s.id}: ratings must be a permutation of 1..4`);
    for (const o of OPTS) if (!k.feedback[o] || k.feedback[o].length < 20) errs.push(`${s.id}/${o}: feedback missing or too short`);
    const best = OPTS.find((o) => k.ratings[o] === 4);
    if (best) bestPos[best]++;
  }
  for (const k of Object.keys(key)) if (!ids.has(k)) errs.push(`key ${k} has no scenario`);
  const n = items.length;
  for (const o of OPTS) if (n >= 8 && bestPos[o] > n * 0.4) errs.push(`best answer is "${o}" in ${bestPos[o]}/${n} items – vary positions`);
  return errs;
}
