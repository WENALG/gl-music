import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import NavBar from './c-cpns/top-navbar/index'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
