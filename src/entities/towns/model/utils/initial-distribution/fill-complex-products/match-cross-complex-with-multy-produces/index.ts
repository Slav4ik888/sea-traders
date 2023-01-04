import { Town } from '../../../../types';
import { getMulty } from '../../../get-multy';

/**
 * Находит пересечения между продуктами Complex & Multy
 */
export const matchCrossComplexWithMultyProduces = (town: Town): boolean => {
  // Отбираем все Multy in town
  const allMulty = getMulty(town.produces);
  console.log('allMulty: ', allMulty);

  if (!allMulty.length) return false

  // Перебираем их и проверяем среди списка тех, что требуются для производства этого
  let result = false;

  allMulty.forEach(productName => {
    
  });

  return result
}
