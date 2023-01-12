import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { DisplaySize, DisplayMapVisible } from '../../types';



export const useUI = () => {
  const
    dispatch = useAppDispatch(),

    displaySize    = useSelector(s.selectDisplaySize),
    setDisplaySize = (size: DisplaySize) => dispatch(actions.setDisplaySize(size)),

    displayMapVisible           = useSelector(s.selectDisplayMapVisible),
    displayMapVisibleTownsNames = useSelector(s.selectDisplayMapVisibleTownsNames),
    displayMapVisibleDwellers   = useSelector(s.selectDisplayMapVisibleDwellers),
    displayMapVisibleProducts   = useSelector(s.selectDisplayMapVisibleProducts),
    setDisplayMapVisible        = (visibles: DisplayMapVisible) => dispatch(actions.setDisplayMapVisible(visibles)),

    devChangeTownsPoint = useSelector(s.selectDevChangeTownsPoint);

  return {
    displaySize,
    setDisplaySize,
    
    displayMapVisible,
    displayMapVisibleTownsNames,
    displayMapVisibleDwellers,
    displayMapVisibleProducts,
    setDisplayMapVisible,

    devChangeTownsPoint
  }
};
