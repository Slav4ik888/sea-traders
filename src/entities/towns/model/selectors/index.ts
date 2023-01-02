import { StateSchema } from 'app/providers/store';

export const selectModule = (state: StateSchema) => state.towns;
export const selectSelectedTownForTrade = (state: StateSchema) => selectModule(state).selectedTownForTrade;
export const selectMarkets = (state: StateSchema) => selectModule(state).markets;