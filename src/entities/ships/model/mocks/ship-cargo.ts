import { MOCK_CARGO_BREAD_10, MOCK_CARGO_BRICKS_0 } from './cargo';
import { Cargo } from '../types';

export const MOCK_SHIP_CARGO_EMPTY: Cargo[] = [];

export const MOCK_SHIP_CARGO: Cargo[] = [
  { ...MOCK_CARGO_BREAD_10 },
  { ...MOCK_CARGO_BRICKS_0 }
];
