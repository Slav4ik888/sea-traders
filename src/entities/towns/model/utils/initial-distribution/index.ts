import { TownsEntities } from '../../types';
import { getInitialTowns } from '../get-initial-towns';
import { fillComplexProducts } from './fill-complex-products';
import { fillMultyProducts } from './fill-multy-products';
import { fillLonelyAndSimpleProducts } from './fill-lonely-and-products';


/** 
 * Начальное распределение производства продуктов по городам
 */
export const initialDistributionProduction = (): TownsEntities => {
  const
    entities: TownsEntities = getInitialTowns();
  
  fillMultyProducts(entities);           // Распределяем производства Multy продуктов
  fillComplexProducts(entities);         // Распределяем производства Complex продуктов
  fillLonelyAndSimpleProducts(entities); // Распределяем производства Lonely & Simple продуктов
  
  return entities
}
