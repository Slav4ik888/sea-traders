import { FC, memo, ReactNode } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Styles {
  root? : string
}


interface Props {
  text?     : string
  children? : ReactNode
  styles?   : Styles
}


export const IconLabel: FC<Props> = memo(({
  text,
  children,
  styles = {}
}) => {

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      {children ? children : text}
    </div>
  )
});
