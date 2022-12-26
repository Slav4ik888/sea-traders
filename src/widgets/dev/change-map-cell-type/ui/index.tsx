import { ChangeEvent, FC, memo, useCallback, useMemo, useState } from 'react';
// import { useMouse } from 'shared/lib';
import s from './index.module.scss';
import { MapType, MapCellType, MapCell, useMap } from 'entities/map';
import { Select, Text } from 'shared/ui';



/** 
 * Opporunity select MapCell & change MapCellType
 */
export const ChangeMapCellType: FC = memo(() => {
  const
    { map, selectedCell } = useMap(),
    [selected, setSelected] = useState<MapCellType>();
  
  // let coords = anchorElem.getBoundingClientRect();
  
  
  const handlerSelect = (e: ChangeEvent<HTMLSelectElement>) => setSelected(e.target.value as MapCellType);

    
  return (
    <div className={s.root}>
      <Text title='Выберите MapCellType' />
      <Select
        selectedValue = {selected}
        options       = {Object.values(MapCellType)}
        onChange      = {handlerSelect}
      />

      {/* Copy result */}
    </div>
  )
});
