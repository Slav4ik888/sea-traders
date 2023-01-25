import { FC, memo } from 'react';
import { TownsRoutesList } from './towns-routes-list';
import { TownsRoutesHeader } from './towns-routes-header';
import s from './index.module.scss';



export const TownsRoutesTable: FC = memo(() => {

  return (
    <div className={s.root}>
      <div className={s.content}>
        <TownsRoutesHeader />
        <TownsRoutesList />
      </div>
    </div>
  )
});
