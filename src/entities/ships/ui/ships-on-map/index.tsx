import { TOWNS } from 'entities/towns';
import { FC, memo, useCallback } from 'react';
import { getRandomNumber } from 'shared/utils';
import { useShips } from '../../model/hooks';
import { ShipOnMap } from '../ship-on-map';



export const ShipsOnMap: FC = memo(() => {
  const { ships, activeShipId, setActiveShipId, relocateShip } = useShips();

  const handlerShipClick = useCallback((id: string) => {
    console.log('id: ', id);
    if (activeShipId === id) relocateShip(id, TOWNS[getRandomNumber(0, 59)].title)
    else setActiveShipId(id);
  }, [activeShipId]);


  return (
    <>
      {
        ships.map((ship) => <ShipOnMap
          key     = {ship.id}
          ship    = {ship}
          onClick = {handlerShipClick}
        />)
      }
    </>
  )
});
