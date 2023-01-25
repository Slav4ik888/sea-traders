import { TOWNS_NAMES_VALUES_SORTED } from 'entities/towns';
import { FC, memo } from 'react';
import { useDevTownsRoutesMaker } from '../../../model/hooks';
import s from './index.module.scss';
import { TownRouteRow } from './town-route-row';
import { Cell } from './town-route-row/cell';



export const TownsRoutesList: FC = memo(() => {
  const
    { townsRoutes } = useDevTownsRoutesMaker();
  
  return (
    <div className={s.root}>
      {
        TOWNS_NAMES_VALUES_SORTED.map(townname1 => (
          <TownRouteRow
            key         = {townname1}
            townnameRow = {townname1}
          />
        ))
      }
        
    </div>
  )
});
