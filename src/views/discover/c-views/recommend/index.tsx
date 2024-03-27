import { useAppDispath, useAppSelector } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import TopBanner from './c-cpns/swpider/top-banner'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchPlayListRankingAction,
  fetchSingerListAction
} from './store/recommend'
import { RecommendWrapper } from './style'
import TopTitle from '@/componnets/top-title'
import HotRecommend from '../../c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album/newAlbum'
import SongRanking from './c-cpns/song-ranking'
import RightV1 from './c-cpns/right-v1'
import RightV2 from './c-cpns/right-v2'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  //发起bannerData网络请求
  const dispatch = useAppDispath()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchPlayListRankingAction())
    dispatch(fetchSingerListAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content">
        <div className="left">
          <TopTitle
            title="热门推荐"
            words={['华语', '流行', '摇滚', '民谣', '电子']}
            moreLink="/discover/songs"
          />
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <SongRanking></SongRanking>
        </div>
        <div className="right">
          <RightV1></RightV1>
          <RightV2></RightV2>
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
