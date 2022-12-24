import { MouseEventHandler, useEffect } from 'react';
import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { DisplaySize } from '../../types';



export const useUI = () => {
  const
    dispatch       = useAppDispatch(),

    displaySize    = useSelector(s.selectDisplaySize),
    
    setDisplaySize = (size: DisplaySize) => dispatch(actions.setDisplaySize(size));


  return {
    displaySize,
    setDisplaySize
  }
};
