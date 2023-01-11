import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchemaPlayer } from '../types/state-schema';
import * as LS from 'shared/lib/local-storage';
import { Ship } from 'entities/ships';



const initialState: StateSchemaPlayer = {
  playerId : LS.getStateSchemaPlayer()?.playerId || '1',
  entities : LS.getStateSchemaPlayer()?.entities || {},
  money    : LS.getStateSchemaPlayer()?.money || 30000
};


export const slice = createSlice({
  name: 'player',
  initialState: LS.getStateSchemaPlayer() || initialState,
  reducers: {
    addShip: (state, { payload }: PayloadAction<Ship>) => {
      state.entities[payload.id] = { ...payload };
    },
    addMoney: (state, { payload }: PayloadAction<number>) => {
      state.money = state.money + payload;
    }

  }
})

export const { actions, reducer } = slice;
