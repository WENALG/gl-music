import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: 140px;
  margin: 20px auto;
  margin-left: 11px;
  .top {
    position: relative;
    > img {
      width: 140px;
      height: 140px;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      .info {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        .headset {
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          padding-right: 4px;
        }
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }
  .bottom {
    margin-top: 10px;
  }
`
