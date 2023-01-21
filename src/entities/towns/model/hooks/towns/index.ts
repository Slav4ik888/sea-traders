import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Town, TownMarket, TownName } from '../../types';
import { selectGameLevel } from 'entities/game/model/selectors';
import { getInitialMarkets } from '../../utils';
import { StateSchema } from 'app/providers/store';
import { ProductId } from 'entities/products';


export const useTowns = () => {
  const
    dispatch = useAppDispatch(),

    entities = useSelector(s.selectEntities),
    towns = Object.values(entities),

    selectedTown = useSelector(s.selectSelectedTown),
    selectedTownName = useSelector(s.selectSelectedTownName),
    selectTownName = (townname: TownName) => dispatch(actions.selectTownName(townname)),
    updateTown = (town: Town) => dispatch(actions.updateTown(town)),

    markets = useSelector(s.selectMarkets),
    selectedMarket = useSelector((state: StateSchema) => s.selectMarketByTownname(state, selectedTownName)),
    setTownsMarkets = () => dispatch(actions.setTownsMarkets(getInitialMarkets(useSelector(selectGameLevel)))),
    updateTownMarket = (townname: TownName, productId: ProductId, rangeValue: number, ) => dispatch(actions.updateTownMarket({ townname, productId, rangeValue }));


  return {
    entities,
    towns,
    
    selectedTown,
    selectedTownName,
    selectTownName,
    updateTown,

    markets,
    selectedMarket,
    setTownsMarkets,
    updateTownMarket
  }
};
