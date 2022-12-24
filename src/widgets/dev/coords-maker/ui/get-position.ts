import { Point } from 'features/ui';

export const getPosition = (point: Point) => {
  const
    $main = document.getElementById('main'),
    maxWidth = $main?.scrollWidth - 500,
    maxHeight = $main?.scrollHeight - 300,
    x = point?.X,
    y = point?.Y;
  
  const getTop = () => {
    if (y > maxHeight) return y - 200
    else return y
  };

  const getLeft = () => {
    if (x > maxWidth) return x - 500
    else return x + 35
  }
  
  return {
    top  : getTop() + 'px',
    left : getLeft() + 'px'
  }
}
