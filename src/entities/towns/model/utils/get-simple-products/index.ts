import { Product, ProductType } from 'entities/products';


export const getSimpleProducts = (products: Product[]): Product[] => {
  if (!products?.length) return []

  return products.filter(p => p.type === ProductType.SIMPLE)
}
