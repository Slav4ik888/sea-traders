import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from "./types";


export const buildPlugins = ({ paths: { html, favicon }, isDev }: BuildOptions) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
      // chunkFilename:
    }),
    new HtmlWebpackPlugin({
      title: 'The Sea Traders!',
      template: html,
      favicon: favicon
    })
  ];

  if (isDev) {
    // @ts-ignore
    plugins.push(new ReactRefreshWebpackPlugin());
    // @ts-ignore
    plugins.push(new HotModuleReplacementPlugin());
  }

  return plugins
};
