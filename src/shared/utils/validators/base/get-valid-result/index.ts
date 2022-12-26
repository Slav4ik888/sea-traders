import { ObjString, Validation } from '../../types';


export function getValidResult(data?: ObjString): Validation {
  const errors = data ? data : {};

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}
