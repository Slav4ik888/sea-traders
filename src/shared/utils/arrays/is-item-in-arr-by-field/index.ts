import { getItemFromArrByField } from '../get-item-from-arr-by-field';


/** Возвращает есть ли элемент itemField со значением value */
export function isItemInArrByField<T>(items: T[], itemField: string, value: string | number): boolean {
  const result = getItemFromArrByField(items, itemField, value);
  return Boolean(result);
};
