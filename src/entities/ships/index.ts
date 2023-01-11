export {
  Ship,
  ShipModel,
  StateSchemaShips,
  ShipsEntities
} from './model/types'
export { getStartShip } from './model/services'
export { slice as shipsSlice, actions as shipsActions } from './model/slice'
export { ShipsOnMap } from './ui'
