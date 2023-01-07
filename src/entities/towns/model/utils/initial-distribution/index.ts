import { TownsEntities } from '../../types';
import { getInitialTowns } from '../get-initial-towns';
import { fillComplexProducts } from './fill-complex-products';
import { fillMultyProducts } from './fill-multy-products';
import { fillLonelyAndSimpleProducts } from './fill-lonely-and-products';
import { fillDwellers } from './fill-dwellers';


/** 
 * Начальное распределение по городам:
 *  - число жителей
 *  - производства продуктов
 */
export const initialDistribution = (): TownsEntities => {
  const
    entities: TownsEntities = getInitialTowns();
  
  fillDwellers(entities);
  
  fillMultyProducts(entities);           // Распределяем производства Multy продуктов
  fillComplexProducts(entities);         // Распределяем производства Complex продуктов
  fillLonelyAndSimpleProducts(entities); // Распределяем производства Lonely & Simple продуктов
  
  return entities
}
