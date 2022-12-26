import { FC, useMemo } from 'react';
import { cn } from 'shared/lib';
import { VARIABLES } from 'app/config';
import s from './index.module.scss';
import { MapCell, MapType, useMap } from '../../../../model';
import { createMapCellId } from '../utils';
import { getItemById } from 'shared/utils';


const { MAIN_MAP_CELL_SIZE } = VARIABLES;


interface Props {
  colIdx : number
  rowIdx : number
}


export const Cell: FC<Props> = ({ colIdx, rowIdx }) => {
  const
    { map, setSelectedCell } = useMap(),
    id = createMapCellId(colIdx, rowIdx),
    cell: MapCell = useMemo(() => map?.[id], [map?.[id]]);

  const handlerSelect = () => setSelectedCell(cell);

  if (!cell) return null;
  
  return (
    <div
      id        = {id}
      className = {cn(s.root, {}, [s['opacity'], s[cell.type]])}
      style     = {{ width: MAIN_MAP_CELL_SIZE }}
      onClick   = {handlerSelect}
    />
  )
};
