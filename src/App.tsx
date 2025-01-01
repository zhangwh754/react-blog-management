import React from 'react'
import { RouterProvider } from 'react-router-dom'

import createRouter from './router'

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('token') !== null
  const userRole = localStorage.getItem('role') as 'admin' | 'user'

  const router = createRouter(isAuthenticated, userRole)

  return <RouterProvider router={router} />
}

export default App
