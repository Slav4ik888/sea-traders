import { FC, memo, useCallback, useMemo } from 'react';
import { Town, TownName } from '../../model';
import { cn, useHover } from 'shared/lib';
import { TooltipTownInfoContainer } from '../tooltip-town-info-container';
import s from './index.module.scss';
import { useShips } from 'entities/ships';


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
    [isHover, bindHover] = useHover({ enterDelay: 800 }),
    { targetTown } = useShips(),
    activeIcon = useMemo(() => isHover ? iconHover : icon, [isHover]),
    left = `${town.points.town.X}px`,
    top  = `${town.points.town.Y}px`;

  
  const handlerClick = () => onClick(town.title);

  // const opens = town.title === TownName.FloridaKeys ? true : false;
  
  return (
    <div
      {...bindHover}
      className = {cn(s.root, {[s.targetTown]: targetTown})}
      style     = {{ top, left }}
    >
      <img
        id        = 'tooltip-town-info'
        src       = {activeIcon}
        alt       = 'town-icon'
        className = {s.icon}
        onClick   = {handlerClick}
      />
      <TooltipTownInfoContainer
        isHover = {isHover && !targetTown}
        town    = {town}
      />
    </div>
  )
});
