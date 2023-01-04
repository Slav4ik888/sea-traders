import { ProductName } from './product-names';

/** Что требуется для производства */
export interface RequiredComponentForProduction {
  productName : ProductName
  value       : number // Сколько единиц требуется этого, для производства 1 единицы последующего
}
