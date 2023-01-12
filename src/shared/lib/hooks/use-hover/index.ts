import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHover = [boolean, UseHoverBind]

interface Config {
  enterDelay?: number // Задержка перед открытием в ms
}


export const useHover = (config: Config = {}): UseHover => {
  const
    { enterDelay = 0 } = config,
    [timer, setTimer] = useState(0),
    [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setTimer(new Date().getTime());
    setTimeout(() => {
      setTimer(prev => {
        prev && setIsHover(true);
        return 0
      });
    }, enterDelay);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
    setTimer(0);
  }, []);

  return useMemo(() => [isHover, {
    onMouseEnter,
    onMouseLeave
  }], [isHover, onMouseEnter, onMouseLeave])
}
