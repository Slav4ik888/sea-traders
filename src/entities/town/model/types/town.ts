import { GoodName } from 'entities/good';
import { TownName } from './towns-names';


export interface Town {
  title      : TownName
  produces   : GoodName[]
  highDemand : GoodName[] // High Demand
}
