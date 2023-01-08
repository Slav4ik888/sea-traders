import { Ship } from 'entities/ships';


export interface PlayerWealth {
  money: number
}

export interface Player {
  wealth: PlayerWealth
  ships: Ship[]
}
