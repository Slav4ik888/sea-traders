import { Town, TownMarket } from 'entities/towns';
import { FC, useMemo } from 'react';
import { Value, ProductIcon } from 'shared/ui';
import { Product } from '../../../model/types';
import s from './index.module.scss';


interface Props {
  product : Product
  market  : TownMarket
  town    : Town
}


export const TradeCardRow: FC<Props> = ({ town, product, market }) => {
  const isProduced = useMemo(() => town.produces?.includes(product.id), [town]);

  return (
    <div className={s.root}>
      <ProductIcon product={product} produced={isProduced} />
      
      <div className={s.values}>
        <Value
          value     = {market[product.id].leftOvers.amount}
          classname = {s.value}      
        />
        <Value
          value     = {market[product.id].price[1]}
          classname = {s.value}      
        />
        <Value
          value     = {market[product.id].price[0]}
          classname = {s.value}      
        />
      </div>
    </div>
  )
};
