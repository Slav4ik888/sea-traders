import { FC, memo } from 'react';
import { cn } from 'shared/lib';
import { addCharBetweenThousands } from 'shared/utils';
import s from './index.module.scss';



interface Props {
  value      : number
  classname? : string
}


export const Money: FC<Props> = memo((props) => {
  const {
    value,
    classname
  } = props;
  

  return (
    <div className={cn(s.root, {}, [classname])}>
      <div className={s.value}>{addCharBetweenThousands(value, { divider: '.' })}</div>
      <img
        src       = {require('shared/assets/icons/gold-monet.png')}
        alt       = 'gold-monet'
        className = {s.monet}
      />
    </div>
  )
});
