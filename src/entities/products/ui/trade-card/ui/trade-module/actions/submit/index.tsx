import { FC, memo } from 'react';
import { cn, UseValue } from 'shared/lib';
import { TradeRangeType } from '../../types';
import { Button, ButtonTheme } from 'shared/ui';
import { useTowns } from 'entities/towns';
import { useShips } from 'entities/ships';
import { usePlayer } from 'entities/player';
import { calcTradeOperation } from './utils';
import s from './index.module.scss';



interface Props {
  hookTradeRange : UseValue<TradeRangeType>
  className      : string
}


export const TradeModuleActionsSubmit: FC<Props> = memo(({ hookTradeRange, className }) => {
  const
    { selectedTownName, selectedMarket, updateTownMarket } = useTowns(),
    { updateShipCargo } = useShips(),
    { addMoney } = usePlayer();


  const handlerClick = () => {
    const { productId, rangeValue, shipCargo } = hookTradeRange.value;

    updateTownMarket(selectedTownName, productId, rangeValue);
    updateShipCargo({
      ...shipCargo,
      amount: shipCargo.amount + hookTradeRange.value.rangeValue
    });
    addMoney(calcTradeOperation(hookTradeRange.value, selectedMarket));
    hookTradeRange.setClose();
  };


  return (
    <Button
      theme     = {ButtonTheme.PRIMARY}
      className = {cn(s.root, {}, [className])}
      onClick   = {handlerClick}
    >
      Submit
    </Button>
  )
});
