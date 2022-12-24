import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import s from './styles.module.scss';



export const NotFoundPage: FC = memo(() => {
  const
    nav         = useNavigate(),
    handleClick = () => nav(RoutePath.ROOT);

  return (
    <div className={s.root}>
      <div className={s.text}>
        Извините, запрошенная страница не найдена...
      </div>
      <button className={s.btn} onClick={handleClick}>
        Перейти на главную
      </button>
    </div>
  );
});
