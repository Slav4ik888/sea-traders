import { FC, memo, useMemo } from 'react';
import { Icon } from 'shared/ui';
import { Product, ProductName } from '../../model/types';
import s from './index.module.scss';



interface Styles {
  root? : string
  icon? : string
}


interface Props {
  product     : Product
  isProduced? : boolean
  styles?     : Styles
}


export const ProductIconContainer: FC<Props> = memo(({ product, isProduced, styles }) => {

  return (
    <Icon
      src          = {require(`shared/assets/products/${product.iconFilename}`)}
      alt          = {product.iconFilename}
      tooltipTitle = {product.id}
      styles       = {styles}
      children     = {
          isProduced && <img
            src       = {require(`shared/assets/icons/settings.png`)}
            alt       = {product.iconFilename}
            className = {s.produced}
          />
        }
    />
  )
});
