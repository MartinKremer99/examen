// Content index. Questions and answer keys come from separate modules.

import type { NumKey, NumKeyEntry, NumSet, SjtKey, SjtKeyEntry, SjtScenario, VerbalKey, VerbalKeyEntry, VerbalSet } from './types';
import { set01 } from './verbal/set01';
import { set02 } from './verbal/set02';
import { set03 } from './verbal/set03';
import { set04 } from './verbal/set04';
import { set05 } from './verbal/set05';
import { set06 } from './verbal/set06';
import { set07 } from './verbal/set07';
import { set08 } from './verbal/set08';
import { key01 } from './verbal/set01.key';
import { key02 } from './verbal/set02.key';
import { key03 } from './verbal/set03.key';
import { key04 } from './verbal/set04.key';
import { key05 } from './verbal/set05.key';
import { key06 } from './verbal/set06.key';
import { key07 } from './verbal/set07.key';
import { key08 } from './verbal/set08.key';
import { nset01 } from './numerical/set01';
import { nset02 } from './numerical/set02';
import { nset03 } from './numerical/set03';
import { nset04 } from './numerical/set04';
import { nset05 } from './numerical/set05';
import { nset06 } from './numerical/set06';
import { nset07 } from './numerical/set07';
import { nset08 } from './numerical/set08';
import { nkey01 } from './numerical/set01.key';
import { nkey02 } from './numerical/set02.key';
import { nkey03 } from './numerical/set03.key';
import { nkey04 } from './numerical/set04.key';
import { nkey05 } from './numerical/set05.key';
import { nkey06 } from './numerical/set06.key';
import { nkey07 } from './numerical/set07.key';
import { nkey08 } from './numerical/set08.key';
import { resultsScenarios } from './behavioral/results';
import { resultsKey } from './behavioral/results.key';
import { customerScenarios } from './behavioral/customer';
import { customerKey } from './behavioral/customer.key';

export const VERBAL_SETS: VerbalSet[] = [set01, set02, set03, set04, set05, set06, set07, set08];
export const NUM_SETS: NumSet[] = [nset01, nset02, nset03, nset04, nset05, nset06, nset07, nset08];
export const RESULTS_SCENARIOS: SjtScenario[] = resultsScenarios;
export const CUSTOMER_SCENARIOS: SjtScenario[] = customerScenarios;

const VERBAL_KEY: VerbalKey = Object.assign({}, key01, key02, key03, key04, key05, key06, key07, key08);
const NUM_KEY: NumKey = Object.assign({}, nkey01, nkey02, nkey03, nkey04, nkey05, nkey06, nkey07, nkey08);
const SJT_KEY: SjtKey = Object.assign({}, resultsKey, customerKey);

/** Answer lookups are only called when scoring or giving feedback. */
export const verbalKey = (id: string): VerbalKeyEntry => VERBAL_KEY[id];
export const numKey = (id: string): NumKeyEntry => NUM_KEY[id];
export const sjtKey = (id: string): SjtKeyEntry => SJT_KEY[id];

export const verbalSetOf = (statementId: string) => VERBAL_SETS.find((s) => s.statements.some((x) => x.id === statementId));
export const numSetOf = (statementId: string) => NUM_SETS.find((s) => s.statements.some((x) => x.id === statementId));
export const scenarioById = (id: string) => [...RESULTS_SCENARIOS, ...CUSTOMER_SCENARIOS].find((s) => s.id === id);

export const BANK_COUNTS = {
  verbalSets: VERBAL_SETS.length,
  verbalStatements: VERBAL_SETS.reduce((a, s) => a + s.statements.length, 0),
  numSets: NUM_SETS.length,
  numStatements: NUM_SETS.reduce((a, s) => a + s.statements.length, 0),
  results: RESULTS_SCENARIOS.length,
  customer: CUSTOMER_SCENARIOS.length,
};
