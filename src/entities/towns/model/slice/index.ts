import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameLevel } from 'entities/game';
import { ProductId } from 'entities/products';
import { StateSchemaTowns, Town, TownMarket, TownName, TownsMarkets } from '../types';
import { getInitialMarkets, initialDistribution } from '../utils';



const initialState: StateSchemaTowns = {
  entities         : initialDistribution(),
  selectedTownName : null,
  markets          : getInitialMarkets(GameLevel.NORMAL)
};


export const slice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    setTownsMarkets: (state, { payload }: PayloadAction<TownsMarkets>) => {
      state.markets = { ...payload };
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
    },
    selectTownName: (state, { payload }: PayloadAction<TownName>) => {
      state.selectedTownName = payload;
    },
    updateTown: (state, { payload }: PayloadAction<Partial<Town>>) => {
      state.entities[payload.title] = {
        ...state.entities[payload.title],
        ...payload
      }
    },
  }
})

export const { actions, reducer } = slice;
