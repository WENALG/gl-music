import styled from 'styled-components'

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  padding-bottom: 1px;

  .left {
    display: flex;
    align-items: center;
    .title {
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      font-size: 20px;
      padding-left: 15px;
      margin: 0 18px;
      &:hover {
        cursor: pointer;
      }
    }
    .item {
      padding-top: 6px;
      color: #66667f;
      .subtitle {
        &:hover {
          text-decoration: underline;
          color: #333;
          cursor: pointer;
        }
      }
      .divider {
        margin: 0 14px;
      }
      &:last-child {
        .divider {
          display: none;
        }
      }
    }
  }
  .right {
    color: #66667f;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 10px;
    .more {
      &:hover {
        text-decoration: underline;
        color: #333;
        cursor: pointer;
      }
    }
    .icon {
      background-color: grey;
      display: inline-block;
      height: 25px;
      width: 25px;
      background: url(${require('@/assets/img/sprite_02.png')});
      background-position: 0 -240px;
      margin: 15px 0px 0px 5px;
    }
  }
`
