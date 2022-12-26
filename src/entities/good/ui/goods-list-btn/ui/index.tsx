import { FC, memo, useCallback, useState } from 'react';
import { GoodsList } from '../../goods-list';
import s from './index.module.scss';


export const GoodsListBtn: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const
    handlerOpen  = useCallback(() => setIsOpen(true), []),
    handlerClose = useCallback(() => setIsOpen(false), []);
  
  
  return (
    <>
      <button className={s.root} onClick={handlerOpen}>
        Goods
      </button>
      <GoodsList
        isOpen={isOpen}
        onClose={handlerClose}
      />
    </>
  )
});
