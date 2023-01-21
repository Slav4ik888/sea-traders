import { FC, memo } from 'react';
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
  amount         : number
  priceSell      : number
  pricePurchase  : number
  cargoAmount    : number
  cargoPrice     : number
  styles         : CardStyles
}


export const TradeCardRowComponent: FC<Props> = memo(({ isProduced, product, amount, priceSell, pricePurchase, cargoAmount, cargoPrice, styles }) => {
  
  return (
    <>
      <ProductIconContainer
        product    = {product}
        isProduced = {isProduced}
      />
      
      <div className={cn(s.values, {}, [styles.valuesRow])}>
        <TradeCardRowMarketValues
          amount        = {amount}
          priceSell     = {priceSell}
          pricePurchase = {pricePurchase}
          styles        = { styles}
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
