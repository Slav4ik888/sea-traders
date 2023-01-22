import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cargo, Ship, ShipAction } from '../types';
import { ShipsEntities, StateSchemaShips } from '../types/state-schema';
import * as LS from 'shared/lib/local-storage';
import { TownName, TOWNS } from 'entities/towns';
import { getItemFromArrByField, updateArrById } from 'shared/utils';



const initialState: StateSchemaShips = {
  entities     : {},
  activeShipId : null,
  targetTown   : false
};


export const slice = createSlice({
  name: 'ships',
  initialState: LS.getStateSchemaShips() || initialState,
  reducers: {
    addShip: (state, { payload }: PayloadAction<Ship>) => {
      state.entities[payload.id] = { ...payload };
      LS.setStateSchemaShips(state);
    },
    addShips: (state, { payload }: PayloadAction<ShipsEntities>) => {
      state.entities = {
        ...state.entities,
        ...payload
      };
      LS.setStateSchemaShips(state);
    },
    activateShip: (state, { payload }: PayloadAction<string>) => {
      state.activeShipId = payload;
      LS.setStateSchemaShips(state);
    },
    activateTargetTown: (state, { payload }: PayloadAction<boolean>) => {
      state.targetTown = payload;
      LS.setStateSchemaShips(state);
    },
    relocateShip: (state, { payload }: PayloadAction<{activeShipId: string, townName: TownName}>) => {
      state.entities[payload.activeShipId] = {
        ...state.entities[payload.activeShipId],
        action: ShipAction.IN_TOWN,
        location: {
          point: { ...getItemFromArrByField(TOWNS, 'title', payload.townName).points.port[0] }
        }
      };
      LS.setStateSchemaShips(state);
    },
    updateShipCargo: (state, { payload }: PayloadAction<{ activeShipId: string, cargo: Cargo }>) => {  
      state.entities[payload.activeShipId].condition.cargo = [...updateArrById(
        state.entities[payload.activeShipId].condition.cargo,
        payload.cargo
      )];
      LS.setStateSchemaShips(state);
    }
  }
})

export const { actions, reducer } = slice;
