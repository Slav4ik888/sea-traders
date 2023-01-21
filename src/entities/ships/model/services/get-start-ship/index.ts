import { ProductName } from 'entities/products';
import { getTownByTownName, TownName } from 'entities/towns';
import { SHIPS } from '../../data';
import { Cargo, ShipModel, ShipsEntities } from '../../types';
import { createShip } from '../create-ship';



const fillCargo = (): Cargo[] => {
  const names = Object.values(ProductName);

  return new Array(names.length)
    .fill(0)
    .map((_, idx) => ({
      id: names[idx],
      amount: 0,
      price: 0
    }))
};


const
  START_TOWN       = TownName.PortRoyale,
  START_SHIP_MODEL = ShipModel.PINNACE,
  START_SHIP = SHIPS[START_SHIP_MODEL];

/**
 * Returns start ship when start game
 */
export const getStartShip = (
  entities  : ShipsEntities,
  playerId  : string,
  townName? : TownName
) => createShip({
  entities,
  playerId,
  model: START_SHIP_MODEL,
  location: {
    point: getTownByTownName(townName || START_TOWN).points.port[0]
  },
  condition: {
    cargo    : [...fillCargo()],
    crew     : START_SHIP.crew,
    cannons  : START_SHIP.cannons,
    hp       : START_SHIP.hp
  }
});
