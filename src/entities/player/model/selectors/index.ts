import { StateSchema } from 'app/providers/store';

export const selectModule   = (state: StateSchema) => state.player;
export const selectPlayerId = (state: StateSchema) => selectModule(state).playerId;
export const selectEntities = (state: StateSchema) => selectModule(state).entities;
export const selectMoney    = (state: StateSchema) => selectModule(state).money;
export const selectShipById = (state: StateSchema, id: string) => selectEntities(state)[id];
