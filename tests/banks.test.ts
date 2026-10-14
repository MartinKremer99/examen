import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { validateNumerical, validateSjt, validateVerbal } from '../src/data/validate';

const dataDir = join(__dirname, '..', 'src', 'data');

async function loadPairs(dir: string) {
  const files = readdirSync(join(dataDir, dir)).filter(
    (f) => /^set\d\d\.ts$/.test(f) && existsSync(join(dataDir, dir, f.replace('.ts', '.key.ts'))),
  );
  return Promise.all(
    files.map(async (f) => {
      const base = f.replace('.ts', '');
      const set = Object.values(await import(join(dataDir, dir, f)))[0];
      const key = Object.values(await import(join(dataDir, dir, `${base}.key.ts`)))[0];
      return { name: `${dir}/${base}`, set, key };
    }),
  );
}

describe('verbal bank', async () => {
  const pairs = await loadPairs('verbal');
  it('has at least one set', () => expect(pairs.length).toBeGreaterThan(0));
  for (const p of pairs) {
    it(`${p.name} is valid`, () => expect(validateVerbal(p.set as never, p.key as never)).toEqual([]));
  }
});

describe('numerical bank', async () => {
  const pairs = await loadPairs('numerical');
  it('has at least one set', () => expect(pairs.length).toBeGreaterThan(0));
  for (const p of pairs) {
    it(`${p.name} is valid and every compute() matches its key`, () =>
      expect(validateNumerical(p.set as never, p.key as never)).toEqual([]));
  }
});

describe('behavioral banks', async () => {
  const files = readdirSync(join(dataDir, 'behavioral')).filter(
    (f) => /^[a-z]+\.ts$/.test(f) && existsSync(join(dataDir, 'behavioral', f.replace('.ts', '.key.ts'))),
  );
  for (const f of files) {
    const base = f.replace('.ts', '');
    it(`${base} is valid`, async () => {
      const items = Object.values(await import(join(dataDir, 'behavioral', f)))[0];
      const key = Object.values(await import(join(dataDir, 'behavioral', `${base}.key.ts`)))[0];
      expect(validateSjt(items as never, key as never)).toEqual([]);
    });
  }
});
