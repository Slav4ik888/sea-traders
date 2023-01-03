import { ProductName, ProductType } from '../../../../../products';
import { getProductsByType } from '..';


describe('getProductsByType', () => {
  test('get ProductName[] by ProductType.SIMPLE', () => {
    expect(getProductsByType(ProductType.SIMPLE)).toEqual([
      ProductName.Wood,
      ProductName.Bricks,
      ProductName.Wheat,
      ProductName.Fruits,
      ProductName.Corn,
      ProductName.Sugar,
      ProductName.Hemp,
      ProductName.Cotton,
      ProductName.Dyes,
      ProductName.Tobacco
    ])
  });
  test('get ProductName[] by ProductType.COMPLEX', () => {
    expect(getProductsByType(ProductType.COMPLEX)).toEqual([
      ProductName.Textiles,
      ProductName.Metal,
      ProductName.Meat,
      ProductName.Ropes,
      ProductName.Rum,
      ProductName.Bread,
    ])
  });
  test('get ProductName[] by ProductType.MULTIPLE', () => {
    expect(getProductsByType(ProductType.MULTIPLE)).toEqual([
      ProductName.Tools,
      ProductName.Coffee,
      ProductName.Cacao,
      ProductName.Clothing,
    ])
  });
});

// npm run test:unit get-products-by-type.test.ts
