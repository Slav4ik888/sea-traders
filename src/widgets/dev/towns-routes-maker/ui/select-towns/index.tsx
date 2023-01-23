import { FC, memo } from 'react';
import { SelectTown } from './select-town';
import s from './index.module.scss';



interface Props {
}

export const SelectTowns: FC<Props> = memo(({ }) => {

  
  return (
    <div className={s.root}>
      <SelectTown townNumber={1} />
      <SelectTown townNumber={2} />
    </div>
  )
});
