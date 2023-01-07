import { FC, memo } from 'react';
import { Town } from 'entities/towns';
import s from './index.module.scss';


interface Props {
  town: Town
}


export const TownDwellers: FC<Props> = memo(({ town }) => {
  
  
  return (
    <div className={s.root}>
      <img
        src       = {require('shared/assets/icons/dwellers.png')}
        alt       = 'dwellers'
        className = {s.icon}
      />
      <div className={s.dwellers}>
        {
          town.dwellers
        }
      </div>
    </div>
  )
});
