import { noUndefined } from '../../validators';

export const showIfNotUndefined = (field: string): string => noUndefined(field) ? field : '';
