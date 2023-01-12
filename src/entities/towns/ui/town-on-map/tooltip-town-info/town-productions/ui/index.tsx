import { FC, memo } from 'react';
import { ProductIcon } from 'shared/ui';
import { PRODUCTS } from 'entities/products';
import { Town, useTowns } from '../../../../../model';
import s from './index.module.scss';


interface Props {
  town: Town
}


export const TownProductions: FC<Props> = memo(({ town }) => {
  const
    { selectTownName } = useTowns(),
    handlerSetTown = () => selectTownName(town.title);
  

  if (!town.produces) return null
  
  return (
    <div className={s.root} onClick={handlerSetTown}>
      {
        town.produces.map(productName => <ProductIcon
          key     = {productName}
          product = {PRODUCTS[productName]}
          styles  = {{ root: s.iconRoot, icon: s.iconIcon }}
        />)
      }
    </div>
  )
});
