import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async () => {
    const { data } = await axios.get("/friends");
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
  reducers: {
    friend: (state, action) => {
      const SubUser = action.payload;
      const indexSubUser = state.data.indexOf((user) = user.id === SubUser.id)
      state.data.splice(indexSubUser, 1, SubUser)
    },
  },
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