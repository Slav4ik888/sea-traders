import { FC, memo } from 'react';
import { Card, Modal } from 'shared/ui';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamic-module-loader';
import { reducer as reducerDevTownsRoutesMaker } from '../model/slice';
import { TownsRoutesTable } from './towns-routes-table';
import s from './index.module.scss';



const reducers: ReducersList = {
  devTownsRoutesMaker: reducerDevTownsRoutesMaker
};


export const TownsRoutesMaker: FC = memo(() => {

  return (
    <Modal lazy isOpen={true}>
      <DynamicModuleLoader reducers={reducers}>
        <Card
          title  = 'All Towns routes'
          styles = {{ root: s.cardRoot, content: s.cardContent }}
        >
          {/* <SelectTowns /> */}
          <TownsRoutesTable />
          {/* <Code creator /> */}
        </Card>
      </DynamicModuleLoader>
    </Modal>
  )
});
