import React, { Suspense } from 'react'

const Main = ({ children }) => {
  return (
    <div>
      <Suspense>{children}</Suspense>
    </div>
  )
}

export default Main
