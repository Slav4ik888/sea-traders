import { FC, useEffect, useMemo } from 'react';
import { Row } from './row';
import { VARIABLES } from 'app/config';
import { getStartMap } from './utils/get-start-map';
import s from './index.module.scss';
import { useMap } from 'entities/map';


const { MAIN_MAP_CELL_SIZE, MAIN_MAP_WIDTH, MAIN_MAP_HEIGHT } = VARIABLES;

interface Props {
}


export const MapGrid: FC<Props> = ({  }) => {
  const
    { map, setMap } = useMap(),
    colAmount = useMemo(() => Math.floor(MAIN_MAP_WIDTH / MAIN_MAP_CELL_SIZE), []),
    rowAmount = useMemo(() => Math.floor(MAIN_MAP_HEIGHT / MAIN_MAP_CELL_SIZE), []),
    startMap  = useMemo(() => getStartMap(rowAmount, colAmount), []);
  
  useEffect(() => { setMap(startMap) }, [startMap]);
  
  // console.log('colAmount: ', colAmount); // 288
  // console.log('rowAmount: ', rowAmount); // 203

  if (!rowAmount) return null;



  return (
    <div className={s.root}>
      {
        [...new Array(rowAmount)].map((_, i) => (
          <Row
            key       = {`${i}`}
            colAmount = {colAmount}
            rowIdx    = {i}
          />
        ))
      }
    </div>
  )
};
