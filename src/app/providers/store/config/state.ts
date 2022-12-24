import { NavigateOptions, To } from 'react-router-dom';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchemaUI } from 'features/ui';


export interface StateSchema {
  ui      : StateSchemaUI

  // Async reducer
};

export const selectProps = (_: StateSchema, props: any) => props;
export const selectState = (state: StateSchema) => state;


export type StateKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap : () => ReducersMapObject<StateSchema>
  reduce        : (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add           : (key: StateKey, reducer: Reducer) => void
  remove        : (key: StateKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api?      : string // AxiosInstance
  navigate? : (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue : T
  extra       : ThunkExtraArg
  state       : StateSchema
}
