import { configureStore } from '@reduxjs/toolkit'
import counterRedux from './modules/counter'
import recommnedRedux from '@/views/discover/c-views/recommend/store/recommend'
import playerRedux from '@/views/discover/c-views/player/store/index'
import {
  TypedUseSelectorHook,
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterRedux,
    recommend: recommnedRedux,
    player: playerRedux
  }
})

type GetStateFnType = typeof store.getState
type DispatchType = typeof store.dispatch
export type IRootState = ReturnType<GetStateFnType>
//useSelector 加 hooks
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export const useAppDispath: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
