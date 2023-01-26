import { TOWNS_NAMES_VALUES_SORTED } from 'entities/towns';
import { FC, memo } from 'react';
import { TownRouteRow } from './town-route-row';
import s from './index.module.scss';



export const TownsRoutesList: FC = memo(() => {

  return (
    <div className={s.root}>
      {
        TOWNS_NAMES_VALUES_SORTED.map(townnameRow => (
          <TownRouteRow
            key             = {townnameRow}
            townnameRow     = {townnameRow}
          />
        ))
      }
        
    </div>
  )
});
