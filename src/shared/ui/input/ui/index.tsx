import { InputHTMLAttributes, ChangeEvent, memo, useState, useEffect, useRef } from 'react';
import { cn, Mods } from 'shared/lib/class-names';
import { getRandom5Letters, noUndefined } from 'shared/utils';
import { getNum } from './utils';
import { useValue } from 'shared/lib/hooks';
import s from './index.module.scss';


// 1 element what we want include, 2 - excude
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onSubmit' | 'onBlur'>;


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
  disabled?  : boolean
  autofocus? : boolean
  readOnly?  : boolean
  clearZeroIfFocus? : boolean // Нужно ли удалить 0 когда focus in input
  onChange?  : (value: string | number, name?: string) => void
  onSubmit?  : (value: string | number, name?: string) => void
  onBlur?    : (value: string | number, name?: string) => void
}


export const Input = memo((props: Props) => {
  const {
    id    = getRandom5Letters(),
    type  = 'text',
    value = '',
    styles = {},
    clearZeroIfFocus, name, readOnly, autofocus, label, placeholder, disabled,
    onChange, onSubmit, onBlur, ...rest
  } = props;

  const
    ref          = useRef<HTMLInputElement>(null),
    [isFocused, setIsFocused] = useState(false),
    S            = useValue(value || (type === 'text' ? '' : 0)),
    handlerBlur  = () => setIsFocused(false),
    handlerFocus = () => setIsFocused(true);


  useEffect(() => {
    if (autofocus) {
      setIsFocused(autofocus);
      ref.current?.focus();
    }
  }, [autofocus, readOnly]);


  useEffect(() => {
    if (S.changes && !isFocused) {
      S.setChanges(false);

      if (onSubmit) {
        let value = S.value;
        
        if (clearZeroIfFocus) {
          if (! S.value) {
            value = 0;
            S.setValue(0);
          }
        }
        
        onSubmit(value);
      }
    }

    if (isFocused && !S.value && clearZeroIfFocus) {
      S.setValue('');
    }
  }, [isFocused, S.changes]);
  

  // Если при первом рендере в useValue пришло value === undefined, нужно добавить начальное значение при изменении
  useEffect(() => {
    if (
      S.value !== value &&
      noUndefined(value) &&
      value !== ''
    ) {
      S.setValue(value, { isChange: false });
    }
  }, [value]);


  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return null;
    let value = e.target?.value;

    if (type === 'number') value = getNum(value);
    S.setValue(value);
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
        value       = {S.value}
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
