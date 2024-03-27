import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from './style'
import { formatImgSize } from '@/utils/format'
import { useAppDispath } from '@/store'
import { fetchSongDetailAction } from '../../../player/store'

interface IProps {
  children?: ReactNode
  itemData?: any
}
const SongRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData
  const dispatch = useAppDispath()
  function handlePlay(songId: number) {
    dispatch(fetchSongDetailAction(songId))
  }
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="left">
          <img src={formatImgSize(itemData.coverImgUrl, 80)}></img>
        </div>
        <div className="right">
          <h5>{itemData.name}</h5>
          <span className="play sprite_02"></span>
          <span className="collect sprite_02"></span>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="listItem" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator ">
                  <button
                    className="btn play sprite_02"
                    onClick={() => {
                      handlePlay(item.id)
                    }}
                  ></button>
                  <button className="btn add sprite_icon2"></button>
                  <button className="btn favor sprite_02"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">查看更多＞</div>
    </RankingItemWrapper>
  )
}

export default memo(SongRankingItem)
