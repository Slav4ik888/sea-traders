import { TownName } from '.';
import { Town } from './town';
import { TownsMarkets } from './towns-markets';


export interface TownsEntities {
  [townName: string]: Town
}


export interface StateSchemaTowns {
  entities         : TownsEntities
  selectedTownName : TownName
  markets          : TownsMarkets

  showAllTowns     : boolean
}
