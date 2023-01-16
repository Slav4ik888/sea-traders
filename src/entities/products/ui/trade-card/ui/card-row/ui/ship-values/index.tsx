import { FC, memo, useMemo } from 'react';
import { Cargo } from 'entities/ships';
import { Value, ValueTheme } from 'shared/ui';
import { Product } from '../../../../../../model/types';
import { CardStyles } from '../../../..';




interface Props {
  product    : Product
  shipCargo? : Cargo[]
  styles     : CardStyles
}


export const TradeCardRowShipValues: FC<Props> = memo(({ product, shipCargo, styles }) => {
  const { cargoWeight, cargoPrice } = useMemo(() => {
    if (typeof shipCargo === 'undefined') return {}

    const cargo = shipCargo.find(cargo => cargo.id === product.id);
    console.log('cargo: ', cargo);

    return { cargoWeight: cargo?.weight, cargoPrice: cargo?.weight && 1 || undefined }
  }, []);
  

  if (!shipCargo) return null


  return (
    <div className={styles.shipValues}>
      <Value
        value     = {cargoWeight}
        theme     = {!cargoWeight && ValueTheme.EMPTY}
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
