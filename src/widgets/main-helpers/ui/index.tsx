import { FC, memo } from 'react';
import { ShowAllTownsNames } from './show-all-towns-names';
import { ShowAllDwellers } from './show-all-dwellers';
import { ShowAllProducts } from './show-all-products';
import { Button, ButtonTheme, Card, Modal } from 'shared/ui';
import { useValue } from 'shared/lib';
import s from './index.module.scss';



export const MainHelpers: FC = memo(() => {
  const
    hookValue    = useValue(),
    handlerOpen  = () => hookValue.setOpen(),
    handlerClose = () => hookValue.setClose();


  return (
    <>
      {
        !hookValue.open && <Button
          className = {s.btn}
          theme     = {ButtonTheme.BOARD}
          onClick   = {handlerOpen}
        >
          Settings
        </Button>
      }
      <Modal
        lazy
        isOpen  = {hookValue.open}
        styles  = {{ content: s.content }}
        onClose = {handlerClose}
      >
        <Card
          title  = 'Settings'
          styles = {{ root: s.card }}
        >
          <ShowAllTownsNames styles={{ root: s.items }} />
          <ShowAllDwellers   styles={{ root: s.items }} />
          <ShowAllProducts   styles={{ root: s.items }} />
        </Card>
      </Modal>
    </>
  )
});
