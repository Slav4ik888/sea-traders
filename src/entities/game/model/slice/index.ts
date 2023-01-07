import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameLevel, StateSchemaGame } from '../types';


const initialState: StateSchemaGame = {
  gameLevel   : GameLevel.NORMAL,
};


export const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameLavel: (state, { payload }: PayloadAction<GameLevel>) => {
      state.gameLevel = payload;
    }
  }
})

export const { actions, reducer } = slice;
