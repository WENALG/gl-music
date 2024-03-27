import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RightV2Wrapper } from './style'
import TopTitleArea from '@/componnets/top-title-area'
import { hotRadios } from '@/assets/data/local_data'
import { formatImgSize } from '@/utils/format'
interface IProps {
  children?: ReactNode
}

const RightV2: FC<IProps> = () => {
  return (
    <RightV2Wrapper>
      <TopTitleArea title="热门主播" />
      <div className="content">
        {hotRadios.map((item) => {
          return (
            <div key={item.name} className="item">
              <div className="left">
                <img src={formatImgSize(item.picUrl, 45)} alt="" />
              </div>
              <div className="right">
                <div className="name">{item.name}</div>
                <div className="other">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </RightV2Wrapper>
  )
}

export default memo(RightV2)
