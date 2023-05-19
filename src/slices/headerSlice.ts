import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface HeaderState {
    value: string;
}

const initialState: HeaderState = {
    value: "home"
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeHeader: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeHeader } = headerSlice.actions

export const selectCount = (state: RootState) => state.header.value;

export default headerSlice.reducer