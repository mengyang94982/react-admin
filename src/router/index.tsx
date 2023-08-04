import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'

import Login from '@/views/login'
import BasicLayout from '@/layout'

export const router = createHashRouter([
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/',
    Component: BasicLayout,
    element: <Navigate to="/dashboard" />
  },
  {
    path: '*',
    Component: BasicLayout,
    children: []
  }
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
