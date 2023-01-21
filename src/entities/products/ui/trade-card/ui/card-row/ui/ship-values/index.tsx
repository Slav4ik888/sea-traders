import { FC, memo } from 'react';
import { Value } from 'shared/ui';
import { CardStyles } from '../../../..';
import { useShips } from 'entities/ships';



interface Props {
  cargoAmount : number
  cargoPrice  : number
  styles      : CardStyles
}


export const TradeCardRowShipValues: FC<Props> = memo(({ cargoAmount, cargoPrice, styles }) => {
  console.log('cargoAmount: ', cargoAmount);
  
  const { activeShip } = useShips();

  if (!activeShip) return null;


  return (
    <div className={styles.shipValues}>
      <Value
        value     = {cargoAmount}
        // theme     = {!Boolean(cargoAmount) && ValueTheme.EMPTY}
        classname = {styles.value}
      />
      <Value
        value     = {cargoPrice}
        // theme     = {!Boolean(cargoPrice) && ValueTheme.EMPTY}
        classname = {styles.value}
      />
    </div>
  )
});
