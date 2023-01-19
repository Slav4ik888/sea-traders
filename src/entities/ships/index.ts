export {
  Ship,
  ShipModel,
  StateSchemaShips,
  ShipsEntities,
  Cargo
} from './model/types'
export { getStartShip } from './model/services'
export { slice as shipsSlice, actions as shipsActions } from './model/slice'
export { ShipsOnMap } from './ui'
export { useShips} from './model/hooks'
export { getCargoById } from './model/utils'
