import { ProductName } from './product-names';


export enum ProductType {
  SIMPLE   = 'simple',
  COMPLEX  = 'complex',
  MULTIPLE = 'multiple'
}

export type ProductId = ProductName

export interface Product {
  id              : ProductId
  type            : ProductType
  order           : number
  /** Название файла иконки */
  iconFilename    : string

  /** Стоимость производства */
  // productionPrice : number

  
}
