import { FC, useState, useEffect, memo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


interface Props {
  className? : string;
  short?     : boolean;
}

/** For development testing */
export const BugButton: FC = memo(({ short, className }: Props) => {
  const
    label = short ? 'Err' : 'Бросить ошибку',
    [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error()
  }, [error]);

  return (
    <button
      className = {cn(s.root, {}, [className])}
      onClick   = {onThrow}
    >
      {label}
    </button>
  )
});
