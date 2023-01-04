import { ProductName, ProductType } from '../../../../../../products';
import { getProductsByType } from '../../../get-products-by-type';

/** Returns MultyProductName[] */
export const getAllMultyProducts = (): ProductName[] =>
  getProductsByType(ProductType.MULTIPLE);
