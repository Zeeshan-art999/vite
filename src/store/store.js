import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter.slice'
import { userSlice } from './slices/user.slice'
import { productSlice } from './slices/product.slice'
import { postSlice } from './slices/posts.slice'

export const store = configureStore({
  reducer: {
    counterSlice:counterSlice.reducer,
    userSlice:userSlice.reducer,
    productSlice:productSlice.reducer,
    postSlice:postSlice.reducer,
//     sliceName:slice.reducer,
//     Add your slices here
//    Example : user: userSlice.reducer,
//    Example : posts: postsSlice.reducer,
//    Example : comments: commentsSlice.reducer,
  },
})
