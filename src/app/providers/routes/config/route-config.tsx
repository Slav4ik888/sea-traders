import { NotFoundPage } from 'pages';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from './routes';


export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}


export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.ROOT]: {
    path    : RoutePath.ROOT,
    element : <></>
  },
  [AppRoutes.INFO]: {
    path    : RoutePath.INFO,
    element : <>Info</>
  },
  [AppRoutes.NOT_FOUND]: {
    path    : RoutePath.NOT_FOUND,
    element : <NotFoundPage />
  }
};
