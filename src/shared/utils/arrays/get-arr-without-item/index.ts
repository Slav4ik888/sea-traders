import { objectLength as length, getFirstFieldKey as getKey } from '../../objects';

/**
 * Возвращает массив без указанного элемента
 *  => if field === undefined & value length === 1, use field = field of value, else return items
 */
export function getArrWithoutItem<S>(items: S[], value: Partial<S> | string | number, field?: string): S[] {
  if (!items?.length) return [];
  if (!value) return items;

  if (typeof items[0] === 'object') {
    if (typeof value === 'object') {
      if (field) return items.filter(item => item[field] !== value[field]);
      else {
        if (length(value) === 1) {
          const fieldValue = getKey(value);
          if (fieldValue) return items.filter(item => item[fieldValue] !== value[fieldValue])
        }
      }
    }
    else return items.filter(item => item[field] !== value);
  }
  else {
    // @ts-ignore
    if (typeof value !== 'object') return items.filter(item => item !== value);
  }

  return items;
};
