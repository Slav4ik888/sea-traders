import { ProductId } from 'entities/products';
import { Cargo } from '../..';


export const getCargoById = (cargos: Cargo[], productId: ProductId): Cargo => {
  if (!cargos) return undefined
  
  return cargos.find(cargo => cargo.id === productId);
}
