import { useShips } from '../../model/hooks';
import { FC, memo } from 'react';
import { cn } from 'shared/lib';
import { ShipOnMap } from '../ship-on-map';



interface Props {
}


export const ShipsOnMap: FC<Props> = memo(() => {
  const { ships } = useShips();

  return (
    <>
      {
        ships.map((ship) => <ShipOnMap key={ship.id} ship={ship} />)
      }
    </>
  )
});
