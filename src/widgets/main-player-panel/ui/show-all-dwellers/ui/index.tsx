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


export const ShowAllDwellers: FC<Props> = memo(({ styles }) => {
  const
    { displayMapVisibleDwellers, setDisplayMapVisible } = useUI(),
    handlerChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const visibles = { dwellers: !displayMapVisibleDwellers } as DisplayMapVisible;
      setDisplayMapVisible(visibles);
    }, [displayMapVisibleDwellers]);


  return (
    <div className={styles.root}>
      <Checkbox
        label     = 'all towns dwellers'
        checked   = {displayMapVisibleDwellers}
        onChange  = {handlerChange}
      />
    </div>
  )
});
