
export const isEmptyStr = (str: string): boolean => {
  if (typeof str !== 'string') return true;
  if (!str || str.trim() === '') return true;
  else return false;
};

export const noEmptyStr = (str: string): boolean => !isEmptyStr(str);
