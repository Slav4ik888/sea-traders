import { FC, memo } from 'react';
import { TownName } from '../../../../../model';
import { useUI } from 'features/ui';
import s from './index.module.scss';



interface Props {
  open  : boolean
  title : TownName
}


export const TooltipTownTitleText: FC<Props> = memo(({ open, title }) => {
  const { displayMapVisibleTownsNames } = useUI();

  if (!open && !displayMapVisibleTownsNames) return null;


  return (
    <div className = {s.root}>
      {
        title
      }
    </div>
  )
});
