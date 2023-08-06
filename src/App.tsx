import React from 'react'
// import type { ThemeConfig } from 'antd'
// import { theme } from 'antd'
// import { useGlobalStore } from '@/store'
import { useRoutes } from 'react-router-dom'

import rootRouter from '@/router'

function Root() {
  // const { lang, darkMode } = useGlobalStore()
  //
  // const currentTheme: ThemeConfig = useMemo(() => {
  //   if (darkMode) {
  //     return {
  //       algorithm: theme.darkAlgorithm
  //     }
  //   }
  //   return {
  //     token: {
  //       colorPrimary: 'rgb(124, 77, 255)'
  //     }
  //   }
  // }, [darkMode])

  const element = useRoutes(rootRouter as any)

  return (
    <div>
      {/* <ConfigProvider */}
      {/*  theme={currentTheme} */}
      {/*  locale={lang === 'zh' ? zhCN : enUS} */}
      {/*  componentSize='middle' */}
      {/* > */}
      {/*  <App> */}
      {/* <AuthRouter> */}
      {element}
      {/* </AuthRouter> */}
      {/*  </App> */}
      {/* </ConfigProvider> */}
    </div>
  )
}

export default Root
