import { getMulty } from '..';
import { ProductName } from '../../../../../products';

const produces: ProductName[] = [
  // Simple
  ProductName.Bricks,
  ProductName.Cotton,
  ProductName.Corn,
  ProductName.Dyes,
  // Complex
  ProductName.Meat,
  ProductName.Ropes,
  // Multy
  ProductName.Clothing,
  ProductName.Cacao,
  ProductName.Coffee
];


describe('getMulty', () => {
  it('Must be [with 3 productName]', () => {
    expect(getMulty(produces)).toEqual([ProductName.Clothing, ProductName.Cacao, ProductName.Coffee]);
  });
  it('Must be empty []', () => {
    expect(getMulty(produces)).toEqual([ProductName.Clothing, ProductName.Cacao, ProductName.Coffee]);
  });
});

// npm run test:unit get-multy.test.ts
