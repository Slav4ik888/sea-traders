import { StateSchema } from 'app/providers/store';

export const selectModule      = (state: StateSchema) => state.ui;
export const selectDisplaySize = (state: StateSchema) => selectModule(state).displaySize;

export const selectDisplayMapVisible = (state: StateSchema) => selectModule(state).displayMapVisible;
export const selectDisplayMapVisibleTownsNames = (state: StateSchema) => selectDisplayMapVisible(state).townsNames;
export const selectDisplayMapVisibleDwellers   = (state: StateSchema) => selectDisplayMapVisible(state).dwellers;
export const selectDisplayMapVisibleProducts   = (state: StateSchema) => selectDisplayMapVisible(state).products;
export const selectDevChangeTownsPoint = (state: StateSchema) => selectModule(state).devChangeTownsPoint;
