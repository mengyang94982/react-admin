import { useNavigate } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { useGlobalStore } from '@/store'
import { Menu } from 'antd'

import { Routes } from '@/router/routes'
import SvgIcon from '@/components/custom/svg-icon'

const SiderMenu = () => {
  const [openKeys, setOpenKeys] = useState([])
  const [selectKeys, setSelectKeys] = useState([])
  const { collapsed } = useGlobalStore()
  const navigate = useNavigate()

  const treeMenuData = useCallback(menus => {
    return menus.map(menu => {
      const children = menu?.children || []
      return {
        key: menu.path,
        label: menu.meta.title,
        icon: <SvgIcon icon={menu.icon} />,
        children: children.length ? treeMenuData(children) : null
      }
    })
  }, [])

  const menuData = treeMenuData(Routes)

  function selectClick(item) {
    setSelectKeys(item.key)
    navigate(item.key)
  }

  return (
    <Menu
      className="bg-primary color-transition"
      mode="inline"
      selectedKeys={selectKeys}
      items={menuData}
      inlineCollapsed={collapsed}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      onSelect={selectClick}
    />
  )
}

export default SiderMenu
