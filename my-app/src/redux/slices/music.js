import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchMusic = createAsyncThunk("music/fetchMusic", async () => {
  const { data } = await axios.get("/music");
  return data;
});

export const fetchMusicMe = createAsyncThunk("music/fetchMusicMe", async (obj) => {
  const { data } = await axios.post(`/add-music/:${obj.id}`, obj);
  return data;
});

export const fetchDeleteMusicMe = createAsyncThunk("music/fetchDeleteMusicMe", async (obj) => {
  const { data } = await axios.post(`/delete-music/:${obj.id}`, obj);
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
