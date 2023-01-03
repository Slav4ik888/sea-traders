import { TOWNS } from '../../data';
import { TownsEntities } from '../../types';


/** Начальные данные Towns */
export const getInitialTowns = (): TownsEntities => TOWNS.reduce((acc, town) => {
  acc[town.title] = {
    produces: [],
    ...town,
  };
    return acc
  }, {});
