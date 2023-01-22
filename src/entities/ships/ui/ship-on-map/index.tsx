import { FC, memo, useEffect, useMemo, useState } from 'react';
import { useHover } from 'shared/lib/hooks';
import { Ship, useShips } from '../../model';
import { cn } from 'shared/lib/class-names';
import s from './index.module.scss';


const shipIcon = require('shared/assets/icons/ship3.png');

interface Props {
  ship     : Ship
  onClick? : (id: string) => void
}


export const ShipOnMap: FC<Props> = memo(({ ship, onClick }) => {
  const
    [isHover, bindHover] = useHover(),
    [menuOpen, setMenuOpen] = useState(false),
    { activeShipId, activateTargetTown } = useShips(),
    shipActive = useMemo(() => activeShipId === ship.id, [activeShipId]),
    Y = ship.location.point.Y,
    X = ship.location.point.X,
    top     = Y - 30, // bottom ship
    left    = X - 13, // center ship
    dotTop  = useMemo(() => shipActive ? Y - 10 : Y - 2, [shipActive, ship.location]),
    dotLeft = useMemo(() => shipActive ? X - 20 : X - 2, [shipActive, ship.location]);  // 2 half past from dot width

  useEffect(() => {
    if (shipActive && isHover && !menuOpen) {
      setMenuOpen(true);
      setTimeout(() => {
        setMenuOpen(false);
      }, 2000);
    }
  }, [isHover, shipActive]);


  const handlerClick = () => {
    onClick && onClick(ship.id);
    setMenuOpen(false);
  };

  const handlerActivateTargetTown = (e) => {
    e.stopPropagation();
    activateTargetTown(true);
    setMenuOpen(false);
  };


  return (
    <div
      {...bindHover}
      onClick={handlerClick}
    >
      <div
        id        = {`ship-${ship.id}`}
        className = {cn(s.iconBlock, {}, [])}
        style     = {{ top, left }}
      >
        <div className={s.iconActivateTargetBlock}>
        <img src={shipIcon} className={s.icon} />
          {
            menuOpen && <div
              className = {s.activateTargetTown}
              onClick   = {handlerActivateTargetTown}
            >
               Плыть в город
            </div>
          }
        </div>
      </div>

      <div
        className = {cn(s.dot, {[s.dotActive]: shipActive })}
        style     = {{ top: dotTop, left: dotLeft }}
      />
    </div>
  )
});
