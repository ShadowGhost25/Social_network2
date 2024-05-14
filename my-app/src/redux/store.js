import { configureStore } from '@reduxjs/toolkit';
import { loginReducers } from './slices/login';
import { postsReducers } from './slices/posts'
import { registerReducers } from './slices/register';
import { groupReducers } from './slices/group';
import { musicReducers } from './slices/music';
import { friendsReducers } from './slices/friends';

const store = configureStore({
    reducer: {
        login: loginReducers,
        posts: postsReducers,
        register: registerReducers,
        group: groupReducers,
        music: musicReducers,
        friend: friendsReducers
    }
})

export default store