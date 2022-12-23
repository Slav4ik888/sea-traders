import { Configuration as DevServerConfiguraion } from "webpack-dev-server";
import { BuildOptions } from "./types";


export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguraion => ({
  port,
  open: false,
  historyApiFallback: true,
  proxy: {
    '/api': 'http://localhost:2070'
  }
});
