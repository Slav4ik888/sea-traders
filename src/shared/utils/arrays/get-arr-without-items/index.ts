
function isValid<A extends object>(item: A, field: string, values: string[]): boolean {
  let result = true;

  values.forEach(value => {
    if (item[field] === value) result = false
  });

  return result;
}


export function getArrWithoutItems<A extends object>(arr: A[], field: string, values: string[]): A[] {
  if (!arr?.length || !field || !values?.length) return arr;
  
  return arr.filter(item => isValid(item, field, values))

};
