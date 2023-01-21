import { ProductId } from '../../../../model';
import { Cargo } from 'entities/ships';
import { TradeOperationType } from 'entities/price';

 
export interface TradeRangeType {
  rangeValue : number      // Input value
  productId  : ProductId
  isProduced : boolean
  shipCargo  : Cargo
  type       : TradeOperationType
  total      : number      // Transaction amount
}

export const emptyTradeRange: TradeRangeType = {
  rangeValue : 0,
  productId  : null,
  isProduced : false,
  shipCargo  : null,
  type       : null,
  total      : 0
}
