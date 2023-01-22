import { FC, memo, ReactNode } from 'react';
import { cn } from 'shared/lib/class-names';
import s from './index.module.scss';


export enum ButtonTheme {
  BOARD     = 'board',
  OUTLINE   = 'outline',
  CANCEL    = 'cancel',
  PRIMARY   = 'primary',
  SECONDARY = 'secondary'
}


type Props = {
  children   : ReactNode
  theme?     : ButtonTheme
  className? : string
  onClick    : () => void
}

export const Button: FC<Props> = memo(({ children, theme, className, onClick }) => {
  

  return (
    <button
      className = {cn(s.root, {}, [s[theme], className])}
      onClick   = {onClick}
    >
      {children}
    </button>
  )
});
