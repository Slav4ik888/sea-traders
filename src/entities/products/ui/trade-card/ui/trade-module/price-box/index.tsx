import { FC, memo, useMemo } from 'react';
import { UseValue } from 'shared/lib';
import { TradeRangeType } from '../types';
import { getProductById } from '../../../../../model';
import { TradeCardRowComponent } from '../../card-row/ui/component';
import { useTowns } from 'entities/towns';
import s from './index.module.scss';



interface Props {
  hookTradeRange : UseValue<TradeRangeType>
}


export const TradeModulePriceBox: FC<Props> = memo(({ hookTradeRange }) => {
  console.log('hookTradeRange: ', hookTradeRange.value);
  const
    { productId, isProduced, shipCargo } = useMemo(() => hookTradeRange.value, [hookTradeRange.value]),
    { selectedMarket } = useTowns(),
    product = useMemo(() => getProductById(productId), [productId]);


  const styles = {
    valuesRow    : s.valuesRow,
    marketValues : s.marketValues,
    shipValues   : s.shipValues,
    value        : s.value
  };


  return (
    <div className={s.root}>
      <TradeCardRowComponent
        product       = {product}
        isProduced    = {isProduced}
        amount        = {selectedMarket[product.id].leftOvers.amount - hookTradeRange.value.rangeValue}
        priceSell     = {selectedMarket[product.id].price[0]}
        pricePurchase = {selectedMarket[product.id].price[1]}
        cargoAmount   = {shipCargo.amount + hookTradeRange.value.rangeValue}
        cargoPrice    = {shipCargo?.price}
        styles        = {styles}
      />
    </div>
  )
});
