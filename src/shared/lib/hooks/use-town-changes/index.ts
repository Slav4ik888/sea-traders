import { Town } from 'entities/towns';
import { Point } from 'features/ui';
import { useKeys } from '../use-keys';


export const useTownChanges = (
  town       : Town,
  updateTown : (town: Town) => void
) => {

  useKeys(handlerKey);

  function handlerKey(e) {
    const point = town?.point;

    switch (e.keyCode) {
      case 52: moveTo({ X: point.X - 1, Y: point.Y });     break;
      case 56: moveTo({ X: point.X,     Y: point.Y - 1 }); break;
      case 54: moveTo({ X: point.X + 1, Y: point.Y });     break;
      case 50: moveTo({ X: point.X,     Y: point.Y + 1 }); break;

      default: return
    }
  };

  /** Change Town point in useKeys */
  const moveTo = (point: Point) => {
    const updatedTown: Town = {
      ...town,
      ...{
        point: {
          X: point.X,
          Y: point.Y
        }
      }
    };

    updateTown(updatedTown);
  };

}
