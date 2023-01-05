import { Town } from '../../../../types';

/**
 * Сортирует в нужной последовательности города
 * для распределения LonelyAndSimpleProductions
 */
export const sortTownsForLonelyAndSimpleProduct = (towns: Town[]): Town[] => {
  let
    sortedTowns = [],
    sorted = {};
    
  towns.forEach(town => {
    if (sorted[town.produces.length] === undefined) sorted[town.produces.length] = [];
    sorted[town.produces.length].push({ ...town });
  });


  Object
    .keys(sorted)
    .sort((a, b) => {
      if (a > b) return 1 // От меньшему к большего
    })
    .forEach(key => {
      sortedTowns.push(...sorted[key]);
    });
  
  
  return sortedTowns
}
