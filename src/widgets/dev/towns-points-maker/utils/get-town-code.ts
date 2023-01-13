import { TownName } from 'entities/towns';
import { Point } from 'features/ui';



export const getTownCode = (
  townName  : TownName,
  pointTown : Point,
  pointPort : Point
) => `
  {
    title      : TownName.${townName},
    points     : {
      town: { X: ${pointTown?.X}, Y: ${pointTown?.Y} },
      port: { X: ${pointPort?.X}, Y: ${pointPort?.Y} }
    },
    dwellers   : undefined,
    produces   : [],
    highDemand : []
  },`;
