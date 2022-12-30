import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Town } from '../../types';



export const useTowns = () => {
  const
    dispatch                = useAppDispatch(),

    selectedTownForTrade    = useSelector(s.selectSelectedTownForTrade),
    
    setSelectedTownForTrade = (town: Town) => dispatch(actions.setSelectedTownForTrade(town));


  return {
    selectedTownForTrade,
    setSelectedTownForTrade
  }
};
