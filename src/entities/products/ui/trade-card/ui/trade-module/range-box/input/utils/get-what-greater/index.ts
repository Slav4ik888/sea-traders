import { WhatGreater } from '../../types';
import { transformMinMax } from '../transform-min-max';

/**
 * Calc что больше min | max
 */
export const getWhatGreater = (_min: string, _max: string): WhatGreater => {
  const { min, max } = transformMinMax(_min, _max);
  
  if (min > max) return WhatGreater.MIN;
  if (min === max) return WhatGreater.EQUAL;
  if (min < max) return WhatGreater.MAX;
}
