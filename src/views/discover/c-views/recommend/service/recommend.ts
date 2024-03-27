import glRequest from '@/service'

export function getBanners() {
  return glRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return glRequest.get({
    url: '/personalized',
    params: { limit }
  })
}

export function getNewAlbum(limit = 10) {
  return glRequest.get({
    url: '/album/newest',
    params: { limit }
  })
}

export function getPlayListDetail(id: number) {
  return glRequest.get({
    url: '/playlist/detail',
    params: { id }
  })
}

export function getSinggersList(limit = 5) {
  return glRequest.get({
    url: '/artist/list',
    params: { limit }
  })
}
