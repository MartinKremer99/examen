// Indicative practice score. Group weights follow the published structure
// (50 / 30 / 20). The equal weighting inside each group is a training
// assumption, not the official scoring process.

export type ModuleId = 'verbal' | 'numerical' | 'concentration' | 'multitask' | 'memory' | 'results' | 'customer';
export type GroupId = 'technical' | 'information' | 'behavioral';

export const MODULE_ORDER: ModuleId[] = ['verbal', 'numerical', 'concentration', 'multitask', 'memory', 'results', 'customer'];

export const MODULE_INFO: Record<ModuleId, { name: string; fr: string; group: GroupId; officialMin: number | null }> = {
  verbal: { name: 'Verbales Denken', fr: 'Raisonnement verbal', group: 'technical', officialMin: 12 },
  numerical: { name: 'Numerisches Denken', fr: 'Raisonnement numérique', group: 'technical', officialMin: 12 },
  concentration: { name: 'Konzentration', fr: 'Capacité à se concentrer', group: 'information', officialMin: 2 },
  multitask: { name: 'Multitasking', fr: 'Capacité multi-tâches', group: 'information', officialMin: 5 },
  memory: { name: 'Arbeitsgedächtnis', fr: 'Mémoire de travail', group: 'information', officialMin: 1 },
  results: { name: 'Ergebnisorientierung', fr: 'Orientation résultat', group: 'behavioral', officialMin: null },
  customer: { name: 'Kundenorientierung', fr: 'Orientation client', group: 'behavioral', officialMin: null },
};

export const GROUP_INFO: Record<GroupId, { name: string; weight: number; modules: ModuleId[] }> = {
  technical: { name: 'Technische Kompetenzen', weight: 0.5, modules: ['verbal', 'numerical'] },
  information: { name: 'Informationsmanagement', weight: 0.3, modules: ['concentration', 'multitask', 'memory'] },
  behavioral: { name: 'Verhaltenskompetenzen', weight: 0.2, modules: ['results', 'customer'] },
};

export type ModuleScores = Partial<Record<ModuleId, number>>;

const clamp = (x: number) => Math.max(0, Math.min(100, x));

/** Mean of the group's modules; null if any module of the group is missing. */
export function groupScore(group: GroupId, scores: ModuleScores): number | null {
  const ms = GROUP_INFO[group].modules;
  if (ms.some((m) => scores[m] === undefined)) return null;
  return ms.reduce((a, m) => a + clamp(scores[m]!), 0) / ms.length;
}

export interface Overall {
  technical: number | null;
  information: number | null;
  behavioral: number | null;
  overall: number | null; // null unless all three groups are complete
}

export function overallScore(scores: ModuleScores): Overall {
  const technical = groupScore('technical', scores);
  const information = groupScore('information', scores);
  const behavioral = groupScore('behavioral', scores);
  const overall =
    technical === null || information === null || behavioral === null ? null : technical * 0.5 + information * 0.3 + behavioral * 0.2;
  return { technical, information, behavioral, overall };
}
