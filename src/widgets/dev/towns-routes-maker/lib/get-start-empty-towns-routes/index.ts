import { TownsRoutes, TOWNS_NAMES_VALUES_SORTED } from 'entities/towns'

/**
 * Returns starting Towns routes, for initial filling with mileage 
 */
export const getStartEmptyTownsRoutes = (): TownsRoutes => {
  const townsRoutes = {};

  TOWNS_NAMES_VALUES_SORTED.forEach(townKey1 => {
    townsRoutes[townKey1] = {};

    TOWNS_NAMES_VALUES_SORTED.forEach(townKey2 => {
      townsRoutes[townKey1][townKey2] = 0
    });
  });

  return townsRoutes as TownsRoutes
}
