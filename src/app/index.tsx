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
  }, []);

  
  console.log('Wellcome to the game: "The Sea Traders!"');
  return (
    <>
      <AppRouter />
    </>
  )
};
