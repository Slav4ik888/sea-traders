import { FC, memo } from 'react';
import { Town, TownMarket } from 'entities/towns';
import { Cargo } from 'entities/ships';
import { Value, ValueTheme } from 'shared/ui';
import { ProductIconContainer } from '../../product-icon-container';
import { Product } from '../../../model/types';
import { TradeCardRowShipValues } from './ship-values';
import { CardStyles } from '../../trade-card';
import s from './index.module.scss';
import { TradeCardRowMarketValues } from './market-values';



interface Props {
  product    : Product
  market     : TownMarket
  town       : Town
  shipCargo? : Cargo[]
  styles     : CardStyles
}


export const TradeCardRow: FC<Props> = memo(({ town, product, market, shipCargo, styles }) => {
  

  return (
    <div className={s.root}>
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
