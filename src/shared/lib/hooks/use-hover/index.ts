import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'


interface UseHoverBind {
  onMouseEnter : () => void
  onMouseLeave : () => void
}

interface Helpers {
  setDelay: Dispatch<SetStateAction<number>>
}

type UseHover = [boolean, UseHoverBind, Helpers]

interface Config {
  enterDelay?      : number     // Задержка перед открытием в ms
  onCallbackEnter? : () => void // Function that runs when hover is activated
}


export const useHover = (config: Config = {}): UseHover => {
  const
    { enterDelay = 0, onCallbackEnter } = config,
    [delay, setDelay] = useState(enterDelay),
    [timer, setTimer] = useState(0),
    [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    onCallbackEnter && onCallbackEnter();
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
