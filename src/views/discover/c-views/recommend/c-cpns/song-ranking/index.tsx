import TopTitle from '@/componnets/top-title'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import SongRankingItem from '../song-ranking-item'

interface IProps {
  children?: ReactNode
}

const SongRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankingLists
    }),
    shallowEqualApp
  )
  console.log(rankings)
  return (
    <RankingWrapper>
      <TopTitle title="榜单" moreLink="/discover/ranking"></TopTitle>
      <div className="content">
        {rankings.map((item) => {
          return (
            <SongRankingItem key={item.id} itemData={item}></SongRankingItem>
          )
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(SongRanking)
