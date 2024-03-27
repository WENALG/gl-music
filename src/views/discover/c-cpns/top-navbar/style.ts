import styled from 'styled-components'

export const NavWrapper = styled.div`
  height: 30px;
  background-color: #c20c0c;
  .nav {
    display: flex;
    padding-left: 360px;
    position: relative;
    bottom: -4px;
    .item {
      a {
        height: 20px;
        display: inline-bolck;
        margin: 7px 15px 0;
        color: #fff;
        font-size: 12px;
        padding: 2px 13px;

        &:hover {
          background-color: #9b0909;
          border-radius: 16px;
        }
      }
      .active {
        background-color: #9b0909;
        border-radius: 16px;
      }
    }
  }
`
