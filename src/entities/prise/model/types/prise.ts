
export interface PriseItem {
  sell     : number
  purchase : number
}

export interface Prise {
  normal: PriseItem
  advanced: PriseItem
  current: PriseItem
}
