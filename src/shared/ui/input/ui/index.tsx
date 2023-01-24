import { InputHTMLAttributes, ChangeEvent, memo, useState, useEffect, useRef } from 'react';
import { cn, Mods } from 'shared/lib/class-names';
import { getRandom5Letters } from 'shared/utils';
import { getNum } from './utils';
import s from './index.module.scss';


// 1 element what we want include, 2 - excude
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;


interface Styles {
  root?  : string
  input? : string
}


interface Props extends HTMLInputProps {
  styles?    : Styles
  id?        : string
  value?     : string | number
  label?     : string
  name?      : string
  autofocus? : boolean
  readOnly?  : boolean
  onChange?  : (value: string, name?: string) => void
}


export const Input = memo((props: Props) => {
  const {
    id    = getRandom5Letters(),
    type  = 'text',
    value = '',
    name, readOnly, autofocus, label, placeholder, styles, onChange, ...rest
  } = props;

  const
    ref          = useRef<HTMLInputElement>(null),
    [isFocused, setIsFocused] = useState(false),
    handlerBlur  = () => setIsFocused(false),
    handlerFocus = () => setIsFocused(true);


  useEffect(() => {
    if (autofocus) {
      setIsFocused(autofocus);
      ref.current?.focus();
    }
  }, [autofocus, readOnly]);


  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target?.value;

    if (type === 'number') value = getNum(value);

    onChange?.(value, e.target.name);
  };

  const mods: Mods = {
    [s.readonly]: readOnly
  };


  return (
    <div className={cn(s.root, mods, [styles.root])}>
      {
        label && <label htmlFor={id} className={s.label}>{label}</label>
      }
      <input
        id          = {id}
        type        = {type}
        value       = {value}
        name        = {name}
        placeholder = {placeholder}
        className   = {cn(s.input, {}, [styles.input])}
        ref         = {ref}
        readOnly    = {readOnly}
        onBlur      = {handlerBlur}
        onFocus     = {handlerFocus}
        onChange    = {handlerChange}
        {...rest}
      />
    </div>
  )
});
