import { FC, memo } from 'react';
import { Cargo } from 'entities/ships';
import { Town, useTowns } from 'entities/towns';
import { Card } from 'shared/ui';
import { TradeCardHeader } from '../card-header';
import { TradeCardRow } from '../card-row';
import { PRODUCTS } from '../../../../model/data';
import { UseValue } from 'shared/lib';
import { TradeRangeType } from '../trade-range/types';
import s from './index.module.scss';



export interface CardStyles {
  marketValues : string
  shipValues   : string
  value        : string
}

type Props = {
  town           : Town
  shipCargo      : Cargo[]
  hookTradeRange : UseValue<TradeRangeType>
}

export const TradeCardContent: FC<Props> = memo(({ town, shipCargo, hookTradeRange }) => {
  const
    { markets } = useTowns(),
    styles = {
      marketValues : s.marketValues,
      shipValues   : s.shipValues,
      value        : s.value
    };


  return (
    <Card title={town.title}>
      <TradeCardHeader styles={styles} />
      {
        Object.values(PRODUCTS).map(product => <TradeCardRow
          key            = {product.id}
          product        = {product}
          town           = {town}
          market         = {markets[town.title]}
          shipCargo      = {shipCargo}
          styles         = {styles}
          hookTradeRange = {hookTradeRange}
        />)
      }
    </Card>
  )
});
