import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
}

const initialState: ProductState = {
  value: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState:{value:[]},
  reducers: {
   productData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { productData} = productSlice.actions;



export default productSlice.reducer;