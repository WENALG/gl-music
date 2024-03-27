import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from './style'
import { footerLinks } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="cover">
        <div className="top">
          <div className="item ">
            <div className="p1 sprite_footer"></div>
            <div className="text">音乐开发平台</div>
          </div>
          <div className="item">
            <div className="p2 sprite_footer"></div>
            <div className="text">云村交易所</div>
          </div>
          <div className="item">
            <div className="p3 sprite_footer"></div>
            <div className="text">Amped Studio</div>
          </div>
          <div className="item">
            <div className="p4 sprite_footer"></div>
            <div className="text">X StudioAI歌手</div>
          </div>
          <div className="item">
            <div className="p5 sprite_footer"></div>
            <div className="text">用户认证</div>
          </div>
          <div className="item">
            <div className="p6 sprite_footer"></div>
            <div className="text">音乐交易平台</div>
          </div>
          <div className="item">
            <div className="p7 sprite_footer"></div>
            <div className="text">云推歌</div>
          </div>
          <div className="item">
            <div className="p8 sprite_footer"></div>
            <div className="text">赞赏</div>
          </div>
        </div>
        <div className="webinfo">
          <div className="Link">
            {footerLinks.map((item) => {
              return (
                <a
                  className="item"
                  href={item.link}
                  key={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              )
            })}
          </div>
          <div className="mesg1">
            <div className="Lf">廉政举报</div>
            <div className="center1">
              不良信息举报邮箱:51jubao@service.netease.com
            </div>
            <div>客服热线:95163298</div>
          </div>
          <div className="mesg2">
            互联网宗教信息服务许可证：浙(2022)0000120
            增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18
            工业和信息化部备案管理系统网站
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
