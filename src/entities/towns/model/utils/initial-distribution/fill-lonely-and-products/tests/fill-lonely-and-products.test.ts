import { fillMultyProducts } from '../../fill-multy-products';
import { TownsEntities } from '../../../../types';
import { getInitialTowns } from '../../../get-initial-towns';
import { fillLonelyAndSimpleProducts } from '..';
import { getSumProductName } from '../../get-sum-product-name';
import { matchCrossProductLine } from '../../match-cross-product-line';
import { fillComplexProducts } from '../../fill-complex-products';
import { getAllSimpleProducts } from '../get-all-simple-products';
import { matchSimpleTypesProducesInTown } from '../match-simple-types-produces-in-town';
import { matchLonelyTypesProducesInTown } from '../match-lonely-types-produces-in-town';
import { getAllLonelyProducts } from '../get-all-lonely-products';
import { PRODUCES_IN_TOWNS } from '../../../../../../products';



describe('fillLonelyAndSimpleProducts', () => {
  const entities: TownsEntities = getInitialTowns();
    
  fillMultyProducts(entities);
  fillComplexProducts(entities);
  fillLonelyAndSimpleProducts(entities)

  const towns = Object.values(entities);
  

  it('Amount of Lonely Product in towns', () => {
    const products = getAllLonelyProducts();
    
    products.forEach(productName => {
      const sum = getSumProductName(towns, productName);
      if (sum !== PRODUCES_IN_TOWNS[productName]) console.log('productName: ', productName, ', must be:', PRODUCES_IN_TOWNS[productName], 'recive:', sum);

      expect(sum).toEqual(PRODUCES_IN_TOWNS[productName]);
    });
  });

  it('Amount of Simple Product in towns', () => {
    const products = getAllSimpleProducts();
    
    products.forEach(productName => {
      const sum = getSumProductName(towns, productName);
      // if (sum !== PRODUCES_IN_TOWNS[productName]) console.log('productName: ', productName, ', must be:', PRODUCES_IN_TOWNS[productName], 'recive:', sum);

      expect(sum).toEqual(PRODUCES_IN_TOWNS[productName]);
    });
  });


  it('All Lonely Products = 57', () => {
    expect(
      towns
        .map(matchLonelyTypesProducesInTown)
        .reduce((acc, item) => {
          acc += item;
          return acc
        }, 0)
    )
      .toEqual(57);
  });


  it('All Simple Products = 118', () => {
    expect(
      towns
        .map(matchSimpleTypesProducesInTown)
        .reduce((acc, item) => {
          acc += item;
          return acc
        }, 0)
    )
      .toEqual(118);
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

// npm run test:unit fill-lonely-and-products.test.ts
