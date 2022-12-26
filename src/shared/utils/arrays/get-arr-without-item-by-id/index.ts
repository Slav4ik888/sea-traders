import { noNum, noStr } from 'shared/utils/validators';
import { getArrWithoutItem } from '../get-arr-without-item';


export function getArrWithoutItemById<S>(items: S[], value: string | number): S[] {
  if (noStr(value) && noNum(value)) return items;

  return getArrWithoutItem(items, { id: value } as unknown as Partial<S>)
};
