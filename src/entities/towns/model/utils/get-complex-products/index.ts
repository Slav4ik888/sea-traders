import { Product, ProductType } from 'entities/products';


export const getComplexProducts = (products: Product[]): Product[] => {
  if (!products?.length) return []

  return products.filter(p => p.type === ProductType.COMPLEX)
}
