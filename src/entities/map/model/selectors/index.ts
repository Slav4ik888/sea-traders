import { StateSchema } from 'app/providers/store';

export const selectModule       = (state: StateSchema) => state.map;
export const selectMap          = (state: StateSchema) => selectModule(state).map;
export const selectErrors       = (state: StateSchema) => selectModule(state).errors;
export const selectSelectedCell = (state: StateSchema) => selectModule(state).selectedCell;
