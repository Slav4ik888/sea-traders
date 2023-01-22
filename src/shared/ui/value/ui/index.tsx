import { FC, memo } from 'react';
import { cn, Mods } from 'shared/lib/class-names';
import { isUndefined } from 'shared/utils';
import s from './index.module.scss';


export enum ValueTheme {
  DEFAULT = 'default',
  CLEAR   = 'clear',
  EMPTY   = 'empty',
  MONEY   = 'money'
}


interface Props {
  theme?     : ValueTheme
  value      : number
  fullwidth? : boolean
  maxWidth?  : number
  classname? : string
}


export const Value: FC<Props> = memo((props) => {
  const {
    value: startValue,
    theme = ValueTheme.DEFAULT,
    fullwidth,
    maxWidth,
    classname
  } = props;
  
  const mods: Mods = {
    [s.fullwidth]: fullwidth
  };

  const value = isUndefined(startValue) ? '-' : startValue;


  return (
    <div
      className = {cn(s.root, mods, [s[theme], classname])}
      style     = {{ maxWidth }}
    >
      {
        value
      }
    </div>
  )
});
