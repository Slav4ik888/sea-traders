import { PRODUCTS } from '../../../model/types';
import { useTowns } from 'entities/towns';
import { FC } from 'react';
import { Modal, Text } from 'shared/ui';
import { TradeTownItem } from '../../trade-town-item';
// import Bread from 'shared/assets/goods/bread.png';
import s from './index.module.scss';


interface Props {
}


export const TradeCard: FC<Props> = () => {
  const
    { markets, selectedTownForTrade: selectedTown, setSelectedTownForTrade } = useTowns(),
    handlerClose = () => setSelectedTownForTrade(null);

  if (!selectedTown) return null;
  console.log('selectedTown: ', selectedTown);

  return (
    <Modal
      lazy
      isOpen  = {Boolean(selectedTown)}
      onClose = {handlerClose}
    >
      <div className={s.root}>
        <div  className={s.header}>
          <Text title={selectedTown.title} styles={{ title: s.title }} />
        </div>

        <div  className={s.content}>
          {
            Object.values(PRODUCTS).map(product => <TradeTownItem
              key     = {product.id}
              product = {product}
              market  = {markets[selectedTown.title]}
            />)
          }
        </div>
      </div>
    </Modal>
  )
};
