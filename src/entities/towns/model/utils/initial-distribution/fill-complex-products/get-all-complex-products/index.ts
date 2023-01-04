import { ProductName, ProductType } from '../../../../../../products';
import { getProductsByType } from '../../../get-products-by-type';

/** Returns ComplexProductName[] */
export const getAllComplexProducts = (): ProductName[] =>
  getProductsByType(ProductType.COMPLEX);
