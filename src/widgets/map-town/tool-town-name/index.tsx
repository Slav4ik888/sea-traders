import { FC, ReactNode } from 'react';
import { Tooltip } from 'shared/ui';
import s from './styles.module.scss';


interface Props {
  title: string
  children: ReactNode
}


export const TootipTownName: FC<Props> = ({ children, title }) => {

  return (
    <Tooltip
      title      = {title}
      enterDelay = {500}
      styles     = {{ tooltip: s.tooltip, title: s.title }}
    >
      {
        children
      }
    </Tooltip>
  )
};
