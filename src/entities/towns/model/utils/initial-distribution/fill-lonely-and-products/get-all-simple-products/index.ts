import { ProductName, ProductType } from '../../../../../../products';
import { getProductsByType } from '../../../get-products-by-type';

/** Returns SimpleProductName[] */
export const getAllSimpleProducts = (): ProductName[] =>
  getProductsByType(ProductType.SIMPLE);
