import { FC, memo, MouseEvent, useMemo } from 'react';
import { Town, TownMarket } from 'entities/towns';
import { Cargo, getCargoById } from 'entities/ships';
import { Product } from '../../../../../model/types';
import { CardStyles } from '../../..';
import { UseValue } from 'shared/lib';
import { TradeRangeType } from '../../trade-module/types';
import { TradeCardRowComponent } from './component';
import s from './index.module.scss';



interface Props {
  product        : Product
  market         : TownMarket
  town           : Town
  shipCargo?     : Cargo[]
  styles         : CardStyles
  hookTradeRange : UseValue<TradeRangeType>
}


export const TradeCardRow: FC<Props> = memo(({ town, product, market, shipCargo, styles, hookTradeRange }) => {
  const
    id = useMemo(() => `trade-card-row-${product.id}`, []),
    isProduced = useMemo(() => town.produces?.includes(product.id), [town.produces]);

  const { cargoAmount, cargoPrice } = useMemo(() => {
    if (typeof shipCargo === 'undefined') return {}

    const cargo = getCargoById(shipCargo, product.id);
    console.log('cargo: ', cargo);

    return { cargoAmount: cargo?.amount, cargoPrice: cargo?.price && 1 || undefined }
  }, []);

  console.log('cargoAmount, cargoPrice: ', cargoAmount, cargoPrice);

  const handlerTradeRangeOpen = (e: MouseEvent<HTMLDivElement>) => {
    
    // @ts-ignore
    const $row = e.target.closest(`#${id}`);
    if ($row) {
      // const
      //   coords = document.getElementById(id)?.getBoundingClientRect();
    
      hookTradeRange.setValue({
        ...hookTradeRange.value,
        productId: product.id,
        isProduced: town.produces?.includes(product.id),
        market,
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
        product     = {product}
        isProduced  = {isProduced}
        market      = {market}
        cargoAmount = {cargoAmount}
        cargoPrice  = {cargoPrice}
        styles      = {styles}
      />
    </div>
  )
});
