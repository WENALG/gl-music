import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import SongsItem from '@/componnets/songs-item'

interface IProps {
  children?: ReactNode
}
const HotRecommend: FC<IProps> = () => {
  //取仓库
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqualApp
  )
  console.log(hotRecommends)
  return (
    <HotWrapper>
      <div className="hot-recommend">
        {hotRecommends.map((item) => {
          return <SongsItem key={item.id} itemDate={item}></SongsItem>
        })}
      </div>
    </HotWrapper>
  )
}

export default memo(HotRecommend)
