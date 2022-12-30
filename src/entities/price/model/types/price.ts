




export interface PriceItem {
  sell     : number
  purchase : number
}


/** Тип ценообразование, зависит от сложности игры  */
export interface PriceType {
  normal   : PriceItem
  advanced : PriceItem
}
