import * as s from '../selectors';
import { actions } from '../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { TownName } from 'entities/towns';
import { UpdateTownsRoutes } from '../types';



export const useDevTownsRoutesMaker = () => {
  const
    dispatch = useAppDispatch(),

    selectedTown1 = useSelector(s.selectSelectedTown1),
    selectedTown2 = useSelector(s.selectSelectedTown2),
    setSelectedTown = (townName: TownName, num: 1 | 2) => dispatch(actions.setSelectedTown({ townName, num })),
    
    selectedMileage = useSelector(s.selectSelectedMileage),
    setSelectedMileage = (value: number) => dispatch(actions.setSelectedMileage(value)),
    
    townsRoutes = useSelector(s.selectSelectedTownsRoutes),
    updateTownRoute = (data: UpdateTownsRoutes) => dispatch(actions.updateTownRoute(data));
    
    
  
  return {
    selectedTown1,
    selectedTown2,
    setSelectedTown,

    selectedMileage,
    setSelectedMileage,
    
    townsRoutes,
    updateTownRoute
  }
};
