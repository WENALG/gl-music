import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 240320,
    data: '2024-3-20 15:54:10'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.data = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
