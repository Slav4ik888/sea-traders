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
    
    money    = useSelector(s.selectMoney),
    addMoney = (money: number) => dispatch(actions.addMoney(money));


  return {
    playerId,
    
    money,
    addMoney
  }
};
