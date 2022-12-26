/**
 * Возвращает item by two values
 */
export function getItemFromArrByTwoField<T, FF, FS>(
  arr         : T[],
  fieldFirst  : string,
  valueFirst  : FF,
  fieldSecond : string,
  valueSecond : FS
): T {
  if (!fieldFirst || !fieldSecond) return undefined;

  return arr?.find((item) => item?.[fieldFirst] === valueFirst &&
                             item?.[fieldSecond] === valueSecond);
};
