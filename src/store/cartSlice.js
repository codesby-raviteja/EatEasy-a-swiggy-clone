import { createSlice } from "@reduxjs/toolkit"

function findIndexOfItem(list, id) {
  return list.findIndex((item) => item.id === id)
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      if (findIndexOfItem(state, action.payload.id) === -1) {
        state.push(action.payload)
      }
    },
    removeItem(state, action) {
      const findIndex = findIndexOfItem(state, action.payload)
      state.splice(findIndex, 1)
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
