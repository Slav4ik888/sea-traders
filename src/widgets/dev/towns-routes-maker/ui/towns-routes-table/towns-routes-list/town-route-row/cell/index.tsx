import { FC, memo, useCallback, useMemo } from 'react';
import { TownName } from 'entities/towns';
import { Input, Tooltip } from 'shared/ui';
import { cn } from 'shared/lib/class-names';
import { useDevTownsRoutesMaker } from 'widgets/dev/towns-routes-maker/model/hooks';
import s from './index.module.scss';



interface Props {
  townnameRow  : TownName
  townnameCell : TownName
}


export const Cell: FC<Props> = memo(({ townnameRow, townnameCell }) => {
  const
    { townsRoutes, updateTownRoute } = useDevTownsRoutesMaker(),
    thisTown = townnameRow === townnameCell,
    tooltipText = useMemo(() => `${townnameRow} - ${townnameCell}`, []);
  
  const handlerUpdate = useCallback((value: string) => {
    updateTownRoute({ selectedTown1: townnameRow, selectedTown2: townnameCell, selectedMileage: Number(value) });
  }, [townnameRow, townnameCell]);

  return (
    <div className={s.root}>
      <Tooltip
        text={tooltipText}
      >
        <Input
          clearZeroIfFocus
          type      = 'number'
          value     = {townsRoutes?.[townnameRow][townnameCell]}
          className = {cn(s.input, { [s.thisTown]: thisTown })}
          disabled  = {thisTown}
          onSubmit  = {handlerUpdate}
        />
      </Tooltip>
    </div>
  )
});
