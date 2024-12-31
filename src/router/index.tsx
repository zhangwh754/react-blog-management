import { createHashRouter, Navigate, RouteObject } from 'react-router-dom'

import AppLayout from '../layout'
import Contact from '../views/Contact'
import Home from '../views/Home'
import Login from '../views/Login'
import NotFound from '../views/NotFound'

type CustomRouteObject = RouteObject & {
  meta?: {
    [key: string]: any
  }
  children?: CustomRouteObject[]
}

const routes: CustomRouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        path: '',
        element: <Navigate to={'/home'} />,
        meta: {},
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'contact/:userId',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const router = createHashRouter(routes)

export default router
