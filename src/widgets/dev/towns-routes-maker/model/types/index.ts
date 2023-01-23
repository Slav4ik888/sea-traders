import { TownName, TownsRoutes } from 'entities/towns';


export interface StateSchemaTownsRoutesMaker {
  townsRoutes     : TownsRoutes
  selectedTown1   : TownName
  selectedTown2   : TownName
  selectedMileage : number
}

export interface UpdateTownsRoutes {
  selectedTown1   : TownName
  selectedTown2   : TownName
  selectedMileage : number
}
