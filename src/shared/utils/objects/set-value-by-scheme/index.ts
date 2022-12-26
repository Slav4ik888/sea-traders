import { isUndefined } from 'shared/utils/validators';
import { getScheme } from '../get-scheme';

/**
 * Set value in object by scheme
 * max вложенность = 4
 */
export function setValueByScheme<O extends object>(obj: O, scheme: string, value: any): void {
  const { field1, field2, field3, field4 } = getScheme(scheme);

  if (field3) {
    if (isUndefined(obj[field1])) obj[field1] = {}
    if (isUndefined(obj[field1][field2])) obj[field1][field2] = {}
    if (isUndefined(obj[field1][field2][field3])) obj[field1][field2][field3] = {}
    obj[field1][field2][field3][field4] = value
  }
  else if (field3) {
    if (isUndefined(obj[field1])) obj[field1] = {}
    if (isUndefined(obj[field1][field2])) obj[field1][field2] = {}
    obj[field1][field2][field3] = value
  }
  else if (field2) {
    if (isUndefined(obj[field1])) obj[field1] = {}
    obj[field1][field2] = value;
  }
  else if (field1) {
    obj[field1] = value;
  }
}
