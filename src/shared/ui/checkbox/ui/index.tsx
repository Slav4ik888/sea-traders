import { ChangeEvent, FC, memo, useCallback } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


interface Styles {
  root?  : string
  label? : string
  input? : string
}


interface Props {
  label      : string
  checked    : boolean
  styles?    : Styles
  onChange   : (e: ChangeEvent<HTMLInputElement>) => void
}


export const Checkbox: FC<Props> = memo(({ label, checked, styles = {}, onChange }) => {
  const
    handlerChange = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e), [checked]);


  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <label className={cn(s.label, {}, [styles.label])}>
        <input
          type      = 'checkbox'
          checked   = {checked}
          className = {cn(s.input, {}, [styles.input])}
          onChange  = {handlerChange}
        />
        {label}
      </label>
    </div>
  )
});
