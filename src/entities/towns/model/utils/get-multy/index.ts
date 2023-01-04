import { ProductName, PRODUCTS, ProductType } from '../../../../products';

/** Returns [] by ProductType.MULTIPLE */
export const getMulty = (produces: ProductName[]): ProductName[] => {
  if (!produces) return [];

  return produces
    .filter((productName) => PRODUCTS[productName].type === ProductType.MULTIPLE)
}
