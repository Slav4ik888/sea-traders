import { TownMarket } from 'entities/towns';
import { FC } from 'react';
import { Value } from 'shared/ui';
import { Product } from '../../../model/types';
import s from './index.module.scss';


interface Props {
  product : Product
  market  : TownMarket
}


export const TradeTownItem: FC<Props> = ({ product, market }) => {

  return (
    <div className={s.root}>
      <img
        src       = {require(`shared/assets/products/${product.iconFilename}`)}
        alt       = {product.iconFilename}
        className = {s.icon}
      />
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
