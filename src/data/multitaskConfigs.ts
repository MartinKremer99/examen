import type { MultitaskConfig } from '../engines/multitask';

const T = {
  1: { a: 3000, b: 3600, c: 2200 },
  2: { a: 2500, b: 3000, c: 1800 },
  3: { a: 2100, b: 2600, c: 1500 },
} as const;

function cfg(id: string, name: string, level: 1 | 2 | 3, a: MultitaskConfig['a']['rule'], b: MultitaskConfig['b']['rule'], c: MultitaskConfig['c']['rule']): MultitaskConfig {
  const t = T[level];
  return {
    id,
    name,
    level,
    a: { rule: a, intervalMs: t.a, offsetMs: 0 },
    b: { rule: b, intervalMs: t.b, offsetMs: 700 },
    c: { rule: c, intervalMs: t.c, offsetMs: 350 },
  };
}

export const MULTITASK_CONFIGS: MultitaskConfig[] = [
  cfg('mt01', 'Schwelle · Stern · Wiederholung', 1, { kind: 'above', t: 75 }, { kind: 'shape', shape: 'stern' }, { kind: 'repeat' }),
  cfg('mt02', 'Untergrenze · Raute · Paar K–7', 1, { kind: 'below', t: 25 }, { kind: 'shape', shape: 'raute' }, { kind: 'pair', first: 'K', second: '7' }),
  cfg('mt03', 'Anstieg · Dreieck · Vokal nach gerader Ziffer', 2, { kind: 'riseBy', d: 20 }, { kind: 'shape', shape: 'dreieck' }, { kind: 'vowelAfterEven' }),
  cfg('mt04', 'Gerade Werte · roter Kreis · Summe 10', 2, { kind: 'evenAbove', t: 60 }, { kind: 'shapeColor', shape: 'kreis', color: 'rot' }, { kind: 'sumTen' }),
  cfg('mt05', 'Bereich · Sechseck · Wiederholung', 2, { kind: 'between', lo: 40, hi: 50 }, { kind: 'shape', shape: 'sechseck' }, { kind: 'repeat' }),
  cfg('mt06', 'Schwelle · grünes Quadrat · Paar M–3', 2, { kind: 'above', t: 80 }, { kind: 'shapeColor', shape: 'quadrat', color: 'gruen' }, { kind: 'pair', first: 'M', second: '3' }),
  cfg('mt07', 'Anstieg · blauer Stern · Summe 10', 3, { kind: 'riseBy', d: 15 }, { kind: 'shapeColor', shape: 'stern', color: 'blau' }, { kind: 'sumTen' }),
  cfg('mt08', 'Untergrenze · Halbmond · Vokal nach gerader Ziffer', 1, { kind: 'below', t: 20 }, { kind: 'shape', shape: 'halbmond' }, { kind: 'vowelAfterEven' }),
  cfg('mt09', 'Gerade Werte · orange Raute · Wiederholung', 3, { kind: 'evenAbove', t: 50 }, { kind: 'shapeColor', shape: 'raute', color: 'orange' }, { kind: 'repeat' }),
  cfg('mt10', 'Bereich · Kreuz · Paar B–4', 3, { kind: 'between', lo: 30, hi: 45 }, { kind: 'shape', shape: 'kreuz' }, { kind: 'pair', first: 'B', second: '4' }),
  cfg('mt11', 'Schwelle · rotes Dreieck · Summe 10', 3, { kind: 'above', t: 70 }, { kind: 'shapeColor', shape: 'dreieck', color: 'rot' }, { kind: 'sumTen' }),
  cfg('mt12', 'Anstieg · Kreis · Wiederholung', 1, { kind: 'riseBy', d: 25 }, { kind: 'shape', shape: 'kreis' }, { kind: 'repeat' }),
];
