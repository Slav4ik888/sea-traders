import { FC, useEffect } from 'react';
import { screenResizeListener, useUI } from 'features/ui';
import { AppRouter } from './providers/routes';
import { useMouse } from 'shared/lib';
import { useTowns } from 'entities/towns';



export const App: FC = () => {
  const
    { gameLevel, setDisplaySize } = useUI(),
    { setTownsMarkets } = useTowns();
  
  useMouse();
  
  useEffect(() => {
    screenResizeListener(setDisplaySize);
    setTownsMarkets(gameLevel); // Заполнение Towns Markets initial data
    // Распределяем производства Multy продуктов
    // Распределяем производства Complex продуктов
    // Распределяем производства обычных продуктов
    // На основе сложных продуктов в городе:
    //  - определить спрос на обычные продукты
    //  - изменить цены на обычные
    // На основе спроса сложных продуктов
    // Иконку производства на товаре, если он производится в этом городе

    // Каждые 10 дней пересчит

  }, [gameLevel]);

  
  console.log('Wellcome to the game: "The Sea Traders!"');
  return (
    <>
      <AppRouter />
    </>
  )
};
