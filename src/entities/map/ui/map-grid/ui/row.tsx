import { FC } from 'react';
import { Cell } from './cell';
import { VARIABLES } from 'app/config';
import s from './index.module.scss';

const { MAIN_MAP_CELL_SIZE } = VARIABLES;

interface Props {
  rowIdx    : number
  colAmount : number
}


export const Row: FC<Props> = ({ rowIdx, colAmount }) => {

  return (
    <div className={s.row} style={{ height: MAIN_MAP_CELL_SIZE }}>
      {
        [...new Array(colAmount)].map((c, i) => (
          <Cell
            key={`${rowIdx}-${i}`}
          />
        ))
      }
    </div>
  )
};
