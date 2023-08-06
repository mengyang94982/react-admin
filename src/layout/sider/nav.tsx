import React, { useState } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const MyMenu = () => {
  const [selectedKeys] = useState(['home'])
  // 当前路由对应的 sub menu key
  const [openKeys, setOpenKeys] = useState(['home'])
  // 提取放在redux中, tab 切换时改成 false
  // const [isOpenChange, setIsOpenChange] = useState(false)

  const [rootSubmenuKeys] = useState(['/sub-act', '/sub-list', '/sub-error'])

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    // setIsOpenChange(true)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const navigate = useNavigate()
  const redirectTo = path => {
    navigate(path)
  }

  const onSelect = ({ key }) => {
    redirectTo(key)
    setIsOpenChange(false)
  }
  const menuItems = [
    { label: 'Home', key: '/home' },
    { label: 'About', key: '/about' }
  ]

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
      items={menuItems}
    />
  )
}

export default MyMenu
