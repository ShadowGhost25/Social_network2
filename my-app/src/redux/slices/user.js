import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (id) => {
    const { data } = await axios.get(`/profile/${id}`);
    return data;
  }
);

export const fetchJoinRoom = createAsyncThunk(
  "user/fetchJoinRoom",
  async (params) => {
    const { data } = await axios.post("/roomId", params);
    return data;
  }
);
export const fetchMessage = createAsyncThunk("user/fetchMessage",
  async (params) => {
    const { data } = await axios.post("/add-message", params);
    return data;
  })
const initialState = {
  data: null,
  room: null,
  message: null,
  status: "loadnig",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (user) => {
    user
      .addCase(fetchUser.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchUser.rejected, (state) => {
        state.data = null;
        state.status = "error";
      })
      .addCase(fetchJoinRoom.pending, (state) => {
        state.room = null;
        state.status = "loading";
      })
      .addCase(fetchJoinRoom.fulfilled, (state, action) => {
        state.room = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchJoinRoom.rejected, (state) => {
        state.room = null;
        state.status = "error";
      })
  },
});

export const userReducers = userSlice.reducer;