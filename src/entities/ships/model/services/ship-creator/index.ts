import { getCurrentTime } from 'shared/utils';
import { Ship, ShipAction, ShipCondition, ShipLocation, ShipModel } from '../../types';
import { createShipId } from './create-ship-id';



export interface CreateShipConfig {
  model     : ShipModel
  location  : ShipLocation
  condition : ShipCondition
}


export const createShip = (config: CreateShipConfig): Ship => {
  const { model, location, condition } = config;

  return {
    id        : createShipId(),
    model,
    action    : ShipAction.IN_TOWN,
    location,
    condition,

    changes   : [],
    createdAt : getCurrentTime()
  }
}
