import { Town } from 'entities/towns';
import { FC, useState } from 'react';
import { TradeTownBtn } from 'widgets/trade';
import { TootipTownName } from './tool-town-name';
import s from './styles.module.scss';


interface Props {
  town: Town
}


export const MapTown: FC<Props> = ({ town }) => {
  const
    [_, setTimer] = useState<number>(0),
    [hover, setHover] = useState(false),
    left = `${town.point.X}px`,
    top  = `${town.point.Y}px`;

  
  const
    handlerHover = () => {
      setTimer(new Date().getTime());
      setTimeout(() => {
        setTimer(prev => {
          prev && setHover(true);
          return 0
        });
      }, 500);
    },

    handlerHoverOff = () => {
      setTimer(0);
      setTimeout(() => {
        setHover(false);
      }, 1000);
    };


  return (
    <div
      className    = {s.root}
      style        = {{ top, left }}
      onMouseEnter = {handlerHover}
      onMouseLeave = {handlerHoverOff}
    >
      <TootipTownName title={town.title}>
        <img
          src       = {require('shared/assets/towns/icons/town-icon.png')}
          alt       = 'town-icon'
          className = {s.icon}
        />
      </TootipTownName>
      {
        hover && <TradeTownBtn town={town} />
      }
    </div>
  )
};
