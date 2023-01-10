import { TOWNS } from '../../data';
import { Town, TownName } from '../../types';

/**
 * Get Town from TOWNS
 */
export const getTownByTownName = (townName: TownName): Town => TOWNS.find(t => t.title === townName);
