import { StateSchema } from 'app/providers/store';

export const selectModule  = (state: StateSchema) => state.player;
export const selectMoney   = (state: StateSchema) => selectModule(state).money;
export const selectShip    = (state: StateSchema) => selectModule(state).ships;
