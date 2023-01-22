import { FC, memo } from 'react';
import { cn, UseValue } from 'shared/lib';
import { TradeRangeType } from '../../types';
import { Button, ButtonTheme } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  hookTradeRange : UseValue<TradeRangeType>
  className      : string
}


export const TradeModuleActionsCancel: FC<Props> = memo(({ hookTradeRange, className }) => {
  const handlerClick = () => hookTradeRange.setClose();

  return (
    <Button
      theme     = {ButtonTheme.CANCEL}
      className = {cn(s.root, {}, [className])}
      onClick   = {handlerClick}
    >
      Cancel
    </Button>
  )
});
