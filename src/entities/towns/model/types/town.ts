import { GoodName } from 'entities/good';
import { Point } from 'features/ui';
import { TownMarket } from './town-market';
import { TownName } from './towns-names';


export interface Town {
  title      : TownName
  point      : Point
  produces   : GoodName[]
  highDemand : GoodName[] // High Demand

  market     : TownMarket
}
