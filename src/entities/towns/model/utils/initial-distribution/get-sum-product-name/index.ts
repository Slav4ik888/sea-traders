import { ProductName } from '../../../../../products'
import { Town } from '../../../types'

/** Считаем количество ProductName in Towns*/
export const getSumProductName = (towns: Town[], type: ProductName) => {
  return towns.reduce((acc, town) => {
    if (town.produces.includes(type)) acc += 1
    return acc
  }, 0)
}
