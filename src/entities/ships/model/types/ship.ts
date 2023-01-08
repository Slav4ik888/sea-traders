import { Event } from 'features/ui';
import { ShipAction } from './actions';
import { Cargo } from './cargo';
import { ShipLocation } from './locations';
import { ShipBase } from './ship-base';


export interface ShipCondition {
  cargo    : Cargo[]
  crew     : number
  cannons  : number
  hp       : number
}


export interface Ship extends ShipBase {
  id        : string
  action    : ShipAction
  location  : ShipLocation // Где сейчас корабль

  condition : ShipCondition
  
  changes   : Event[]
  createdAt : string
}
