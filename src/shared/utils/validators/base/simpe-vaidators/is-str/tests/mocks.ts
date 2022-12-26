import { Mocks } from './types';

export const mocks: Mocks = [
  ['',          true],
  ['undefined', true],
  ['0',         true],
  [undefined,   false],
  [null,        false],
  [[]       as unknown as string, false],
  [{}       as unknown as string, false],
  [[1]      as unknown as string, false],
  [{ a: 1 } as unknown as string, false],
  [0        as unknown as string, false]
]
