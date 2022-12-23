import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";


export const buildResolvers = (options: BuildOptions): ResolveOptions => ({
  extensions     : ['.tsx', '.ts', '.js'],
  preferAbsolute : true,
  modules        : [options.paths.src, 'node_modules'],
  mainFiles      : ['index'],
  alias          : {},
  fallback       : {
    "fs": false,
    "path": false,
    "url": false,
    "buffer": false,
    "util": false,
    "os": false,
    "zlib": false,
    "http": false,
    "https": false
  }
});
