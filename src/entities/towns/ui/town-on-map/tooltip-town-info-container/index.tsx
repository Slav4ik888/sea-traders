import { FC, memo } from 'react';
import { Town } from '../../../model';
import { TooltipTownInfo } from '../tooltip-town-info';
import { useUI } from 'features/ui';



interface Props {
  isHover    : boolean
  town       : Town
}

export const TooltipTownInfoContainer: FC<Props> = memo(({ isHover, town }) => {
  const {
    displayMapVisibleTownsNames, displayMapVisibleDwellers, displayMapVisibleProducts, devChangeTownsPoint
  } = useUI();
  
  if (devChangeTownsPoint) return null;

  return (
    <>
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
    </>
  )
});
