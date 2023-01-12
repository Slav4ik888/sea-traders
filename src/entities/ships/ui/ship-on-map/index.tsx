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
    top = ship.location.point.Y - 30,  // bottom ship
    left = ship.location.point.X - 15; // Center ship

  return (
    <div
      className = {cn(s.root, {}, [])}
      style     = {{ top, left }}
    >
      <img src={shipIcon} className={s.icon} />
    </div>
  )
});
