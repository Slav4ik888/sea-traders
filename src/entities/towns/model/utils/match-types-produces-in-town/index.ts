import { PRODUCTS, ProductType } from '../../../../products';
import { Town } from '../../types';

/** Сколько в городе производств, выбранного типа */
export const matchTypesProducesInTown = (town: Town, type: ProductType) => {
  return town.produces
    .filter(productName => PRODUCTS[productName].type === type)
    .length
}
