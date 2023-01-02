import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Town } from '../../types';
import { GameLevel } from 'features/ui';
import { getInitialMarkets } from '../../utils';



export const useTowns = () => {
  const
    dispatch                = useAppDispatch(),

    selectedTownForTrade    = useSelector(s.selectSelectedTownForTrade),
    markets                 = useSelector(s.selectMarkets),

    setTownsMarkets         = (gameLevel: GameLevel) => dispatch(actions.setTownsMarkets(getInitialMarkets(gameLevel))),
    setSelectedTownForTrade = (town: Town) => dispatch(actions.setSelectedTownForTrade(town));


  return {
    selectedTownForTrade,
    markets,
    setTownsMarkets,
    setSelectedTownForTrade
  }
};
