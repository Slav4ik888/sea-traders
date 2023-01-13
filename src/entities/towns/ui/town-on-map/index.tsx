import { FC, memo } from 'react';
import { Town } from '../../model';
import { useHover } from 'shared/lib';
import { TooltipTownInfoContainer } from './tooltip-town-info-container';
import s from './index.module.scss';



interface Props {
  town: Town
}

/** Town on map */
export const TownOnMap: FC<Props> = memo(({ town }) => {
  const
    [isHover, bindHover] = useHover({ enterDelay: 500 }),
    left = `${town.points.town.X}px`,
    top  = `${town.points.town.Y}px`;


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
      <TooltipTownInfoContainer
        isHover = {isHover}
        town    = {town}
      />
    </div>
  )
});
