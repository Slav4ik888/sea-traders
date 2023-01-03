import { ProductType } from '../../../../products';
import { getAmountProductByType } from '../get-amount-product-by-type';

/** Returns amount of Multy Product */
export const getAmountMultyProduct = () =>
  getAmountProductByType(ProductType.MULTIPLE);
