import { Product } from 'entities/products';
import { FC } from 'react';
import { cn } from 'shared/lib';
import { Tooltip, TooltipTheme } from 'shared/ui';
import s from './index.module.scss';

interface Styles {
  root? : string
  icon? : string
}

interface Props {
  product   : Product
  produced? : boolean
  styles?   : Styles
}


export const ProductIcon: FC<Props> = ({ product, produced, styles = {} }) => {

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <Tooltip title={product.id} theme={TooltipTheme.DARK_OPACITY}>
        <img
          src       = {require(`shared/assets/products/${product.iconFilename}`)}
          alt       = {product.iconFilename}
          className = {cn(s.icon, {}, [styles.icon])}
        />
        {
          produced && <img
            src       = {require(`shared/assets/icons/settings.png`)}
            alt       = {product.iconFilename}
            className = {s.produced}
          />
        }
      </Tooltip>
    </div>
  )
};
