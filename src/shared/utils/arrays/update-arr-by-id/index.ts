import { updateArrWithItemByField } from '../update-arr-with-item-by-field';

/**
 * Возвращает массив с обновлённым item by id
 * 
 * Если нет массива items, то создаёт его
 * 
 * @param {array} items 
 * @param {object} updateItem 
 * @param {string | array} flags - если стоит `update`, то в обновляемом объекте, обновляются только 
 * те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
 */
export function updateArrById<T extends object>(
  items      : T[],
  updateItem : Partial<T>,
  flags?     : string | string[],
): T[] {
  return updateArrWithItemByField(items, 'id', updateItem, flags);
}
