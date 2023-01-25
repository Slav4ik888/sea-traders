import { FC, memo } from 'react';
import { TownName } from 'entities/towns';
import { Input } from 'shared/ui';
import { cn } from 'shared/lib/class-names';
import { useDevTownsRoutesMaker } from 'widgets/dev/towns-routes-maker/model/hooks';
import s from './index.module.scss';



interface Props {
  townnameRow  : TownName
  townnameCell : TownName
}


export const Cell: FC<Props> = memo(({ townnameRow, townnameCell }) => {
  const
    { updateTownRoute } = useDevTownsRoutesMaker(),
    thisTown = townnameRow === townnameCell;
  
  const handlerUpdate = (value: number) => {
    console.log('value: ', value);
  };


  return (
    <div className={s.root}>
      <Input
        clearZeroIfFocus
        type      = 'number'
        className = {cn(s.input, { [s.thisTown]: thisTown })}
        disabled  = {thisTown}
        onSubmit  = {handlerUpdate}
      />
    </div>
  )
});
