import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
  width: 230px;

  &:last-child {
    width: 228px;
  }
  .header {
    padding: 20px 0 0 20px;
    display: flex;
    .left {
      &:hover {
        cursor: pointer;
      }
    }
    .right {
      position: relative;
      width: 80px;
      height: 80px;
      margin: 10px;
      h5 {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .play {
        position: absolute;
        display: inline-block;
        left: 0;
        top: 28px;
        width: 22px;
        height: 22px;
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
          cursor: pointer;
        }
      }
      .collect {
        display: inline-block;
        position: absolute;
        left: 32px;
        top: 28px;
        width: 22px;
        height: 22px;
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
          cursor: pointer;
        }
      }
    }
  }
  .list {
    .listItem {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      &:nth-child(-n + 3) .index {
        color: #c10d0c;
      }
      .index {
        margin-left: 30px;
        margin-right: 15px;
        font-size: 16px;
      }
      &:last-child {
        margin-left: -5px;
        margin-right: -4px;
      }
      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;

          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .operator {
          display: flex;
          align-items: center;
          display: none;
          width: 90px;

          .btn {
            width: 20px;
            height: 20px;
            margin-left: 8px;
            border-color: transparent;
            cursor: pointer;
          }

          .play {
            position: relative;
            top: -2px;
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }

          .add {
            background-position: 0 -700px;
            &:hover {
              background-position: -22px -700px;
            }
          }

          .favor {
            position: relative;
            top: -2px;
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
      }

      &:hover {
        .operator {
          display: block;
        }
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
    padding-right: 20px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
