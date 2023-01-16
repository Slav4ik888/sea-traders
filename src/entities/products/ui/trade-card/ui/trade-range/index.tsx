import { ChangeEvent, FC, memo, MouseEvent, useEffect, useMemo } from 'react';
import { cn, UseValue } from 'shared/lib';
import s from './index.module.scss';
import { TradeRangeType } from './types';



interface Styles {
  root?  : string
}


interface Props {
  hookTradeRange : UseValue<TradeRangeType>
  styles?        : Styles
}


export const TradeRange: FC<Props> = memo(({ hookTradeRange, styles = {} }) => {

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    console.log('value: ', value);
    // Calculate
    // If < 0 Sell to Market => Purchase 
    // If > 0 Buy from Market => Sell 
    hookTradeRange.setValue({
      ...hookTradeRange.value,
      rangeValue: value
    });
  };

  if (!hookTradeRange.open) return null

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <div className={s.content}>
        <div className={s.inputBox}>
          <input
            type     = 'range'
            min      = '-50'
            max      = '50'
            step     = '1'
            value    = {hookTradeRange.value.rangeValue}
            onChange = {handlerChange}
          />
          <div className={s.zeroBox} />
          <div className={s.zeroCircle} />
        </div>
      </div>
    </div>
  )
});
