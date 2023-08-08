import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/about'))
const Article = lazy(() => import('@/views/article'))
const ArticleList = lazy(() => import('@/views/article/list'))
const ArticleTag = lazy(() => import('@/views/article/tag'))

const LazyLoad = Component => {
  return (
    <Suspense fallback={'loading'}>
      <Component />
    </Suspense>
  )
}

export const mainRoute = [
  {
    path: '/home',
    name: 'home',
    icon: 'ic:baseline-16mp',
    element: LazyLoad(Home),
    meta: {
      title: 'Home页面'
    }
  },
  {
    path: '/about',
    name: 'about',
    element: LazyLoad(About),
    icon: 'ic:baseline-16mp',
    meta: {
      title: 'About页面'
    }
  },
  {
    path: '/article',
    name: 'article',
    element: LazyLoad(Article),
    icon: 'ic:baseline-16mp',
    meta: {
      title: '文章管理'
    },
    children: [
      {
        path: '/article/list',
        name: 'articleList',
        element: LazyLoad(ArticleList),
        icon: 'ic:baseline-16mp',
        meta: {
          title: '文章列表'
        }
      },
      {
        path: '/article/tag',
        name: 'articleTag',
        element: LazyLoad(ArticleTag),
        icon: 'ic:baseline-16mp',
        meta: {
          title: '标签管理'
        }
      }
    ]
  }
]
