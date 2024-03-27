import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
  .cover {
    width: 980px;
    margin: 30px auto;
    position: relative;
    .btn {
      position: absolute;
      right: 0;
    }
    padding-bottom: 50px;
    .top {
      display: flex;
      .item {
        width: 122.5px;
        height: 120px;
        &:hover {
          cursor: pointer;
        }
        .text {
          width: 122.5px;
          padding-top: 10px;
          color: #797979;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .p1 {
        width: 120px;
        height: 100px;
        background-position: -320px 0;
        &:hover {
          background-position: 10px -220px;
        }
      }
      .p2 {
        width: 120px;
        height: 100px;
        background-position: 10px -330px;
        &:hover {
          background-position: -100px -330px;
        }
      }
      .p3 {
        width: 120px;
        height: 100px;
        background-position: 10px -110px;
        &:hover {
          background-position: -100px 0;
        }
      }
      .p4 {
        width: 120px;
        height: 100px;
        background-position: -320px 0;
        &:hover {
          background-position: 10px -220px;
        }
      }
      .p5 {
        width: 120px;
        height: 100px;
        background-position: -100px -110px;
        &:hover {
          background-position: -210px 0;
        }
      }
      .p6 {
        width: 120px;
        height: 100px;
        background-position: -210px -220px;
        &:hover {
          background-position: 10px 0;
        }
      }
      .p7 {
        width: 120px;
        height: 100px;
        background-position: -320px 0;
        &:hover {
          background-position: 10px -220px;
        }
      }
      .p8 {
        width: 120px;
        height: 100px;
        background-position: -320px -220px;
        &:hover {
          background-position: -100px -220px;
        }
      }
    }
    .webinfo {
      margin-top: 80px;
      color: #797979;
      .Link {
        display: flex;
        justify-content: center;
        .item {
          color: #797979;
          width: auto;
          padding: 0 15px;
          border-right: 1px solid #ded9d9;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .mesg1 {
        display: flex;
        justify-content: center;
        margin: 12px 15px;

        .Lf {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .center1 {
          margin: 0 20px;
        }
      }
      .mesg2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
    }
  }
`
