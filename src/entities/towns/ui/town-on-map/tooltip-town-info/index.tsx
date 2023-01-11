import { FC, memo } from 'react';
import { Town } from '../../../model';
import { Position, useUI } from 'features/ui';
import { TownProductions } from './town-productions';
import { TownDwellers } from './town-dwellers';
import { getTownPosition } from './utils';
import s from './index.module.scss';



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
