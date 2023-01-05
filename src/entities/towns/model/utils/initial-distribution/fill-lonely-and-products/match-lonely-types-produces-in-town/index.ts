import { ProductType } from '../../../../../../products';
import { Town } from '../../../../types';
import { matchTypesProducesInTown } from '../../match-types-produces-in-town';

/** Сколько в городе производств LONELY */
export const matchLonelyTypesProducesInTown = (town: Town) =>
  matchTypesProducesInTown(town, ProductType.LONELY);
