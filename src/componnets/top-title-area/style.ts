import styled from 'styled-components'
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  margin: 34px 20px;
  padding-bottom: 4px;
  .title {
    font-weight: 600;
  }
  .more {
    color: #666666;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
