import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

export function routes() {}

export const Routes = [
  {
    path: '/system',
    name: 'system',
    element: <Navigate to="/system/user" />,
    icon: 'mdi:ab-testing',
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: '/system/user',
        name: 'systemUser',
        icon: 'mdi:abacus',
        element: lazy(() => import('@/views/system/user')),
        meta: {
          title: '用户管理'
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    icon: 'mdi:ab-testing',
    element: <Navigate to="/article/list" />,
    meta: {
      title: '文章管理'
    },
    children: [
      {
        path: '/article/list',
        name: 'articleList',
        icon: 'mdi:ab-testing',
        meta: {
          title: '文章列表'
        },
        element: lazy(() => import('@/views/article/list'))
      }
    ]
  }
]
