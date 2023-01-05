import { ProductName } from '../../../../../../products';
import { fillMultyProducts } from '..';
import { TownsEntities } from '../../../../types';
import { getInitialTowns } from '../../../get-initial-towns';
import { matchMultyTypesProducesInTown } from '../match-multy-types-produces-in-town';
import { PRODUCES_IN_TOWNS } from '../../../../data';
import { getSumProductName } from '../../get-sum-product-name';
import { matchCrossProductLine } from '../../match-cross-product-line';
import { getAllMultyProducts } from '../get-all-multy-products';



describe('fillMultyProducts', () => {
  const entities: TownsEntities = getInitialTowns();
  fillMultyProducts(entities);
  const towns = Object.values(entities);
  

  it('Amount of Multy Product in towns', () => {
    const products = getAllMultyProducts();
    
    products.forEach(productName =>
      expect(getSumProductName(towns, productName))
        .toEqual(PRODUCES_IN_TOWNS[productName])
    );
  });


  it('All Multy Product = 49', () => {
    expect(
      towns
        .map(town => matchMultyTypesProducesInTown(town))
        .reduce((acc, item) => {
          acc += item;
          return acc
        }, 0)
    )
      .toEqual(49);
  });


  it('Multy Product in Town <= 2', () => {
    expect(
      towns
        .map(matchMultyTypesProducesInTown)
        .reduce((acc, item) => {
          if (item > 2) acc += 1;
          return acc
        }, 0)
    )
      .toBe(0);
  });

  it('Must not an intersection with product-line', () => {
    let crossProductLine = false;

    towns.forEach(town => {
      town.produces.forEach((productName) => {
        if (matchCrossProductLine(town.produces, productName)) crossProductLine = true;
      })
    });
    
    expect(crossProductLine).toBe(false)
  });
});

// npm run test:unit fill-multy-products.test.ts
