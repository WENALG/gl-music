import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TitleWrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const TitleArea: FC<IProps> = (props) => {
  const { title, moreText, moreLink } = props
  return (
    <TitleWrapper>
      <div className="title">{title}</div>
      <div className="more">
        <span>{moreText}</span>
        <a href={moreLink}></a>
      </div>
    </TitleWrapper>
  )
}

export default memo(TitleArea)
