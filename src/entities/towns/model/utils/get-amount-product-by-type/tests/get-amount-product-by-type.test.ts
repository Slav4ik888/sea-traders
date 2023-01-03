import { ProductType } from '../../../../../products';
import { getAmountProductByType } from '..';


describe('getAmountProductByType', () => {
  test('get amount by all ProductType.SIMPLE', () => {
    expect(getAmountProductByType(ProductType.SIMPLE)).toEqual(10)
  });
  test('get amount by all ProductType.COMPLEX', () => {
    expect(getAmountProductByType(ProductType.COMPLEX)).toEqual(6)
  });
  test('get amount by all ProductType.MULTIPLE', () => {
    expect(getAmountProductByType(ProductType.MULTIPLE)).toEqual(4)
  });
});

// npm run test:unit get-amount-product-by-type.test.ts
