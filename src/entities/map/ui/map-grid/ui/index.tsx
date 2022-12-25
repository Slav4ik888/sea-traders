import { FC, useMemo } from 'react';
import { Row } from './row';
import { VARIABLES } from 'app/config';
import s from './index.module.scss';
import { getStartMap } from './utils';


const { MAIN_MAP_CELL_SIZE, MAIN_MAP_WIDTH, MAIN_MAP_HEIGHT } = VARIABLES;

interface Props {
}


export const MapGrid: FC<Props> = ({  }) => {
  const
    colAmount = useMemo(() => Math.floor(MAIN_MAP_WIDTH / MAIN_MAP_CELL_SIZE), []),
    rowAmount = useMemo(() => Math.floor(MAIN_MAP_HEIGHT / MAIN_MAP_CELL_SIZE), []),
    startMap  = getStartMap(rowAmount, colAmount);
    
  console.log('colAmount: ', colAmount);
  console.log('rowAmount: ', rowAmount);
  if (!rowAmount) return null;


  return (
    <div className={s.root}>
      {
        [...new Array(rowAmount)].map((r, i) => (
          <Row
            key      = {`${i}`}
            rowIdx   = {i}
            colAmount   = {colAmount}
          />
        ))
      }
    </div>
  )
};
