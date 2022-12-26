
/** Возвращает список уникальных id из array, пример userId из tasks || companyId из usersProfiles */
export function getItemsIdListFromArr<B, A extends B[]>(arr: A, field: string): B[] {
  const idsSet = new Set();
  arr.forEach(item => idsSet.add(item[field]));

  const itemsIdList = [];
  // @ts-ignore
  for (const uid of idsSet) itemsIdList.push(uid);

  return itemsIdList;
};
