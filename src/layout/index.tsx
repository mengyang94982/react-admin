import React, { useEffect } from 'react'

import Side from './sider'
import Top from './header'
import Main from '@/layout/main'
// import AppLoading from '@/components/common/AppLoading'
// import { useGlobalStore } from '@/store'
import { Outlet } from 'react-router-dom'

const BasicLayout: React.FC = () => {
  // const [loading, setLoading] = useState(false)
  //
  // const { refreshToken, lang, token } = useGlobalStore()
  // const navigate = useNavigate()
  // const location = useLocation()
  //
  // const formatMenus = (menus, menuGroup, routes, parentMenu) => {
  //   return menus.map(menu => {})
  // }

  useEffect(() => {})

  // if (loading) {
  //   return <AppLoading />
  // }

  return (
    <div className="w-100vw h-100vh overflow-hidden flex">
      <Side />
      <div className="w-full">
        <Top />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  )
}

export default BasicLayout
