import { FC, memo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum TextTheme {
  PRIMARY = 'primary',
  ERROR   = 'error'
}

export enum TextAlign {
  RIGHT  = 'right',
  LEFT   = 'left',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_small',
  M = 'size_medium',
  L = 'size_large'
}

interface TextStyles {
  root?  : string
  title? : string
  text?  : string
}

interface Props {
  title?  : string
  text?   : string
  styles? : TextStyles
  theme?  : TextTheme
  align?  : TextAlign
  size?   : TextSize
}


export const Text: FC<Props> = memo((props) => {
  const {
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size  = TextSize.M,
    styles
  } = props;

  return (
    <div className={cn(s.root, {}, [s[theme], s[align],  s[size], styles.root])}>
      {
        title && <p className={cn(s.title, {}, [styles.title])}>{title}</p>
      }
      {
        text && <p className={cn(s.text, {}, [styles.text])}>{text}</p>
      }
    </div>
  )
});
