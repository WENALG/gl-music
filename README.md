React 网易云音乐网站
=======

# 1.1 项目介绍

使用Reat框架搭建的网易云音乐网址PC web项目
目前完成的功能如下：

###### 1、推荐页面：

-   轮播图
-   热门推荐
-   新碟上架
-   榜单
-   等待

<div align="center">
  <img src="[src/image-20240328140348954.png](https://github.com/WENALG/try/blob/master/gl-music-pic/pic1.jpg)">
</div>





![image-20240328135731547](C:\Users\zgl\AppData\Roaming\Typora\typora-user-images\image-20240328135731547.png)



###### 2、歌曲播放：

- 做了歌曲的各种控制（播放、暂停、拖拽进度条、上/下一首、播放模式切换）
- 做了播放歌曲列表，点击列表中的歌曲可以切换进行播放
- 点击榜单上的音乐可以播放，并添加入歌曲播放列表中（传入歌曲id即可，整体逻辑已打通）
- 做了歌词的展示



![image-20240328140131363](C:\Users\zgl\AppData\Roaming\Typora\typora-user-images\image-20240328140131363.png)



###### 3、页脚：

搭建了页面底部

做了置顶功能，窗口滚下一定距离就会出现置顶按钮

![image-20240328135825680](C:\Users\zgl\AppData\Roaming\Typora\typora-user-images\image-20240328135825680.png)



### 1.2. 项目规范



**项目规范：项目中有一些开发规范和代码风格**

- 1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
- 2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
- 3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;
- 4.整个项目全部使用函数式组件，并且全面使用Hooks；
- 5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；
- 6.组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；
- 7.函数组件内部基本按照如下顺序编写代码：
  - 组件内部state管理；
  - redux的hooks代码；
  - 其他逻辑代码；
  - 返回JSX代码；
- 8.redux代码规范如下：
  - redux结合ImmutableJS
  - 每个模块有自己独立的reducer，通过combineReducer进行合并；
  - 异步请求代码使用redux-thunk，并且写在actionCreators中；
  - redux直接采用redux hooks方式编写，不再使用connect；
- 9.网络请求采用axios
  - 对axios进行二次封装；
  - 所有的模块请求会放到一个请求文件中单独管理；
- 10.项目使用AntDesign
  - 使用了AntDesign中的 轮播图、滑动输入条、固钉；
  - 但是多部分组件还是自己进行编写；



### 1.3. 项目运行



clone项目：

```
git clone https://github.com/WENALG/gl-music.git
```



安装项目依赖：

```
yarn install
```



项目运行：

```
yarn start
```

