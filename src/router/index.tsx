import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import filterRouteObject from './filterRouteObject'
import getSideMenuObject from './getSideMenuObject'
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

export const createSideMenu = (isAuthenticated: boolean, role: 'admin' | 'user') => {
  if (!isAuthenticated) {
    return []
  }

  // Get the children routes from the root protected route
  const menuRoutes = protectedRoutes[0]?.children || []
  return getSideMenuObject(menuRoutes, role)
}

export default createRouter
