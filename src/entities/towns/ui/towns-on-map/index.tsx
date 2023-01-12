import { FC, memo } from 'react';
import { useTowns } from '../../model/hooks';
import { TownOnMap } from '../town-on-map';


/** All Towns on Map */
export const TownsOnMap: FC = memo(() => {
  const { towns } = useTowns();

  return (
    <>
      {
        towns.map(town => <TownOnMap
          key  = {town.title}
          town = {town}
        />)
      }
    </>
  )
});
