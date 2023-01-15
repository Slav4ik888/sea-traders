import { Ship } from 'entities/ships';
import { Town } from 'entities/towns';

export const isShipInTown = (
  selectedTown : Town,
  activeShip   : Ship
) => selectedTown?.points.port[0].X === activeShip?.location.point.X &&
selectedTown?.points.port[0].Y === activeShip?.location.point.Y
