import { StateSchema } from 'app/providers/store';

export const selectModule   = (state: StateSchema) => state.player;
export const selectPlayerId = (state: StateSchema) => selectModule(state).playerId;
export const selectMoney    = (state: StateSchema) => selectModule(state).money;
