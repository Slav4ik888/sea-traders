import { StateSchema } from 'app/providers/store';

export const selectModule      = (state: StateSchema) => state.game;
export const selectGameLevel   = (state: StateSchema) => selectModule(state).gameLevel;
