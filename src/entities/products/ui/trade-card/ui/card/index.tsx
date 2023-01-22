import { FC, memo } from 'react';
import { Cargo } from 'entities/ships';
import { Town } from 'entities/towns';
import { Card } from 'shared/ui';
import { TradeCardHeader } from '../card-header';
import { UseValue } from 'shared/lib/hooks';
import { TradeRangeType } from '../trade-module/types';
import { TradeCardRows } from '../card-rows';
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
    styles = {
      marketValues : s.marketValues,
      shipValues   : s.shipValues,
      value        : s.value
    };


  return (
    <Card
      title  = {town.title}
      styles = {{ content: s.cardContent }}
    >
      <TradeCardHeader styles={styles} />
      <TradeCardRows
        town           = {town}
        shipCargo      = {shipCargo}
        hookTradeRange = {hookTradeRange}
        styles         = {styles}
      />
    </Card>
  )
});
