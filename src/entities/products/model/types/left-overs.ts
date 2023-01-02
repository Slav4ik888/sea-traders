import { FinHistory } from 'entities/price';


/** Остатки товара */
export interface LeftOvers {
  amount  : number
  history : FinHistory[]
}
