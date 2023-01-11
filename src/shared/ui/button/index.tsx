import { FC, memo, ReactNode } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum ButtonTheme {
  BOARD = 'board'
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
