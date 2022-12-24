import { Position } from 'features/ui';
import { memo, ReactNode, useState } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';




interface Props {
  title?     : string
  text?      : string
  className? : string
  children   : ReactNode
}


export const Tooltip = memo((props: Props) => {
  const {
    title,
    text,
    className,
    children
  } = props;
  
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position>(null);

  const handlerOpen = (e) => {
    const anchorElem = e.target.closest('[data-tooltip]');

    if (!anchorElem) return;

    // let coords = anchorElem.getBoundingClientRect();
    // console.log('coords: ', coords);

    setPosition({ top: '-20px', left: '40px' });
    setOpen(true);
  };


  const handlerClose = () => setOpen(false);

  return (
    <div
      className={s.root}
      onMouseEnter={handlerOpen}
      onMouseLeave={handlerClose}
    >
      {
        open && <div
          className={cn(s.tooltip, {}, [className])}
          style={position}
        >
          {
            title && <p className={s.title}>{title}</p>
          }
          {
            text && <p className={s.text}>{text}</p>
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
