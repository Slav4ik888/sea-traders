import { FC, memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { copyToClipboard } from 'shared/utils';
import s from './index.module.scss';


type Props = {
  code    : string
  onCopy? : (code: string) => void
}

/** 
 * Code
 */
export const Code: FC<Props> = memo(({ code, onCopy }) => {
  
  const handlerCopy = useCallback((e) => {
    copyToClipboard(code);
    onCopy && onCopy(code);
  }, [code]);
  
    
  return (
    <pre className={s.root}>
      <code>
        {code}
      </code>

      <button
        className = {s.copyBtn}
        onClick   = {handlerCopy}
      >
        <CopyIcon className={s.copyIcon} />
      </button>
    </pre>
  )
});
