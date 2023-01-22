import { FC, memo } from 'react';
import { Card, Modal } from 'shared/ui';
import { UseValue } from 'shared/lib/hooks';
import s from './index.module.scss';



interface Props {
  hookValue: UseValue<string>
  id: string
}

// TODO: Временно отменил разработку этой features
export const TooltipShipActions: FC<Props> = memo(({ hookValue, id }) => {
  const
    handlerClose = () => hookValue.setClose();


  return (
    <Modal
      lazy
      isOpen  = {hookValue.open}
      onClose = {handlerClose}
    >
      <Card
        title  = 'Actions'
        styles = {{ root: s.card }}
      >
        
        
      </Card>
    </Modal>
  )
});
