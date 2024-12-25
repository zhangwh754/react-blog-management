import { createBrowserRouter } from 'react-router-dom'

import AppLayout from '../layout'
import Contact from '../views/Contact'
import Home from '../views/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'contact/:userId',
        element: <Contact />,
      },
    ],
    // element: <Home />,
  },
])

export default router
