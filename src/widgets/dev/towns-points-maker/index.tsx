import { FC, memo, useCallback, useEffect } from 'react';
import { TownName, useTowns } from 'entities/towns';
import { TownPointMaker } from './town';
import { useMouse, useTownChanges, UseTownChangesType, useValue } from 'shared/lib/hooks';
import { TooltipEditTown } from './tooltip-town-edit';



export const TownsPointsMaker: FC = memo(() => {
  const
    hookValue = useValue<string>(),
    { towns, selectedTown, selectTownName } = useTowns(),
    { point } = useMouse({ id: 'backgroun-main-map' }),
    { changePointTo } = useTownChanges(UseTownChangesType.PORT_POINT);
  
  console.log('towns: ', towns);
  console.log('selectedTown: ', selectedTown);
  

  useEffect(() => {
    selectedTown && changePointTo(point)
  }, [point]);


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
