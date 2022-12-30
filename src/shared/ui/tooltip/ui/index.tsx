import { Position } from 'features/ui';
import { memo, ReactNode, useEffect, useState } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


interface TooltipStyles {
  tooltip? : string
  title?   : string
  text?    : string
}


interface Props {
  title?      : string
  text?       : string
  styles?     : TooltipStyles
  width?      : number // px
  height?     : number // px
  enterDelay? : number
  children    : ReactNode
}


export const Tooltip = memo((props: Props) => {
  const {
    title,
    text,
    styles,
    width,
    height,
    enterDelay = 0,
    children
  } = props;
  
  const
    [timer, setTimer] = useState(0),
    [open, setOpen] = useState(false),
    [position, setPosition] = useState<Position>(null);

  
  useEffect(() => {
    if (open) {

      const
        coords = document.getElementById('tooltip-message')?.getBoundingClientRect(),
        top    = '-' + (coords?.height + 8) + 'px',
        left   = '-' + (coords?.width / 2 - 14) + 'px'; // 14 - half of icon

      setPosition({ top, left });
    }
  }, [open]);


  const handlerOpen = (e) => {
    const anchorElem = e.target.closest('[data-tooltip]');
    if (!anchorElem) return;
    
    setTimer(new Date().getTime());
    setTimeout(() => {
      setTimer(prev => {
        prev && setOpen(true);
        return 0
      });
    }, enterDelay);
  };


  const handlerClose = () => {
    setTimer(0);
    setOpen(false);
  };


  return (
    <div
      className    = {s.root}
      onMouseEnter = {handlerOpen}
      onMouseLeave = {handlerClose}
    >
      {
        open && <div
          id        = 'tooltip-message'
          className = {cn(s.tooltip, {}, [styles.tooltip])}
          style     = {position}
        >
          {
            title && <p className={cn(s.title, {}, [styles.title])}>{title}</p>
          }
          {
            text && <p className={cn(s.text, {}, [styles.text])}>{text}</p>
          }
        </div>
      }
      <div data-tooltip='tooltip'>
        {
          children
        }
      </div>
    </div>
  )
});
