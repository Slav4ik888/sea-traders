import { ProductName, RequiredComponentForProduction } from '../types';

/** Что требуется для производства выбранной продукции */
export const PRODUCTS_LINES: Record<ProductName, RequiredComponentForProduction[]> = {
  [ProductName.Wood]     : [],
  [ProductName.Bricks]   : [],
  [ProductName.Wheat]    : [],
  [ProductName.Fruits]   : [],
  [ProductName.Corn]     : [],
  [ProductName.Sugar]    : [],
  [ProductName.Hemp]     : [],
  [ProductName.Textiles] : [{ productName: ProductName.Cotton, value: 2 }],
  [ProductName.Metal]    : [{ productName: ProductName.Wood,   value: 2 }],
  [ProductName.Cotton]   : [],
  [ProductName.Tools]    : [{ productName: ProductName.Metal,  value: 1.5 }, { productName: ProductName.Wood, value: 2 }],
  [ProductName.Dyes]     : [],
  [ProductName.Coffee]   : [{ productName: ProductName.Tools,  value: 0.5 }],
  [ProductName.Cacao]    : [{ productName: ProductName.Tools,  value: 0.5 }],
  [ProductName.Tobacco]  : [],
  [ProductName.Meat]     : [{ productName: ProductName.Corn,   value: 4 }],
  [ProductName.Clothing] : [{ productName: ProductName.Dyes,   value: 2 }, { productName: ProductName.Textiles, value: 2 }],
  [ProductName.Ropes]    : [{ productName: ProductName.Hemp,   value: 2 }],
  [ProductName.Rum]      : [{ productName: ProductName.Wood,   value: 1 }, { productName: ProductName.Sugar, value: 2 }],
  [ProductName.Bread]    : [{ productName: ProductName.Sugar,  value: 1 }, { productName: ProductName.Wheat, value: 3 }]
}
