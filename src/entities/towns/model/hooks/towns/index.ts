import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { TownName } from '../../types';
import { selectGameLevel } from 'entities/game/model/selectors';
import { getInitialMarkets } from '../../utils';



export const useTowns = () => {
  const
    dispatch            = useAppDispatch(),

    entities            = useSelector(s.selectEntities),
    towns               = Object.values(entities),

    selectedTown        = useSelector(s.selectSelectedTown),
    selectedTownName    = useSelector(s.selectSelectedTownName),
    setSelectedTownName = (townname: TownName) => dispatch(actions.setSelectedTownName(townname)),
  
    markets             = useSelector(s.selectMarkets),
    setTownsMarkets     = () => dispatch(actions.setTownsMarkets(getInitialMarkets(useSelector(selectGameLevel)))),
    
    showAllTowns        = useSelector(s.selectShowAllTowns),
    setShowAllTowns     = (flag: boolean) => dispatch(actions.setShowAllTowns(flag));


  return {
    entities,
    towns,
    selectedTown,
    selectedTownName,
    setSelectedTownName,
    markets,
    setTownsMarkets,
    showAllTowns,
    setShowAllTowns
  }
};
