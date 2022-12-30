import { Goods } from 'entities/good';


export interface FinHistory {
  type      : FinOperationType
  goods     : Goods
  amount    : number
  createdAt : string
  
}

export enum FinOperationType {
  SELL     = 'sell',
  PURCHASE = 'purchase'
}
