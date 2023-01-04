import { Town, TownsEntities } from '../../types';
import { getInitialTowns } from '../get-initial-towns';
import { fillComplexProducts } from './fill-complex-products';
import { fillMultyProducts } from './fill-multy-products';


/** 
 * Начальное распределение производства продуктов по городам
 */
export const initialDistributionProduction = (): Town[] => {
  const
    entities: TownsEntities = getInitialTowns();
  
  fillMultyProducts(entities);   // Распределяем производства Multy продуктов
  fillComplexProducts(entities); // Распределяем производства Complex продуктов
    // Распределяем производства обычных продуктов
  
  return Object.values(entities)
}
