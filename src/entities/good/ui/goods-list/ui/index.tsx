import { FC } from 'react';
import { Modal } from 'shared/ui';
// import Bread from 'shared/assets/goods/bread.png';


interface Props {
  isOpen  : boolean
  onClose : () => void
}


export const GoodsList: FC<Props> = ({ isOpen, onClose }) => {
  const filename = 'bread.png';

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
    >
      Bread
      {/* <Bread /> */}
      <img src={require(`shared/assets/goods/${filename}`)} alt="bread.png" />
    </Modal>
  )
};
