import { ProductType } from '../../../../../../products';
import { Town } from '../../../../types';
import { matchTypesProducesInTown } from '../../match-types-produces-in-town';

/** Сколько в городе производств MULTIPLE */
export const matchMultyTypesProducesInTown = (town: Town) =>
  matchTypesProducesInTown(town, ProductType.MULTIPLE);
