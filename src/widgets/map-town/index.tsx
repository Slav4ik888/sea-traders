import { FC, memo } from 'react';
import { Town, TownName, useTowns } from 'entities/towns';
import { TooltipTownInfo } from './tooltip-town-info';
import { useHover } from 'shared/lib';
import s from './index.module.scss';
import { useUI } from 'features/ui';



interface Props {
  town: Town
}

/** Town on map */
export const MapTown: FC<Props> = memo(({ town }) => {
  const
    { displayMapVisibleTownsNames, displayMapVisibleDwellers, displayMapVisibleProducts } = useUI(),
    [ isHover, bindHover ] = useHover({ enterDelay: 500 }),
    left = `${town.point.X}px`,
    top  = `${town.point.Y}px`;

  // const opens = town.title === TownName.FloridaKeys ? true : false;
  
  return (
    <div
      {...bindHover}
      className = {s.root}
      style     = {{ top, left }}
    >
      <img
        id        = 'tooltip-town-info'
        src       = {require('shared/assets/towns/icons/town-icon.png')}
        alt       = 'town-icon'
        className = {s.icon}
      />
      {
        (
          isHover ||
          displayMapVisibleTownsNames ||
          displayMapVisibleDwellers ||
          displayMapVisibleProducts
        ) && <TooltipTownInfo
          open = {isHover}
          town = {town}
        />
      }
    </div>
  )
});
