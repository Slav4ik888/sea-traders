import { ProductName, ProductType } from '../../../../../../products';
import { getProductsByType } from '../../../get-products-by-type';

/** Returns LonelyProductName[] */
export const getAllLonelyProducts = (): ProductName[] =>
  getProductsByType(ProductType.LONELY);
