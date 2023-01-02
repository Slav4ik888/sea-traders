import { PRODUCTS } from 'entities/products'
import { TOWNS } from '../../data';
import { Town, TownsEntities } from '../../types';
import { getMultyProducts } from '../get-multy-products'


/** Распределяем производства Multy продуктов */
export const getFilledMultyProducts = (): Town[] => {
  const
    allProducts = Object.values(PRODUCTS),
    allMultyProducts = getMultyProducts(allProducts);
  
  const prepared: TownsEntities = {};

  // Наполняет начальные данные в TOWNS, рассчитанными данными
  const result = TOWNS.map(town => ({
    ...town,
    ...prepared[town.title]
  }))
  
  return result
}
