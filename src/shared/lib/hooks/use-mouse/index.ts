import { Point } from 'features/ui';
import { useCallback, useEffect, useState } from 'react';


export const useMouse = () => {
  const
    base = { X: -1000, Y: -1000 },
    [point, setPoint] = useState<Point>(base);

  const getPointPercent = (e) => {
    if (e.detail !== 2) return
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
