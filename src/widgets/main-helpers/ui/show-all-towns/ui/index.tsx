import { FC, memo, useCallback } from 'react';
import { useTowns } from 'entities/towns';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const ShowAllTowns: FC<Props> = memo(({ className }) => {
  const
    { showAllTowns, setShowAllTowns } = useTowns(),
    handlerChange = useCallback(() => setShowAllTowns(!showAllTowns), [showAllTowns]);


  return (
    <div className={cn(s.root, {}, [className])}>
      <label className={s.label}>
        <input
          type      = 'checkbox'
          checked   = {showAllTowns}
          className = {s.input}
          onChange  = {handlerChange}
        />
        Show all towns
      </label>
    </div>
  )
});
