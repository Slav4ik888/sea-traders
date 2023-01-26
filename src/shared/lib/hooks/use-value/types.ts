
export interface SetValueConfig {
  open?     : boolean
  isChange? : boolean
}

export interface UseValue<V> {
  value                          : V;
  setValue(v: V, config?: SetValueConfig) : void;
  clearValue()                   : void;
  
  open                           : boolean;
  setOpen(changes?: boolean)     : void;
  setClose(changes?: boolean)    : void;
  
  changes                        : boolean;
  setChanges(v: boolean)         : void;
  
  confirm                        : boolean;
  setConfirm(v: boolean)         : void;
};
