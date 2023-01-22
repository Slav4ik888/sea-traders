import { FC, memo, useCallback, useMemo } from 'react';
import { useTowns } from 'entities/towns';
import { getPosition, getTownPortCode } from '../utils';
import { Position } from 'features/ui';
import { Card } from 'shared/ui';
import { Code } from 'shared/ui/code';
import { UseValue } from 'shared/lib/hooks';
import { copyToClipboard } from 'shared/utils';
import s from './index.module.scss';



type Props = {
  hookValue: UseValue<string>
}

/** 
 * Tooltip with code cope
 */
export const TooltipEditTown: FC<Props> = memo(({ hookValue }) => {
  const
    { selectedTown } = useTowns(),
    position: Position = getPosition(selectedTown?.points?.town);
  
  const code = useMemo(() => getTownPortCode(selectedTown?.points?.port[0])
    , [selectedTown?.points?.port[0]]);

  const handlerCopy = useCallback(() => {
    copyToClipboard(code);
    hookValue.setClose();
  }, [code]);
  

  if (!hookValue.open) return null;

    
  return (
    <div className={s.root} style={position}>
      <Card styles={{ root: s.cardRoot, content: s.cardContent }}>
        <Code code={code} onCopy={handlerCopy} />
      </Card>
    </div>
  )
});
