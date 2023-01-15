import './src/shared/lib/config/dotenv';
import path from 'path';
import { buildWebpackConfig } from './config/build/webpack-config';
import { BuildEnv } from './config/build/types';


export default (env: BuildEnv) => {

  const paths = {
    entry   : path.resolve(__dirname, 'src', 'index.tsx'),
    build   : path.resolve(__dirname, 'dist'),
    html    : path.resolve(__dirname, 'public', 'index.html'),
    favicon : path.resolve(__dirname, 'public', 'favicon2.png'),
    src     : path.resolve(__dirname, 'src')
  };
  
  const
    mode   = env.mode || 'development',
    isDev  = mode === 'development',
    target = !isDev ? 'browserslist' : 'web',
    port   = env.port || 3000;

  console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
  console.log('isDev: ', isDev);

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    target,
    port
  });

  return config;
};
