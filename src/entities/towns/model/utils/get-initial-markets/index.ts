import { GameLevel } from 'entities/game';
import { BASE_PRODUCTS_PRISE } from 'entities/price';
import { PRODUCTS } from 'entities/products';
import { TownMarket, TownName, TownsMarkets } from '../../types';


export const getInitialMarkets = (gameLevel: GameLevel): TownsMarkets => {
  const priceIdx = gameLevel === GameLevel.NORMAL ? 0 : 1;

  return Object
    .values(TownName)
    .reduce((acc, townname) => {
      acc[townname] = {} as TownMarket

      Object
        .values(PRODUCTS)
        .forEach(m => {
          acc[townname][m.id] = {
            leftOvers: {
              amount: 100,
              history: []
            },
            price: BASE_PRODUCTS_PRISE[m.id].price[priceIdx]
          }
        });
      
      return acc
    }, {}) as TownsMarkets;
}
