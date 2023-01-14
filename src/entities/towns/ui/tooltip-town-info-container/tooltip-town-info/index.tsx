import { FC, memo } from 'react';
import { Town } from '../../../model';
import { useUI } from 'features/ui';
import { TownProductions } from './town-productions';
import { getTownPosition } from './utils';
import s from './index.module.scss';
import { TooltipTownTitle } from './town-title';



interface Props {
  town             : Town
  openTitle?       : boolean
  openDwellers?    : boolean
  openProductions? : boolean
}


export const TooltipTownInfo: FC<Props> = memo(({ openTitle, openDwellers, openProductions, town }) => {
  const
    { displayMapVisible } = useUI(),
    position = getTownPosition(displayMapVisible);

  return (
    <div
      // id        = 'tooltip-town-title'
      className = {s.root}
      style     = {position}
    >
      <TooltipTownTitle
        openTitle    = {openTitle}
        title        = {town.title}
        openDwellers = {openDwellers}
        dwellers     = {town.dwellers}
      />
      
      <TownProductions
        open     = {openProductions}  
        townName = {town.title}
        produces = {town.produces}
      />
    </div>
  )
});
