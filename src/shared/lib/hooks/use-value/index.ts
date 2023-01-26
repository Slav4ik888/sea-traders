import { useState } from 'react';
import { cloneObj, isObj, isUndefined, noUndefined } from 'shared/utils';
import { SetValueConfig, UseValue } from './types';
export { UseValue };

/**
 * 
 */
export function useValue<I>(initValue?: I, initOpen?: boolean, initIsChange?: boolean): UseValue<I> {
  const
    [value, _setValue] = useState(() => {
      if (isUndefined(initValue)) return null
      if (isObj(initValue)) return cloneObj(initValue)
      return initValue
    });
  
  const setValue = (value: I, { open, isChange }: SetValueConfig = {}) => {
      _setValue(prev => value);
      if (noUndefined(open)) _setOpen(open);

      if (noUndefined(isChange)) _setChange(isChange)
      else if (! changes) _setChange(true);
    },
    clearValue = () => _setValue((typeof initValue === 'string' ? '' : 0) as unknown as I),

    [open, _setOpen] = useState(initOpen || false),
    setOpen = (c?: boolean) => {
      _setOpen(true);
      if (noUndefined(c)) setChanges(c);
    },
    setClose = (c?: boolean) => {
      _setOpen(false);
      if (noUndefined(c)) setChanges(c);
    },

    [changes, _setChange] = useState(initIsChange),
    setChanges = (v: boolean) => _setChange(v),

    [confirm, _setConfirm] = useState(false),
    setConfirm = (v: boolean) => _setConfirm(v);

  
  return {
    value,   setValue,    clearValue,
    open,    setOpen,     setClose,
    changes, setChanges,
    confirm, setConfirm
  }
};
