import { Town } from './town';
import { TownsMarkets } from './towns-markets';


export interface TownsEntities {
  [townName: string]: Town
}


export interface StateSchemaTowns {
  entities             : TownsEntities
  selectedTownForTrade : Town
  markets              : TownsMarkets
}
