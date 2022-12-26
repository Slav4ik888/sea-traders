
/** Is typeof string */
export const isStr = (str: unknown): boolean => typeof str === 'string';
/** Is no typeof string */
export const noStr = (str: unknown): boolean => !isStr(str);
