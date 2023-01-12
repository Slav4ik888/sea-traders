import { FC, memo, useCallback, useMemo } from 'react';
import { cn, useHover } from 'shared/lib';
import { Town, useTowns } from 'entities/towns';
import s from './index.module.scss';

const
  icon = require('shared/assets/towns/icons/town-icon.png'),
  iconHover = require('shared/assets/towns/icons/town-icon-hover.png');

interface Props {
  town: Town
}

/** Town on map */
export const TownPointMaker: FC<Props> = memo(({ town }) => {
  const
    [isHover, bindHover] = useHover(),
    { selectedTown, selectTownName } = useTowns(),
    selectedCurrentTown = useMemo(() => selectedTown?.title === town.title, [selectedTown]),
    activeIcon = useMemo(() => selectedCurrentTown ? iconHover : icon, [selectedCurrentTown]),
    left = `${town.point.X}px`,
    top  = `${town.point.Y}px`;
    

  const handlerTownClick = useCallback(() => {
    selectTownName(town.title);
  }, [selectedTown, selectTownName]);


  
  return (
    <div
      {...bindHover}
      draggable
      className = {s.root}
      style     = {{ top, left }}
    >
      <img
        id        = 'tooltip-town-info'
        src       = {activeIcon}
        alt       = 'town-icon'
        className = {s.icon}
        onClick   = {handlerTownClick}
      />
    </div>
  )
});
