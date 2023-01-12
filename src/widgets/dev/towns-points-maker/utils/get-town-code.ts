import { Point } from 'features/ui';

export const getTownCode = (
  selectedTown : string,
  point        : Point
) => `
  {
    title      : TownName.${selectedTown},
    point      : { X: ${point.X}, Y: ${point.Y} },
    produces   : [],
    highDemand : []
  },`;
