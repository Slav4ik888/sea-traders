import { getItemFromArrByField } from '../get-item-from-arr-by-field';


export function getItemById<A>(arr: A[], id: string): A {
  return getItemFromArrByField(arr, 'id', id);
}
