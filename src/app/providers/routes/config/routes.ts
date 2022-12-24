
export enum AppRoutes {
  ROOT      = 'ROOT',
  INFO      = 'INFO',
  NOT_FOUND = 'NOT_FOUND'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]            : '/',
  [AppRoutes.INFO]            : 'info',
  [AppRoutes.NOT_FOUND]       : '*'
};
