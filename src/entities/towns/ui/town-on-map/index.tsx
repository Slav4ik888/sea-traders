import { FC, memo, useEffect, useMemo } from 'react';
import { Town, TownName } from '../../model';
import { cn } from 'shared/lib/class-names';
import { TooltipTownInfoContainer } from '../tooltip-town-info-container';
import { useShips } from 'entities/ships';
import { useHover } from 'shared/lib/hooks';
import s from './index.module.scss';



const
  icon = require('shared/assets/towns/icons/town-icon.png'),
  iconHover = require('shared/assets/towns/icons/town-icon-hover.png');


interface Props {
  town     : Town
  onClick? : (townName: TownName) => void
}

/** Town on map */
export const TownOnMap: FC<Props> = memo(({ town, onClick }) => {
  const
    [isHover, bindHover, { setDelay }] = useHover({ enterDelay: 800 }),
    { targetTown } = useShips(),
    { activeShip } = useShips(),
    activeIcon = useMemo(() => isHover ? iconHover : icon, [isHover]),
    left = `${town.points.town.X}px`,
    top  = `${town.points.town.Y}px`;

  useEffect(() => {
    setDelay(activeShip ? 0 : 800);
  }, [activeShip]);

  const handlerClick = () => onClick(town.title);

  // const opens = town.title === TownName.FloridaKeys ? true : false;
  
  return (
    <div
        {...bindHover}
      className = {s.root}
      style     = {{ top, left }}
    >
      <div className = {cn(s.iconBox, {[s.targetTown]: targetTown})}>
        <img
          id        = 'tooltip-town-info'
          src       = {activeIcon}
          alt       = 'town-icon'
          className = {s.icon}
          onClick   = {handlerClick}
        />
      </div>
      <TooltipTownInfoContainer
        isHover = {isHover && !targetTown}
        town    = {town}
      />
    </div>
  )
});
