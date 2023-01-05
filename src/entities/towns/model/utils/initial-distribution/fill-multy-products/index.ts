import { getMixedArray } from 'shared/utils';
import { PRODUCES_IN_TOWNS } from '../../../data';
import { TownName, TownsEntities } from '../../../types';
import { VARIABLES } from 'app/config';
import { matchMultyTypesProducesInTown } from './match-multy-types-produces-in-town';
import { getAllMultyProducts } from './get-all-multy-products';
import { matchCrossProductLine } from '../match-cross-product-line';


const { MAX_MULTY_PRODUCT_IN_TOWN } = VARIABLES;


/** 
 * Распределяем производства Multy продуктов 
 */
export const fillMultyProducts = (entities: TownsEntities): void => {
  const
    towns                   = Object.values(TownName),
    allMultyProductName     = getAllMultyProducts();
  
  
  // Делаем столько кругов сколько amountMultyProduct
  for (let i = 0; i < allMultyProductName.length; i++) {
    const
      townsShuffled = getMixedArray(towns), // Случайный порядок городов, в которые будем добавлять ProductType.MULTIPLE
      currentProductName = allMultyProductName[i];
    
    let amountProduces = 0; // Кол-во расставленных производств

    townsShuffled.forEach((townName) => {
      if (
        matchMultyTypesProducesInTown(entities[townName]) < MAX_MULTY_PRODUCT_IN_TOWN &&
        !matchCrossProductLine(entities[townName].produces, currentProductName) &&
        amountProduces < PRODUCES_IN_TOWNS[currentProductName]
      ) {
        entities[townName].produces.push(currentProductName)
        amountProduces += 1;
      }
    })
  }
}
