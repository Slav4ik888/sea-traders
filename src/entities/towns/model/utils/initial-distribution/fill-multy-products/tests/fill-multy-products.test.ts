import { ProductName } from '../../../../../../products';
import { fillMultyProducts } from '..';
import { TownsEntities } from '../../../../types';
import { getInitialTowns } from '../../../get-initial-towns';
import { matchMultyTypesProducesInTown } from '../match-multy-types-produces-in-town';
import { PRODUCES_IN_TOWNS } from '../../../../data';
import { getSumProductName } from '../../get-sum-product-name';



describe('fillMultyProducts', () => {
  const entities: TownsEntities = getInitialTowns();
    
  fillMultyProducts(entities);
    
  const towns = Object.values(entities);
  
  it('Amount of Multy Product in towns', () => {
    expect(getSumProductName(towns, ProductName.Tools)).toEqual(PRODUCES_IN_TOWNS[ProductName.Tools]);
    expect(getSumProductName(towns, ProductName.Coffee)).toEqual(PRODUCES_IN_TOWNS[ProductName.Coffee]);
    expect(getSumProductName(towns, ProductName.Cacao)).toEqual(PRODUCES_IN_TOWNS[ProductName.Cacao]);
    expect(getSumProductName(towns, ProductName.Clothing)).toEqual(PRODUCES_IN_TOWNS[ProductName.Clothing]);
  });


  it('All Multy Product = 49', () => {
    const townsFilled = towns.map(town => matchMultyTypesProducesInTown(town));

    const allMulty = townsFilled.reduce((acc, item) => {
      acc += item;
      return acc
    }, 0);

    expect(allMulty).toEqual(49);
  });


  it('Multy Product in Town <= 2', () => {
    const townsFilled = towns.map(town => matchMultyTypesProducesInTown(town));

    expect(townsFilled.reduce((acc, item) => {
      if (item > 2) acc += 1;
      return acc
    }, 0)).toEqual(0);
  });
});

// npm run test:unit fill-multy-products.test.ts
