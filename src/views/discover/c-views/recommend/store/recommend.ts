import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getSinggersList
} from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banner',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(setBannerAction(res.banners))
  }
)
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(setHotRecommendAction(res.result))
  }
)
export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(setNewAlbumsAction(res.albums))
  }
)
export const fetchSingerListAction = createAsyncThunk(
  'singerList',
  async (arg, { dispatch }) => {
    const res = await getSinggersList()
    console.log(res.artists)
    dispatch(setArtistListAction(res.artists))
  }
)
//飙升榜19723756,新歌榜3779629,原创榜2884035
const playListIds = [19723756, 3779629, 2884035]
export const fetchPlayListRankingAction = createAsyncThunk(
  'ranking',
  (args, { dispatch }) => {
    //拿到所有数据后，再放进数组里
    const promises: Promise<any>[] = []
    for (const id of playListIds) {
      promises.push(getPlayListDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playListData = res.map((item) => item.playlist)
      console.log(playListData)
      dispatch(setPlayListsAction(playListData))
    })
  }
)
interface IBannerData {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankingLists: any[]
  artistLists: any[]
}
const initialState: IBannerData = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankingLists: [],
  artistLists: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannerAction(state, { payload }) {
      state.banners = payload
    },
    setHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    setNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    setPlayListsAction(state, { payload }) {
      state.rankingLists = payload
    },
    setArtistListAction(state, { payload }) {
      state.artistLists = payload
    }
  }
})
export const {
  setBannerAction,
  setHotRecommendAction,
  setNewAlbumsAction,
  setPlayListsAction,
  setArtistListAction
} = recommendSlice.actions
export default recommendSlice.reducer
