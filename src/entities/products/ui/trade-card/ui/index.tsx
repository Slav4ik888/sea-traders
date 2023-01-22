import { FC, memo } from 'react';
import { useShips } from 'entities/ships';
import { useTowns } from 'entities/towns';
import { Modal } from 'shared/ui';
import { TradeModule } from './trade-module';
import { TradeCardContent } from './card';
import { useValue } from 'shared/lib/hooks';
import { emptyTradeRange, TradeRangeType } from './trade-module/types';



export interface CardStyles {
  valuesRow?   : string // Строка c данными market & shipCargo
  marketValues : string
  shipValues   : string
  value        : string
}


export const TradeCard: FC = memo(() => {
  const
    { selectedTown, selectTownName } = useTowns(),
    { activeShip, activeShipCargo } = useShips(),
    hookTradeRange = useValue<TradeRangeType>(emptyTradeRange),
    // activeShipInTown = useMemo(() => isShipInTown(selectedTown, activeShip), [selectedTown, activeShip]),
    handlerClose = () => {
      selectTownName(null);
      hookTradeRange.setClose();
      hookTradeRange.setValue(emptyTradeRange);
    };

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
      <TradeModule hookTradeRange={hookTradeRange} />
    </Modal>
  )
});
