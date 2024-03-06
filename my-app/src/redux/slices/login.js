import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (params) => {
    const { data } = await axios.post("/login", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("login/fetchAuthMe", async () => {
  const { data } = await axios.get("/me");
  return data;
});

const initialState = {
  data: null,
  status: "loadnig",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (login) => {
    login
      .addCase(fetchLogin.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.data = null;
        state.status = "error";
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.data = null;
        state.status = "loading";
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.data = null;
        state.status = "error";
      });
  },
});
export const selectIsAuth = (state) => Boolean(state.login.data);

export const loginReducers = loginSlice.reducer;

export const { logout } = loginSlice.actions;
