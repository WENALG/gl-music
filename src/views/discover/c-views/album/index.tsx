import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return (
    <div>
      album
      <Slider />
    </div>
  )
}

export default memo(Album)
