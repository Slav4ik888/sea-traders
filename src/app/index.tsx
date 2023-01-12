import { FC, useEffect } from 'react';
import { screenResizeListener, useUI } from 'features/ui';
import { AppRouter } from './providers/routes';
import { useMouse } from 'shared/lib';
import { useShips } from 'entities/ships/model/hooks';
import { usePlayer } from 'entities/player';
import * as LS from 'shared/lib/local-storage';
import { getStartShip } from 'entities/ships';


export const App: FC = () => {
  const
    { setDisplaySize } = useUI(),
    { entities, addShip, addShips } = useShips(),
    { playerId, addShip: addPlayerShip } = usePlayer();
  
  
  useEffect(() => {
    screenResizeListener(setDisplaySize);

    // Initialize
    const playerSaved = LS.getStateSchemaPlayer();
    
    if (playerSaved) {
      addShips(playerSaved.entities);
    }
    else {
      const startShip = getStartShip(entities, playerId);
      addPlayerShip(startShip);
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
