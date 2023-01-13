import { FC, memo, useCallback, useMemo, useState } from 'react';
import { Town, TownName } from 'entities/towns';
import { useMouse } from 'shared/lib';
import { getPosition, getTownCode } from '../utils';
import { Position } from 'features/ui';
import { Select, Text } from 'shared/ui';
import { TownOnMap } from 'entities/towns';
import { Code } from 'shared/ui/code';
import s from './index.module.scss';



/** 
 * Возможность выбирать точку на карту и помещать туда TowmIcon
 * & get code Town with coords
 */
export const SelectTownPoint: FC = memo(() => {
  const
    { point, clearPoint } = useMouse(),
    [selectedTown, setSelectedTown] = useState<TownName>(),
    [isTooltip, setIsTooltip] = useState(false),
    position: Position = getPosition(point);
  
  const pointTown: Town = useMemo(() => {
      point && setIsTooltip(true);
      return { title: TownName.Havana, points: { town: point }  } as Town
    }, [point]);
  
  const code = useMemo(() => getTownCode(selectedTown, point, undefined), [selectedTown, point]);

  const handlerCopy = useCallback(() => {
    setIsTooltip(false);
    clearPoint();
  }, [code]);
  
  const handlerSelect = (e) => setSelectedTown(e.target.value);

    
  return (
    <>
      <TownOnMap town={pointTown} />

      {
        isTooltip && <div className={s.tooltip} style={position}>
          <Text title='Выберите название города' />
          <Select
            selectedValue = {selectedTown}
            options       = {Object.values(TownName)}
            onChange      = {handlerSelect}
          />
          <Code code={code} onCopy={handlerCopy} />
      </div>
      }
    </>
  )
});
