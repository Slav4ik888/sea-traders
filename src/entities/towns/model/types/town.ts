import { ProductName } from 'entities/products';
import { Point } from 'features/ui';
import { TownMarket } from './towns-markets';
import { TownName } from './towns-names';


export interface TownPoints {
  town: Point
  port: Point[]
}

export interface Town {
  title      : TownName
  points     : TownPoints
  dwellers   : number        // Жители
  produces   : ProductName[]
  highDemand : ProductName[] // High Demand

  market?    : TownMarket
}
