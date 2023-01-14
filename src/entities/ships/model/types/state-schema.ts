import { Ship } from './ship';

export interface ShipsEntities {
  [id: string]: Ship
}

export interface StateSchemaShips {
  entities     : ShipsEntities
  activeShipId : string
  targetTown   : boolean
}
