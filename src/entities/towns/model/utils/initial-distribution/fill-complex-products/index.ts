import { getMixedArray } from 'shared/utils';
import { TownName, TownsEntities } from '../../../types';
import { VARIABLES } from 'app/config';
import { getAllComplexProducts } from './get-all-complex-products';
import { matchComplexTypesProducesInTown } from './match-complex-types-produces-in-town';
import { matchComplexAndMultyTypesProducesInTown } from './match-complex-and-multy-types-produces-in-town';
import { matchCrossProductLine } from '../match-cross-product-line';
import { PRODUCES_IN_TOWNS } from '../../../../../products';


/** 
 * Распределяем производства Complex продуктов 
 */
export const fillComplexProducts = (entities: TownsEntities): void => {
  const
    { MAX_COMPLEX_PRODUCT_IN_TOWN, MAX_COMPLEX_AND_MULTY_IN_TOWN } = VARIABLES,
    towns                 = Object.values(TownName),
    allComplexProductName = getAllComplexProducts();
  
  
  // Делаем столько кругов сколько amountComplexProduct
  for (let i = 0; i < allComplexProductName.length; i++) {
    const
      townsShuffled = getMixedArray(towns), // Случайный порядок городов, в которые будем добавлять ProductType.COMPLEX
      currentProductName = allComplexProductName[i];
    
    let amountProduces = 0; // Кол-во расставленных производств

    townsShuffled.forEach((townName) => {
      if (
        matchComplexTypesProducesInTown(entities[townName]) < MAX_COMPLEX_PRODUCT_IN_TOWN &&
        matchComplexAndMultyTypesProducesInTown(entities[townName]) < MAX_COMPLEX_AND_MULTY_IN_TOWN &&
        !matchCrossProductLine(entities[townName].produces, currentProductName) &&
        amountProduces < PRODUCES_IN_TOWNS[currentProductName]
      ) {
        entities[townName].produces.push(currentProductName)
        amountProduces += 1;
      }
    })
  }
}
