
export enum MapCellType {
  LAND          = 'land',
  SEA           = 'sea',
  SHALLOW_WATER = 'shallow-water'
}

export interface MapCell {
  id   : string
  type : MapCellType
}

export type MapType = Record<string, MapCell>;
