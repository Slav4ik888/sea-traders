import { FC, memo } from 'react';
import { TOWNS_NAMES_VALUES_SORTED } from 'entities/towns';
import s from './index.module.scss';



export const TownsRoutesHeader: FC = memo(() => {
  
  return (
    <div className={s.root}>
      {
        TOWNS_NAMES_VALUES_SORTED.map(townname => (
          <div
            key       = {townname}
            className = {s.cell}
          >
            <span className={s.label}>
              {townname}
            </span>
          </div>
        ))
      }
    </div>
  )
});
