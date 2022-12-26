import { FC, memo } from 'react';
import { MainBackground } from 'widgets';
// import { ChangeMapCellType } from 'widgets/dev/change-map-cell-type';


/** Главная страница */
export const RootPage: FC = memo(() => {
  
  return (
    <>
      <MainBackground />
      {/* <ChangeMapCellType /> */}
    </>
  );
});
