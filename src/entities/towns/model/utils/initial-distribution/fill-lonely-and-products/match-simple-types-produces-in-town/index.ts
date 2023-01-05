import { ProductType } from '../../../../../../products';
import { Town } from '../../../../types';
import { matchTypesProducesInTown } from '../../match-types-produces-in-town';

/** Сколько в городе производств SIMPLE */
export const matchSimpleTypesProducesInTown = (town: Town) =>
  matchTypesProducesInTown(town, ProductType.SIMPLE);
