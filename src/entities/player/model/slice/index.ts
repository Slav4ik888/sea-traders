import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchemaPlayer } from '../types/state-schema';
import * as LS from 'shared/lib/local-storage';



const initialState: StateSchemaPlayer = {
  playerId : '1',
  money    : 30000
};


export const slice = createSlice({
  name: 'player',
  initialState: LS.getStateSchemaPlayer() || initialState,
  reducers: {
    addMoney: (state, { payload }: PayloadAction<number>) => {
      state.money = state.money + payload;
      LS.setStateSchemaPlayer(state);
    }
  }
})

export const { actions, reducer } = slice;
