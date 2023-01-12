import { FC, memo, useEffect } from 'react';
import { Town, useTowns } from 'entities/towns';
import { TownPointMaker } from './town';
import { Point } from 'features/ui';
import { useKeys, useTownChanges } from 'shared/lib/hooks';



export const TownsPointsMaker: FC = memo(() => {
  const
    { towns, entities, selectedTown, selectTownName, updateTown } = useTowns();
    
  useTownChanges(selectedTown, updateTown);
  
  console.log('selectedTown: ', selectedTown);

 
  


  return (
    <>
      {
        towns.map(town => <TownPointMaker
          key  = {town.title}
          town = {town}
        />)
      }
    </>
  )
});
