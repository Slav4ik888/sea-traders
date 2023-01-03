import { PRODUCTS, ProductType } from '../../../../products';

/** Returns amount of Product by ProductType */
export const getAmountProductByType = (type: ProductType): number => Object
  .values(PRODUCTS)
  .reduce((acc, p) => {
    if (p.type === type) acc += 1;
    return acc
  }, 0)
