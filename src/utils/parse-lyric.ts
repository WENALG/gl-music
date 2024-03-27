export interface ILyric {
  time: number
  text: string
}
//[03:42.57]我的美丽/n[03:45.00] 原唱 : 小霞/n ......
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(LyricString: string) {
  const Lyric: ILyric[] = []
  //切割
  const lines = LyricString.split('\n')
  for (const line of lines) {
    //歌词时间 转成毫秒
    const result = timeRegExp.exec(line)
    if (!result) continue
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    const time3 =
      result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
    const Time = time1 + time2 + time3
    // 歌词文本
    const Text = line.replace(timeRegExp, '')
    Lyric.push({ time: Time, text: Text })
  }
  return Lyric
}
