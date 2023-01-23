import { FC, memo } from 'react';
import { Card, Modal } from 'shared/ui';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamic-module-loader';
import { reducer as reducerDevTownsRoutesMaker } from '../model/slice';
import { SelectTowns } from './select-towns';
import s from './index.module.scss';



const reducers: ReducersList = {
  devTownsRoutesMaker: reducerDevTownsRoutesMaker
};


export const TownsRoutesMaker: FC = memo(() => {
  // const
  //   hookRoutesMaker = useValue<TownsRoutesMaker>({
  //     townsRoutes: startTownsRoutes
  //   });
  
  

  return (
    <Modal lazy isOpen={true}>
      <DynamicModuleLoader reducers={reducers}>
        <Card
          title  = 'All Towns routes'
          styles = {{ content: s.cardContent }}
        >
          <SelectTowns />
          {/* <TownsRoutesList /> */}
          {/* <Code creator /> */}
        </Card>
      </DynamicModuleLoader>
    </Modal>
  )
});
