import { FC, memo } from 'react';
import { useShips } from 'entities/ships';
import { useTowns, TownName } from '../../model';
import { TownOnMap } from '../town-on-map';



/** All Towns on Map */
export const TownsOnMap: FC = memo(() => {
  const
    { towns } = useTowns(),
    { targetTown, relocateShip, activateTargetTown } = useShips();


  const handlerClick = (townName: TownName) => {
    console.log('townName: ', townName);
    console.log('targetTown: ', targetTown);
    if (targetTown) {
      relocateShip(townName);
      activateTargetTown(false);
    }
  };

  return (
    <>
      {
        towns.map(town => <TownOnMap
          key     = {town.title}
          town    = {town}
          onClick = {handlerClick}
        />)
      }
    </>
  )
});
