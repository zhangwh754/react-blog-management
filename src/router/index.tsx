import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import filterRouteObject from './filterRouteObject'
import protectedRoutes from './route.protected'
import publicRoutes from './route.public'

export type CustomRouteObject = RouteObject & {
  meta?: {
    [key: string]: any
  }
  children?: CustomRouteObject[]
}

const createRouter = (isAuthenticated: boolean, role: 'admin' | 'user') => {
  if (!isAuthenticated) {
    return createBrowserRouter([
      ...publicRoutes,
      {
        path: '*',
        element: <Navigate to="/login" replace />,
      },
    ])
  }

  // Filter protected routes based on user role
  const filteredProtectedRoutes = filterRouteObject(protectedRoutes, role)

  return createBrowserRouter([...filteredProtectedRoutes, ...publicRoutes])
}

export default createRouter
