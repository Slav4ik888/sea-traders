import { isArrsEqual } from '../../arrays';
import { isArr, isUndefined, isObj } from '../../validators';
import { setValueByScheme } from '../set-value-by-scheme';


/**
 * Возвращает объект с теми полями, которые были изменены по отношению к первоначальному объекту
 * ! Возможная глубина вложения, только 1 вложенный объект
 * @param prevObj - первоначальный объект
 * @param setObj  - новый объект
 */
export function getChanges<T extends object>(prevObj: T, setObj: Partial<T>): Partial<T> {
  if ((!prevObj && !setObj) || !setObj) return {};
  if (!prevObj) return setObj;

  const newObj = {};

  for (const fKey in prevObj) {
    if (Object.prototype.hasOwnProperty.call(prevObj, fKey)) {
      const fValue = prevObj[fKey];         // 'managerId' : {}
      const fSetValue = setObj[fKey];

      if (isUndefined(fSetValue)) continue; // В этом элементе не было изменений

      if (isObj(fValue)) {        // 'managerId' : {} = true
        for (const sKey in fValue) {
          if (Object.prototype.hasOwnProperty.call(fValue, sKey)) {
            const sValue = fValue[sKey];    // label: 'Менеджер по заявке'
            const sSetValue = fSetValue[sKey];

            if (isUndefined(sSetValue)) continue;

            if (isObj(sValue)) {  // style: {} = true
              for (const tKey in sValue) {
                if (Object.prototype.hasOwnProperty.call(sValue, tKey)) {
                  const tValue = sValue[tKey];
                  const tSetValue = sSetValue[tKey];

                  if (isUndefined(tSetValue)) continue;

                  if (isArr(tValue as unknown as object[])) {
                    if (!isArrsEqual(tValue  as unknown as object[], tSetValue  as unknown as object[])) setValueByScheme(newObj, `${fKey}.${sKey}.${tKey}`, tSetValue);
                  }
                  else if (tValue !== tSetValue) setValueByScheme(newObj, `${fKey}.${sKey}.${tKey}`, tSetValue);
                }
              }
            }
            else {
              if (isArr(sValue as unknown as object[])) {
                if (!isArrsEqual(sValue as unknown as object[], sSetValue as unknown as object[])) setValueByScheme(newObj, `${fKey}.${sKey}`, sSetValue);
              }
              else if (sValue !== sSetValue) setValueByScheme(newObj, `${fKey}.${sKey}`, sSetValue);
            }
          }
        }
      }
      else {
        if (isArr(fValue as unknown as object[])) {
          if (!isArrsEqual(fValue as unknown as object[], fSetValue as unknown as object[])) setValueByScheme(newObj, `${fKey}`, fSetValue);
        }
        else if (fValue !== fSetValue) setValueByScheme(newObj, `${fKey}`, fSetValue);
      }
    }
  }

  return newObj
}
