/**
 * Возвращает item с соответствующим полем field === value
 */
export function getItemFromArrByField<T>(
  arr: T[],
  field: string, // `id` || `email` || any
  value: string | number)
  : T {
  return arr?.find((item) => item?.[field] === value);
}
