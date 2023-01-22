import { FC, useEffect } from 'react';
import { screenResizeListener, useUI } from 'features/ui';
import { AppRouter } from './providers/routes';
import { useShips } from 'entities/ships/model/hooks';
import { usePlayer } from 'entities/player';
import * as LS from 'shared/lib/local-storage';
import { getStartShip } from 'entities/ships';
import { TOWNS } from 'entities/towns';
import { getRandomNumber } from 'shared/utils';


export const App: FC = () => {
  const
    { setDisplaySize } = useUI(),
    { entities, addShip, addShips } = useShips(),
    { playerId } = usePlayer();
  
  
  useEffect(() => {
    screenResizeListener(setDisplaySize);

    // Initialize
    const shipsSaved = LS.getStateSchemaShips();
    
    if (shipsSaved) {
      addShips(shipsSaved.entities);
    }
    else {
      const
        startShip = getStartShip(entities, playerId, TOWNS[getRandomNumber(0, 59)].title);
        // startShip2 = getStartShip(entities, playerId, TOWNS[getRandomNumber(0, 59)].title),
        // startShip3 = getStartShip(entities, playerId, TOWNS[getRandomNumber(0, 59)].title);

      // addShips({
      //   [startShip1.id]: startShip1,
      //   [startShip2.id]: startShip2,
      //   [startShip3.id]: startShip3,
      // });
      addShip(startShip);
    }


    // Доп иконка на иконке с товаром в городе - высокий спрос
    

    // На основе сложных продуктов в городе:
    //  - определить спрос на обычные продукты
    //  - изменить цены на обычные
    // На основе спроса сложных продуктов


    // Каждые 10 дней пересчит

  }, []);

  
  console.log('Wellcome to the game: "The Sea Traders!"');
  return (
    <>
      <AppRouter />
    </>
  )
};
