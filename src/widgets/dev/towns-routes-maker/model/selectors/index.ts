import { StateSchema } from 'app/providers/store';

export const selectModule   = (state: StateSchema) => state.devTownsRoutesMaker;
export const selectSelectedMileage = (state: StateSchema) => selectModule(state)?.selectedMileage;
export const selectSelectedTown1 = (state: StateSchema) => selectModule(state)?.selectedTown1;
export const selectSelectedTown2 = (state: StateSchema) => selectModule(state)?.selectedTown2;
export const selectSelectedTownsRoutes = (state: StateSchema) => selectModule(state)?.townsRoutes;
