import { FC, memo } from 'react';
import { Card } from 'shared/ui';
import { usePlayer } from 'entities/player';
import s from './index.module.scss';
import { Money } from 'shared/ui';



export const MainPlayerPanel: FC = memo(() => {
  const { money } = usePlayer();
  
  return (
    <Card
      childrenTitle = {<Money value={money} styles={{ root: s.money }} />}
      styles        = {{ root: s.root}}
    >
      PlayerCard
    </Card>
  )
});
