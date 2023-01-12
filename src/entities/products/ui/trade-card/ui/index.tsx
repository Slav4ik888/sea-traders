import { FC, memo } from 'react';
import { PRODUCTS } from '../../../model/data';
import { useTowns } from 'entities/towns';
import { Card, Modal } from 'shared/ui';
import { TradeCardRow } from '../../trade-card-row';
import { useUI } from 'features/ui';


interface Props {
}


export const TradeCard: FC<Props> = memo(() => {
  const
    { devChangeTownsPoint } = useUI(),
    { markets, selectedTown, selectTownName } = useTowns(),
    handlerClose = () => selectTownName(null);

  if (!selectedTown || devChangeTownsPoint) return null;
  console.log('selectedTown: ', selectedTown);

  return (
    <Modal
      lazy
      isOpen  = {Boolean(selectedTown)}
      onClose = {handlerClose}
    >
      <Card title={selectedTown.title}>
        {
          Object.values(PRODUCTS).map(product => <TradeCardRow
            key     = {product.id}
            product = {product}
            town    = {selectedTown}
            market  = {markets[selectedTown.title]}
          />)
        }
      </Card>
    </Modal>
  )
});
