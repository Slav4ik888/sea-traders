import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ship } from '../types';
import { ShipsEntities, StateSchemaShips } from '../types/state-schema';
// import * as LS from 'shared/lib/local-storage';



const initialState: StateSchemaShips = {
  entities: {}
};


export const slice = createSlice({
  name: 'ships',
  initialState,
  reducers: {
    addShip: (state, { payload }: PayloadAction<Ship>) => {
      state.entities[payload.id] = { ...payload };
    },
    addShips: (state, { payload }: PayloadAction<ShipsEntities>) => {
      state.entities = {
        ...state.entities,
        ...payload
      };
    }
  }
})

export const { actions, reducer } = slice;
