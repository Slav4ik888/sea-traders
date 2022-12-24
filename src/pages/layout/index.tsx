import { FC, memo, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
// Redux Stuff
import { useAppDispatch } from 'shared/lib';
import { useUI } from 'features/ui';
// Components
// import { PageLoader, Navbar, Footer, MessageBar } from 'widgets';
// Functions
// import { isNoEmptyFields, getAllObjValue } from 'shared/utils';
// Types
import s from './styles.module.scss';



export const Layout: FC = memo(() => {
  // const
  //   { errors, setWarningMessage } = useUI(),
  //   dispatch      = useAppDispatch();
  
  // // Global show errors
  // useEffect(() => {
  //   isNoEmptyFields(errors) && dispatch(setWarningMessage((getAllObjValue(errors))));
  // }, [errors]);
 

  return (
    <div className={s.wrapper}>
      {/* <Navbar /> */}
      {/* <MessageBar /> */}
      
      <main className={s.main}>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  )
});
