import { FC, memo } from 'react';
import { cn } from 'shared/lib';
import { Ship } from '../../model/types';
import s from './index.module.scss';



interface Props {
  ship: Ship
}


export const ShipOnMap: FC<Props> = memo(({ ship }) => {

  return (
    <div
      className = {cn(s.root, {}, [])}
      style     = {{ top: ship.location.point.Y, left: ship.location.point.X }}
    >
      {
        ship.id
      }
    </div>
  )
});
