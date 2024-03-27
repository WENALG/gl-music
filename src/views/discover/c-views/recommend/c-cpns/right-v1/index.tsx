import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RightV1Wrapper } from './style'
import TopTitleArea from '@/componnets/top-title-area'
import { shallowEqualApp, useAppSelector } from '@/store'
import { formatImgSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const RightV1: FC<IProps> = () => {
  const { artistList } = useAppSelector(
    (state) => ({
      artistList: state.recommend.artistLists
    }),
    shallowEqualApp
  )
  return (
    <RightV1Wrapper>
      <TopTitleArea
        title="入驻歌手"
        moreText="查看全部＞"
        moreLink="/"
      ></TopTitleArea>
      <div className="content">
        {artistList.map((item) => {
          return (
            <div key={item.id} className="item">
              <div className="left">
                <img src={formatImgSize(item.picUrl, 65)} alt="" />
              </div>
              <div className="right">
                <div className="name">{item.name}</div>
                <div className="other">{item.alias[0]}</div>
              </div>
            </div>
          )
        })}
        <div className="footer">
          <button className="btn">申请成为网易音乐人</button>
        </div>
      </div>
    </RightV1Wrapper>
  )
}

export default memo(RightV1)
