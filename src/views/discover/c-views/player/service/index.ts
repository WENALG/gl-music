import glRequest from '@/service'

export function getSongDetail(ids: number) {
  return glRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
export function getSongLyric(id: number) {
  return glRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
