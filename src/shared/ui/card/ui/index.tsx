import { FC, memo, ReactNode } from 'react';
import { Text } from 'shared/ui';
import { cn } from 'shared/lib/class-names';
import s from './index.module.scss';


interface Styles {
  root?    : string
  header?  : string
  title?   : string
  content? : string
}

interface Props {
  title?         : string
  childrenTitle? : ReactNode
  children       : ReactNode
  styles?        : Styles
}


export const Card: FC<Props> = memo((props) => {
  const { title, childrenTitle, children, styles = {} } = props;

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      {
        (childrenTitle || title) && <div className={cn(s.header, {}, [styles.header])}>
          {
            childrenTitle
              ? childrenTitle
              : <Text title={title} styles={{ title: cn(s.title, {}, [styles.title]) }} />
          }
        </div>
      }
      <div  className={cn(s.content, {}, [styles.content])}>
        {
          children
        }
      </div>
    </div>
  )
});
