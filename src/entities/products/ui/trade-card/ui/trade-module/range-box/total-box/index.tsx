import { TradeOperationType } from 'entities/price';
import { FC, memo } from 'react';
import { Money, Value, ValueTheme } from 'shared/ui';
import s from './index.module.scss';


interface Props {
  total : number
  type  : TradeOperationType
}


export const TradeModuleTotalBox: FC<Props> = memo(({ total, type }) => {
  

  return (
    <div className={s.root}>
      Total:
      {/* <Value
        value     = {total}
        theme     = {ValueTheme.CLEAR}
        classname = {s.total}
      /> */}
      <Money value={total} styles={{ root: s.total, monet: s.monet }} />
      {`(${type})`}
    </div>
  )
});
