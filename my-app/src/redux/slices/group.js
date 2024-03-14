import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchGroup = createAsyncThunk("group/fetchGroup", async () => {
  const { data } = await axios.get('/group');
  return data;
});

const initialState = {
  group: {
    items: [],
    status: "loading",
  },
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (group) => {
    group
      .addCase(fetchGroup.pending, (state) => {
        state.group.items = [];
        state.group.status = "loading";
      })
      .addCase(fetchGroup.fulfilled, (state, action) => {
        state.group.items = action.payload;
        state.group.status = "loaded";
      })
      .addCase(fetchGroup.rejected, (state) => {
        state.group.items = [];
        state.group.status = "error";
      });
  },
});

export const groupReducers = groupSlice.reducer;
