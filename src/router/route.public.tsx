import Login from '../views/Login'
import NotFound from '../views/NotFound'
import { CustomRouteObject } from '.'

const publicRoutes: CustomRouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default publicRoutes
