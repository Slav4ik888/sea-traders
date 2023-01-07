import { FC, memo } from 'react';
import { ProductIcon } from 'shared/ui';
import { ProductName, PRODUCTS } from 'entities/products';
import s from './index.module.scss';
import { Town, useTowns } from 'entities/towns';


interface Props {
  town: Town
}


export const TownProductions: FC<Props> = memo(({ town }) => {
  const
    { setSelectedTownName } = useTowns(),
    handlerSetTown = () => setSelectedTownName(town.title);
  

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
