import { ChangeEvent, FC, memo, useCallback } from 'react';
import { Checkbox } from 'shared/ui';
import { useUI } from 'features/ui';
import { DisplayMapVisible } from 'features/ui/model/types';


interface Styles {
  root : string
}

interface Props {
  styles: Styles
}


export const ShowAllProducts: FC<Props> = memo(({ styles }) => {
  const
    { displayMapVisibleProducts, setDisplayMapVisible } = useUI(),
    handlerChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const visibles = { products: !displayMapVisibleProducts } as DisplayMapVisible;
      setDisplayMapVisible(visibles);
    }, [displayMapVisibleProducts]);


  return (
    <div className={styles.root}>
      <Checkbox
        label     = 'all towns products'
        checked   = {displayMapVisibleProducts}
        onChange  = {handlerChange}
      />
    </div>
  )
});
