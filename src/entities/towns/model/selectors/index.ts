import { StateSchema } from 'app/providers/store';
import { TownName } from '../types';

export const selectModule = (state: StateSchema) => state.towns;
export const selectEntities = (state: StateSchema) => selectModule(state).entities;
export const selectSelectedTownName = (state: StateSchema) => selectModule(state).selectedTownName;
export const selectSelectedTown = (state: StateSchema) => selectEntities(state)[selectSelectedTownName(state)];

export const selectMarkets = (state: StateSchema) => selectModule(state).markets;
export const selectMarketByTownname = (state: StateSchema, townname: TownName) => selectMarkets(state)[townname];
