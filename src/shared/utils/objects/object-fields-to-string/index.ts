import { isArr, isObj, isStr, noObj, noStr } from 'shared/utils/validators';

const s = (str: string, key: string) => (str ? ', ' : '') + `${key}: `;

/** 
 * Возвращает названия всех полей и их значений в виде строки
 * v.22.30.09
 */
export const objectFieldsToString = (obj: object | string): string => {
  if (!obj)       return '';
  if (isStr(obj)) return obj as string;
  if (noObj(obj)) return JSON.stringify(obj);

  if (!Object.keys(obj).length) return obj as unknown as string;

  let str = '';
  
  for (let key in obj as object) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (isObj(obj[key]))      str += s(str, key) + `{ ${objectFieldsToString(obj[key])} }`;
      else if (isArr(obj[key])) str += s(str, key) + `${objectFieldsToString(obj[key])}`;
      else str += s(str, key) + `${obj[key]}`;
    }
  }
  return str;
};
