/**
 * Update lastArr by newArr by field, все не обновлённые объекты остаются без изменений
 */
export function updateArrByArrByField<T>(lastArr: T[], field: string, newArr: T[]): T[]  {
  if (!lastArr?.length) return newArr;

  let updatedArr = [...newArr];

  lastArr.forEach(item => {
    const res = updatedArr.find(updated => updated[field] === item[field]);
    if (!res) updatedArr.push(item);
  });

  return updatedArr;
};
