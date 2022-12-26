import { Mocks } from "./types";
import { arr1 } from './mock-arr1';


export const mocks: Mocks = [
  [{ arr: arr1,      ff: `id`, vf: 111, fs: `name`, vs: `Slava` },  { id: 111, name: `Slava`, any: `any data 2`, some: `2` }],
  [{ arr: arr1,      ff: `id`, vf: 111,             vs: `Slava` },  undefined],
  [{ arr: [],        ff: `id`, vf: 111, fs: `name`, vs: `Slava` },  undefined],
  [{ arr: undefined, ff: `id`, vf: 111, fs: `name`, vs: `Slava` },  undefined],
  [{ arr: arr1,      ff: `id`, vf: 111, fs: `name`, vs: `Regina` }, undefined],
  [{ arr: arr1,      ff: `id`, vf: 2,   fs: `name`, vs: `Regina` }, { id: 2, name: `Regina`, any: `any data 3`, some: `3` }],
  [{ arr: arr1,      ff: `id`, vf: 4,   fs: `name`, vs: `Regina` }, undefined],
];