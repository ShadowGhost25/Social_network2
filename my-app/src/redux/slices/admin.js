import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAdmin = createAsyncThunk(
  "admin/fetchAdmin",
  async () => {
    const { data } = await axios.get(`/admin`);
    return data;
  }
);

export const fetchDeleteAdmin = createAsyncThunk(
  "admin/fetchDeleteAdmin",
  async (id) => {
    const { data } = await axios.delete(`/delete/${id}`);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loadnig",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (user) => {
    user
      .addCase(fetchAdmin.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchAdmin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchAdmin.rejected, (state) => {
        state.data = null;
        state.status = "error";
      })
  },
});

export const adminReducers = adminSlice.reducer;