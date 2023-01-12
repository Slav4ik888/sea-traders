import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VARIABLES } from 'app/config';
import { DisplayMapVisible, DisplaySize, StateSchemaUI } from '../types';


const initialState: StateSchemaUI = {
  displaySize : undefined, // Сurrent screen length
  displayMapVisible: {
    townsNames : false,
    dwellers   : false,
    products   : false
  },
  devChangeTownsPoint : VARIABLES.DEV_CHANGE_TOWNS_POINTS
};


export const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDisplaySize: (state, { payload }: PayloadAction<DisplaySize>) => {
      state.displaySize = payload;
    },
    setDisplayMapVisible: (state, { payload }: PayloadAction<DisplayMapVisible>) => {
      state.displayMapVisible = {
        ...state.displayMapVisible,
        ...payload
      }
    }
  }
})

export const { actions, reducer } = slice;
