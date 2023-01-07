import { FC, useEffect, useState } from 'react';
import { Town, TownName, useTowns } from 'entities/towns';
import { TooltipTownInfo } from './tooltip-town-info';
import { useHover } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  town: Town
}

/** Town on map */
export const MapTown: FC<Props> = ({ town }) => {
  const
    { showAllTowns } = useTowns(),
    [ isHover, bindHover ] = useHover({ enterDelay: 500 }),
    left = `${town.point.X}px`,
    top  = `${town.point.Y}px`;

  const opens = town.title === TownName.FloridaKeys ? true : false;
  
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
        (isHover || showAllTowns) && <TooltipTownInfo town={town} />
      }
    </div>
  )
};
