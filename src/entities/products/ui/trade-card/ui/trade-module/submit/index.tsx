import { FC, memo } from 'react';
import { UseValue } from 'shared/lib';
import { TradeRangeType } from '../types';
import { Button, ButtonTheme } from 'shared/ui';
import { useTowns } from 'entities/towns';
import { useShips } from 'entities/ships';
import { usePlayer } from 'entities/player';
import { calcTradeOperation } from './utils';
import s from './index.module.scss';



interface Props {
  hookTradeRange : UseValue<TradeRangeType>
}


export const TradeModuleSubmit: FC<Props> = memo(({ hookTradeRange }) => {
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
    <div className={s.root}>
      <Button
        theme   = {ButtonTheme.OUTLINE}
        onClick = {handlerClick}
      >
        Submit
      </Button>
    </div>
  )
});
