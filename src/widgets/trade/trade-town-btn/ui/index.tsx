import { FC, memo } from 'react';
import { Town, useTowns } from 'entities/towns';
import s from './index.module.scss';



interface Props {
  town: Town
}


export const TradeTownBtn: FC<Props> = memo(({ town }) => {
  const
    { setSelectedTownForTrade } = useTowns(),
    handlerSetTown = () => setSelectedTownForTrade(town);
  
  
  return (
    <button className={s.root} onClick={handlerSetTown}>
      Trade
    </button>
  )
});
