import { FC } from 'react';
import { cn } from 'shared/lib';
import { VARIABLES } from 'app/config';
import s from './index.module.scss';

const { MAIN_MAP_CELL_SIZE } = VARIABLES;


interface Props {

}


export const Cell: FC<Props> = ({ }) => {

  return (
    <div
      className={cn(s.root, {}, [])}
      style={{ width: MAIN_MAP_CELL_SIZE }}
    >
      
    </div>
  )
};
