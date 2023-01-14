import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ship, ShipAction } from '../types';
import { ShipsEntities, StateSchemaShips } from '../types/state-schema';
import * as LS from 'shared/lib/local-storage';
import { TownName, TOWNS } from 'entities/towns';
import { getItemFromArrByField } from 'shared/utils';



const initialState: StateSchemaShips = {
  entities     : LS.getStateSchemaShips()?.entities     || {},
  activeShipId : LS.getStateSchemaShips()?.activeShipId || null,
  targetTown   : false
};


export const slice = createSlice({
  name: 'ships',
  initialState,
  reducers: {
    addShip: (state, { payload }: PayloadAction<Ship>) => {
      state.entities[payload.id] = { ...payload };
    },
    addShips: (state, { payload }: PayloadAction<ShipsEntities>) => {
      state.entities = {
        ...state.entities,
        ...payload
      };
    },
    activateShip: (state, { payload }: PayloadAction<string>) => {
      state.activeShipId = payload;
    },
    activateTargetTown: (state, { payload }: PayloadAction<boolean>) => {
      state.targetTown = payload;
    },
    relocateShip: (state, { payload }: PayloadAction<{activeShipId: string, townName: TownName}>) => {
      state.entities[payload.activeShipId] = {
        ...state.entities[payload.activeShipId],
        action: ShipAction.IN_TOWN,
        location: {
          point: { ...getItemFromArrByField(TOWNS, 'title', payload.townName).points.port[0] }
        }
      };
    }
     
  }
})

export const { actions, reducer } = slice;
