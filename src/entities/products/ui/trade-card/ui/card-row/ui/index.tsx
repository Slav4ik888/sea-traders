import { FC, memo, MouseEvent, useMemo } from 'react';
import { Town, TownMarket } from 'entities/towns';
import { Cargo } from 'entities/ships';
import { Product } from '../../../../../model/types';
import { CardStyles } from '../../..';
import { UseValue } from 'shared/lib';
import { emptyTradeRange, TradeRangeType } from '../../trade-module/types';
import { TradeCardRowComponent } from './component';
import s from './index.module.scss';



interface Props {
  product        : Product
  market         : TownMarket
  town           : Town
  shipCargo?     : Cargo
  styles         : CardStyles
  hookTradeRange : UseValue<TradeRangeType>
}


export const TradeCardRow: FC<Props> = memo(({ town, product, market, shipCargo, styles, hookTradeRange }) => {
  const
    id = useMemo(() => `trade-card-row-${product.id}`, []),
    isProduced = useMemo(() => town.produces?.includes(product.id), [town.produces]);

  const { cargoAmount, cargoPrice } = useMemo(() => {
    if (typeof shipCargo === 'undefined') return {}

    return { cargoAmount: shipCargo?.amount, cargoPrice: shipCargo?.price && 1 || undefined }
  }, [shipCargo.amount]);


  const handlerTradeRangeOpen = (e: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const $row = e.target.closest(`#${id}`);
    if ($row) {
      hookTradeRange.setValue({
        ...emptyTradeRange,
        productId: product.id,
        isProduced: town.produces?.includes(product.id),
        shipCargo
      }, true);
    }
  };
  

  return (
    <div
      id        = {id}
      className = {s.root}
      onClick   = {handlerTradeRangeOpen}
    >
      <TradeCardRowComponent
        product       = {product}
        isProduced    = {isProduced}
        amount        = {market[product.id].leftOvers.amount}
        priceSell     = {market[product.id].price[0]}
        pricePurchase = {market[product.id].price[1]}
        cargoAmount   = {cargoAmount}
        cargoPrice    = {cargoPrice}
        styles        = {styles}
      />
    </div>
  )
});
