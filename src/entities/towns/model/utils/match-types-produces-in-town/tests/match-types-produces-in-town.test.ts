import { ProductName, ProductType } from '../../../../../products';
import { Town, TownName } from '../../../types';
import { matchTypesProducesInTown } from '..';

const town = {
  title      : TownName.Andross,
  produces: [
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
  ]
}

describe('matchTypesProducesInTown', () => {
  test('4 ProductType.SIMPLE', () => {
    expect(matchTypesProducesInTown(town as Town, ProductType.SIMPLE)).toEqual(4)
  });
  test('2 ProductType.COMPLEX', () => {
    expect(matchTypesProducesInTown(town as Town, ProductType.COMPLEX)).toEqual(2)
  });
  test('3 ProductType.MULTIPLE', () => {
    expect(matchTypesProducesInTown(town as Town, ProductType.MULTIPLE)).toEqual(3)
  });
});

// npm run test:unit match-types-produces-in-town.test.ts
