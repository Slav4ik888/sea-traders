import { PriceItem } from 'entities/price';
import { GoodName } from './good-names';


export interface Goods {
  id              : string
  title           : GoodName
  filename        : string    // Название файла иконки
  productionPrice : PriceItem // Стоимость производства
}
