import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { DisplaySize, GameLevel } from '../../types';



export const useUI = () => {
  const
    dispatch       = useAppDispatch(),

    gameLevel      = useSelector(s.selectGameLevel),
    displaySize    = useSelector(s.selectDisplaySize),
    
    setGameLavel   = (level: GameLevel) => dispatch(actions.setGameLavel(level)),
    setDisplaySize = (size: DisplaySize) => dispatch(actions.setDisplaySize(size));


  return {
    gameLevel,
    displaySize,
    setGameLavel,
    setDisplaySize
  }
};
