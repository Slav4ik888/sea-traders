import { FC, memo } from 'react';
import { TownName } from '../../../../model';
import { useUI } from 'features/ui';
import { TooltipTownDwellers } from '../town-dwellers';
import { getTownPosition } from '../utils';
import { TooltipTownTitleText } from './title';
import s from './index.module.scss';



interface Props {
  openTitle?    : boolean
  openDwellers? : boolean
  title?        : TownName
  dwellers?     : number
}


export const TooltipTownTitle: FC<Props> = memo(({ openTitle, openDwellers, title, dwellers }) => {
  const
    { displayMapVisible, displayMapVisibleTownsNames, displayMapVisibleDwellers } = useUI(),
    position = getTownPosition(displayMapVisible);

  if (!openTitle && !openDwellers && !displayMapVisibleTownsNames && !displayMapVisibleDwellers) return null;


  return (
    <div
      className = {s.root}
      style     = {position}
    >
      <TooltipTownTitleText
        open  = {openTitle}
        title = {title}
      />
      <TooltipTownDwellers
        open     = {openDwellers}
        dwellers = {dwellers}
      />
    </div>
  )
});
