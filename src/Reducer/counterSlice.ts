import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   changeCounter:(state,action)=>{
    state.value+=action.payload;
   },
    
  },
})

export const { changeCounter  } = counterSlice.actions

export default counterSlice.reducer