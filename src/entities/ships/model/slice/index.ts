import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ship, ShipAction } from '../types';
import { ShipsEntities, StateSchemaShips } from '../types/state-schema';
import * as LS from 'shared/lib/local-storage';
import { TownName, TOWNS } from 'entities/towns';
import { getItemFromArrByField } from 'shared/utils';



const initialState: StateSchemaShips = {
  entities     : LS.getStateSchemaShips()?.entities     || {},
  activeShipId : LS.getStateSchemaShips()?.activeShipId || null
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
    setActiveShipId: (state, { payload }: PayloadAction<string>) => {
      state.activeShipId = payload;
    },
    relocateShip: (state, { payload }: PayloadAction<{shipId: string, townName: TownName}>) => {
      state.entities[payload.shipId] = {
        ...state.entities[payload.shipId],
        action: ShipAction.IN_TOWN,
        location: {
          point: { ...getItemFromArrByField(TOWNS, 'title', payload.townName).points.port[0] }
        }
      };
    }
     
  }
})

export const { actions, reducer } = slice;
