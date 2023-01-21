import { TradeOperationType } from 'entities/price';
import { TownMarket } from 'entities/towns';
import { TradeRangeType } from '../../../types';



export const calcTradeOperation = (
  { type, rangeValue, productId }: TradeRangeType,
  market: TownMarket
): number => type === TradeOperationType.PURCHASE
    ? (-1) * rangeValue * market[productId].price[0]
    : rangeValue * market[productId].price[1];
