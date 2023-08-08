import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="flex-1 p-10px">
      <div className="wh-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Main
