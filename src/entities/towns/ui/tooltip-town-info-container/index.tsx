import { FC, memo } from 'react';
import { Town } from '../../model';
import { TooltipTownInfo } from './tooltip-town-info';
import { useUI } from 'features/ui';



interface Props {
  isHover    : boolean
  town       : Town
}

export const TooltipTownInfoContainer: FC<Props> = memo(({ isHover, town }) => {
  const {
    displayMapVisibleTownsNames, displayMapVisibleDwellers, displayMapVisibleProducts
  } = useUI();
  
  if (!isHover && !displayMapVisibleTownsNames && !displayMapVisibleDwellers && !displayMapVisibleProducts) return null;

  return (
    <TooltipTownInfo
      town            = {town}
      openTitle       = {isHover}
      openDwellers    = {isHover}
      openProductions = {isHover}
    />
  )
});
