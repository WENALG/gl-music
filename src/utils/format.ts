export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}
export function formatImgSize(
  pic: string,
  width: number,
  height: number = width
) {
  const picUrl = pic + `?param=${width}y${height}`
  return picUrl
}

export function formatTime(haomiao: number) {
  // 毫秒 转 秒（十进制）
  const TimeSeconds = Math.floor(haomiao / 1000)
  // 秒 转 分
  const min = Math.floor(TimeSeconds / 60)
  // 秒 转 秒
  const second = Math.floor(TimeSeconds) % 60
  //格式化保证2位
  const Fminues = String(min).padStart(2, '0')
  const Fseconds = String(second).padStart(2, '0')
  return `${Fminues}:${Fseconds}`
}
