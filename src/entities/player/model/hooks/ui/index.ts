import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { GameLevel } from '../../types';



export const useGame = () => {
  const
    dispatch       = useAppDispatch(),

    gameLevel      = useSelector(s.selectGameLevel),
    
    setGameLavel   = (level: GameLevel) => dispatch(actions.setGameLavel(level));


  return {
    gameLevel,
    setGameLavel
  }
};
