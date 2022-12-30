import React, { FC, ReactNode, useEffect, useRef, useState, useCallback, MutableRefObject } from 'react';
import { cn, Mods } from 'shared/lib';
import { Portal } from 'shared/ui';
import s from './index.module.scss';


export interface ModalStyles {
  root?    : string
  overlay? : string
  content? : string
}


interface Props {
  styles?  : ModalStyles
  isOpen   : boolean
  children : ReactNode
  lazy?    : boolean
  onClose? : () => void
}

const ANIMATION_DELAY = 300;


export const Modal: FC<Props> = ({ styles, lazy, isOpen, children, onClose }) => {
  const
    [isClosing, setIsClosing] = useState(false),
    [isMounted, setIsMounted] = useState(false),
    timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const handlerContentClick = (e: React.MouseEvent) => e.stopPropagation();

  const handlerClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);


  const handlerKeyDown = useCallback((e: KeyboardEvent) => e.key === 'Escape'
    && handlerClose(), [handlerClose]);


  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', (e) => handlerKeyDown(e));
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handlerKeyDown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const mods: Mods = {
    [s.opened]    : isOpen,
    [s.isClosing] : isClosing
  };


  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    return () => setIsMounted(false)
  }, [isOpen]);

  if (lazy && !isMounted) return null;


  return (
    <Portal>
      <div className={cn(s.root, mods, [styles?.root])}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className = {cn(s.overlay, {}, [styles?.overlay])}
          role      = 'button'
          tabIndex  = {0}
          onClick   = {handlerClose}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div
            className = {cn(s.content, {}, [styles?.content])}
            // role      = 'button'
            tabIndex  = {0}
            onClick   = {handlerContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
