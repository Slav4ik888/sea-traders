import { FC, memo } from 'react';
import { cn } from 'shared/lib';
import { Icon, IconLabel } from 'shared/ui';
import { CardStyles } from '../../..';
import s from './index.module.scss';


const
  srcBarrels = require('shared/assets/icons/barrels.png'),
  srcShipBarrels = require('shared/assets/icons/ship-barrels.png'),
  srcGoldMonets = require('shared/assets/icons/gold-monets.png');



interface Props {
  styles: CardStyles
}


export const TradeCardHeader: FC<Props> = memo(({ styles }) => {
  

  return (
    <div className={s.root}>
      <div className={styles.marketValues}>
        <div className={s.icon}>
          <Icon
            src          = {srcBarrels}
            alt          = 'barrels'
            width        = 'max-content'
            height       = '20px'
            tooltipTitle = 'В наличии на рынке'
          />
        </div>
        <div className={s.icon}>
          <Icon
            src          = {srcGoldMonets}
            alt          = 'gold-monets'
            width        = 'max-content'
            height       = '20px'
            tooltipTitle = 'Цена покупка'
            children     = {<IconLabel 
              text   = 'Purchase'
              styles = {{ root: cn(s.rootIcon, {}, [s.rootIconPurchase]) }}
            />}
          />
        </div>
        <div className={s.icon}>
          <Icon
            src          = {srcGoldMonets}
            alt          = 'gold-monets'
            width        = 'max-content'
            height       = '20px'
            tooltipTitle = 'Цена продажа'
            children     = {<IconLabel 
              text   = 'Sell'
              styles = {{ root: cn(s.rootIcon, {}, [s.rootIconSell]) }}
            />}
          />
        </div>
      </div>

      <div className={styles.shipValues}>
        <div className={s.icon}>
          <Icon
            src          = {srcShipBarrels}
            alt          = 'ship-barrels'
            width        = 'max-content'
            height       = '25px'
            tooltipTitle = 'Остатки на корабле'
          />
        </div>
        <div className={s.icon}>
          <Icon
            src          = {srcGoldMonets}
            alt          = 'gold-monets'
            width        = 'max-content'
            height       = '20px'
            tooltipTitle = 'Цена покупки'
            children     = {<IconLabel 
              children = {<span>S</span>}
              styles = {{ root: cn(s.rootIcon, {}, [s.rootIconShip]) }}
            />}
          />
        </div>
      </div>
    </div>
  )
});
