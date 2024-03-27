import styled from 'styled-components'
export const RightV2Wrapper = styled.div`
  > .content {
    height: 300px;
    margin-top: -15px;
    .item {
      height: 45px;
      display: flex;
      margin: 11px 20px;
      .left {
        &:hover {
          cursor: pointer;
        }
      }
      .right {
        display: block;
        padding: 3px 11px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .other {
          margin-top: 6px;
          color: #666666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`
