import { MessageType } from 'features/ui';

export interface ObjString {
  [k: string]: string | number[]
}


export interface Errors {
  [k: string]: string
}

export interface Validation {
  errors : ObjString
  valid  : boolean
}

/** Тип для результата */
export enum ResultType {
  SUCCESS = 'success',
  ERROR   = 'error',
  WARNING = 'warning',
}

/** Тип для данных по проведённой проверке */
export interface ResultAccess {
  result       : ResultType
  message?     : string
  messageType? : MessageType
}
