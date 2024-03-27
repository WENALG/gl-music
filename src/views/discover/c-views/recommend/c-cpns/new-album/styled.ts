import styled from 'styled-components'

export const CssNewAlumb = styled.div`
  > .content {
    height: 186px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0px 37px 0;

    .arrow {
      display: flex;
      position: relative;
      top: -28px;
      margin: 0 3px;
      cursor: pointer;
      border-color: transparent;
    }
    .arrow-left {
      margin-right: 10px;
      width: 17px;
      height: 17px;
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow-right {
      width: 17px;
      height: 17px;
      padding-right: 10px;
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
    .swpider {
      overflow: hidden;
      flex: 1;
      .album-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
