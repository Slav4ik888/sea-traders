import { ChangeEvent, FC, memo, useEffect, useState } from 'react';
import { TownName, TOWNS_NAMES_KEYS_SORTED } from 'entities/towns';
import { Select } from 'shared/ui';
import { useDevTownsRoutesMaker } from '../../../model/hooks';
import s from './index.module.scss';


interface Props {
  townNumber: 1 | 2
}

export const SelectTown: FC<Props> = memo(({ townNumber }) => {
  const
    { selectedTown1, selectedTown2, setSelectedTown } = useDevTownsRoutesMaker(),
    town1 = townNumber === 1,
    town2 = !town1,
    [selected, setSelected] = useState<TownName>(town1 ? selectedTown1 : selectedTown2);
    
  // Чтобы при старте подтянуть данные из LS так как они при монтировании не попадают сразу
  useEffect(() => {
    if (town1 && selected !== selectedTown1) setSelected(selectedTown1);
    else if (town2 && selected !== selectedTown2) setSelected(selectedTown2);
  }, [selectedTown1, selectedTown2]);


  const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TownName;
    setSelected(value);
    setSelectedTown(value, townNumber);
  };

  
  return (
    <div className={s.root}>
      <Select
        options       = {TOWNS_NAMES_KEYS_SORTED}
        selectedValue = {selected}
        onChange      = {handlerChange}
      />
    </div>
  )
});
