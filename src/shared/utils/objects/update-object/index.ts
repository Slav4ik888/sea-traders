import { cloneObj } from '../objects';

/** Возвращает новый объект lastObj с обновлёнными полями из updatedFields */
export function updateObject<T extends object, O extends Partial<T>>(
  lastObj       : T,
  updatedFields : O
): T {

  if (!lastObj && !updatedFields) return {} as T;
  if (lastObj && !updatedFields) return lastObj;
  if (!lastObj && updatedFields) return updatedFields as unknown as T;

  let newObj = cloneObj(lastObj);

  for (let key in updatedFields) {
    if (Object.prototype.hasOwnProperty.call(updatedFields, key)) {
      newObj[key as string] = updatedFields[key];
    }
  };

  return newObj;
};
