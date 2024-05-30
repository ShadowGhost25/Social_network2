import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchRegister = createAsyncThunk(
  "register/fetchRegister",
  async (params) => {
    try {
      const { data } = await axios.post("/register", params);
      return data;
    } catch (error) {
      return (error);
    }
  }
);

const initialState = {
  data: null,
  status: "loadnig",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (register) => {
    register
      .addCase(fetchRegister.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.data = null;
        state.status = "error";
      })
  },
});

export const registerReducers = registerSlice.reducer;
