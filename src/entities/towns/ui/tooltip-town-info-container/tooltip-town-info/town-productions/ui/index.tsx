import { FC, memo } from 'react';
import { ProductName, PRODUCTS, ProductIconContainer } from 'entities/products';
import { TownName, useTowns } from '../../../../../model';
import { useUI } from 'features/ui';
import s from './index.module.scss';



interface Props {
  open     : boolean
  townName : TownName
  produces : ProductName[]
}


export const TownProductions: FC<Props> = memo(({ open, townName, produces }) => {
  const
    { displayMapVisibleProducts } = useUI(),
    { selectTownName } = useTowns(),
    handlerSetTown = () => selectTownName(townName);
  

  if ((!produces || !open) && !displayMapVisibleProducts) return null
  
  return (
    <div className={s.root} onClick={handlerSetTown}>
      {
        produces.map(productName => <ProductIconContainer
          key     = {productName}
          product = {PRODUCTS[productName]}
          styles  = {{ root: s.iconRoot, icon: s.iconIcon }}
        />)
      }
    </div>
  )
});
