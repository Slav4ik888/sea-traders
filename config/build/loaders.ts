import { RuleSetRule } from "webpack";
import { BuildOptions } from './types';
import { buildCssLoaders } from './loaders/build-css-loaders';


export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {

  const typescriptLoader = {
    test    : /\.tsx?$/,
    use     : 'ts-loader',
    exclude : /node_modules/
  };

  const cssLoader = buildCssLoaders(isDev);
  

  const imagesLoader = {
    test : /\.(png|jpe?g|gif|webp)$/i,
    type : 'asset/resource'
  };

  const fontsLoader = {
    test : /\.(woff|woff2|eot|ttf)$/i,
    type : 'asset/inline'
  };

  const mdLoader = {
    test : /\.md$/,
    use  : "raw-loader"
  };

  const svgLoader = {
    test : /\.svg$/i,
    use  : ['@svgr/webpack']
  };


  return [
    typescriptLoader,
    ...cssLoader,
    imagesLoader,
    fontsLoader,
    mdLoader,
    svgLoader
  ]
}

// {
//   test: /\.jsx?$/,
//   exclude: /node_modules/,
//   use: {
//     loader: 'babel-loader'
//   }
// }
