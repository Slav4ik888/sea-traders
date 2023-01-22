import { FC, memo } from 'react';
import { cn, UseValue } from 'shared/lib';
import { TradeModuleActionsCancel as Cancel } from './cancel';
import { TradeModuleActionsSubmit as Submit } from './submit';
import { TradeRangeType } from '../types';
import s from './index.module.scss';



interface Styles {
  root?  : string
}


interface Props {
  hookTradeRange : UseValue<TradeRangeType>
  styles?        : Styles
}


export const TradeModuleActions: FC<Props> = memo(({ hookTradeRange, styles = {} }) => {

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <Cancel hookTradeRange={hookTradeRange} className={s.button} />
      <Submit hookTradeRange={hookTradeRange} className={s.button} />
    </div>
  )
});
