import { ProductId } from 'entities/products';
import { PriceItem } from './price';



export interface FinHistory {
  type      : TradeOperationType
  productId : ProductId
  amount    : number
  price     : PriceItem
  createdAt : string
  
}

export enum TradeOperationType {
  SELL     = 'sell',
  PURCHASE = 'purchase'
}
