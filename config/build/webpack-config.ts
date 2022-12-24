import { Configuration } from 'webpack';
import { buildDevServer } from './dev-server';
import { buildLoaders } from './loaders';
import { buildPlugins } from './plugins';
import { buildResolvers } from './resolvers';
import { BuildOptions } from './types';


export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { isDev, paths, mode, target } = options;

  return {
    mode,
    target,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    output : {
      path                : paths.build,
      filename            : '[name].[contenthash].js',
      assetModuleFilename : 'images/[hash][ext][query]',
      clean               : true,
      publicPath          : '/'
    },
    plugins   : buildPlugins(options),
    resolve   : buildResolvers(options),
    devtool   : isDev ? 'inline-source-map' : undefined,
    devServer : isDev ? buildDevServer(options) : undefined
  }
}
