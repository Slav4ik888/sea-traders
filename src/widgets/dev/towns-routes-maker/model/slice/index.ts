import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchemaTownsRoutesMaker, UpdateTownsRoutes } from '../types';
import * as LS from 'shared/lib/local-storage';
import { getStartEmptyTownsRoutes } from '../../lib/get-start-empty-towns-routes';
import { TownName } from 'entities/towns';



const initialState: StateSchemaTownsRoutesMaker = {
  townsRoutes     : LS.getDevTownsRoutes() || getStartEmptyTownsRoutes(),
  selectedTown1   : LS.getDevTownsRoutesSelected()?.selectedTown1   || undefined,
  selectedTown2   : LS.getDevTownsRoutesSelected()?.selectedTown2   || undefined,
  selectedMileage : LS.getDevTownsRoutesSelected()?.selectedMileage || 0
};


export const slice = createSlice({
  name: 'devTownsRoutesMaker',
  initialState,
  reducers: {
    setSelectedTown: (state, { payload }: PayloadAction<{ townName: TownName, num: 1 | 2 }>) => {
      state[`selectedTown${payload.num}`] = payload.townName;
      LS.setDevTownsRoutesSelected({ selectedTown1: state.selectedTown1, selectedTown2: state.selectedTown2, selectedMileage: state.selectedMileage });
    },
    setSelectedMileage: (state, { payload }: PayloadAction<number>) => {
      state.selectedMileage = payload;
      LS.setDevTownsRoutesSelected({ selectedTown1: state.selectedTown1, selectedTown2: state.selectedTown2, selectedMileage: state.selectedMileage });
    },
    updateTownRoute: (state, { payload }: PayloadAction<UpdateTownsRoutes>) => {
      state[payload.selectedTown1][payload.selectedTown2] = payload.selectedMileage;
      LS.setDevTownsRoutes(state.townsRoutes);
    },
    
  }
})

export const { actions, reducer } = slice;
