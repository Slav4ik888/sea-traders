import { FC, memo } from 'react';
import { cn, Mods } from 'shared/lib';
import s from './index.module.scss';


export enum ValueType {
  DEFAULT = 'default'
}


interface Props {
  type?      : ValueType
  value      : number
  fullwidth? : boolean
  maxWidth?  : number
  classname? : string
}


export const Value: FC<Props> = memo((props) => {
  const {
    value,
    type = ValueType.DEFAULT,
    fullwidth,
    maxWidth,
    classname
  } = props;
  
  const mods: Mods = {
    [s.fullwidth]: fullwidth
  }


  return (
    <div
      className = {cn(s.root, mods, [s[type], classname])}
      style     = {{ maxWidth }}
    >
      {
        value
      }
    </div>
  )
});
