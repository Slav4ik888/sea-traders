
/**
 * Возвращает массив с обновлённым item
 * @param {array} items 
 * @param {string} fieldOne - `taskId`
 * @param {string} fieldTwo - `userId`
 * @param {object} updateItem 
 */
export function updateArrWithItemByTwoFields<T extends object>(
  items      : T[],
  fieldOne   : string,
  fieldTwo   : string,
  updateItem : T
): T[] {
  const idx = items.findIndex((item) => item[fieldOne] === updateItem[fieldOne]
    && item[fieldTwo] === updateItem[fieldTwo]);

  let newItems = [...items];

  if (idx !== -1) { // Если есть - обновляем
    newItems = [...newItems.slice(0, idx), updateItem, ...newItems.slice(idx + 1)];
  } else { // Нету - добавляем
    newItems.push(updateItem);
  }
  return newItems;
};
