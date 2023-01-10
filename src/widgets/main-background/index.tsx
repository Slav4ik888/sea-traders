import { FC, memo } from 'react';
import { TradeCard } from 'entities/products';
import { useTowns } from 'entities/towns';
import { MainHelpers, MainPlayerPanel, MapTown } from 'widgets';
import Image from 'react-image-webp';
import s from './index.module.scss';


export const MainBackground: FC = memo(() => {
  const { towns } = useTowns();

  return (
    <div className={s.root} id='main'>
      <Image
        webp      = {require('shared/assets/maps/main-map.webp')}
        alt       = 'Background main map'
        className = {s.mainMap}
      />
      {
        towns.map(town => <MapTown key={town.title} town={town} />)
      }
      <MainHelpers />
      <MainPlayerPanel />
      <TradeCard />
      {/* <MapGrid /> */}
      {/* <CoordsMaker /> */}
    </div>
  )
});
