import { FC } from 'react';
import { Town } from 'entities/towns';
import { Position } from 'features/ui';
import { TownProductions } from './town-productions';
import s from './index.module.scss';
import { TownDwellers } from './town-dwellers';



interface Props {
  town: Town
}


export const TooltipTownInfo: FC<Props> = ({ town }) => {
  const position: Position = {
    top  : '-25px',
    left : `-${100 - 14}px` // 100 - half of TooltipTownInfo, 14 - half of icon
  };

  return (
    <div
      id        = 'tooltip-town-title'
      className = {s.root}
      style     = {position}
    >
      <div className={s.title}>
        {town.title}
        <TownDwellers town={town} />
      </div>

      <TownProductions town={town} />
    </div>
  )
};
