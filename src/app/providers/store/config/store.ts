import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { NavigateOptions, To } from 'react-router-dom'
import { uiSlice } from 'features/ui';
import { StateSchema } from './state';
import { createReducerManager } from './reducer-manager';
// import { api } from 'shared/api';


export function createReduxStore(
  initialState?  : StateSchema,
  asyncReducers? : ReducersMapObject<StateSchema>,
  navigate?      : (to: To, options?: NavigateOptions) => void
) {
  const
    rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      ui      : uiSlice.reducer,
    },
    reducerManager = createReducerManager(rootReducers),
    extraArg = {
      // api,
      navigate
    };

  const store = configureStore({
    reducer        : reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools       : __IS_DEV__,
    preloadedState : initialState || {},
    middleware     : getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
