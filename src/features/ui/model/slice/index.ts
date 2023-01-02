import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplaySize, GameLevel, StateSchemaUI } from '../types';


const initialState: StateSchemaUI = {
  gameLevel   : GameLevel.NORMAL,
  displaySize : undefined, // Сurrent screen length
};


export const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setGameLavel: (state, { payload }: PayloadAction<GameLevel>) => {
      state.gameLevel = payload;
    },
    setDisplaySize: (state, { payload }: PayloadAction<DisplaySize>) => {
      state.displaySize = payload;
    }
  }
})

export const { actions, reducer } = slice;
