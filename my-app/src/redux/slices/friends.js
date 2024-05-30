import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async (id) => {
    const { data } = await axios.post("/friends", { id: id });
    return data;
  }
);

export const fetchAddFriends = createAsyncThunk(
  "friends/fetchAddFriends",
  async (params) => {
    const { data } = await axios.post("/add-friends", params);
    return data;
  }
);
export const fetchDeleteFriends = createAsyncThunk(
  "friends/fetchDeleteFriends",
  async (params) => {
    const { data } = await axios.post("/delete-friends", params);
    return data;
  }
);
const initialState = {
  data: null,
  status: "loadnig",
};

const friendsSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {},
  extraReducers: (friends) => {
    friends
      .addCase(fetchFriends.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchFriends.rejected, (state) => {
        state.data = null;
        state.status = "error";
      })
  },
});
export const friendsReducers = friendsSlice.reducer;
export const { friend } = friendsSlice.actions;