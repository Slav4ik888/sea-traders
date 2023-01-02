import { DisplaySize } from './display';
import { GameLevel } from './game-level';


export interface StateSchemaUI {
  gameLevel   : GameLevel
  displaySize : DisplaySize
}
