import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameLevel } from 'entities/game';
import { StateSchemaTowns, TownName, TownsMarkets } from '../types';
import { getInitialMarkets, initialDistribution } from '../utils';




const initialState: StateSchemaTowns = {
  entities         : initialDistribution(),
  selectedTownName : null,
  markets          : getInitialMarkets(GameLevel.NORMAL)
};


export const slice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    setTownsMarkets: (state, { payload }: PayloadAction<TownsMarkets>) => {
      state.markets = { ...payload };
    },
    setSelectedTownName: (state, { payload }: PayloadAction<TownName>) => {
      state.selectedTownName = payload;
    }
  }
})

export const { actions, reducer } = slice;
