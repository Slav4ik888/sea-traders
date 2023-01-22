import { getWhatGreater } from '..';
import { WhatGreater } from '../../../types';


describe('getWhatGreater', () => {
  // Min greater than Max
  test('Min -101 greater that Max 100', () => expect(getWhatGreater('-101', '100')).toEqual(WhatGreater.MIN));
  test('Min -1 greater that Max 0', () => expect(getWhatGreater('-1', '0')).toEqual(WhatGreater.MIN));

  // Max greater that Min
  test('Max 100 greater that Min 0', () => expect(getWhatGreater('0', '100')).toEqual(WhatGreater.MAX));
  test('Max 100 greater that Min 99', () => expect(getWhatGreater('99', '100')).toEqual(WhatGreater.MAX));
  
  // Equal
  test('Min -100 equal Max 100', () => expect(getWhatGreater('-100', '100')).toEqual(WhatGreater.EQUAL));
  test('Min 0 equal Max 0',      () => expect(getWhatGreater('0', '0')).toEqual(WhatGreater.EQUAL));
});

// npm run test:unit get-what-greater.test.ts
