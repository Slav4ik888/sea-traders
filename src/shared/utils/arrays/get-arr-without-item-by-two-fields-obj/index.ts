/**
 * Возвращает массив без указанного элемента по itemField
 */
export function getArrWithoutItemByTwoFields<T>(
  items    : T[],
  fieldOne : string, // `taskId`
  fieldTwo : string, // `userId`
  delItem  : T)
: T[] {
  const idx = items.findIndex((item) => item[fieldOne] === delItem[fieldOne]
    && item[fieldTwo] === delItem[fieldTwo]);

  let newItems = [...items];
  if (idx !== -1) {
    newItems = [...newItems.slice(0, idx), ...newItems.slice(idx + 1)];
  }

  return newItems;
};
