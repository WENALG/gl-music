import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { CssNewAlumb } from './styled'
import TopTitle from '@/componnets/top-title'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import AlbumItem from '@/componnets/album-item'

interface IProps {
  children?: ReactNode
}
const NewAlbum: FC<IProps> = () => {
  const spwiderRef = useRef<ElementRef<typeof Carousel>>(null)
  function handlePrevClick() {
    spwiderRef.current?.prev()
  }
  function handleNextClick() {
    spwiderRef.current?.next()
  }
  const { newAlbumsData } = useAppSelector(
    (state) => ({
      newAlbumsData: state.recommend.newAlbums
    }),
    shallowEqual
  )
  return (
    <CssNewAlumb>
      <TopTitle title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="swpider">
          <Carousel ref={spwiderRef} dots={false} speed={1200}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-item">
                    {newAlbumsData
                      .slice(item * 5, (item + 1) * 5)
                      .map((iten) => {
                        return <AlbumItem key={iten.id} itemData={iten} />
                      })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </CssNewAlumb>
  )
}

export default memo(NewAlbum)
