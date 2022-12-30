import { FC } from 'react';
import s from './index.module.scss';


interface Props {
}


export const TradeTownItem: FC<Props> = () => {
  const
    filename = 'bread.png';


  return (
    <div className={s.root}>
      <img src={require(`shared/assets/goods/${filename}`)} alt="bread.png" />
    </div>
  )
};
