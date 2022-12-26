import { updateObject } from '../../objects';


/**
 * Возвращает массив с обновлённым item
 * 
 * Если нет массива items, то создаёт его
 * 
 * @param {array} items 
 * @param {string} field - 
 * @param {object} updateItem 
 * @param {string | array} flags - 
 * @return {array} items 
 */
export function updateArrWithItemByField<T extends object>(
  items      : T[],
  field      : string,          // поле по которому ищется объект: `id` || `email` || any
  updateItem : Partial<T>,
  flags?     : string | string[] // если стоит `update`, то в обновляемом объекте, обновляются только 
                                 // те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
): T[] {
  let newItems = [];

  // Если нет массива items, то создаём его
  if (!items) { 
    newItems.push(updateItem);
    return newItems;
  }

  const idx = items.findIndex((item) => item[field] === updateItem[field]);
  newItems = [...items];

  // Если есть - обновляем
  if (idx !== -1) { 

    // Если указан флаг, обрабатываем
    if (flags?.includes(`update`)) {
      updateItem = updateObject(items[idx], updateItem);
    }

    newItems = [...newItems.slice(0, idx), updateItem, ...newItems.slice(idx + 1)];
  
  } else { // Нету - добавляем
    newItems.push(updateItem);
  }

  return newItems;
};
