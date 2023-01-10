import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStartShip } from 'entities/ships';
import { StateSchemaPlayer } from '../types/state-schema';
import * as LS from 'shared/lib/local-storage';



const initialState: StateSchemaPlayer = {
  money : 30000,
  ships : [{ ...getStartShip() }]
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
