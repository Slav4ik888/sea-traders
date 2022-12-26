import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { MapErrors, MapType, MapCell } from '../../types';
import { useAppDispatch } from 'shared/lib';


export const useMap = () => {
  const
    dispatch     = useAppDispatch(),

    map          = useSelector(s.selectMap),
    errors       = useSelector(s.selectErrors),
    selectedCell = useSelector(s.selectSelectedCell),
    
    setMap       = (map: MapType) => dispatch(a.setMap(map)),
    setErrors    = (errors: MapErrors) => dispatch(a.setErrors(errors)),
    setSelectedCell = (cell: MapCell) => dispatch(a.setSelectedCell(cell));
  
  return {
    map,
    errors,
    selectedCell,

    setMap,
    setErrors,
    setSelectedCell
  }
};
