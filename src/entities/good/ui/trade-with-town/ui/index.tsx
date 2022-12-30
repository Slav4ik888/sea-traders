import { Town, useTowns } from 'entities/towns';
import { FC } from 'react';
import { Modal } from 'shared/ui';
import { TradeTownItem } from '../../trade-town-item';
// import Bread from 'shared/assets/goods/bread.png';
import s from './index.module.scss';


interface Props {
}


export const TradeWithTown: FC<Props> = () => {
  const
    { selectedTownForTrade, setSelectedTownForTrade } = useTowns(),
    handlerClose = () => setSelectedTownForTrade(null);

  console.log('selectedTownForTrade: ', selectedTownForTrade);

  return (
    <Modal
      lazy
      isOpen  = {Boolean(selectedTownForTrade)}
      onClose = {handlerClose}
    >
      <div className={s.root}>
        <TradeTownItem />
      </div>
    </Modal>
  )
};
