import { useState } from 'react';
import { cloneObj, isObj, isUndefined } from 'shared/utils';
import { UseValue } from './types';
export { UseValue };

/**
 * 
 */
export function useValue<I>(initValue?: I, initOpen?: boolean, initIsChange?: boolean): UseValue<I>  {
  const
    [value, _setValue] = useState(() => {
      if (isUndefined(initValue)) return null
      if (isObj(initValue)) return cloneObj(initValue)
      return initValue
    }),
    setValue = (value: I, open?: boolean) => {
      _setValue(prev => value);
      if (typeof open !== 'undefined') _setOpen(open);
      if (! changes) _setChange(true);
    },
    clearValue = () => _setValue((typeof initValue === 'string' ? '' : 0) as unknown as I),

    [open, _setOpen] = useState(initOpen || false),
    setOpen = (c?: boolean) => {
      _setOpen(true);
      if (typeof c !== 'undefined') setChanges(c);
    },
    setClose = (c?: boolean) => {
      _setOpen(false);
      if (typeof c !== 'undefined') setChanges(c);
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
