import { ProductId } from 'entities/products';
import { PriceItem } from './price';



export interface FinHistory {
  type      : FinOperationType
  productId : ProductId
  amount    : number
  price     : PriceItem
  createdAt : string
  
}

export enum FinOperationType {
  SELL     = 'sell',
  PURCHASE = 'purchase'
}
