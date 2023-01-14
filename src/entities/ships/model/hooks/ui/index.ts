import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Ship, ShipsEntities } from '../../types';
import { StateSchema } from 'app/providers/store';
import { TownName } from 'entities/towns';


export interface Config {
  id?: string
}

export const useShips = (config: Config = {}) => {
  const
    { id }   = config,
    dispatch = useAppDispatch(),

    entities = useSelector(s.selectEntities),
    ships    = Object.values(entities),
    
    ship     = useSelector((state: StateSchema) => s.selectShipById(state, id)),
    addShip  = (ship: Ship) => dispatch(actions.addShip(ship)),
    addShips = (entities: ShipsEntities) => dispatch(actions.addShips(entities)),
    
    activeShipId = useSelector(s.selectActiveShipId),
    activateShip = (shipId: string) => dispatch(actions.activateShip(shipId)),
    
    targetTown         = useSelector(s.selectTargetTown),
    activateTargetTown = (action: boolean) => dispatch(actions.activateTargetTown(action)),
    relocateShip       = (townName: TownName) => dispatch(actions.relocateShip({ activeShipId, townName }));

  
  return {
    entities,
    ships,
    ship,
    addShip,
    addShips,

    activeShipId,
    activateShip,

    targetTown,
    activateTargetTown,
    relocateShip
  }
};
