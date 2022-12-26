import { Mocks } from './types';

export const mocks: Mocks = [
  [true,                            true],
  [false,                           true],

  ['message' as unknown as boolean, false],
  ['' as unknown as boolean,        false],
  [123 as unknown as boolean,       false],
  [undefined,                       false],
  [null,                            false]
]
