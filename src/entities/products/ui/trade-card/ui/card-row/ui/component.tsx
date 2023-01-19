import { FC, memo } from 'react';
import { TownMarket } from 'entities/towns';
import { Cargo } from 'entities/ships';
import { ProductIconContainer } from '../../../../product-icon-container';
import { Product } from '../../../../../model/types';
import { TradeCardRowShipValues } from './ship-values';
import { CardStyles } from '../../..';
import { TradeCardRowMarketValues } from './market-values';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  product        : Product
  isProduced     : boolean
  market         : TownMarket
  cargoAmount    : number
  cargoPrice     : number
  shipCargo?     : Cargo[]
  styles         : CardStyles
  // hookTradeRange : UseValue<TradeRangeType>
}


export const TradeCardRowComponent: FC<Props> = memo(({ isProduced, product, market, cargoAmount, cargoPrice, styles }) => {
  
  return (
    <>
      <ProductIconContainer
        product    = {product}
        isProduced = {isProduced}
      />
      
      <div className={cn(s.values, {}, [styles.valuesRow])}>
        <TradeCardRowMarketValues
          product = { product}
          market  = { market}
          styles  = { styles}
        />
        <TradeCardRowShipValues
          cargoAmount = {cargoAmount}
          cargoPrice  = {cargoPrice}
          styles      = {styles}
        />
      </div>
    </>
  )
});
