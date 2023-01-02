import { PriceItem } from 'entities/price';
import { LeftOvers, ProductId } from 'entities/products';
import { TownName } from '.';


export interface TownMarketProduct {
  /** Остатки товара */
  leftOvers : LeftOvers
  price     : PriceItem
}


export type TownMarket = Record<ProductId, TownMarketProduct>

export type TownsMarkets = Record<TownName, TownMarket>
