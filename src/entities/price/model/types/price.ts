

export interface PriceItem extends Array<number> {
  0: number // sell
  1: number // purchase
}


/** Тип ценообразование, зависит от сложности игры  */
export interface PriceType {
  normal   : PriceItem
  advanced : PriceItem
}
