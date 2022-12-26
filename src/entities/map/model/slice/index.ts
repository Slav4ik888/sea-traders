import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapCell, MapErrors, MapType, StateSchemaMap } from '../types';


const initialState: StateSchemaMap = {
  map          : undefined,
  errors       : undefined,
  selectedCell : undefined
};


export const slice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, { payload }: PayloadAction<MapType>) => {
      state.map = { ...payload }
    },
    setErrors: (state, { payload }: PayloadAction<MapErrors>) => {
      state.errors = { ...payload }
    },
    setSelectedCell: (state, { payload }: PayloadAction<MapCell>) => {
      state.selectedCell = { ...payload }
    }
  }
})

export const { actions, reducer } = slice;
