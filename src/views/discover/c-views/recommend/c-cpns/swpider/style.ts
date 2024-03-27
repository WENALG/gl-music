import styled from 'styled-components'

export const BannerWrapper = styled.div`
  .banner {
    height: 280px;
    width: 980px;
    margin: 0 auto;
    display: flex;
    position: relative;
  }

  }
`
export const WrapperLeft = styled.div`
position: relative;
  width: 729px;
  .item {
    .picture {
      width: 100%;
      height: 280px;
    }
  }
  .dots {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-2%);
    justify-content: center;
    margin: 0 auto;
    > li {
      .dot-item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;
        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
`

export const WrapperRight = styled.div``

export const WrapperBtn = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-color: transparent;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
