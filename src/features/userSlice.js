import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user_slice',
  initialState: {
    details: {},
  },
  reducers: {
    update_user: (state, action) => {
      state.details = {...state.details, ...action.payload}
    },
    clear_user: (state) => {
      state.details = {}
    }
  }
})

export const {update_user, clear_user} = userSlice.actions

export default userSlice.reducer