import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchLogin = createAsyncThunk('login/fetchLogin', async () =>{
    const { data } = await axios.post('/login')
    return data
})

const initialState = {
    login: {
        name: [],
        password: [],
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{},
})

export const loginReducers = loginSlice.reducer