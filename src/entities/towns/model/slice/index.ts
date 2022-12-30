import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchemaTowns, Town } from '../types';


const initialState: StateSchemaTowns = {
  selectedTownForTrade: null
};


export const slice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    setSelectedTownForTrade: (state, { payload }: PayloadAction<Town>) => {
      state.selectedTownForTrade = payload;
    }
  }
})

export const { actions, reducer } = slice;
