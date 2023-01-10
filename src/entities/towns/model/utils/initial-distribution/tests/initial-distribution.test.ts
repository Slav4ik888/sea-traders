import { initialDistribution } from '..';
import { getSumProductName } from '../get-sum-product-name';
import { matchCrossProductLine } from '../match-cross-product-line';
import { PRODUCES_IN_TOWNS, PRODUCTS } from '../../../../../products';



describe('initialDistribution', () => {
  const
    entities = initialDistribution(),
    towns = Object.values(entities);
  

  it('Dwellers in Town must be > 0', () =>
    expect(
      towns.reduce((acc, { dwellers }) => {
        if (!dwellers || dwellers < 0) acc += 1
        return acc
      }, 0)
    )
      .toBe(0)
  );


  it('Amount of Product in towns', () => {
    Object
      .values(PRODUCTS)
      .map(p => p.id)
      .forEach(productName => {
        const sum = getSumProductName(towns, productName);
        if (sum !== PRODUCES_IN_TOWNS[productName]) console.log('productName: ', productName, ', must be:', PRODUCES_IN_TOWNS[productName], 'recive:', sum);

        expect(sum).toEqual(PRODUCES_IN_TOWNS[productName]);
      });
  });



  it('All Products = 300', () => {
    expect(
      towns
        .reduce((acc, town) => {
          acc += town.produces.length;
          return acc
        }, 0)
    )
      .toEqual(300);
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


// npm run test:unit initial-distribution.test.ts
