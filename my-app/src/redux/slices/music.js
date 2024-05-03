import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchMusic = createAsyncThunk("music/fetchMusic", async () => {
  const { data } = await axios.get("/music");
  return data;
});

const initialState = {
  data: null,
  status: "loading",
};
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (music) => {
    music
      .addCase(fetchMusic.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchMusic.rejected, (state) => {
        state.data = null;
        state.status = "error";
      });
  },
});

export const musicReducers = musicSlice.reducer;
