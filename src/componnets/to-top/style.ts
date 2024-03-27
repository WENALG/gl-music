import styled from 'styled-components'
interface ITopData {
  topdata?: number
}
export const AffixedWrapper = styled.div<ITopData>`
  position: absolute;
  right: 280px;
  bottom: -100px;
  .toTop {
    width: 50px;
    height: 45px;
    background-color: #f5f5f5;
    border: 2px solid #dadada;
    color: #8a8b8a;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: #ededed;
    }
    .icon {
      padding-top: 2px;
      display: flex;
      justify-content: center;
    }
    .top {
      display: flex;
      justify-content: center;
    }
  }
`
