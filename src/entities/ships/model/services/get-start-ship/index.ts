import { getTownByTownName, TownName } from 'entities/towns';
import { SHIPS } from '../../data';
import { ShipModel } from '../../types';
import { createShip } from '../ship-creator';

const
  START_TOWN       = TownName.PortRoyale,
  START_SHIP_MODEL = ShipModel.PINNACE,
  START_SHIP = SHIPS[START_SHIP_MODEL];

/**
 * Returns start ship when start game
 */
export const getStartShip = (townName?: TownName) => createShip({
  model: START_SHIP_MODEL,
  location: {
    point: getTownByTownName(townName || START_TOWN).point
  },
  condition: {
    cargo    : [],
    crew     : START_SHIP.crew,
    cannons  : START_SHIP.cannons,
    hp       : START_SHIP.hp
  }
});
