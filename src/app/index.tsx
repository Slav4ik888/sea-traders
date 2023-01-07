import { FC, useEffect } from 'react';
import { screenResizeListener, useUI } from 'features/ui';
import { AppRouter } from './providers/routes';
import { useMouse } from 'shared/lib';



export const App: FC = () => {
  const
    { setDisplaySize } = useUI();
  
  useMouse();
  
  useEffect(() => {
    screenResizeListener(setDisplaySize);
    
    // Button on Map - show all TownsProducts
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
