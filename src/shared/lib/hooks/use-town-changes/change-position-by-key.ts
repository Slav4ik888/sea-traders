import { Point } from 'features/ui';


export const changePositionByKey = (
  keyCode : number,
  point   : Point,
  moveTo  : (point: Point) => void
): void => {

  switch (keyCode) {
    // Up
    case 56:
    case 119: moveTo({ X: point.X,     Y: point.Y - 1 }); break;

    // Left
    case 52:
    case 97:  moveTo({ X: point.X - 1, Y: point.Y }); break;

    // Right
    case 54:
    case 100: moveTo({ X: point.X + 1, Y: point.Y }); break;
    
    // Down
    case 50: 
    case 115: moveTo({ X: point.X,     Y: point.Y + 1 }); break;

    default: return
  }
};
