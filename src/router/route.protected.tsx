import { Navigate } from 'react-router-dom'

import AppLayout from '../layout'
import Contact from '../views/Contact'
import Home from '../views/Home'
import { CustomRouteObject } from '.'

const protectedRoutes: CustomRouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={'/home'} />,
      },
      {
        path: 'home',
        element: <Home />,
        meta: {
          auth: ['admin', 'user'],
        },
      },
      {
        path: 'contact/:userId',
        element: <Contact />,
        meta: {
          auth: ['admin'],
        },
      },
    ],
  },
]

export default protectedRoutes
