import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameLevel } from 'entities/game';
import { ProductId } from 'entities/products';
import { StateSchemaTowns, Town, TownName, TownsMarkets } from '../types';
import { getInitialMarkets, initialDistribution } from '../utils';
import * as LS from 'shared/lib/local-storage';



const initialState: StateSchemaTowns = {
  entities         : LS.getTownsEntities() || initialDistribution(),
  selectedTownName : null,
  markets          : LS.getTownsMarkets() || getInitialMarkets(GameLevel.NORMAL)
};


export const slice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    setTownsMarkets: (state, { payload }: PayloadAction<TownsMarkets>) => {
      state.markets = { ...payload };
      LS.setTownsMarkets(state.markets);
    },
    updateTownMarket: (state, { payload }: PayloadAction<{ townname: TownName, productId: ProductId, rangeValue: number }>) => {
      state.markets = {
        ...state.markets,
        [payload.townname]: {
          ...state.markets[payload.townname],
          [payload.productId]: {
            leftOvers: {
              ...state.markets[payload.townname][payload.productId].leftOvers,
              amount: state.markets[payload.townname][payload.productId].leftOvers.amount - payload.rangeValue
            },
            price: state.markets[payload.townname][payload.productId].price
          }
        }
      };
      LS.setTownsMarkets(state.markets);
    },
    selectTownName: (state, { payload }: PayloadAction<TownName>) => {
      state.selectedTownName = payload;
    },
    updateTown: (state, { payload }: PayloadAction<Partial<Town>>) => {
      state.entities[payload.title] = {
        ...state.entities[payload.title],
        ...payload
      };
      LS.setTownsEntities(state.entities);
    },
  }
})

export const { actions, reducer } = slice;
