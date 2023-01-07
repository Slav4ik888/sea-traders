import { TownsEntities } from 'entities/towns/model/types';
import { getRandomNumber } from 'shared/utils';


export const fillDwellers = (entities: TownsEntities) => {
  const towns = Object.values(entities);

  towns.forEach(town => {
    entities[town.title].dwellers = getRandomNumber(500, 5000)
  });
}
