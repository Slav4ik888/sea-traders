import { NavigateOptions, To } from 'react-router-dom';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchemaUI } from 'features/ui';
import { StateSchemaMap } from 'entities/map';
import { StateSchemaTowns } from 'entities/towns';
import { StateSchemaGame } from 'entities/game';


export interface StateSchema {
  ui      : StateSchemaUI
  game    : StateSchemaGame
  map     : StateSchemaMap
  towns   : StateSchemaTowns
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
