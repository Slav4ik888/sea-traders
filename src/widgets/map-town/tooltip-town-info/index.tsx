import { FC, memo } from 'react';
import { Town } from 'entities/towns';
import { Position, useUI } from 'features/ui';
import { TownProductions } from './town-productions';
import s from './index.module.scss';
import { TownDwellers } from './town-dwellers';
import { getTownPosition } from './utils';



interface Props {
  open: boolean
  town: Town
}


export const TooltipTownInfo: FC<Props> = memo(({ open, town }) => {
  const
    { displayMapVisible, displayMapVisibleTownsNames, displayMapVisibleDwellers, displayMapVisibleProducts } = useUI(),
    position = getTownPosition(displayMapVisible);

  return (
    <div
      id        = 'tooltip-town-title'
      className = {s.root}
      style     = {position}
    >
      {
        (open || displayMapVisibleTownsNames || displayMapVisibleDwellers) &&
          <div className={s.title}>
            {
              (open || displayMapVisibleTownsNames) && town.title
            }
            {
              (open || displayMapVisibleDwellers) && <TownDwellers town={town} />
            }
          </div>
      }
      {
        (open || displayMapVisibleProducts) && <TownProductions town={town} />
      }
    </div>
  )
});
