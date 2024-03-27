import { shallowEqualApp, useAppSelector } from '@/store'
import React, { Suspense, memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import type { ElementRef, FC, ReactNode } from 'react'
import { BannerWrapper, WrapperBtn, WrapperLeft, WrapperRight } from './style'
import classNames from 'classnames'
interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  //从仓库中取
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  //
  const [currentIndex, setCurrentIndex] = useState(0)
  //拿到组件实例
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  //处理函数
  let isFade = true
  function handlePrevClick() {
    isFade = !isFade
    bannerRef.current?.prev()
  }
  function handleNextCLick() {
    bannerRef.current?.next()
  }
  function handleGoToClick(index: number) {
    bannerRef.current?.goTo(index)
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  // function handleBeforeChange() {
  //   setCurrentIndex(-1)
  // }
  let currentBGImage = banners[currentIndex]?.imageUrl
  if (currentBGImage) {
    currentBGImage = currentBGImage + '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper
      style={{
        background: `url('${currentBGImage}')
  center center / 6000px`
      }}
    >
      <div className="banner">
        <WrapperLeft>
          <Carousel
            autoplay
            effect={'fade'}
            ref={bannerRef}
            dots={false}
            speed={100}
            afterChange={handleAfterChange}
            // beforeChange={handleBeforeChange}
          >
            {banners.map((item) => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img className="picture" src={item.imageUrl}></img>
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('dot-item', {
                      active: index === currentIndex
                    })}
                    onClick={() => handleGoToClick(index)}
                  ></span>
                </li>
              )
            })}
          </ul>
        </WrapperLeft>
        <WrapperRight></WrapperRight>
        <WrapperBtn>
          <div className="btn left" onClick={handlePrevClick}></div>
          <div className="btn right" onClick={handleNextCLick}></div>
        </WrapperBtn>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
