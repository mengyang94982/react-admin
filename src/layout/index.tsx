import React from 'react'
import { Layout } from 'antd'

import Sider from '@/layout/sider'
import Header from '@/layout/header'
import Main from '@/layout/main'

const DylanLayout = () => (
  <Layout className="h-100vh overflow-hidden">
    <Sider />
    <Layout className="h-full overflow-hidden">
      <Header />
      <Main />
    </Layout>
  </Layout>
)

export default DylanLayout
