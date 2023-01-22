import { FC, memo } from 'react';
import { cn } from 'shared/lib/class-names';
import { addCharBetweenThousands } from 'shared/utils';
import s from './index.module.scss';


interface Styles {
  root?  : string
  monet? : string
}

interface Props {
  value   : number
  styles? : Styles
}


export const Money: FC<Props> = memo((props) => {
  const {
    value,
    styles
  } = props;
  

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <div className={s.value}>{addCharBetweenThousands(value, { divider: '.' })}</div>
      <img
        src       = {require('shared/assets/icons/gold-monet.png')}
        alt       = 'gold-monet'
        className = {cn(s.monet, {}, [styles.monet])}
      />
    </div>
  )
});
