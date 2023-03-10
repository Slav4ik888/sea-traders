import { ChangeEvent, FC, memo, useMemo } from 'react';
import { UseValue } from 'shared/lib/hooks';
import { TradeRangeType } from '../types';
import { Value } from 'shared/ui';
import { usePlayer } from 'entities/player';
import { calcCost } from '../../../../../model';
import { TradeModuleTotalBox } from './total-box';
import { useTowns } from 'entities/towns';
import { TradeOperationType } from 'entities/price';
import { TradeModuleRangeBoxInput } from './input';
import s from './index.module.scss';



interface Props {
  hookTradeRange: UseValue<TradeRangeType>
}


export const TradeModuleRangeBox: FC<Props> = memo(({ hookTradeRange }) => {
  const
    { productId, shipCargo, rangeValue, total, type } = useMemo(() => hookTradeRange.value, [hookTradeRange.value]),
    { money } = usePlayer(),
    { selectedMarket } = useTowns(),
    mp = selectedMarket[productId],
    sellPrice     = useMemo(() => mp.price[0], [mp.price[0]]),
    purchasePrice = useMemo(() => mp.price[1], [mp.price[1]]),
    max = useMemo(() => String(mp.leftOvers.amount || 0), [mp.leftOvers.amount]),
    min = useMemo(() => String(shipCargo?.amount * (-1) || 0), [shipCargo, productId]);
  
  console.log('min: ', min, ' max: ', max);
  console.log('selectedMarket: ', selectedMarket);


  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    console.log('value: ', value);

    let
      type:  TradeOperationType,
      rangeValue = 0,
      total = 0;
    
    // Calculate
    // Sell to Market => Purchase
    if (value < 0) {
      if (value < Number(min)) {
        console.log("Хочет продать больше, чем есть на корабле");
        rangeValue = hookTradeRange.value.rangeValue; // Last value => don`t change
        total = hookTradeRange.value.total;
      }
      else {
        rangeValue = value;
        total = calcCost(value, purchasePrice);
        type = TradeOperationType.SELL;
      }
    }
    // Buy from Market => Sell
    else if (value > 0) {
      if (value > Number(max)) {
        console.log("Хочет купить больше, чем есть на рынке");
        rangeValue = hookTradeRange.value.rangeValue; // Last value => don`t change
        total = hookTradeRange.value.total;
      }
      else if (calcCost(value, sellPrice) > money) {
        console.log("Хочет купить больше, чем есть money! Cost:", calcCost(value, sellPrice), ' Money: ', money);
        rangeValue = hookTradeRange.value.rangeValue; // Last value => don`t change
        total = hookTradeRange.value.total;
      }
      else {
        total = calcCost(value, sellPrice) * (-1);
        rangeValue = value;
        type = TradeOperationType.PURCHASE;
      }
    }
    

    hookTradeRange.setValue({
      ...hookTradeRange.value,
      rangeValue,
      total,
      type
    });
  };


  return (
    <div className={s.root}>
      
      <div className={s.inputBox}>
        {/* <div className={s.zeroBox} />
        <div className={s.zeroCircle} /> */}
        <TradeModuleTotalBox
          total = {total}
          type  = {type}
        />
        <TradeModuleRangeBoxInput
          min       = {min}
          max       = {max}
          value     = {rangeValue}
          onChange  = {handlerChange}
        />
        <Value
          value     = {rangeValue}
          classname = {s.selected}
        />
      </div>
    </div>
  )
});
