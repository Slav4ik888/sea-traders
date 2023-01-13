import { Theme } from 'app/providers/theme/lib/context';
import { StateSchemaPlayer } from 'entities/player';
import { StateSchemaShips } from 'entities/ships';
import { setStorageData, getStorageData, removeStorageData } from './main';


export const setTheme  = (data: Theme) => setStorageData('Theme', data);
export const getTheme  = () => getStorageData('Theme') as Theme;

export const setStateSchemaPlayer  = (data: StateSchemaPlayer) => setStorageData('StateSchemaPlayer', data);
export const getStateSchemaPlayer  = () => getStorageData('StateSchemaPlayer') as StateSchemaPlayer;

export const setStateSchemaShips  = (data: StateSchemaShips) => setStorageData('StateSchemaShips', data);
export const getStateSchemaShips  = () => getStorageData('StateSchemaShips') as StateSchemaShips;
