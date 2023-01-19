import { FC, memo } from 'react';
import { Cargo } from 'entities/ships';
import { Town, useTowns } from 'entities/towns';
import { TradeCardRow } from '../card-row';
import { PRODUCTS } from '../../../../model/data';
import { UseValue } from 'shared/lib';
import { TradeRangeType } from '../trade-module/types';
import { CardStyles } from '../card';
import s from './index.module.scss';


type Props = {
  town           : Town
  shipCargo      : Cargo[]
  hookTradeRange : UseValue<TradeRangeType>
  styles         : CardStyles
}

export const TradeCardRows: FC<Props> = memo(({ town, shipCargo, hookTradeRange, styles }) => {
  const
    { markets } = useTowns();
    

  return (
    <div className={s.wrapper}>
      <div className={s.list}>
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
      </div>
    </div>
  )
});
