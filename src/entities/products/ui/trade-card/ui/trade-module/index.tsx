import { FC, memo } from 'react';
import { cn, UseValue } from 'shared/lib';
import { TradeRangeType } from './types';
import { TradeModuleRangeBox } from './range-box';
import { TradeModulePriceBox } from './price-box';
import s from './index.module.scss';





interface Props {
  hookTradeRange : UseValue<TradeRangeType>
}


export const TradeModule: FC<Props> = memo(({ hookTradeRange }) => {

  
  if (!hookTradeRange.open) return null

  return (
    <div className={s.root}>
      <div className={s.content}>
        <TradeModulePriceBox hookTradeRange={hookTradeRange} />
        <TradeModuleRangeBox hookTradeRange={hookTradeRange} />

      {/* <Submit /> */}
      </div>
    </div>
  )
});
