import { Navigate } from 'react-router-dom'

import AppLayout from '../layout'
import ContactDetail from '../views/Contact/Detail'
import ContactList from '../views/Contact/List'
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
          title: '首页',
          auth: ['admin', 'user'],
        },
      },
      {
        path: 'contact',
        meta: {
          title: '联系人',
          auth: ['admin'],
        },
        children: [
          {
            path: '',
            element: <ContactList />,
            meta: {
              title: '联系人列表',
              auth: ['admin'],
            },
          },
          {
            path: ':userId',
            element: <ContactDetail />,
            meta: {
              auth: ['admin'],
            },
          },
        ],
      },
    ],
  },
]

export default protectedRoutes
