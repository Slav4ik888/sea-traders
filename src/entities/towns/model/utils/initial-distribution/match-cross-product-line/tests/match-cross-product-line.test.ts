import { ProductName } from '../../../../../../products';
import { matchCrossProductLine } from '..';

const produces: ProductName[] = [
  // Simple
  ProductName.Bricks,
  // Complex
  ProductName.Metal,
  // Multy
  ProductName.Cacao,
  ProductName.Tools
];


describe('matchCrossProductLine', () => {
  // TRUE
  test('Must be true because there is an intersection Multy - Simple', () =>
    expect(matchCrossProductLine(produces, ProductName.Wood)).toEqual(true));

  test('Must be true because there is an intersection Multy - Complex', () =>
    expect(matchCrossProductLine(produces, ProductName.Metal)).toEqual(true));

  test('Must be true because there is an intersection Multy - Multy', () =>
    expect(matchCrossProductLine(produces, ProductName.Tools)).toEqual(true));
  
  // FALSE
  test('Must be false because there is not an intersection Multy - Simple', () =>
    expect(matchCrossProductLine(produces, ProductName.Bricks)).toEqual(false));

  test('Must be false because there is not an intersection Multy - Complex', () =>
    expect(matchCrossProductLine(produces, ProductName.Rum)).toEqual(false));
  
  test('Must be false because there is not an intersection Multy - Multy', () =>
    expect(matchCrossProductLine(produces, ProductName.Clothing)).toEqual(false));
  
  test('Must be false because присутствует сам продукт', () =>
    expect(matchCrossProductLine(produces, ProductName.Bricks)).toEqual(false));
});

// npm run test:unit match-cross-product-line.test.ts
