import { FC } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const PageError: FC<Props> = ({ className }) => {

  const handlerReloadPage = () => {
    location.reload();
  };

  return (
    <div className={cn(s.root, {}, [className])}>
      <p>Прошла непредвиденная ошибка</p>
      <button
        onClick = {handlerReloadPage}
      >
        Обновить страницу
      </button>
    </div>
  )
};

PageError.defaultProps = {
  className: ''
}
