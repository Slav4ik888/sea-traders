import { getCurrentTime } from 'shared/utils';
import { Ship, ShipAction, ShipCondition, ShipLocation, ShipModel, ShipsEntities } from '../../types';
import { createShipId } from './create-ship-id';



export interface CreateShipConfig {
  entities  : ShipsEntities
  playerId  : string
  model     : ShipModel
  location  : ShipLocation
  condition : ShipCondition
}


export const createShip = (config: CreateShipConfig): Ship => {
  const { entities, playerId, model, location, condition } = config;

  return {
    id        : createShipId(entities),
    playerId,
    model,
    action    : ShipAction.IN_TOWN,
    location,
    condition,

    changes   : [],
    createdAt : getCurrentTime()
  }
}
