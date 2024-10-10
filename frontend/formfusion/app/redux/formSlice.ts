import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {},
  reducers: {
    setFormData: (state, action) => {
      // Handle form data
    },
  },
})

export const { setFormData } = formSlice.actions
export default formSlice.reducer
