// History analysis: per-module stats, weak skills, error bookkeeping.

import { TAG_LABEL, type SkillTag, type TVI } from '../data/types';
import type { ErrorEntry, ModuleResult, ProgressState, SessionRecord } from '../store/records';
import { MODULE_INFO, MODULE_ORDER, type ModuleId } from './score';

export interface ModuleStats {
  module: ModuleId;
  attempts: number;
  latest: number | null;
  best: number | null;
  recentAvg: number | null; // mean of the last 3 attempts
  trend: number[]; // chronological scores (max 12)
}

export function moduleStats(sessions: SessionRecord[]): Record<ModuleId, ModuleStats> {
  const chrono = [...sessions].sort((a, b) => a.finishedAt - b.finishedAt);
  const out = {} as Record<ModuleId, ModuleStats>;
  for (const m of MODULE_ORDER) {
    const scores = chrono.flatMap((s) => s.modules.filter((x) => x.module === m).map((x) => x.score));
    const last3 = scores.slice(-3);
    out[m] = {
      module: m,
      attempts: scores.length,
      latest: scores.length ? scores[scores.length - 1] : null,
      best: scores.length ? Math.max(...scores) : null,
      recentAvg: last3.length ? last3.reduce((a, b) => a + b, 0) / last3.length : null,
      trend: scores.slice(-12),
    };
  }
  return out;
}

export interface TagStat {
  tag: SkillTag;
  label: string;
  total: number;
  wrong: number;
  rate: number; // error rate 0..1
}

export function tagStats(sessions: SessionRecord[]): TagStat[] {
  const agg = new Map<SkillTag, { total: number; wrong: number }>();
  for (const s of sessions) {
    for (const m of s.modules) {
      if (m.detail.kind !== 'tvi') continue;
      for (const it of m.detail.items) {
        for (const t of it.tags) {
          const a = agg.get(t) ?? { total: 0, wrong: 0 };
          a.total++;
          if (it.answer !== it.correct) a.wrong++;
          agg.set(t, a);
        }
      }
    }
  }
  return [...agg.entries()]
    .map(([tag, a]) => ({ tag, label: TAG_LABEL[tag], total: a.total, wrong: a.wrong, rate: a.wrong / a.total }))
    .filter((t) => t.total >= 3)
    .sort((a, b) => b.rate - a.rate);
}

/** How often each wrong answer was given for each correct answer. */
export function confusions(sessions: SessionRecord[]): { from: TVI; to: TVI; count: number }[] {
  const c = new Map<string, number>();
  for (const s of sessions)
    for (const m of s.modules) {
      if (m.detail.kind !== 'tvi') continue;
      for (const it of m.detail.items) {
        if (it.answer && it.answer !== it.correct) {
          const k = `${it.correct}>${it.answer}`;
          c.set(k, (c.get(k) ?? 0) + 1);
        }
      }
    }
  return [...c.entries()]
    .map(([k, count]) => ({ from: k[0] as TVI, to: k[2] as TVI, count }))
    .sort((a, b) => b.count - a.count);
}

export interface Weakness {
  title: string;
  detail: string;
  module?: ModuleId;
}

export function weaknesses(sessions: SessionRecord[]): Weakness[] {
  const out: Weakness[] = [];
  const stats = moduleStats(sessions);
  const ranked = MODULE_ORDER.map((m) => stats[m])
    .filter((s) => s.recentAvg !== null)
    .sort((a, b) => a.recentAvg! - b.recentAvg!);
  for (const s of ranked.slice(0, 2)) {
    if (s.recentAvg! < 75)
      out.push({
        module: s.module,
        title: MODULE_INFO[s.module].name,
        detail: `Ø der letzten Versuche: ${Math.round(s.recentAvg!)} / 100`,
      });
  }
  const tags = tagStats(sessions).filter((t) => t.rate >= 0.3).slice(0, 3);
  for (const t of tags) out.push({ title: t.label, detail: `${t.wrong} von ${t.total} Aussagen falsch (${Math.round(t.rate * 100)} %)` });
  const conf = confusions(sessions)[0];
  const L = { V: 'Vrai', F: 'Faux', I: 'Indéterminé' };
  if (conf && conf.count >= 3)
    out.push({ title: `${L[conf.from]} als ${L[conf.to]} beantwortet`, detail: `${conf.count}× – häufigste Verwechslung` });
  return out;
}

// ---------------------------------------------------- error bookkeeping

/** Records wrong answers and marks repeated items as resolved when they are
 * now correct. Returns a new state object. */
export function applyErrors(state: ProgressState, results: ModuleResult[], at: number): ProgressState {
  const errors: Record<string, ErrorEntry> = { ...state.errors };
  const touch = (module: ModuleId, itemId: string, ok: boolean, lastAnswer: string, correct: string) => {
    const prev = errors[itemId];
    if (ok) {
      if (prev) errors[itemId] = { ...prev, resolved: true, lastAt: at };
      return;
    }
    errors[itemId] = {
      module,
      itemId,
      lastAnswer,
      correct,
      count: (prev?.count ?? 0) + 1,
      lastAt: at,
      resolved: false,
    };
  };
  for (const r of results) {
    if (r.detail.kind === 'tvi') {
      for (const it of r.detail.items) touch(r.module, it.id, it.answer === it.correct, it.answer ?? '–', it.correct);
    } else if (r.detail.kind === 'sjt') {
      for (const it of r.detail.items) touch(r.module, it.id, it.score >= 0.999, JSON.stringify(it.response ?? {}), '');
    }
  }
  return { ...state, errors };
}

export const openErrors = (state: ProgressState, module?: ModuleId): ErrorEntry[] =>
  Object.values(state.errors)
    .filter((e) => !e.resolved && (!module || e.module === module))
    .sort((a, b) => b.lastAt - a.lastAt);
