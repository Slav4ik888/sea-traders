

export function getArrContainValueByField<O> (arr: Array<O>, field: string, regexp: RegExp): Array<O> {

  return arr.filter(item => regexp.test(item[field]))
}
