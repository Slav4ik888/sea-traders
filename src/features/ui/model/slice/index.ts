import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplaySize, StateSchemaUI } from '../types';


const initialState: StateSchemaUI = {
  displaySize : undefined, // Сurrent screen length
};


export const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDisplaySize: (state, { payload }: PayloadAction<DisplaySize>) => {
      state.displaySize = payload;
    }
  }
})

export const { actions, reducer } = slice;
