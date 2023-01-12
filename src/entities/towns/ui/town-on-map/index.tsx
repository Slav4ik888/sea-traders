import { FC, memo, useCallback } from 'react';
import { Town, useTowns } from '../../model';
import { useHover } from 'shared/lib';
import { TooltipTownInfoContainer } from './tooltip-town-info-container';
import s from './index.module.scss';
import { useUI } from 'features/ui';



interface Props {
  town: Town
}

/** Town on map */
export const TownOnMap: FC<Props> = memo(({ town }) => {
  const
    [isHover, bindHover] = useHover({ enterDelay: 500 }),
    { selectedTown, selectTownName, updateTown } = useTowns(),
    left = `${town.point.X}px`,
    top  = `${town.point.Y}px`;

  const handlerTownClick = useCallback(() => {
    console.log('select: ', town.title,', selectedTown: ', selectedTown?.title);
    selectTownName(selectedTown?.title === town.title ? null : town.title);
  }, [selectedTown, selectTownName]);


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
        onClick   = {handlerTownClick}
      />
      <TooltipTownInfoContainer
        isHover = {isHover}
        town    = {town}
      />
    </div>
  )
});
