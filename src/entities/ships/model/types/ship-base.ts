import { ShipModel } from './ships-models';

export interface ShipBase {
  model    : ShipModel
  capacity : number // Вместимость
  cost     : number
  crew     : number
  cannons  : number
  hp       : number // Health / Power
  speed    : number
  minSpeed : number
  draught  : number
  turning  : number
  upkeep   : number // Cost day
}
