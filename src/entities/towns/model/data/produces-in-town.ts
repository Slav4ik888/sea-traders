import { ProductName } from '../../../products';

/** Сколько должно быть производств каждого Product */
export const PRODUCES_IN_TOWNS: Record<ProductName, number > = {
  [ProductName.Wood]: 17,
  [ProductName.Bricks]: 18,
  [ProductName.Sugar]: 19,
  [ProductName.Textiles]: 18,
  [ProductName.Wheat]: 18,
  [ProductName.Corn]: 19,
  [ProductName.Fruits]: 18,
  [ProductName.Metal]: 18,
  [ProductName.Hemp]: 18,
  [ProductName.Cotton]: 18,
  [ProductName.Dyes]: 9,
  [ProductName.Tools]: 10,
  [ProductName.Coffee]: 13,
  [ProductName.Cacao]: 16,
  [ProductName.Tobacco]: 21,
  [ProductName.Meat]: 10,
  [ProductName.Clothing]: 10,
  [ProductName.Bread]: 10,
  [ProductName.Ropes]: 10,
  [ProductName.Rum]: 10,
}
