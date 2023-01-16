import { FC, memo } from 'react';
import { useShips } from 'entities/ships';
import { useTowns } from 'entities/towns';
import { Modal } from 'shared/ui';
import { TradeRange } from './trade-range';
import { TradeCardContent } from './card';
import { useValue } from 'shared/lib';



export interface CardStyles {
  marketValues : string
  shipValues   : string
  value        : string
}


export const TradeCard: FC = memo(() => {
  const
    { selectedTown, selectTownName } = useTowns(),
    { activeShip, activeShipCargo } = useShips(),
    hookTradeRange = useValue<number>(0),
    // activeShipInTown = useMemo(() => isShipInTown(selectedTown, activeShip), [selectedTown, activeShip]),
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
      <TradeCardContent
        town           = {selectedTown}
        shipCargo      = {activeShipCargo}
        hookTradeRange = {hookTradeRange}
      />
      <TradeRange hookValue={hookTradeRange} />
    </Modal>
  )
});
