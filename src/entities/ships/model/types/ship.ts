import { Event } from 'features/ui';
import { ShipModel } from '.';
import { ShipAction } from './actions';
import { Cargo } from './cargo';
import { ShipLocation } from './locations';



export interface ShipCondition {
  cargo    : Cargo[]
  crew     : number
  cannons  : number
  hp       : number
}


export interface Ship {
  id        : string
  playerId  : string
  model     : ShipModel
  action    : ShipAction
  location  : ShipLocation // Где сейчас корабль

  condition : ShipCondition
  
  changes   : Event[]
  createdAt : number // In milliseconds
}
