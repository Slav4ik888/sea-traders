import { Town } from 'entities/town';
import { useUI } from 'features/ui';
import { FC } from 'react';
import { Tooltip } from 'shared/ui';
import s from './styles.module.scss';

interface Props {
  town: Town
}


export const MapTown: FC<Props> = ({ town }) => {
  const
    left = `${town.point.X}px`,
    top = `${town.point.Y}px`;


  return (
    <div className={s.root} style={{ top, left }}>
      <Tooltip title={town.title}>
        <img
          src={require('shared/assets/towns/town-icon.png')}
          alt='town-icon'
          className={s.icon}
        />
      </Tooltip>
    </div>
  )
};
