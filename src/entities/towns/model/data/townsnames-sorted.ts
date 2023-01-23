import { TownName } from '../types';

export const TOWNS_NAMES_KEYS_SORTED = Object
  .keys(TownName)
  .sort();

export const TOWNS_NAMES_VALUES_SORTED = Object
  .values(TownName)
  .sort();
