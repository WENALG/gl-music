import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AffixedWrapper } from './style'
import { Affix, Button } from 'antd'
interface IProps {
  children?: ReactNode
}

const ToTop: FC<IProps> = () => {
  const [scrollHeight, setScrollHeight] = useState(10)
  const [bottom, setBottom] = React.useState<number>(40)
  const [top, setTop] = React.useState<number>(650)
  function handleToTop() {
    console.log(window.scrollY)
    window.scrollTo(0, 0)
  }
  return (
    <AffixedWrapper topdata={scrollHeight}>
      <Affix offsetTop={top}>
        <div className="toTop" onClick={handleToTop}>
          <div className="icon">^</div>
          <div className="top">Top</div>
        </div>
      </Affix>
    </AffixedWrapper>
  )
}

export default memo(ToTop)
