import { TOWNS } from '../../data';
import { TownsEntities } from '../../types';


/** Начальные данные Towns */
export const getInitialTowns = (): TownsEntities => TOWNS.reduce((acc, town) => {
  acc[town.title] = {
    dwellers: undefined,
    produces: [],
    ...town,
  };
    return acc
  }, {});
