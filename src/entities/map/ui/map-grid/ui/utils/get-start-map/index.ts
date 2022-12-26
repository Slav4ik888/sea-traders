import { createMapCellId } from '../create-map-cell-id';
import { MapType, MapCell, MapCellType } from '../../../../../model';


export const MAP_CELL_TEMP: MapCell = {
  id: '',
  type : MapCellType.SEA
};



/**
 * Создаёт object Map
 */
export const getStartMap = (rowAmount: number, colAmount: number): MapType => {
  let map = {} as MapType;

  [...new Array(rowAmount)].forEach((_, rowIdx) => {
    [...new Array(colAmount)].forEach((_, colIdx) => {
      map[createMapCellId(colIdx, rowIdx)] = {
        id   : createMapCellId(colIdx, rowIdx),
        type : MapCellType.SEA
      }
    });
  });

  return map
}
