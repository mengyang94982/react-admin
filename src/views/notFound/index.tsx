import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from 'antd'

const NotFound = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div>
      <h3>
        No Found for <code>{location.pathname}</code>
      </h3>
      <Button
        size="small"
        type="primary"
        ghost
        onClick={() => navigate('/')}
      >
        返回
      </Button>
    </div>
  )
}

export default NotFound
