import React, { useMemo } from 'react'
import type { ThemeConfig } from 'antd'
import { App, Button, ConfigProvider, theme } from 'antd'
import { useGlobalStore } from '@/store'

import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'

function Root() {
  const { lang, darkMode, collapsed, setCollapsed } = useGlobalStore()

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

  function change() {
    setCollapsed(true)
  }

  return (
    <ConfigProvider
      theme={currentTheme}
      locale={lang === 'zh' ? zhCN : enUS}
      componentSize="middle"
    >
      <App>
        <div>{collapsed}</div>
        <Button onClick={change}>修改collapsed状态</Button>

        <div>app</div>
      </App>
    </ConfigProvider>
  )
}

export default Root
