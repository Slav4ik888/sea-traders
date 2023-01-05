import { ProductName } from '../../../../../../products';
import { fillMultyProducts } from '../../fill-multy-products';
import { TownsEntities } from '../../../../types';
import { getInitialTowns } from '../../../get-initial-towns';
import { PRODUCES_IN_TOWNS } from '../../../../data';
import { fillComplexProducts } from '..';
import { matchComplexTypesProducesInTown } from '../match-complex-types-produces-in-town';
import { getSumProductName } from '../../get-sum-product-name';
import { matchComplexAndMultyTypesProducesInTown } from '../match-complex-and-multy-types-produces-in-town';
import { matchCrossProductLine } from '../../match-cross-product-line';
import { getAllComplexProducts } from '../get-all-complex-products';



describe('fillComplexProducts', () => {
  const entities: TownsEntities = getInitialTowns();
    
  fillMultyProducts(entities);
  fillComplexProducts(entities);

  const towns = Object.values(entities);

  it('Amount of Complex Product in towns', () => {
    const products = getAllComplexProducts();
    
    products.forEach(productName =>
      expect(getSumProductName(towns, productName)).toEqual(PRODUCES_IN_TOWNS[productName])
    );
  });


  it('All Complex Product = 76', () => {
    const townsComplexFilled = towns.map(town => matchComplexTypesProducesInTown(town));
    console.log('townsComplexFilled: ', townsComplexFilled);

    const allComplex = townsComplexFilled.reduce((acc, item) => {
      acc += item;
      return acc
    }, 0);

    expect(allComplex).toEqual(76);
  });


  it('Complex products in Town <= 3', () => {
    const townsComplexFilled = towns.map(town => matchComplexTypesProducesInTown(town));

    expect(townsComplexFilled.reduce((acc, item) => {
      if (item > 3) acc += 1;
      return acc
    }, 0)).toEqual(0);
  });

  it('Complex & Multy products in Town <= 4', () => {
    const townsComplexAndMultyFilled = towns.map(town => matchComplexAndMultyTypesProducesInTown(town));
    console.log('townsComplexAndMultyFilled: ', townsComplexAndMultyFilled);

    expect(townsComplexAndMultyFilled.reduce((acc, item) => {
      if (item > 4) acc += 1;
      return acc
    }, 0)).toEqual(0);
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

// npm run test:unit fill-complex-products.test.ts
