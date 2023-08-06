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

import React, { lazy, Suspense } from 'react'

const LazyLoad = Component => {
  return (
    <Suspense fallback={'loading'}>
      <Component />
    </Suspense>
  )
}

const Login = lazy(() => import('@/views/login'))
const NotFound = lazy(() => import('@/views/notFound'))
const Layout = lazy(() => import('@/layout'))
const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/about'))

const rootRouter = [
  {
    path: '/',
    name: 'root',
    element: LazyLoad(Layout),
    meta: {
      hide: true,
      title: '首页'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        element: LazyLoad(Home),
        meta: {
          title: 'Home页面'
        }
      },
      {
        path: '/about',
        name: 'about',
        element: LazyLoad(About),
        meta: {
          title: 'About页面'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    element: LazyLoad(Login),
    meta: {
      title: '登录',
      hide: true
    }
  },
  {
    path: '*',
    name: 'notFound',
    element: LazyLoad(NotFound),
    meta: {
      hide: true,
      title: '未找到'
    }
  }
]

export default rootRouter
