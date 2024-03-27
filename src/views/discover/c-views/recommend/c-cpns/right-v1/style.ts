import styled from 'styled-components'

export const RightV1Wrapper = styled.div`
  > .content {
    height: 450px;
    margin-top: -15px;
    .item {
      height: 65px;
      background-color: #fafafa;
      border: 0.5px solid #cccccc;
      display: flex;
      margin: 15px 20px;
      &:hover {
        cursor: pointer;
        background-color: #f4f4f4;
      }
      .right {
        display: block;
        padding: 12px 15px;
        .name {
          font-weight: 600;
        }
        .other {
          margin-top: 10px;
          color: #666666;
        }
      }
    }
  }
  .footer {
    display: flex;
    flex: 1;
    justify-content: center;
    .btn {
      background-color: #f7f7f7;
      border: 1px solid #cccccc;
      width: 215px;
      height: 35px;
      border-radius: 5px;
      &:hover {
        background-color: #fff;
        border: 1px solid black;
        cursor: pointer;
      }
    }
  }
`
