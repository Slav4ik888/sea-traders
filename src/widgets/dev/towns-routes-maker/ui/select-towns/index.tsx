import { FC, memo } from 'react';
import { SelectTown } from './select-town';
import { InputMileage } from './input-mileage';
import s from './index.module.scss';



export const SelectTowns: FC = memo(() => {

  return (
    <div className={s.root}>
      <SelectTown townNumber={1} />
      <SelectTown townNumber={2} />
      <InputMileage />
    </div>
  )
});
