import { ProductId } from '../../../../model';
import { Cargo } from 'entities/ships';
import { TownMarket } from 'entities/towns';

 
export interface TradeRangeType {
  rangeValue : number      // Input value
  productId  : ProductId
  isProduced : boolean
  market     : TownMarket
  shipCargo  : Cargo[]
  total      : number      // Transaction amount
}

export const emptyTradeRange: TradeRangeType = {
  rangeValue : 0,
  productId  : null,
  isProduced : false,
  market     : {} as TownMarket,
  shipCargo  : [],
  total      : 0
}
