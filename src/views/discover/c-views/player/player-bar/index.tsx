import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  BarWrapper,
  ListWrapper
} from './style'
import { Slider } from 'antd'
import { Link } from 'react-router-dom'
import { shallowEqualApp, useAppDispath, useAppSelector } from '@/store'
import { formatImgSize, formatTime } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'
import {
  fetchChangeMusic,
  setCurentSongAction,
  setCurrentLyricAction,
  setListIndexAction,
  setLyricIndexAction,
  setPlayModeAction
} from '../store'
import { message } from 'antd'
import classNames from 'classnames'
import { getSongLyric } from '../service'
import { parseLyric } from '@/utils/parse-lyric'

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: 260,
  overflow: 'auto',
  color: '#cccccc'
}
const style: React.CSSProperties = {
  width: '100%',
  height: 1000
}

interface IProps {
  children?: ReactNode
}
const PlayBar: FC<IProps> = () => {
  /** 组件内部定义的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0) // 毫秒
  const [isSliding, setIsSliding] = useState(false)
  const [isShowsongList, setIsShowsongList] = useState(false)
  const [isShowLyric, setIsShowLyric] = useState(true)
  //audio实例
  const audioRef = useRef<HTMLAudioElement>(null)
  //仓库
  const {
    currentSong,
    currentLyrics,
    lyricIndex,
    playMode,
    songList,
    songIndex
  } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      currentLyrics: state.player.currentLyric,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
      songList: state.player.SongList,
      songIndex: state.player.songIndex
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispath()
  // 歌曲列表的滚动容器
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null)
  // 监听 currentSong
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      ?.then(() => {
        setIsPlaying(true)
        console.log('播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log(err)
      })
    setDuration(currentSong.dt)
  }, [currentSong])
  //音乐播放中
  function handleUpTimeProgress() {
    const currentTime = audioRef.current!.currentTime * 1000
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
    // 歌词匹配
    let index = currentLyrics.length - 1
    for (let i = 0; i < currentLyrics.length; i++) {
      const lyric = currentLyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    // 设置歌词索引
    if (lyricIndex === index || index === -1) return
    dispatch(setLyricIndexAction(index))
    // 展示歌词
    if (isShowLyric && isPlaying) {
      message.open({
        content: currentLyrics[index]?.text,
        duration: 0,
        key: '1'
      })
    } else {
      message.destroy()
    }
  }
  //播放/暂停 按钮
  function handlePlayClick() {
    //true 暂停 ，false 停止
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))
    //改变状态
    setIsPlaying(!isPlaying)
  }
  // 上/下 一首 按钮
  function handleChangeMusic(isNext: boolean) {
    dispatch(fetchChangeMusic(isNext))
  }
  //进度条 改变中
  function handleOnChanging(value: number) {
    setIsSliding(true)
    setProgress(value)
  }
  //进度条 改变完
  function handleSliderChanged(value: number) {
    //获取currentTime
    const currentTime = (value / 100) * duration
    //设置播放时间
    audioRef.current!.currentTime = currentTime / 1000
    //设置当前时间
    setCurrentTime(currentTime)
    setIsSliding(false)
  }
  // 切换播放模式
  function handlePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(setPlayModeAction(newPlayMode))
    console.log('当前播放模式:', newPlayMode)
  }
  // 按钮:是否 展示歌曲列表
  function handleShowList() {
    setIsShowsongList(!isShowsongList)
  }
  // 按钮:是否 展示歌词
  function handleShowLyric() {
    setIsShowLyric(!isShowLyric)
    console.log(isShowLyric)
  }
  // 歌曲列表item被点击
  function handleListItemClick(index: number) {
    const clickSong = songList[index]
    // 设置当前播放歌曲
    dispatch(setCurentSongAction(clickSong))
    // 设置歌词
    getSongLyric(clickSong.id).then((res) => {
      const currentLyric = res.lrc.lyric
      const PLyrics = parseLyric(currentLyric)
      dispatch(setCurrentLyricAction(PLyrics))
    })
    // 设置歌曲列表的索引
    dispatch(setListIndexAction(index))
  }

  // 播放完成
  function handleProgressEnd() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  return (
    <BarWrapper className="sprite_playbar">
      <div className="content">
        <BarControl isplay={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => {
              handleChangeMusic(false)
            }}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => {
              handleChangeMusic(true)
            }}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/">
            <img src={formatImgSize(currentSong?.al?.picUrl, 35)}></img>
          </Link>
          <div className="info">
            <div className="song">
              <div className="name">{currentSong?.al?.name}</div>
              <div className="artist">{currentSong.ar?.[0].name}</div>
            </div>
            <div className="slider">
              <Slider
                value={progress}
                dots={true}
                step={0.4}
                onChangeComplete={handleSliderChanged}
                tooltip={{ formatter: null }}
                onChange={handleOnChanging}
              ></Slider>
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider"> / </span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playmode={playMode} showlyric={isShowLyric}>
          <div className="left">
            <div
              className="icon coment sprite_window"
              onClick={handleShowLyric}
            >
              词
            </div>
            <div className="icon collect sprite_playbar"></div>
            <div className="icon shark sprite_playbar"></div>
          </div>
          <div className="right">
            <div className="icon volume sprite_playbar"></div>
            <div
              className="icon loop sprite_playbar"
              onClick={handlePlayMode}
            ></div>
            <div className="icon lists sprite_playbar" onClick={handleShowList}>
              <span className="songCount">{songList.length}</span>
            </div>
          </div>
        </BarOperator>
      </div>
      <ListWrapper isshowlist={isShowsongList}>
        <div className="songlist">
          <div className="top">
            <div>播放列表({songList.length})</div>
            <div className="close" onClick={handleShowList}>
              x
            </div>
          </div>
          <div className="contianer" style={containerStyle} ref={setContainer}>
            <ul>
              {songList.map((item, index) => {
                return (
                  <li
                    key={item?.id}
                    className="item"
                    onClick={() => {
                      handleListItemClick(index)
                    }}
                  >
                    <div className=" icon ">
                      <div
                        className={classNames('sprite_playlist', {
                          active: index === songIndex
                        })}
                      ></div>
                    </div>
                    <div className="songName">{item.name}</div>
                    <div className="artist">
                      <div>{item.ar?.[0].name}</div>
                    </div>
                    <div className="time">{formatTime(item.dt)}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </ListWrapper>
      <audio
        ref={audioRef}
        onTimeUpdate={handleUpTimeProgress}
        onEnded={handleProgressEnd}
      ></audio>
    </BarWrapper>
  )
}
export default memo(PlayBar)
