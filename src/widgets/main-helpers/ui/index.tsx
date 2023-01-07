import { FC, memo } from 'react';
import { ShowAllTowns } from './show-all-towns';
import { Card } from 'shared/ui';
import s from './index.module.scss';



export const MainHelpers: FC = memo(() => {

  return (
    <Card
      title  = 'Settings'
      styles = {{ root: s.root}}
    >
      <ShowAllTowns />
    </Card>
  )
});
