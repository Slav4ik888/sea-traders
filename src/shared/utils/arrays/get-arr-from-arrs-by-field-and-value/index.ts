
/**
 * Get arr from arrs into arr by field
 *  Contact: {
 *   companies: [id1, id2 ...]
 *  }
 */
export function getArrFromArrsByFieldAndValue<T>(arr: T[], fieldArr: string, value: string): T[] {
  if (!arr?.length) return [];

  return arr?.reduce((acc, item) => {
    item[fieldArr].forEach(it => {
      if (it === value) acc.push(item)
    });

    return acc
  }, []);
}
