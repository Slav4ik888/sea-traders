import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchemaPlayer } from '../types/state-schema';
import * as LS from 'shared/lib/local-storage';



const initialState: StateSchemaPlayer = {
  playerId : LS.getStateSchemaPlayer()?.playerId || '1',
  money    : LS.getStateSchemaPlayer()?.money    || 30000
};


export const slice = createSlice({
  name: 'player',
  initialState: LS.getStateSchemaPlayer() || initialState,
  reducers: {
    addMoney: (state, { payload }: PayloadAction<number>) => {
      state.money = state.money + payload;
    }

  }
})

export const { actions, reducer } = slice;
