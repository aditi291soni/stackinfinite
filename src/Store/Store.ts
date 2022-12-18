import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Reducer/counterSlice'
import productSlice from '../Reducer/productSlice'

export const store = configureStore({
  reducer: {
    product:productSlice,
    counter:counterSlice,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch