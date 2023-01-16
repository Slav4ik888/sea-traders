import { ChangeEvent, FC, memo } from 'react';
import { cn, UseValue, useValue } from 'shared/lib';
import s from './index.module.scss';



interface Styles {
  root?  : string
}


interface Props {
  hookValue : UseValue<number>
  styles?   : Styles
}


export const TradeRange: FC<Props> = memo(({ hookValue, styles = {} }) => {
  console.log('hookValue: ', hookValue.value);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('e: ', e.target.value);
    hookValue.setValue(Number(e.target.value));
  };

  if (!hookValue.open) return null

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <input
        type     = 'range'
        min      = '-10'
        max      = '10'
        step     = '1'
        // value    = {hookValue.value}
        onChange = {handlerChange}
      />
    </div>
  )
});
