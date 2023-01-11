import { Ship } from 'entities/ships';

export interface PlayerEntities {
  [id: string]: Ship
}

export interface StateSchemaPlayer {
  playerId : string
  entities : PlayerEntities
  money    : number
  // Trade route
}
