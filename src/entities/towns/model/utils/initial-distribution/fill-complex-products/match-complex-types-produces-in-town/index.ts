import { ProductType } from '../../../../../../products';
import { Town } from '../../../../types';
import { matchTypesProducesInTown } from '../../match-types-produces-in-town';

/** Сколько в городе производств COMPLEX */
export const matchComplexTypesProducesInTown = (town: Town) =>
  matchTypesProducesInTown(town, ProductType.COMPLEX);
