import { StateSchema } from 'app/providers/store';

export const selectModule       = (state: StateSchema) => state.ships;
export const selectEntities     = (state: StateSchema) => selectModule(state).entities;
export const selectShipById     = (state: StateSchema, id: string) => selectEntities(state)[id];
export const selectActiveShipId = (state: StateSchema) => selectModule(state).activeShipId;
export const selectActiveShip   = (state: StateSchema) => selectEntities(state)[selectActiveShipId(state)];
export const selectTargetTown   = (state: StateSchema) => selectModule(state).targetTown;
