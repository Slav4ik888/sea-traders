import { getScheme } from '../get-scheme';

/**
 * Object value by scheme, else false
 * max вложенность = 3
 */
export function getValueByScheme<O extends object>(obj: O, scheme: string): string | undefined {
  const { field1, field2, field3 } = getScheme(scheme);

  if (field3)      return obj?.[field1]?.[field2]?.[field3]
  else if (field2) return obj?.[field1]?.[field2]
  else if (field1) return obj?.[field1]

  return undefined;
}
