import { Point } from 'features/ui';


export const getTownPortCode = (
  pointPort : Point
) => `[{ X: ${pointPort?.X}, Y: ${pointPort?.Y} }]`;
