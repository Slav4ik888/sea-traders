import { FC, memo, ReactNode } from 'react';
import { cn } from 'shared/lib';
import { Tooltip, TooltipTheme } from 'shared/ui';
import s from './index.module.scss';


interface Styles {
  root? : string
  icon? : string
}

interface Props {
  src           : string
  alt           : string
  width?        : string
  height?       : string
  tooltipTitle  : string
  tooltipTheme? : TooltipTheme
  children?     : ReactNode
  styles?       : Styles
}


export const Icon: FC<Props> = memo(({
  src,
  alt,
  width  = '40px',
  height = '40px',
  tooltipTitle,
  tooltipTheme = TooltipTheme.DARK_OPACITY,
  children,
  styles       = {}
}) => {
  const style = { width, height };

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <Tooltip title={tooltipTitle} theme={tooltipTheme}>
        <img
          src       = {src}
          alt       = {alt}
          style     = {style}
          className = {cn(s.icon, {}, [styles.icon])}
        />
        {
          children
        }
      </Tooltip>
    </div>
  )
});
