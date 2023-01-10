import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';



export const usePlayer = () => {
  const
    dispatch       = useAppDispatch(),

    money      = useSelector(s.selectMoney),
    ships      = useSelector(s.selectShip),
    
    addMoney   = (money: number) => dispatch(actions.addMoney(money));


  return {
    money,
    ships,
    addMoney
  }
};
