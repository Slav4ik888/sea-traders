import { mocks } from './mocks';
import { getLetterByDigit } from '..';


describe('getLetterByDigit', () => {
  mocks.forEach((m, i) => {
    it(m[0].description, () => {
      expect(getLetterByDigit(m[0].value, m[0].upper)).toEqual(m[1])
    })
  })
});

// npm run test:unit get-letter-by-digit.test.ts
