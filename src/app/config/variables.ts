import { Position } from 'features/ui';


export const VARIABLES = {
  MAIN_MAP_WIDTH     : 1440,
  MAIN_MAP_HEIGHT    : 1017,
  MAIN_MAP_CELL_SIZE : 5,

  TOWN_INFO_POSITION : {
    top  : '-25px',
    left : `-${100 - 14}px` // 100 - half of TooltipTownInfo, 14 - half of icon
  } as Position,
  
  // PRODUCTS IN TOWN
  MAX_MULTY_PRODUCT_IN_TOWN     : 2,
  MAX_COMPLEX_PRODUCT_IN_TOWN   : 3,
  MAX_COMPLEX_AND_MULTY_IN_TOWN : 4,
  MAX_PRODUCTS_IN_TOWN          : 5,

  DEV_CHANGE_TOWNS_POINTS : false
}
