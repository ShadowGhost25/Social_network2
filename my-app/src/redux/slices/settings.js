import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "../../axios";

export const fetchSettings = createAsyncThunk("settings/fetchSettings", async (obj) => {
  const { data } = await axios.patch(`/settings/${obj.id}`, obj.fields);
  return data;
});

const initialState = {
  data: null,
  status: "loading",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (settings) => {
    settings
      .addCase(fetchSettings.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchSettings.rejected, (state) => {
        state.data = null;
        state.status = "error";
      });
  },
});

export const musicReducers = settingsSlice.reducer;
