import React, { useMemo } from 'react'
import type { ThemeConfig } from 'antd'
import { App, ConfigProvider, theme } from 'antd'
import { useGlobalStore } from '@/store'

import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'

import Router from '@/router'

function Root() {
  const { lang, darkMode } = useGlobalStore()

  const currentTheme: ThemeConfig = useMemo(() => {
    if (darkMode) {
      return {
        algorithm: theme.darkAlgorithm
      }
    }
    return {
      token: {
        colorPrimary: 'rgb(124, 77, 255)'
      }
    }
  }, [darkMode])

  return (
    <ConfigProvider
      theme={currentTheme}
      locale={lang === 'zh' ? zhCN : enUS}
      componentSize="middle"
    >
      <App>
        <Router />
      </App>
    </ConfigProvider>
  )
}

export default Root
