import { ProductName } from 'entities/products';
import { Point } from 'features/ui';
import { TownMarket } from './towns-markets';
import { TownName } from './towns-names';


export interface Town {
  title      : TownName
  point      : Point
  dwellers   : number        // Жители
  produces   : ProductName[]
  highDemand : ProductName[] // High Demand

  market?    : TownMarket
}
