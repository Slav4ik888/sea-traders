import { FinHistory, PriceItem } from 'entities/price';
import { GoodName } from './good-names';


/** Остатки товара */
export interface LeftOvers {
  amount  : number
  history : FinHistory
}


export interface Goods {
  id              : string
  title           : GoodName

  /** Название файла иконки */
  iconFilename    : string

  /** Стоимость производства */
  productionPrice : PriceItem

  /** Остатки товара */
  leftOvers       : LeftOvers
}
