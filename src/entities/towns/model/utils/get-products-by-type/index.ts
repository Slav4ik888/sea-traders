import { ProductName, PRODUCTS, ProductType } from '../../../../products';

/** Returns Products[] by ProductType */
export const getProductsByType = (type: ProductType): ProductName[] => Object
  .values(PRODUCTS)
  .filter(p => p.type === type)
  .map(p => p.id)
