import { PRODUCES_IN_TOWNS } from '../../../data';
import { TownName, TownsEntities } from '../../../types';
import { VARIABLES } from 'app/config';
import { getAllSimpleProducts } from './get-all-simple-products';
import { matchCrossProductLine } from '../match-cross-product-line';
import { sortTownsForLonelyAndSimpleProduct } from './sort-towns-for-lonely-and-simple-product';
import { getAllLonelyProducts } from './get-all-lonely-products';
import { ProductName } from '../../../../../products';


const { MAX_PRODUCTS_IN_TOWN } = VARIABLES;

// Делаем столько кругов сколько amountProduct
const fillProducts = (entities: TownsEntities, allProductName: ProductName[]) => {
  for (let i = 0;i < allProductName.length;i++) {
    const
      townsShuffled = sortTownsForLonelyAndSimpleProduct(Object.values(entities)),
      currentProductName = allProductName[i];
    
    let amountProduces = 0; // Кол-во расставленных производств

    townsShuffled.forEach((town) => {
      if (
        town.produces.length < MAX_PRODUCTS_IN_TOWN &&
        !matchCrossProductLine(town.produces, currentProductName) &&
        amountProduces < PRODUCES_IN_TOWNS[currentProductName]
      ) {
        town.produces.push(currentProductName)
        amountProduces += 1;
      }
    })
  }
}

/** 
 * Распределяем производства Simple продуктов 
 */
export const fillLonelyAndSimpleProducts = (entities: TownsEntities): void => {
  fillProducts(entities, getAllSimpleProducts());
  fillProducts(entities, getAllLonelyProducts());
}
