import { ProductName } from '../types/product-names';
import { ProductId, Product, ProductType } from '../types/product';


export const PRODUCTS: Record<ProductId, Product> = {
  [ProductName.Wood]: {
    id           : ProductName.Wood,
    type         : ProductType.SIMPLE,
    order        : 100,
    iconFilename : 'wood.png'
  },
  [ProductName.Bricks]: {
    id           : ProductName.Bricks,
    type         : ProductType.SIMPLE,
    order        : 200,
    iconFilename : 'bricks.png'
  },
  [ProductName.Wheat]: {
    id           : ProductName.Wheat,
    type         : ProductType.SIMPLE,
    order        : 300,
    iconFilename : 'wheat.png'
  },
  [ProductName.Fruits]: {
    id           : ProductName.Fruits,
    type         : ProductType.SIMPLE,
    order        : 400,
    iconFilename : 'fruits.png'
  },
  [ProductName.Corn]: {
    id           : ProductName.Corn,
    type         : ProductType.SIMPLE,
    order        : 500,
    iconFilename : 'corn.png'
  },
  [ProductName.Sugar]: {
    id           : ProductName.Sugar,
    type         : ProductType.SIMPLE,
    order        : 600,
    iconFilename : 'sugar.png'
  },
  [ProductName.Hemp]: {
    id           : ProductName.Hemp,
    type         : ProductType.SIMPLE,
    order        : 700,
    iconFilename : 'hemp.png'
  },
  [ProductName.Textiles]: {
    id           : ProductName.Textiles,
    type         : ProductType.COMPLEX,
    order        : 800,
    iconFilename : 'textiles.png'
  },
  [ProductName.Metal]: {
    id           : ProductName.Metal,
    type         : ProductType.COMPLEX,
    order        : 900,
    iconFilename : 'metal.png'
  },
  [ProductName.Cotton]: {
    id           : ProductName.Cotton,
    type         : ProductType.SIMPLE,
    order        : 1000,
    iconFilename : 'cotton.png'
  },
  [ProductName.Tools]: {
    id           : ProductName.Tools,
    type         : ProductType.MULTIPLE,
    order        : 1100,
    iconFilename : 'tools.png'
  },
  [ProductName.Dyes]: {
    id           : ProductName.Dyes,
    type         : ProductType.SIMPLE,
    order        : 1200,
    iconFilename : 'dyes.png'
  },
  [ProductName.Coffee]: {
    id           : ProductName.Coffee,
    type         : ProductType.MULTIPLE,
    order        : 1300,
    iconFilename : 'coffee.png'
  },
  [ProductName.Cacao]: {
    id           : ProductName.Cacao,
    type         : ProductType.MULTIPLE,
    order        : 1400,
    iconFilename : 'cacao.png'
  },
  [ProductName.Tobacco]: {
    id           : ProductName.Tobacco,
    type         : ProductType.SIMPLE,
    order        : 1500,
    iconFilename : 'tobacco.png'
  },
  [ProductName.Meat]: {
    id           : ProductName.Meat,
    type         : ProductType.COMPLEX,
    order        : 1600,
    iconFilename : 'meat.png'
  },
  [ProductName.Clothing]: {
    id           : ProductName.Clothing,
    type         : ProductType.MULTIPLE,
    order        : 1700,
    iconFilename : 'clothing.png'
  },
  [ProductName.Ropes]: {
    id           : ProductName.Ropes,
    type         : ProductType.COMPLEX,
    order        : 1800,
    iconFilename : 'ropes.png'
  },
  [ProductName.Rum]: {
    id           : ProductName.Rum,
    type         : ProductType.COMPLEX,
    order        : 1900,
    iconFilename : 'rum.png'
  },
  [ProductName.Bread]: {
    id           : ProductName.Bread,
    type         : ProductType.COMPLEX,
    order        : 2000,
    iconFilename : 'bread.png'
  }
}
