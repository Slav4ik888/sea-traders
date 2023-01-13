import { FC, memo } from 'react';
import { useUI } from 'features/ui';
import s from './index.module.scss';


interface Props {
  open     : boolean
  dwellers : number
}


export const TooltipTownDwellers: FC<Props> = memo(({ open, dwellers }) => {
  const { displayMapVisibleDwellers } = useUI();
  
  if (!open && !displayMapVisibleDwellers) return null;


  return (
    <div className={s.root}>
      <img
        src       = {require('shared/assets/icons/dwellers.png')}
        alt       = 'dwellers'
        className = {s.icon}
      />
      <div className={s.dwellers}>
        {
          dwellers
        }
      </div>
    </div>
  )
});
