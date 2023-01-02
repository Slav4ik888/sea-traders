import { FC } from 'react';
// import { MapGrid } from 'entities/map';
import { TradeCard } from 'entities/products/ui';
import { TOWNS } from 'entities/towns';
import Image from 'react-image-webp';
// import { CoordsMaker } from 'widgets/dev/coords-maker';
import { MapTown } from 'widgets/map-town';
import s from './index.module.scss';


export const MainBackground: FC = () => {
  
  return (
    <div className={s.root} id='main'>
      <Image
        webp      = {require('shared/assets/maps/main-map.webp')}
        alt       = 'Background main map'
        className = {s.mainMap}
      />
      {
        TOWNS.map(town => <MapTown key={town.title} town={town} />)
      }
      <TradeCard />
      {/* <MapGrid /> */}
      {/* <CoordsMaker /> */}
    </div>
  )
};
