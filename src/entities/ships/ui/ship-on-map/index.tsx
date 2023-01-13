import { FC, memo } from 'react';
import { cn } from 'shared/lib';
import { Ship } from '../../model/types';
import s from './index.module.scss';


const
  shipIcon = require('shared/assets/icons/ship3.png');

interface Props {
  ship: Ship
}

export const ShipOnMap: FC<Props> = memo(({ ship }) => {
  const
    Y = ship.location.point.Y,
    X = ship.location.point.X,
    top     = Y - 30, // bottom ship
    left    = X - 13, // center ship
    dotTop  = Y - 2,
    dotLeft = X - 2;  // 2 half past from dot width

  // console.log('Y:', Y, 'X:', X);

  return (
    <>
      <div
        id        = {`ship-${ship.id}`}
        className = {cn(s.root, {}, [])}
        style     = {{ top, left }}
      >
        <img src={shipIcon} className={s.icon} />
      </div>
      <div className={s.dot} style={{ top: dotTop, left: dotLeft }} />
    </>
  )
});
