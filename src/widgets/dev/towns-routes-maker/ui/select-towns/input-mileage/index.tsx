import { FC, memo } from 'react';
import { useDevTownsRoutesMaker } from '../../../model/hooks';
import { Input } from 'shared/ui';
import s from './index.module.scss';



interface Props {
}

export const InputMileage: FC<Props> = memo(({}) => {
  const
    { selectedMileage, setSelectedMileage } = useDevTownsRoutesMaker();
    
  const handlerChange = (value: string) => {
    setSelectedMileage(parseInt(value));
  };

  
  return (
    <div className={s.root}>
      <Input
        type      = 'number'
        value     = {selectedMileage}
        styles    = {{ input: s.input }}
        onChange  = {handlerChange}
      />
    </div>
  )
});
