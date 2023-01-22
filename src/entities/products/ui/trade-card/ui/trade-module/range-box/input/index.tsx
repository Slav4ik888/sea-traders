import { ChangeEvent, FC, memo, useMemo } from 'react';
import { WhatGreater } from './types';
import { getWhatGreater, transformMinMax } from './utils';
import s from './index.module.scss';



const WIDTH = 300; // All input box width


interface Props {
  value    : number
  min      : string
  max      : string
  onChange : (e: ChangeEvent<HTMLInputElement>) => void
}


export const TradeModuleRangeBoxInput: FC<Props> = memo(({ value, min: _min, max: _max, onChange }) => {
  
  const { left, width } = useMemo(() => {
    const
      { min, max } = transformMinMax(_min, _max),
      
      wg    = getWhatGreater(_min, _max),
      diff  = wg === WhatGreater.MAX ? max - min : min - max, // Разница
      sum   = max + min + diff, // Общая сумма 
      pix   = WIDTH / sum, // Сколько пикселей на 1 единицу от sum
      shift = wg === WhatGreater.EQUAL ? 0 : pix * diff - 10, // Сдвиг в пикселях
      left  = wg === WhatGreater.MIN ? `0px` : `${shift}px`,
      width = `${WIDTH - shift}px`;

    // console.log('min, max: ', min, max);
    // console.log('wg: ', wg);
    // console.log('diff: ', diff);
    // console.log('sum: ', sum);
    // console.log('pix: ', pix);
    // console.log('shift: ', shift);
    // console.log('left: ', left);
    // console.log('width: ', width);

    return { left, width }
  }, [_min, _max]);
  

  return (
    <div className={s.root}>
      <div className={s.inputSprite} />
      <input
        type      = 'range'
        min       = {_min}
        max       = {_max}
        step      = '1'
        value     = {value}
        className = {s.input}
        style     = {{ left, width }}
        onChange  = {onChange}
      />
    </div>
  )
});
