import { configureStore } from '@reduxjs/toolkit';
import { loginReducers } from './slices/login';
import { postsReducers } from './slices/posts'

const store = configureStore({
    reducer: {
        login: loginReducers,
        posts: postsReducers,
    }
})

export default store