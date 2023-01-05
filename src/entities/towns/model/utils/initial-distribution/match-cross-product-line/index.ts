import { ProductName, PRODUCTS_LINES } from '../../../../../products';

/**
 * Находит пересечение продукта с существующей product-line.
 * Является ли productName участвующим в процессе производства
 * одного из имеющихся Complex | Multy
 */
export const matchCrossProductLine = (
  produces    : ProductName[],
  productName : ProductName
): boolean => {
  if (!produces.length) return false

  let result = false;

  produces.forEach(prodName => {
    // Есть ли это продукт в существующих линиях производства
    let overlap = PRODUCTS_LINES[prodName].find(item => item.productName === productName);
    if (overlap) result = true
    
    // Есть ли в линии производства этого продукта существующие продукты
    overlap = PRODUCTS_LINES[productName].find(item => item.productName === prodName);
    if (overlap) result = true
  }); 


  return result
}
