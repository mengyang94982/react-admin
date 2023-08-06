import React, { useState } from 'react'
import { Layout } from 'antd'

import MyMenu from '@/layout/sider/nav'

const Sider = () => {
  const [collapsed] = useState(false)

  // const onCollapse = () => {
  //   setCollapsed(!collapsed)
  // }

  return (
    <Layout.Sider
      width={220}
      collapsedWidth={60}
      theme="light"
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <div>后台管理系统</div>
      <MyMenu />
    </Layout.Sider>
  )
}

export default Sider
