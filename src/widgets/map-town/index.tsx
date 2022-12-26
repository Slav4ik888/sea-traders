import { Town } from 'entities/town';
import { useUI } from 'features/ui';
import { FC, useState } from 'react';
import { Tooltip } from 'shared/ui';
import s from './styles.module.scss';

interface Props {
  town: Town
}


export const MapTown: FC<Props> = ({ town }) => {
  const
    [hover, setHover] = useState(false),
    left = `${town.point.X}px`,
    top  = `${town.point.Y}px`;

  const
    handlerHover    = () => setHover(true),
    handlerHoverOff = () => setHover(false);


  return (
    <div
      className    = {s.root}
      style        = {{ top, left }}
      onMouseEnter = {handlerHover}
      onMouseLeave = {handlerHoverOff}
    >
      <Tooltip title={town.title}>
        {
          hover ? (
            <img
              src={require('shared/assets/towns/town-icon-hover.png')}
              alt='town-icon'
              className={s.icon}
            />
          ) : (
            <img
              src={require('shared/assets/towns/town-icon.png')}
              alt='town-icon'
              className={s.icon}
            />
          )
        }
      </Tooltip>
    </div>
  )
};
