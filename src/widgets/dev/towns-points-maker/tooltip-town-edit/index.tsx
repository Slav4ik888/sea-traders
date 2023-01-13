import { FC, memo, useCallback, useMemo, useState } from 'react';
import { Town, TownName, useTowns } from 'entities/towns';
import { useMouse } from 'shared/lib';
import { getPosition, getTownCode } from '../utils';
import { Position } from 'features/ui';
import { Select, Text } from 'shared/ui';
import { TownOnMap } from 'entities/towns';
import { Code } from 'shared/ui/code';
import s from './index.module.scss';
import { UseValue } from 'shared/lib';
import { copyToClipboard } from 'shared/utils';


type Props = {
  hookValue: UseValue<string>
}

/** 
 * 
 */
export const TooltipEditTown: FC<Props> = memo(({ hookValue }) => {
  const
    { selectedTown } = useTowns(),
    position: Position = getPosition(selectedTown?.points?.town);
  
  const code = useMemo(() => getTownCode(selectedTown?.title, selectedTown?.points?.town, selectedTown?.points?.port[0])
    , [selectedTown?.points?.town, selectedTown?.points?.port[0]]);

  const handlerCopy = useCallback(() => {
    copyToClipboard(code);
    console.log('code: ', code);
    hookValue.setClose();
  }, [code]);
  
  // const handlerSelect = (e) => setSelectedTown(e.target.value);

  if (!hookValue.open) return null;

    
  return (
    <div className={s.root} style={position}>
      {/* <Text title='Выберите название города' />
      <Select
        selectedValue = {selectedTown}
        options       = {Object.values(TownName)}
        onChange      = {handlerSelect}
      /> */}
      <Code code={code} onCopy={handlerCopy} />
    </div>
  )
});
