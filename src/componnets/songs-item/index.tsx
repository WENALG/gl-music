import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { formatCount, formatImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemDate: any
}

const SongItem: FC<IProps> = (props) => {
  const { itemDate } = props
  return (
    <ItemWrapper>
      <div className="top">
        <img src={formatImgSize(itemDate.picUrl, 140)}></img>
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(itemDate.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemDate.name}</div>
    </ItemWrapper>
  )
}

export default memo(SongItem)
