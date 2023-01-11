import { FC, memo } from 'react';
import Image from 'react-image-webp';
import s from './index.module.scss';


export const MainBackground: FC = memo(() => (
  <Image
    webp      = {require('shared/assets/maps/main-map.webp')}
    alt       = 'Background main map'
    className = {s.root}
  />
));
