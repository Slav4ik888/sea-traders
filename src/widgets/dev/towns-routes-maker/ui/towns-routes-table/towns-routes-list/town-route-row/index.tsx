import { TownName, TOWNS_NAMES_VALUES_SORTED } from 'entities/towns';
import { FC, memo } from 'react';
import { cn } from 'shared/lib/class-names';
import { Cell } from './cell';
import s from './index.module.scss';



interface Styles {
  root?  : string
}


interface Props {
  townnameRow : TownName
  styles?     : Styles
}


export const TownRouteRow: FC<Props> = memo(({ townnameRow, styles = {} }) => {

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <div className={s.sidebarCell}>
        {townnameRow}
      </div>

      <div className={s.content}>
        {
          TOWNS_NAMES_VALUES_SORTED.map(townnameCell => (
            <Cell
              key          = {townnameCell}
              townnameRow  = {townnameRow}
              townnameCell = {townnameCell}
            />
          ))
        }
      </div>
    </div>
  )
});
