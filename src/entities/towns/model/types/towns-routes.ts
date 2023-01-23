import { TownName } from './towns-names';

export type TownRoutes = Record<TownName, number>;

export type TownsRoutes = Record<TownName, TownRoutes>;
