import { FC, memo, MouseEvent, useMemo } from 'react';
import { Town, TownMarket } from 'entities/towns';
import { Cargo } from 'entities/ships';
import { ProductIconContainer } from '../../../../product-icon-container';
import { Product } from '../../../../../model/types';
import { TradeCardRowShipValues } from './ship-values';
import { CardStyles } from '../../..';
import { TradeCardRowMarketValues } from './market-values';
import { UseValue } from 'shared/lib';
import { TradeRangeType } from '../../trade-range/types';
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
  const id = useMemo(() => `trade-card-row-${product.id}`, []);

  const handlerTradeRangeOpen = (e: MouseEvent<HTMLDivElement>) => {
    
    // @ts-ignore
    const $row = e.target.closest(`#${id}`);
    if ($row) {
      // const
      //   coords = document.getElementById(id)?.getBoundingClientRect();
    
      hookTradeRange.setValue({
        ...hookTradeRange.value,
        productId: product.id
      }, true);
    }
  };
  

  return (
    <div
      id        = {id}
      className = {s.root}
      onClick   = {handlerTradeRangeOpen}
    >
      <ProductIconContainer
        product      = {product}
        townProduces = {town.produces}
      />
      
      <div className={s.values}>
        <TradeCardRowMarketValues
          product ={ product}
          market  ={ market}
          styles  ={ styles}
        />
        <TradeCardRowShipValues
          product   = {product}
          shipCargo = {shipCargo}
          styles    = {styles}
        />
      </div>
    </div>
  )
});
