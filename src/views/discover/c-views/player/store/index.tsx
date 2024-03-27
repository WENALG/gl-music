import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'
import { parseLyric } from '@/utils/parse-lyric'

export const fetchSongDetailAction = createAsyncThunk<void, number>(
  'song',
  (ids: number, { dispatch, getState }) => {
    //查看歌曲列表是否有该歌曲
    const songsList = (getState() as any).player.SongList
    const findIndex = songsList.findIndex((item: any) => item.id === ids)
    if (findIndex === -1) {
      //没有找到
      //设置歌曲
      getSongDetail(ids).then((res) => {
        //设置当前歌曲
        const song = res.songs[0]
        dispatch(setCurentSongAction(song))
        //设置新的歌曲列表
        const newSongList = [...songsList]
        newSongList.push(song)
        dispatch(setSongsListAction(newSongList))
        //歌曲index
        dispatch(setListIndexAction(newSongList.length - 1))
      })
      //设置歌词
      getSongLyric(ids).then((res) => {
        const currentLyric = res.lrc.lyric
        const PLyrics = parseLyric(currentLyric)
        dispatch(setCurrentLyricAction(PLyrics))
      })
      console.log('是新歌')
    } else {
      //列表中有该歌曲
      console.log('不是新歌')
      dispatch(setCurentSongAction(songsList[findIndex]))
      //设置歌词
      getSongLyric(ids).then((res) => {
        const currentLyric = res.lrc.lyric
        const PLyrics = parseLyric(currentLyric)
        dispatch(setCurrentLyricAction(PLyrics))
      })
    }
    console.log(songsList)
  }
)
export const fetchChangeMusic = createAsyncThunk<void, boolean>(
  'changMusic',
  (isNext, { dispatch, getState }) => {
    const player = (getState() as any).player
    const playMode = player.playMode
    const songList = player.SongList
    const songIndex = player.songIndex
    let newIndex: number = songIndex
    if (playMode === 1) {
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex > Number(songList.length) - 1) {
        newIndex = 0
      }
      if (newIndex < 0) newIndex = songList.length - 1
    }
    const song = songList[newIndex]
    dispatch(setCurentSongAction(song))
    dispatch(setListIndexAction(newIndex))
    //设置歌词
    getSongLyric(song.id).then((res) => {
      const currentLyric = res.lrc.lyric
      const PLyrics = parseLyric(currentLyric)
      dispatch(setCurrentLyricAction(PLyrics))
    })
  }
)
interface ISongs {
  currentSong: any
  currentLyric: any
  lyricIndex: number
  SongList: any[]
  songIndex: number
  playMode: number
}
const initialState: ISongs = {
  currentSong: {},
  currentLyric: {},
  lyricIndex: -1,
  SongList: [
    {
      name: '紫荆花盛开',
      id: 1959528822,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 4292,
          name: '李荣浩',
          tns: [],
          alias: []
        },
        {
          id: 8329,
          name: '梁咏琪',
          tns: [],
          alias: []
        }
      ],
      alia: ['香港回归祖国25周年主题歌曲'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 22,
      crbt: null,
      cf: '',
      al: {
        id: 147166235,
        name: '紫荆花盛开',
        picUrl:
          'https://p1.music.126.net/R7yzr15Ftp4Mf59kTvy_uA==/109951167605022957.jpg',
        tns: [],
        pic_str: '109951167605022957',
        pic: 109951167605022960
      },
      dt: 210667,
      h: {
        br: 320000,
        fid: 0,
        size: 8428845,
        vd: -56941,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5057325,
        vd: -54348,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3371565,
        vd: -52666,
        sr: 48000
      },
      sq: {
        br: 993153,
        fid: 0,
        size: 26153114,
        vd: -56931,
        sr: 48000
      },
      hr: {
        br: 1761692,
        fid: 0,
        size: 46391367,
        vd: -56931,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 0,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 22,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 14541000,
      cp: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      publishTime: 1656518400000
    },
    {
      name: '谁家',
      id: 2024225492,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 36775590,
          name: '池鱼',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 10,
      crbt: null,
      cf: '',
      al: {
        id: 160463838,
        name: '谁家',
        picUrl:
          'https://p1.music.126.net/-RbKpWN8zxRKljsuV7IiPA==/109951169031383018.jpg',
        tns: [],
        pic_str: '109951169031383018',
        pic: 109951169031383020
      },
      dt: 186734,
      h: {
        br: 320000,
        fid: 0,
        size: 7472109,
        vd: -36794,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4483283,
        vd: -34160,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2988870,
        vd: -32400,
        sr: 44100
      },
      sq: {
        br: 1491061,
        fid: 0,
        size: 34804145,
        vd: -36793,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 10,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      publishTime: 1676995200000
    },
    {
      name: '可能',
      id: 1950343972,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 7424,
          name: '程响',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 11,
      crbt: null,
      cf: '',
      al: {
        id: 145469501,
        name: '可能',
        picUrl:
          'https://p1.music.126.net/Lk26KqRDPVbbhB4rQRGnPw==/109951167570919875.jpg',
        tns: [],
        pic_str: '109951167570919875',
        pic: 109951167570919870
      },
      dt: 217994,
      h: {
        br: 320002,
        fid: 0,
        size: 8722605,
        vd: -28532,
        sr: 48000
      },
      m: {
        br: 192002,
        fid: 0,
        size: 5233581,
        vd: -25895,
        sr: 48000
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3489069,
        vd: -24209,
        sr: 48000
      },
      sq: {
        br: 829320,
        fid: 0,
        size: 22598448,
        vd: -28529,
        sr: 48000
      },
      hr: {
        br: 1589207,
        fid: 0,
        size: 43304896,
        vd: -28529,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 11,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 14627525,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      publishTime: 0
    },
    {
      name: '我记得',
      id: 1974443814,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6731,
          name: '赵雷',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 10,
      crbt: null,
      cf: '',
      al: {
        id: 150127127,
        name: '署前街少年',
        picUrl:
          'https://p1.music.126.net/ykR7CGYNj_a6wcn_8u0t5g==/109951169213377336.jpg',
        tns: [],
        pic_str: '109951169213377336',
        pic: 109951169213377340
      },
      dt: 329891,
      h: {
        br: 320000,
        fid: 0,
        size: 13198150,
        vd: -50155,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7918907,
        vd: -47545,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5279286,
        vd: -45763,
        sr: 44100
      },
      sq: {
        br: 1581400,
        fid: 0,
        size: 65211331,
        vd: -50153,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 5,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 10,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 14688453,
      mst: 9,
      cp: 22036,
      rtype: 0,
      rurl: null,
      publishTime: 1661702400000
    },
    {
      name: '我的美丽feat.海洋Bo',
      id: 1979417838,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 36985903,
          name: '海洋Bo',
          tns: [],
          alias: []
        },
        {
          id: 33850806,
          name: '高睿',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 19,
      crbt: null,
      cf: '',
      al: {
        id: 151156371,
        name: '我的美丽feat.海洋Bo',
        picUrl:
          'https://p1.music.126.net/8ZpCzo4gEeCAQyXAGYXKUQ==/109951167854450663.jpg',
        tns: ['你说你受到了不公平'],
        pic_str: '109951167854450663',
        pic: 109951167854450660
      },
      dt: 244444,
      h: {
        br: 320000,
        fid: 0,
        size: 9780525,
        vd: -10256,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5868333,
        vd: -7648,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3912237,
        vd: -5995,
        sr: 48000
      },
      sq: {
        br: 767451,
        fid: 0,
        size: 23449940,
        vd: -10248,
        sr: 48000
      },
      hr: {
        br: 1533278,
        fid: 0,
        size: 46850227,
        vd: -10248,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 1901319325,
        name: '我的美丽',
        artists: [
          {
            id: 1192268,
            name: '小霞'
          }
        ],
        albumMeta: {
          id: 137137613,
          name: '小霞 2.0'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 19,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1662566400000,
      tns: ['你说你受到了不公平']
    }
  ],
  songIndex: 0,
  playMode: 0 // 0顺序 1随机 2循环
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    setCurrentLyricAction(state, { payload }) {
      state.currentLyric = payload
    },
    setLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    setSongsListAction(state, { payload }) {
      state.SongList = payload
    },
    setListIndexAction(state, { payload }) {
      state.songIndex = payload
    },
    setPlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})
export const {
  setCurentSongAction,
  setCurrentLyricAction,
  setLyricIndexAction,
  setSongsListAction,
  setListIndexAction,
  setPlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
