import { useTowns } from 'entities/towns';
import { Point } from 'features/ui';
import { useKeys } from '../use-keys';
import { changePositionByKey } from './change-position-by-key';



export enum UseTownChangesType {
  TOWN_POINT = 'town_point',
  PORT_POINT = 'port_point'
}


export const useTownChanges = (type: UseTownChangesType) => {
  const { selectedTown, updateTown } = useTowns();
  useKeys(handlerKey);

  function handlerKey(e) {
    changePositionByKey(
      e.keyCode,
      type === UseTownChangesType.TOWN_POINT
        ? selectedTown?.points?.town
        : selectedTown?.points?.port[0],
      changePointTo
    );
  };

  /** Change Town point in useKeys */
  const changePointTo = (point: Point) => {
    const townType = type === UseTownChangesType.TOWN_POINT;

    updateTown({
      ...selectedTown,
      ...{
        points: {
          town: townType
            ? { X: point.X, Y: point.Y }
            : { ...selectedTown?.points.town },
          port: townType
            ? { ...selectedTown?.points.port }
            : [{ X: point.X, Y: point.Y }]
        },
      }
    });
  };

  return {
    changePointTo
  }
}
