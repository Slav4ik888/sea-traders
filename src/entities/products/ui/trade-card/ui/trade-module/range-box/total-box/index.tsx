import { TradeOperationType } from 'entities/price';
import { FC, memo } from 'react';
import { Money } from 'shared/ui';
import s from './index.module.scss';


interface Props {
  total : number
  type  : TradeOperationType
}


export const TradeModuleTotalBox: FC<Props> = memo(({ total, type }) => {
  console.log('type: ', type);
  

  return (
    <div className={s.root}>
      Total:
      <Money value={total} styles={{ root: s.total, monet: s.monet }} />
      {`(${type || '-'})`}
    </div>
  )
});
