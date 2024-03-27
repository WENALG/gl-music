import styled from 'styled-components'

export const AblumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
    .cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-position: 0 -570px;
    }
    &:hover {
      cursor: pointer;
      .play {
        position: absolute;
        display: inline-block;
        bottom: 0;
        right: 0;
        margin: 2px 21px;
        width: 25px;
        height: 25px;
        background-position: 0 -110px;
        cursor: pointer;
      }
    }
  }
  .bottom {
    font-size: 12px;
    width: 100px;
    .name {
      margin-bottom: -5px;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
    }
    .artist {
      color: #666;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
    }
  }
`
