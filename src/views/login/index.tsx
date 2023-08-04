import React from 'react'

import { Tabs } from 'antd'

import type { TabsProps } from 'antd'

import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'

export default function Login() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '登录',
      children: <LoginForm />
    },
    {
      key: '2',
      label: '注册',
      children: <RegisterForm />
    }
  ]

  return (
    <div className="login-bg">
      <div className="h40px w-full text-right">切换语言图标</div>
      <div className="p-y-50px">
        <div className="text-30px text-center mb-30px">博客后台管理系统</div>
        <div className="w328px m-auto">
          <Tabs
            centered
            defaultActiveKey="1"
            items={items}
          />
        </div>
      </div>
    </div>
  )
}
