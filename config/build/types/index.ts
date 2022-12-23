
export type BuildMode = 'production' | 'development'

export enum BuildProject {
  STORYBOOK = 'storybook',
  FRONTEND  = 'frontend',
  JEST      = 'jest'
}

export interface BuildOptions {
  mode   : BuildMode;
  paths  : BuildPaths;
  isDev  : boolean;
  target : string;
  port   : number;
}

export interface BuildPaths {
  entry   : string;
  build   : string;
  html    : string;
  favicon : string;
  src     : string;
}

export interface BuildEnv {
  mode : BuildMode;
  port : number;
}
