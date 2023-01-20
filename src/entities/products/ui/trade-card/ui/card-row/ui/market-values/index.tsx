import { FC, memo } from 'react';
import { Value, ValueTheme } from 'shared/ui';
import { CardStyles } from '../../../..';



interface Props {
  amount        : number
  priceSell     : number
  pricePurchase : number
  styles        : CardStyles
}


export const TradeCardRowMarketValues: FC<Props> = memo(({ amount, priceSell, pricePurchase, styles }) => {
  

  return (
    <div className={styles.marketValues}>
      <Value
        value     = {amount}
        classname = {styles.value}
      />
      <Value
        value     = {pricePurchase}
        theme     = {ValueTheme.MONEY}
        classname = {styles.value}
      />
      <Value
        value     = {priceSell}
        theme     = {ValueTheme.MONEY}
        classname = {styles.value}
      />
    </div>
  )
});
