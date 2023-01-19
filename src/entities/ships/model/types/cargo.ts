import { ProductId } from 'entities/products';

export interface Cargo {
  id     : ProductId
  amount : number
  price  : number
}
