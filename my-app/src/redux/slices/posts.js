import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts')
    return data
})
export const fetchPostsProfile = createAsyncThunk('posts/fetchPostsProfile', async()=>{
    const {data} = await axios.get('/profile')
    return data
})

export const fetchDelete = createAsyncThunk('posts/fetchDelete', async (id) => {
    await axios.delete(`/posts/${id}`)
})


const initialState = {
    posts: {
        items: [],
        status: 'loaded',
    },
    postsProfile: {
        items: [],
        staatus: 'loaded',
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.posts.items = []
                state.posts.status = 'loaded'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts.items = action.payload
                state.posts.status = 'loading'
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.posts.items = []
                state.posts.status = 'error'
            })
            .addCase(fetchPostsProfile.pending, (state) => {
                state.postsProfile.items = []
                state.postsProfile.status = 'loaded'
            })
            .addCase(fetchPostsProfile.fulfilled, (state, action) => {
                state.postsProfile.items = action.payload
                state.postsProfile.status = 'loading'
            })
            .addCase(fetchPostsProfile.rejected, (state) => {
                state.postsProfile.items = []
                state.postsProfile.status = 'error'
            })
            .addCase(fetchDelete.pending, (state, action) =>{
                state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg)
            })
    }

})

export const postsReducers = postsSlice.reducer