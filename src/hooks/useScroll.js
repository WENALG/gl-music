import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll(elRef) {
  let el = window
  const isReachButtom = ref(false)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      console.log('~窗口滚动监听~')
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
      scrollTop.value = document.documentElement.scrollTop
    } else {
      console.log('~元素滚动监听~')
      clientHeight.value = el.clientHeight
      scrollHeight.value = el.scrollHeight
      scrollTop.value = el.scrollTop
    }
    if (clientHeight.value + scrollTop.value + 1 >= scrollHeight.value) {
      isReachButtom.value = true
    }
  }, 800)
  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandler)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })
  onActivated(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  onDeactivated(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })
  return { scrollHeight, scrollTop, clientHeight, isReachButtom }
}
