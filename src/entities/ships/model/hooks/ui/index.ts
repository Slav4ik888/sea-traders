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
    
    activeShipId    = useSelector(s.selectActiveShipId),
    setActiveShipId = (shipId: string) => dispatch(actions.setActiveShipId(shipId)),
    relocateShip    = (shipId: string, townName: TownName) => dispatch(actions.relocateShip({ shipId, townName }));

  return {
    entities,
    ships,
    ship,
    addShip,
    addShips,

    activeShipId,
    setActiveShipId,
    relocateShip
  }
};
