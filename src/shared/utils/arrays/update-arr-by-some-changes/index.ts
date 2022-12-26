
export function updateArrBySomeChanges<A>(
  arr: A[], field: string, changesArr: string[], obj: Partial<A>): A[] {
  if (!arr?.length) return [];

  let newArr = [];

  arr.forEach(lastItem => {
    const res = changesArr.find(ch => ch === lastItem[field]);
    if (res) newArr.push({ ...lastItem, ...obj });
    else newArr.push(lastItem)
  })

  return newArr;
}
