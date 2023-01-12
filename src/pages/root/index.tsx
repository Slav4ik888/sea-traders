import { FC, memo } from 'react';
import { TradeCard } from 'entities/products';
import { ShipsOnMap } from 'entities/ships';
import { TownsOnMap } from 'entities/towns';
import { MainBackground, MainHelpers, MainPlayerPanel } from 'widgets';
import s from './index.module.scss';


/** Главная страница */
export const RootPage: FC = memo(() => {
  
  return (
    <div className={s.root} id='main'>
      <MainBackground />
      <TownsOnMap />
      <MainHelpers />
      <MainPlayerPanel />
      <ShipsOnMap />
      <TradeCard />
    </div>
  );
});
