import { FC, memo } from 'react';
import { TownMarket } from 'entities/towns';
import { Value, ValueTheme } from 'shared/ui';
import { Product } from 'entities/products';
import { CardStyles } from '../../../..';



interface Props {
  product    : Product
  market     : TownMarket
  styles     : CardStyles
}


export const TradeCardRowMarketValues: FC<Props> = memo(({ product, market, styles }) => {
  

  return (
    <div className={styles.marketValues}>
      <Value
        value     = {market[product.id].leftOvers.amount}
        classname = {styles.value}
      />
      <Value
        value     = {market[product.id].price[1]}
        theme     = {ValueTheme.MONEY}
        classname = {styles.value}
      />
      <Value
        value     = {market[product.id].price[0]}
        theme     = {ValueTheme.MONEY}
        classname = {styles.value}
      />
    </div>
  )
});
