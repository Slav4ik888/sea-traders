import { FC, memo, useMemo } from 'react';
import { UseValue } from 'shared/lib';
import { TradeRangeType } from '../types';
import { Value, ValueTheme } from 'shared/ui';
import { getCargoById } from 'entities/ships';
import { ProductIconContainer } from '../../../../product-icon-container';
import { getProductById } from '../../../../../model';
import s from './index.module.scss';
import { TradeCardRowComponent } from '../../card-row/ui/component';



interface Props {
  hookTradeRange : UseValue<TradeRangeType>
}


export const TradeModulePriceBox: FC<Props> = memo(({ hookTradeRange }) => {
  const
    { productId, isProduced, market, shipCargo } = useMemo(() => hookTradeRange.value, [hookTradeRange.value]),
    cargo = useMemo(() => getCargoById(shipCargo, productId), [shipCargo, productId]),
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
        amount        = {market[product.id].leftOvers.amount - hookTradeRange.value.rangeValue}
        priceSell     = {market[product.id].price[0]}
        pricePurchase = {market[product.id].price[1]}
        cargoAmount   = {cargo?.amount}
        cargoPrice    = {cargo?.price}
        styles        = {styles}
      />
      {/* <ProductIconContainer product={getProductById(productId)} />

      <div className={s.sell}>
        <Value
          value     = {market[productId]?.leftOvers.amount}
          classname = {s.value}
        />
        <Value
          value     = {market[productId]?.price[1]}
          theme     = {ValueTheme.MONEY}
          classname = {s.value}
        />
      </div>
      <div className={s.purchase}>
        <Value
          value     = {market[productId]?.price[0]}
          theme     = {ValueTheme.MONEY}
          classname = {s.value}
        />
        <Value
          value     = {cargo?.amount}
          classname = {s.value}
        />
      </div> */}
    </div>
  )
});
