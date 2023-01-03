import { ProductName, ProductType } from '../../../../../products';
import { getFilledMultyProducts } from '..';
import { matchTypesProducesInTown } from '../../match-types-produces-in-town';
import { Town } from '../../../types';

/** Считаем количество ProductName */
const getSumProductName = (towns: Town[], type: ProductName) => {
  return towns.reduce((acc, town) => {
    if (town.produces.includes(type)) acc += 1
    return acc
  }, 0)
}


describe('getFilledMultyProducts', () => {
  it('', () => {
    const towns = getFilledMultyProducts();
    
    expect(getSumProductName(towns, ProductName.Tools)).toEqual(10);
    expect(getSumProductName(towns, ProductName.Coffee)).toEqual(13);
    expect(getSumProductName(towns, ProductName.Cacao)).toEqual(16);
    expect(getSumProductName(towns, ProductName.Clothing)).toEqual(10);

    // Всего MULTY products должно быть 49
    const townsFilled = towns.map(town => matchTypesProducesInTown(town, ProductType.MULTIPLE));

    const allMulty = townsFilled.reduce((acc, item) => {
      acc += item;
      return acc
    }, 0);

    expect(allMulty).toEqual(49);
    

    // В одном городе MULTY не более 2х
    expect(townsFilled.reduce((acc, item) => {
      if (item > 2) acc += 1;
      return acc
    }, 0)).toEqual(0);
  });
});

// npm run test:unit get-filled-multy-products.test.ts
