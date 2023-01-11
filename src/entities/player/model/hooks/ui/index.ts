import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { StateSchema } from 'app/providers/store';
import { Ship } from 'entities/ships';


export interface Config {
  id?: string
}

export const usePlayer = (config: Config = {}) => {
  const
    { id }   = config,
    dispatch = useAppDispatch(),

    playerId = useSelector(s.selectPlayerId),
    entities = useSelector(s.selectEntities),
    ship     = useSelector((state: StateSchema) => s.selectShipById(state, id)),
    addShip  = (ship: Ship) => dispatch(actions.addShip(ship)),
    
    money    = useSelector(s.selectMoney),
    addMoney = (money: number) => dispatch(actions.addMoney(money));


  return {
    playerId,
    entities,
    ship,
    addShip,
    
    money,
    addMoney
  }
};
