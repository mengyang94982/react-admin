// import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
//
// import Login from '@/views/login'
// import BasicLayout from '@/layout'
//
// export const router = createHashRouter([
//   {
//     path: '/login',
//     Component: Login
//   },
//   {
//     path: '/',
//     Component: BasicLayout,
//     element: <Navigate to="/dashboard" />
//   },
//   {
//     path: '*',
//     Component: BasicLayout,
//     children: []
//   }
// ])
//
// const Router = () => {
//   return <RouterProvider router={router} />
// }
//
// export default Router

import React, { lazy } from 'react'

import { mainRoute } from '@/router/mainRoute'

const Login = lazy(() => import('@/views/login'))
const NotFound = lazy(() => import('@/views/notFound'))
const Layout = lazy(() => import('@/layout'))

const rootRouter = [
  {
    path: '/',
    name: 'root',
    element: <Layout />,
    icon: 'ic:baseline-16mp',
    meta: {
      hide: true,
      title: '首页'
    },
    children: mainRoute
  },
  {
    path: '/login',
    name: 'login',
    element: <Login />,
    icon: 'ic:baseline-16mp',
    meta: {
      title: '登录',
      hide: true
    }
  },
  {
    path: '*',
    name: 'notFound',
    element: <NotFound />,
    icon: 'ic:baseline-16mp',
    meta: {
      hide: true,
      title: '未找到'
    }
  }
]

export default rootRouter
