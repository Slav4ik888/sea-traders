import { ProductId } from '../../../../model';
import { Cargo } from 'entities/ships';
import { TownMarket } from 'entities/towns';

 
export interface TradeRangeType {
  rangeValue : number
  productId  : ProductId
  market     : TownMarket
  shipCargo  : Cargo[]
}

export const emptyTradeRange = {
  rangeValue : 0,
  productId  : null,
  market     : {} as TownMarket,
  shipCargo  : []
}
