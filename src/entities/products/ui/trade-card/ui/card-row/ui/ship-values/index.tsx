import { FC, memo } from 'react';
import { Value, ValueTheme } from 'shared/ui';
import { Product } from '../../../../../../model/types';
import { CardStyles } from '../../../..';
import { useShips } from 'entities/ships';



interface Props {
  cargoAmount : number
  cargoPrice  : number
  styles      : CardStyles
}


export const TradeCardRowShipValues: FC<Props> = memo(({ cargoAmount, cargoPrice, styles }) => {
  const { activeShip } = useShips();

  if (!activeShip) return null;


  return (
    <div className={styles.shipValues}>
      <Value
        value     = {cargoAmount}
        theme     = {!cargoAmount && ValueTheme.EMPTY}
        classname = {styles.value}
      />
      <Value
        value     = {cargoPrice}
        theme     = {!cargoPrice && ValueTheme.EMPTY}
        classname = {styles.value}
      />
    </div>
  )
});
