import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchemaTowns, Town, TownsMarkets } from '../types';




const initialState: StateSchemaTowns = {
  entities             : {},
  selectedTownForTrade : null,
  markets              : {} as TownsMarkets
};


export const slice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    setTowns: (state, { payload }: PayloadAction<Town[]>) => {
      state.entities = {
        ...payload.reduce((acc, town) => {
          acc[town.title] = { ...town };
          return acc
        }, {})
      };
    },
    setTownsMarkets: (state, { payload }: PayloadAction<TownsMarkets>) => {
      state.markets = { ...payload };
    },
    setSelectedTownForTrade: (state, { payload }: PayloadAction<Town>) => {
      state.selectedTownForTrade = payload;
    }
  }
})

export const { actions, reducer } = slice;
