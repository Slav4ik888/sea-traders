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


export const ShowAllTownsNames: FC<Props> = memo(({ styles }) => {
  const
    { displayMapVisibleTownsNames, setDisplayMapVisible } = useUI(),
    handlerChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const visibles = { townsNames: !displayMapVisibleTownsNames } as DisplayMapVisible;
      setDisplayMapVisible(visibles);
    }, [displayMapVisibleTownsNames]);


  return (
    <div className={styles.root}>
      <Checkbox
        label     = 'all towns names'
        checked   = {displayMapVisibleTownsNames}
        onChange  = {handlerChange}
      />
    </div>
  )
});
