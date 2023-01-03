import { Product, ProductType } from '../../../../products';


export const getMultyProducts = (products: Product[]): Product[] => {
  if (!products?.length) return []

  return products.filter(p => p.type === ProductType.MULTIPLE)
}
