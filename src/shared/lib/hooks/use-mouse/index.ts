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
  
  const handlerKey = (e) => {
    const key = e.code;
    switch (key) {
      case 'KeyA': setPoint(p => ({ X: p.X - 1, Y: p.Y })); break; 
      case 'KeyW': setPoint(p => ({ X: p.X, Y: p.Y - 1 })); break;
      case 'KeyD': setPoint(p => ({ X: p.X + 1, Y: p.Y })); break;
      case 'KeyS': setPoint(p => ({ X: p.X, Y: p.Y + 1 })); break;

      default: return
    }
  };

  const clearPoint = useCallback(() => setPoint(base), []);

  useEffect(() => {
    document.addEventListener('click', getPointPercent);
    document.addEventListener('keypress', handlerKey);
  }, []);


  return {
    point,
    clearPoint
  }
}
