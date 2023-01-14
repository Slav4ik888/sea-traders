import { DisplayMapVisible, Position } from 'features/ui';
import { VARIABLES } from 'app/config';

const { TOWN_INFO_POSITION } = VARIABLES;


export const getTownPosition = (displayMapVisible: DisplayMapVisible): Position => {
  const { townsNames, dwellers, products } = displayMapVisible;

  if (!townsNames && !dwellers && products) return {
    ...TOWN_INFO_POSITION,
    top: '2px'
  }

  return TOWN_INFO_POSITION
}
