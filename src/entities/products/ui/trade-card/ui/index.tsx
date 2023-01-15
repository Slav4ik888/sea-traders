import { FC, memo, useMemo } from 'react';
import { useShips } from 'entities/ships';
import { useTowns } from 'entities/towns';
import { Card, Modal } from 'shared/ui';
import { TradeCardHeader } from '../../trade-card-header';
import { TradeCardRow } from '../../trade-card-row';
import { PRODUCTS } from '../../../model/data';
import { isShipInTown } from './is-ship-in-town';
import s from './index.module.scss';



export interface CardStyles {
  marketValues : string
  shipValues   : string
  value        : string
}


export const TradeCard: FC = memo(() => {
  const
    { markets, selectedTown, selectTownName } = useTowns(),
    { activeShip, activeShipCargo } = useShips(),
    activeShipInTown = useMemo(() => isShipInTown(selectedTown, activeShip), [selectedTown, activeShip]),
    styles = {
      marketValues : s.marketValues,
      shipValues   : s.shipValues,
      value        : s.value
    },
    handlerClose = () => selectTownName(null);

  if (!selectedTown) return null;
  console.log('selectedTown: ', selectedTown);
  console.log('activeShip: ', activeShip);
  

  return (
    <Modal
      lazy
      isOpen  = {Boolean(selectedTown)}
      onClose = {handlerClose}
    >
      <Card title={selectedTown.title}>
        <TradeCardHeader styles={styles} />
        {
          Object.values(PRODUCTS).map(product => <TradeCardRow
            key       = {product.id}
            product   = {product}
            town      = {selectedTown}
            market    = {markets[selectedTown.title]}
            shipCargo = {activeShipInTown && activeShipCargo}
            styles    = {styles}
          />)
        }
      </Card>
    </Modal>
  )
});
