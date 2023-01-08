import { FC, memo } from 'react';
import { ShowAllTownsNames } from './show-all-towns-names';
import { ShowAllDwellers } from './show-all-dwellers';
import { ShowAllProducts } from './show-all-products';
import { Card } from 'shared/ui';
import s from './index.module.scss';



export const MainHelpers: FC = memo(() => {

  return (
    <Card
      title  = 'Settings'
      styles = {{ root: s.root}}
    >
      <ShowAllTownsNames styles={{ root: s.items }} />
      <ShowAllDwellers   styles={{ root: s.items }} />
      <ShowAllProducts   styles={{ root: s.items }} />
    </Card>
  )
});
