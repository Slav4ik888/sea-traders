import { FC, memo } from 'react';
import { Card } from 'shared/ui';
import s from './index.module.scss';



export const MainPlayerPanel: FC = memo(() => {
  const { } = usePlayer();
  
  return (
    <Card
      title  = 'Player'
      styles = {{ root: s.root}}
    >
      PlayerCard
    </Card>
  )
});
