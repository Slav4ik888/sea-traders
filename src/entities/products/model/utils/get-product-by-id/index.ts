import { ProductId } from '../..';
import { PRODUCTS } from '../../data';

export const getProductById = (productId: ProductId) => PRODUCTS[productId];
