import { Point } from 'features/ui';
import { useCallback, useEffect, useState } from 'react';



export interface Config {
  id: string // Отслеживаем клики в области id
}

export const useMouse = (config: Config) => {
  const
    { id } = config,
    base = { X: -1000, Y: -1000 },
    [point, setPoint] = useState<Point>(base);

  const getPointPercent = (e) => {
    console.log('e: ', e.target.id);
    if (e.target.id !== id) return
    const
      pageX = e.pageX,
      pageY = e.pageY;

    console.log(`{ X:${pageX}, Y:${pageY} }`);
    setPoint({ X: pageX, Y: pageY });
  };
  
  const clearPoint = useCallback(() => setPoint(base), []);

  useEffect(() => {
    document.addEventListener('click', getPointPercent);

    return () => {
      document.removeEventListener('click', getPointPercent);
    }
  }, []);


  return {
    point,
    clearPoint
  }
}
