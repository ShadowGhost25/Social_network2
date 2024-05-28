import { configureStore } from '@reduxjs/toolkit';
import { loginReducers } from './slices/login';
import { postsReducers } from './slices/posts'
import { registerReducers } from './slices/register';
import { groupReducers } from './slices/group';
import { musicReducers } from './slices/music';
import { friendsReducers } from './slices/friends';
import { userReducers } from './slices/user';
import { adminReducers } from './slices/admin';

const store = configureStore({
    reducer: {
        login: loginReducers,
        posts: postsReducers,
        register: registerReducers,
        group: groupReducers,
        music: musicReducers,
        friend: friendsReducers,
        user: userReducers,
        admin: adminReducers
    }
})

export default store