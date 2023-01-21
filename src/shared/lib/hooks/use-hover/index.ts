import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'


interface UseHoverBind {
  onMouseEnter : () => void
  onMouseLeave : () => void
}

interface SetDelay {
  setDelay: Dispatch<SetStateAction<number>>
}

type UseHover = [boolean, UseHoverBind, SetDelay]

interface Config {
  enterDelay?: number // Задержка перед открытием в ms
}


export const useHover = (config: Config = {}): UseHover => {
  const
    { enterDelay = 0 } = config,
    [delay, setDelay] = useState(enterDelay),
    [timer, setTimer] = useState(0),
    [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setTimer(new Date().getTime());
    setTimeout(() => {
      setTimer(prev => {
        prev && setIsHover(true);
        return 0
      });
    }, delay);
  }, [delay]);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
    setTimer(0);
  }, []);

   

  return useMemo(() => [
    isHover,
    { onMouseEnter, onMouseLeave },
    { setDelay }
  ], [isHover, onMouseEnter, onMouseLeave, setDelay])
}
