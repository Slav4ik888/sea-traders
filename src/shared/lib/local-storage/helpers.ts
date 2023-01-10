import { Theme } from 'app/providers/theme/lib/context';
import { StateSchemaPlayer } from 'entities/player';
import { setStorageData, getStorageData, removeStorageData } from './main';


export const setTheme  = (data: Theme) => setStorageData('Theme', data);
export const getTheme  = () => getStorageData('Theme') as Theme;

export const setStateSchemaPlayer  = (data: StateSchemaPlayer) => setStorageData('StateSchemaPlayer', data);
export const getStateSchemaPlayer  = () => getStorageData('StateSchemaPlayer') as StateSchemaPlayer;
