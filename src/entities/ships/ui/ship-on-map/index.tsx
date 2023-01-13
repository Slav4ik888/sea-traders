import { FC, memo, useMemo } from 'react';
import { cn } from 'shared/lib';
import { Ship, useShips } from '../../model';
import s from './index.module.scss';


const shipIcon = require('shared/assets/icons/ship3.png');

interface Props {
  ship     : Ship
  onClick? : (id: string) => void
}


export const ShipOnMap: FC<Props> = memo(({ ship, onClick }) => {
  const
    { activeShipId } = useShips(),
    shipActive = useMemo(() => activeShipId === ship.id, [activeShipId]),
    Y = ship.location.point.Y,
    X = ship.location.point.X,
    top     = Y - 30, // bottom ship
    left    = X - 13, // center ship
    dotTop  = useMemo(() => shipActive ? Y - 10 : Y - 2, [shipActive, ship.location]),
    dotLeft = useMemo(() => shipActive ? X - 20 : X - 2, [shipActive, ship.location]);  // 2 half past from dot width

  // console.log('Y:', Y, 'X:', X);
  const handlerClick = () => onClick && onClick(ship.id);

  return (
    <div onClick={handlerClick}>
      <div
        id        = {`ship-${ship.id}`}
        className = {cn(s.iconBlock, {}, [])}
        style     = {{ top, left }}
      >
        <img src={shipIcon} className={s.icon} />
      </div>

      <div
        className = {cn(s.dot, {[s.dotActive]: shipActive })}
        style     = {{ top: dotTop, left: dotLeft }}
      />
    </div>
  )
});
