import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AblumItemWrapper } from './style'
import { formatImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData?: any
}

const albumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AblumItemWrapper>
      <div className="album">
        <div className="top">
          <img src={formatImgSize(itemData.picUrl, 100)}></img>
          <div className="cover sprite_cover "></div>
          <div className="sprite_icon play"></div>
        </div>
        <div className="bottom">
          <div className="name">{itemData.name}</div>
          <div className="artist">{itemData.artist.name}</div>
        </div>
      </div>
    </AblumItemWrapper>
  )
}

export default memo(albumItem)
