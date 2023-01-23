import { FC, memo } from 'react';
import { cn } from 'shared/lib/class-names';
import s from './index.module.scss';



interface Styles {
  root?  : string
}


interface Props {
  styles?: Styles
}


export const TownRouteRow: FC<Props> = memo(({ styles = {} }) => {

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <div />
    </div>
  )
});
