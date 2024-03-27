import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TitleWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  title?: string
  words?: string[]
  moreText?: string
  moreLink?: string
}

const topTitle: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    words = [],
    moreText = '更多',
    moreLink = '/'
  } = props
  return (
    <TitleWrapper className="sprite_02">
      <div className="left ">
        <div className="title">{title}</div>
        {words.map((item) => {
          return (
            <div className="item" key={item}>
              <span className="subtitle">{item}</span>
              <span className="divider">|</span>
            </div>
          )
        })}
      </div>
      <div className="right">
        <Link to={moreLink} className="more">
          {moreText}
        </Link>
        <i className="icon"></i>
      </div>
    </TitleWrapper>
  )
}

export default memo(topTitle)
