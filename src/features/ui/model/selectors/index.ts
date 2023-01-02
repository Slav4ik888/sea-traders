import { StateSchema } from 'app/providers/store';

export const selectModule      = (state: StateSchema) => state.ui;
export const selectGameLevel   = (state: StateSchema) => selectModule(state).gameLevel;
export const selectDisplaySize = (state: StateSchema) => selectModule(state).displaySize;
