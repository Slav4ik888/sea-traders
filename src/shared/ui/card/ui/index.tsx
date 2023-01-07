import { FC, memo, ReactNode } from 'react';
import { Text } from 'shared/ui';
import { cn } from 'shared/lib';
import s from './index.module.scss';


interface Styles {
  root?    : string
  header?  : string
  title?   : string
  content? : string
}

interface Props {
  title?   : string
  children : ReactNode
  styles?  : Styles
}


export const Card: FC<Props> = memo((props) => {
  const { title, children, styles = {} } = props;

  return (
    <div className={cn(s.root, {}, [styles.root])}>
      {
        title && <div  className={cn(s.header, {}, [styles.header])}>
          <Text title={title} styles={{ title: cn(s.title, {}, [styles.title]) }} />
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
