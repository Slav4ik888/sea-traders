import { ShipsEntities } from '../../../types';
import { getRandom10Letters } from 'shared/utils';

/** Id for new ship */
export const createShipId = (entities: ShipsEntities): string => {
  let count = 0;

  while (count < 10) {
    const id = getRandom10Letters();
    if (!entities[id]) return id
    ++count;
    console.log('Double id: ', id, '; count:', count);
  }

  console.log('Error in createShipId, count > 9');
}
