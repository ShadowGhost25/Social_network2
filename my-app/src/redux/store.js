import { configureStore } from '@reduxjs/toolkit';
import { loginReducers } from './slices/login';
import { postsReducers } from './slices/posts'
import { registerReducers } from './slices/register';

const store = configureStore({
    reducer: {
        login: loginReducers,
        posts: postsReducers,
        register: registerReducers,
    }
})

export default store