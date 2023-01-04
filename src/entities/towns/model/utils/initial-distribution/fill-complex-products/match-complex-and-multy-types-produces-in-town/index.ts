import { ProductType } from '../../../../../../products';
import { Town } from '../../../../types';
import { matchTypesProducesInTown } from '../../match-types-produces-in-town';

/** Сколько в городе производств COMPLEX & MULTIPLE */
export const matchComplexAndMultyTypesProducesInTown = (town: Town) =>
  matchTypesProducesInTown(town, ProductType.COMPLEX) +
  matchTypesProducesInTown(town, ProductType.MULTIPLE);
