import { getFilledMultyProducts } from '..';



describe('getFilledMultyProducts', () => {
  it('', () => {
    const towns = getFilledMultyProducts();

    // Всего MULTY products должно быть 49
    expect(towns.length).toEqual(49);

    // В одном городе MULTY не более 2х

  });
});

// npm run test:unit get-filled-multy-products.test.ts
