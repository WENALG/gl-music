import styled from 'styled-components'

export const BarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    width: 980px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 47px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`
interface IBControl {
  isplay?: boolean
}
export const BarControl = styled.div<IBControl>`
  display: flex;
  align-items: center;
  .btn {
    cursor: pointer;
    border-color: transparent;
  }
  .prev {
    width: 30px;
    height: 30px;
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .play {
    width: 38px;
    height: 38px;
    margin: 0 8px;
    background-position: ${(prop) => {
      return prop.isplay ? '0 -165px' : '0 -204px'
    }};
    &:hover {
      background-position: ${(prop) => {
        return prop.isplay ? '-40px -165px' : '-40px -204px'
      }};
    }
  }
  .next {
    width: 30px;
    height: 30px;
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`
export const BarPlayerInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;
  .info {
    margin: 12px 12px 0;
    .song {
      display: flex;
      .name {
        padding-left: 4px;
        color: #e8e8e8;
      }
      .artist {
        margin-left: 15px;
        color: #919192;
      }
    }
    .slider {
      width: 473px;
      display: block;
      margin-top: -10px;
      position: relative;
      .time {
        color: #959595;
        position: absolute;
        right: 0;
        bottom: 0;
        right: -90px;
        top: -2px;
      }
    }
  }
`
interface IOperator {
  playmode?: number
  showlyric?: boolean
}
export const BarOperator = styled.div<IOperator>`
  width: 213px;
  height: 47px;
  display: flex;
  align-items: center;
  .icon {
    width: 25px;
    height: 30px;
    margin: 0 2px;
  }
  .left {
    display: flex;
    .coment {
      font-size: 18px;
      padding-top: 5px;
      color: ${(prop) => {
        return prop.showlyric ? '#f3e6cc' : '#ccc'
      }};
      /* background-position: 0px 3px; */
      &:hover {
        cursor: pointer;
        color: #fff;
        /* background-position: 0px -22px; */
      }
    }
    .collect {
      background-position: -90px -160px;
      &:hover {
        cursor: pointer;
        background-position: -90px -186px;
      }
    }
    .shark {
      background-position: -115px -160px;
      padding-right: 8px;
      &:hover {
        cursor: pointer;
        background-position: -115px -186px;
      }
    }
  }
  .right {
    border-left: 1px solid black;
    padding-left: 7px;
    display: flex;
    .volume {
      background-position: 0 -245px;
      &:hover {
        cursor: pointer;
        background-position: -29px -245px;
      }
    }
    .loop {
      background-position: ${(prop) => {
        switch (prop.playmode) {
          default:
            return '0px -340px;'
          case 1:
            return '-63px -245px'
          case 2:
            return '-63px -340px'
        }
      }};
      &:hover {
        cursor: pointer;
        background-position: ${(p) => {
          switch (p.playmode) {
            default:
              return '-30px -340px;'
            case 1:
              return '-90px -245px'
            case 2:
              return '-90px -340px'
          }
        }};
      }
    }
    .lists {
      width: 55px;
      background-position: -40px -65px;
      border-radius: 60px;
      &:hover {
        cursor: pointer;
        background-position: -40px -95px;
      }
      .songCount {
        position: relative;
        right: -55%;
        top: 25%;
        color: #ccc;
        &:hover {
          color: white;
        }
      }
    }
  }
`

interface ISongList {
  isshowlist?: boolean
}
export const ListWrapper = styled.div<ISongList>`
  display: ${(prop) => {
    if (prop.isshowlist) {
      return 'block'
    } else {
      return 'none'
    }
  }};
  height: 300px;
  width: 550px;
  position: fixed;
  top: 61.5%;
  right: 8%;
  background-color: #151515;
  border-radius: 10px 10px 0 0;
  .songlist {
    left: 50%;
    overflow: 'auto';
    .top {
      border-radius: 10px 10px 0 0;
      padding: 8px;
      padding-left: 28px;
      color: #e2e2e2;
      background-color: #1e1e1e;
      border-bottom: 2px solid #262626;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      .close {
        width: 20px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 0;
        color: #666666;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .item {
      background-color: #161616;
      display: flex;
      align-items: center;
      margin: 6px 5px;
      padding: 2px 0;
      &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
        position: relative;
      }
      .icon {
        position: relative;
        top: 6px;
        height: 25px;
        width: 25px;
        .active {
          height: 25px;
          width: 25px;
          background-position: -175px 0;
        }
      }
      .songName {
        position: relative;
        width: 200px;
        left: 20%;
        margin-left: -100px;
      }
      .del {
        position: relative;
        width: 20px;
        height: 20px;
        left: 44%;
        background-position: -48px 0;
        &:hover {
          background-position: -48px -20px;
        }
      }
      .artist {
        width: 80px;
        position: relative;
        left: 48%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
      }
      .time {
        width: 60px;
        position: relative;
        left: 48%;
      }
    }
  }
`
