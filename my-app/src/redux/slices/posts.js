import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts')
    return data
})

export const fetchDelete = createAsyncThunk('posts/fetchDelete', async (id) => {
    await axios.delete(`/posts/${id}`)
})


const initialState = {
    posts: {
        items: [],
        status: 'loadibg',
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
                state.posts.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts.items = action.payload
                state.posts.status = 'loaded'
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.posts.items = []
                state.posts.status = 'error'
            })
            .addCase(fetchDelete.pending, (state, action) =>{
                state.posts.items = state.posts.items.filter((obj) => obj._id === action.meta.arg)
            })
    }

})
export const postsReducers = postsSlice.reducer