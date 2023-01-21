import { ProductName } from '../../../../../products/model/types';
import { MOCK_SHIP_CARGO, MOCK_SHIP_CARGO_EMPTY, MOCK_CARGO_BREAD_10 } from '../../../mocks';
import { getCargoById } from '..';


describe('getCargoById', () => {
  test('if ship cargo is empty, must be undefined', () => {
    expect(getCargoById(MOCK_SHIP_CARGO_EMPTY, ProductName.Bread)).toBe(undefined);
  });

  test('if ship cargo [undefined], must be undefined', () => {
    expect(getCargoById([undefined], ProductName.Bread)).toBe(undefined);
  });

  test('if cargo is availble in ship cargo, returns correct result', () => {
    expect(getCargoById(MOCK_SHIP_CARGO, ProductName.Bread)).toEqual(MOCK_CARGO_BREAD_10);
  });

  test('if cargo is not availble in ship cargo, returns undefined', () => {
    expect(getCargoById(MOCK_SHIP_CARGO, ProductName.Ropes)).toEqual(undefined);
  });

  test('if ship cargo is undefined, returns undefined', () => {
    expect(getCargoById(undefined, ProductName.Ropes)).toEqual(undefined);
  });
});

// npm run test:unit get-cargo-by-id.test.ts
