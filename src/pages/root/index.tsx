import { TradeCard } from 'entities/products';
import { ShipsOnMap } from 'entities/ships';
import { TownsOnMap } from 'entities/towns';
import { FC, memo } from 'react';
import { MainBackground, MainHelpers, MainPlayerPanel } from 'widgets';
import { CoordsMaker } from 'widgets/dev/coords-maker';
// import { ChangeMapCellType } from 'widgets/dev/change-map-cell-type';
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
      <CoordsMaker />
      {/* <ChangeMapCellType /> */}
      {/* <MapGrid /> */}
    </div>
  );
});
