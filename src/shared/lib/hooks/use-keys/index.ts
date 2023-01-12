import { useEffect } from 'react';


export const useKeys = (onKey: (e) => void) => {
  const handlerKey = (e) => onKey(e);

  useEffect(() => {
    document.addEventListener('keypress', handlerKey);

    return () => {
      document.removeEventListener('keypress', handlerKey);
    }
  }, [handlerKey]);
}
