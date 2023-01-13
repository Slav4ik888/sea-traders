import { FC, memo, useCallback } from 'react';
import { TownName, useTowns } from 'entities/towns';
import { TownPointMaker } from './town';
import { useTownChanges, UseTownChangesType, useValue } from 'shared/lib/hooks';
import { TooltipEditTown } from './tooltip-town-edit';



export const TownsPointsMaker: FC = memo(() => {
  const
    hookValue = useValue<string>(),
    { towns, selectedTown, selectTownName } = useTowns();
  console.log('selectedTown: ', selectedTown);

  useTownChanges(UseTownChangesType.PORT_POINT);
  

  const handlerTownClick = useCallback((townName: TownName) => {
    if (townName === selectedTown?.title) hookValue.setOpen();
    else selectTownName(townName);
  }, [selectedTown, selectTownName]);

  return (
    <>
      {
        towns.map(town => <TownPointMaker
          key     = {town.title}
          town    = {town}
          onClick = {handlerTownClick}
        />)
      }
      <TooltipEditTown hookValue={hookValue} />
    </>
  )
});
