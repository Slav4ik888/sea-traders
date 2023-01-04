import { ProductName, ProductType } from '../../../../../../products';
import { fillMultyProducts } from '../../fill-multy-products';
import { TownsEntities } from '../../../../types';
import { getInitialTowns } from '../../../get-initial-towns';
import { PRODUCES_IN_TOWNS } from '../../../../data';
import { fillComplexProducts } from '..';
import { matchComplexTypesProducesInTown } from '../match-complex-types-produces-in-town';
import { getSumProductName } from '../../get-sum-product-name';
import { matchComplexAndMultyTypesProducesInTown } from '../match-complex-and-multy-types-produces-in-town';



describe('fillComplexProducts', () => {
  const entities: TownsEntities = getInitialTowns();
    
  fillMultyProducts(entities);
  fillComplexProducts(entities);

  const towns = Object.values(entities);

  it('Amount of Complex Product in towns', () => {
    expect(getSumProductName(towns, ProductName.Textiles)).toEqual(PRODUCES_IN_TOWNS[ProductName.Textiles]);
    expect(getSumProductName(towns, ProductName.Metal)).toEqual(PRODUCES_IN_TOWNS[ProductName.Metal]);
    expect(getSumProductName(towns, ProductName.Meat)).toEqual(PRODUCES_IN_TOWNS[ProductName.Meat]);
    expect(getSumProductName(towns, ProductName.Bread)).toEqual(PRODUCES_IN_TOWNS[ProductName.Bread]);
    expect(getSumProductName(towns, ProductName.Ropes)).toEqual(PRODUCES_IN_TOWNS[ProductName.Ropes]);
    expect(getSumProductName(towns, ProductName.Rum)).toEqual(PRODUCES_IN_TOWNS[ProductName.Rum]);
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

  it('Complex & Multy must not cross', () => {
    const notCrossProducts = towns.filter((town) => matchCrossComplexWithMultyProduces(town));
    console.log('notCrossProducts: ', notCrossProducts);

    expect(notCrossProducts).toEqual([])
  });
});

// npm run test:unit fill-complex-products.test.ts
