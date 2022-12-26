import { FC } from 'react';
import { Cell } from '../cell';
import { VARIABLES } from 'app/config';
import { MapType } from '../../../../model';
import { createMapCellId } from '../utils';
import s from './index.module.scss';


const { MAIN_MAP_CELL_SIZE } = VARIABLES;

interface Props {
  colAmount : number
  rowIdx    : number
}


export const Row: FC<Props> = ({ rowIdx, colAmount }) => {

  return (
    <div className={s.root} style={{ height: MAIN_MAP_CELL_SIZE }}>
      {
        [...new Array(colAmount)].map((c, colIdx) => (
            <Cell
              key={createMapCellId(colIdx, rowIdx)}
              colIdx={colIdx}
              rowIdx={rowIdx}
            />
          )
        )
      }
    </div>
  )
};
