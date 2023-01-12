import { FC, memo } from 'react';
import { TradeCard } from 'entities/products';
import { ShipsOnMap } from 'entities/ships';
import { TownsOnMap } from 'entities/towns';
import { MainBackground, MainHelpers, MainPlayerPanel } from 'widgets';
import s from './index.module.scss';
import { TownsPointsMaker } from 'widgets/dev';


/** Главная страница */
export const RootPage: FC = memo(() => {
  
  return (
    <div className={s.root} id='main'>
      <MainBackground />
      <TownsPointsMaker />
      {/* <TownsOnMap /> */}
      <MainHelpers />
      <MainPlayerPanel />
      <ShipsOnMap />
      <TradeCard />
    </div>
  );
});
