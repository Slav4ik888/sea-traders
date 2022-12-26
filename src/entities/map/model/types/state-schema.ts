import { MapType, MapCell } from './map';


export interface MapErrors {
  [k: string]: string
}

export interface StateSchemaMap {
  map    : MapType
  errors : MapErrors
  
  selectedCell : MapCell
}
