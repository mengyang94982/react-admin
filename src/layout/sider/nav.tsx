import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { routeTransformToMenu } from '@/utils/router'

import { mainRoute } from '@/router/mainRoute'

const pathSubmenu = {
  '/home': ['home'],
  '/coupons/add': ['/sub-act', '/sub-coupons'],
  '/coupons/edit': ['/sub-act', '/sub-coupons'],
  '/product': ['/sub-act', '/sub-coupons']
}
const MyMenu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const redirectTo = path => {
    navigate(path)
  }
  const [selectedKeys, setSelectedKeys] = useState(['home'])
  // 当前路由对应的 sub menu key
  const [openKeys, setOpenKeys] = useState(['home'])
  // 提取放在redux中, tab 切换时改成 false
  // const [isOpenChange, setIsOpenChange] = useState(false)

  const [isOpenChange, setIsOpenChange] = useState(false)

  const [rootSubmenuKeys] = useState(['/sub-act', '/sub-list', '/sub-error'])

  useEffect(() => {
    const selectedPathKey = pathname
    setSelectedKeys([selectedPathKey])
    setOpenKeys(isOpenChange ? openKeys : pathSubmenu[pathname] ?? openKeys)
  }, [pathname, openKeys, isOpenChange])

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    setIsOpenChange(true)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onSelect = ({ key }) => {
    redirectTo(key)
    setIsOpenChange(false)
  }
  const menus = routeTransformToMenu(mainRoute)
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={selectedKeys}
      defaultOpenKeys={openKeys}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      theme="light"
      onOpenChange={onOpenChange}
      onSelect={onSelect}
      items={menus}
    />
  )
}

export default MyMenu
