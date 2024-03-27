import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { NavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="wrap-v1 nav">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink
                to={item.link}
                className={({ isActive }) => {
                  return isActive ? 'active' : undefined
                }}
              >
                {item.title}
              </NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
