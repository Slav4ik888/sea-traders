import { Theme } from 'app/providers/theme/lib/context';
import { StateSchemaPlayer } from 'entities/player';
import { StateSchemaShips } from 'entities/ships';
import { TownName, TownsMarkets } from 'entities/towns';
import { TownsEntities, TownsRoutes } from 'entities/towns';
import { setStorageData, getStorageData, removeStorageData } from './main';


export const setTheme  = (data: Theme) => setStorageData('Theme', data);
export const getTheme  = () => getStorageData('Theme') as Theme;

export const setStateSchemaPlayer  = (data: StateSchemaPlayer) => setStorageData('StateSchemaPlayer', data);
export const getStateSchemaPlayer  = () => getStorageData('StateSchemaPlayer') as StateSchemaPlayer;

export const setStateSchemaShips  = (data: StateSchemaShips) => setStorageData('StateSchemaShips', data);
export const getStateSchemaShips  = () => getStorageData('StateSchemaShips') as StateSchemaShips;

export const setTownsMarkets = (data: TownsMarkets) => setStorageData('TownsMarkets', data);
export const getTownsMarkets = () => getStorageData('TownsMarkets') as TownsMarkets;

export const setTownsEntities = (data: TownsEntities) => setStorageData('TownsEntities', data);
export const getTownsEntities = () => getStorageData('TownsEntities') as TownsEntities;


// Dev

export const setDevTownsRoutes = (data: TownsRoutes) => setStorageData('DevTownsRoutes', data);
export const getDevTownsRoutes = () => getStorageData('DevTownsRoutes') as TownsRoutes;

interface Selected {
  selectedTown1   : TownName,
  selectedTown2   : TownName,
  selectedMileage : number
}

export const setDevTownsRoutesSelected = (data: Selected) => setStorageData('DevTownsRoutesSelected', data);
export const getDevTownsRoutesSelected = () => getStorageData('DevTownsRoutesSelected') as Selected;
